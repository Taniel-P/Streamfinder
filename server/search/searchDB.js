const {Movie} = require('../database/database.js');
const redisClient = require('../cacheManager');
const {transformToSearchDisplay} = require('./searchHelpers')

const {getHistory, getTrending, getSuggested} = require('./APIController')

module.exports = {
  getMovie: (searchInputTitle) => {
    //we need to check cache to see if title is there
    //this is scuffed
    //because cache is not set up yet to based on auth.  A sample insert is made
    //after sample is set ---- comment out
    // let sampleKey = 'Iron Man 2'
    // let sampleValue = '10138'
    // let sample = redis.set(sampleKey, sampleValue)
    // console.log(sample)


    return new Promise((resolve, reject) => {

      redisClient.get(searchInputTitle, (err, id) => {
   
        if (id !== null) {
          Movie.find({id:id}).then((movieData) => {
            //lets configure that movie data for search page display
            const finalSearch = transformToSearchDisplay(movieData[0])
            //send it
            resolve(finalSearch)
          })
        } else {
            //create getHistory - search movies with name (this will be history)
          getHistory(searchInputTitle).then((history) => {
            //create historyArr - which holds all the data related to the history view
            const id = history.id
            const historyArr =[history]
            //create getTrending - use searched movie response id to get trending (movie get popular api request)
            getTrending().then((trending) => {
              //create trendingArr which holds data related to trending view 
              //create getSuggested - use searched movie response id to get suggested (movie get recommendations api request)
              getSuggested(id)
              
              //create suggestedArr which holds data related to the suggessted view 
              //create uniqueMovieIds - pull unique ids from historyArr, trendingArr, and suggestedArr
            })
            


            //create providers - request providers for each id (with a promise all)

            //create finalMovieObj - adds providers to the movies in moviesArr, providers based on movies id
            //create finalHistoryArr - adds providers to the movies in historyArr, providers based on movies id
            //create finalTrendingArr - adds providers to the movies in trendingArr, providers based on movies id
            //create finalSuggestedArr - adds providers to the movies in suggestedArr, providers based on movies id


            //createDbObj - adds finalHistoryArr, finalTrendingArr, and finalSuggestedArr to finalMovieObj

            //create movieSave - saves new movie data to schema

            //save (key) name and (value) id to redis 

            //create finalSearch - use transformToSearchDisplay (to format for search componment)

            //resolve with finalSearch
          })
      

        }
      });
    })
  }
};



//   redisClient.get(searchInputTitle, (err, id) => {
//     Movie.find({id:id}).then((movieData) => {
//       //lets configure that movie data for search page display
//       const finalSearch = transformToSearchDisplay(movieData[0])
//       //send it
//       resolve(finalSearch)
//     })
//   })
// })