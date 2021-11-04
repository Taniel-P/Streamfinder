'use strict';
const {getMovie} = require('./homeDB')
const {
  sendErrorResponse,
  sendResponse
} = require("../helpers");

exports.getHomeInfo = (req, res, next) => {
  const id = Number(req.url.split('?')[1]);
  getMovie(id).then((homeData) => {
    //send itttt 🚀
    res.send(homeData)
  })
}