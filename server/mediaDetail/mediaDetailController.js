'use strict';
const {getUserSubs, getMediaInfo} = require('./mediaDetailDB.js');
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
    getMediaInfo(mediaId).then((info) => {
      console.log('getmediadetails controllers info: ', info);
    });
  }
};
