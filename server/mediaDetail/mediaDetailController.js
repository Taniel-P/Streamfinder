'use strict';
const {getUserSubs, getMediaInfo, putMediaObjInUserWatchHistory} = require('./mediaDetailDB.js');
const {
  sendErrorResponse,
  sendResponse
} = require('../helpers');

module.exports = {
  getUserSubscriptions: (req, res, next) => {
    const userId = req.url.split('?')[1];
    getUserSubs(userId).then((subs) => {
      res.send(subs);
    });
  },

  getMediaDetails: (req, res, next) => {
    const mediaId = req.url.split('?')[1];
    console.log('***', mediaId);
    getMediaInfo(mediaId).then((details) => {
      res.send(details);
    });
  },

  //will refactor once history is hashed out...
  //are we showing search history or watch history
  putMediaInHistory: (req, res, next) => {
    const userId = req.url.split('?')[1];
    const mediaId = req.url.split('?')[2];
    getMediaInfo(mediaId).then((mediaObj) => {
      putMediaObjInUserWatchHistory(userId, mediaObj).then((response) => {
        console.log('response: ', response);
      });
    });
  }
};
