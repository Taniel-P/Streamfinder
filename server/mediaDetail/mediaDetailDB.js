//import db functions
//create helper functions that query db (and can be exported, impoorted into controller file when request comes in)




const {Movie, User} = require('../database/database.js');

module.exports = {
  getUserSubs: (userId) => {

  }
};


module.exports = {
  getMovie: (movieId) => {
    //if there is movie id, we know it exists in DB - so lets query it 🔥
    if (movieId) {
      // let cacheContains = redisClient.get(movieId)
      // if (cacheContains) {
      return new Promise((resolve, reject) => {
        Movie.find({id: movieId})
          .then((movieData) => {
            const finalMovie = transformToHomeResponse(movieData[0]);
            resolve(finalMovie);
          });
      });
    }
  },
  getHistory: (user) => {

    return new Promise((resolve, reject) => {
      User.find({username: user})
        .then((data) => {
          const response = transformHistoryResponse(data[0]);
          resolve(response);
        });
    });
  }
};