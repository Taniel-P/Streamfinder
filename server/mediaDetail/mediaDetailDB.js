//import db functions
//create helper functions that query db (and can be exported, impoorted into controller file when request comes in)


const {Movie, User} = require('../database/database.js');

module.exports = {
  getUserSubs: (userId) => {
    return new Promise((resolve, reject) => {
      User.find({currentId: userId})
        .then((userData) => {
          let subsArray = userData[0].subscriptions;
          resolve(subsArray);
        });
    });
  },
  getMediaInfo: (mediaId) => {
    return new Promise((resolve, reject) => {
      Movie.find({id: mediaId})
        .then((mediaData) => {
          let mediaObject = mediaData[0];
          resolve(mediaObject);
        });
    });
  }
};