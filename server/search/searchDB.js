const { Logger } = require('../../logger.js');
const { Movie, User } = require('../database/database.js');
const redisClient = require('../cacheManager');
const {
  transformToSearchDisplay,
  getUniqueIds,
  getFlatRateProviders,
  getMovieWithProviders,
  addProvidersToMovies } = require('./searchHelpers');
const {
  transformHistoryResponse,
  transformSuggestedResponse } = require('../home/movieHelpers'); // TODO: Review more later
const {
  getMovie: getMovieAPI,
  getTrending: getTrendingAPI,
  getSuggested: getSuggestedAPI,
  getProviders: getProvidersAPI } = require('./APIController');

// Jaimie - TODO:  if you could somehow figure out how NOT to save the search history to the history part of the user database, that would be fantastic!

module.exports = {
  getMovie: (movieName, user) => {
    return new Promise((resolve, reject) => {
      // we need to check cache to see if title is there
      // this is scuffed
      // because cache is not set up yet to based on auth.  A sample insert is made
      // after sample is set ---- comment out
      // let sampleKey = 'Iron Man 2'
      // let sampleValue = '10138'
      // let sample = redis.set(sampleKey, sampleValue)
      // Logger.consoleLog(sample)
      redisClient.get(movieName, (err, movieId) => {
        if (movieId !== null) {
          Movie.find({id: movieId}).then((movieData) => {
            Logger.consoleLog('Found movie:', movieData[0]);
            const finalSearch = transformToSearchDisplay(movieData[0]);
            resolve(finalSearch);
          });
        } else {
          getMovieAPI(movieName).then((searchedMovie) => {
            movieId = searchedMovie.id;

            // TODO: getTrending has no relation to searched movie
            // TODO: Below could be done as a Promise.All instead of nested .then
            getTrendingAPI().then((trendingMovies) => {
              getSuggestedAPI(movieId).then((suggestedMovies) => {
                const uniqueMovieIds = getUniqueIds(searchedMovie, trendingMovies, suggestedMovies);
                // TODO: Below is the result of Promise.All from above
                // const providers = getProvidersAPI(uniqueMovieIds);
                // providers.then((providersByMovie) => {
                getProvidersAPI(uniqueMovieIds).then((providersByMovie) => {
                  const flatRateProvidersByMovie = getFlatRateProviders(providersByMovie);
                  // Logger.consoleLog('finalProviders: ', flatRateProvidersByMovie);

                  const movieWithProviders = getMovieWithProviders(searchedMovie, flatRateProvidersByMovie);

                  // replace with real user function once running
                  // TODO: What is the state of this?
                  const checkAndUpdate = User.find({ username: user }).then((userData) => {
                    // TODO: What were the intentions of user.History? Jaimie was wanting some aspect of this removed
                    // Logger.consoleLog(userData)
                    if (userData[0].history.length) {
                      userData[0].history.forEach((searchedMovie) => {
                        if (searchedMovie[0].title.toLowerCase() !== movieWithProviders.title.toLowerCase()) {
                          User.updateOne({
                            username: user,
                            $push: { history: movieWithProviders },
                            currentId: movieWithProviders.id
                          },
                          (err, data) => {
                            Logger.consoleLog('Saved New Record: User History');
                          });
                        } else {
                          Logger.consoleLog('Record Exists');
                        }
                      });
                    } else if (!userData[0].history.length) {
                      User.updateOne({username: user, $push: {history: movieWithProviders}}, (err, data) => {
                        Logger.consoleLog('Saved New Record: MovieSchema');
                      });
                    }
                    return true;
                  });
                  checkAndUpdate.then((bool) => {
                    // TODO: User.find is currently not doing anything with the resulting query data
                    User.find({ username: user }, (err, data) => {
                      movieWithProviders.trending = addProvidersToMovies(trendingMovies, flatRateProvidersByMovie);
                      movieWithProviders.suggested = addProvidersToMovies(suggestedMovies, flatRateProvidersByMovie);
                      const saveMovieToDB = (movie) => {
                        let filter = { id: movie.id };

                        let update = {
                          suggested,
                          trending,
                          mediaType,
                          title,
                          rating,
                          ratingCount,
                          summary,
                          imgUrl,
                          hulu,
                          disney,
                          netflix,
                          hbo,
                          apple,
                          amazon
                        } = movie;

                        let options = {
                          new: true,
                          upsert: true
                        };
                        Movie.findOneAndUpdate(filter, update, options, (err, data) => {
                          if (err) {
                            Logger.consoleLog('ERROR in movieSave: ', err);
                          } else {
                            Logger.consoleLog('SUCCESS saving movie: ');//, data);
                          }
                        });
                      };

                      saveMovieToDB(movieWithProviders);
                      const movieSearchResponse = transformSuggestedResponse({ suggested: movieWithProviders.suggested });
                      Logger.consoleLog('movieSearchResponse:', movieSearchResponse, '🚀');
                      // TODO: Let this run, but on later PR
                      // movie.history = movieHistoryResponse
                      // Logger.consoleLog(movie.history)
                      resolve(movieSearchResponse);
                    });

                    // TODO: save (key) name and (value) id to redis
                    // TODO: Exit as below instead of resolve(movieSearchResponse) above?
                    // const finalSearch = transformToSearchDisplay(movieSearchResponse);
                    // resolve(finalSearch);
                  });
                });
              });
            });
          });
        }
      });
    });
  }
};