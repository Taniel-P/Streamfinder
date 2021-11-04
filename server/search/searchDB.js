const {Movie} = require('../database/database.js');
const redisClient = require('../cacheManager');
const {transformToSearchDisplay} = require('./searchHelpers')

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
    const checkCache = redisClient.get(searchInputTitle);
    //if checkCache returns true, it exists in db - so lets grab it 🚀
    if (checkCache) {
      //first lets grab key from redis cache
      return new Promise((resolve, reject) => {
        redisClient.get(searchInputTitle, (err, id) => {
          Movie.find({id:id}).then((movieData) => {
            //lets configure that movie data for search page display
            const finalSearch = transformToSearchDisplay(movieData[0])
            //send it
            resolve(finalSearch)
          })
        })
      })

    }
    // console.log(cacheCheck.then((data) => console.log(data)))
  }
};