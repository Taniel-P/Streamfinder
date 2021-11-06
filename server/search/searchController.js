'use strict';

const { sendErrorResponse, sendResponse } = require('../helpers');
const { getMovie } = require('./searchDB');

exports.getSearchInfo = (req, res, next) => {
  const title = req.body.title
  const username = req.body.user
  getMovie(title, username).then((searchDisplayData) => {
    res.send(searchDisplayData)
  })
  //receives request for search
  // console.log(req)
  // //checks db for the specific movie name
  // console.log(getMovie(test))


  //if exists -
  //run create final obj db helper ->
  //adds an array of provider img links to final movie obj to be sent to server

  //if it does not exist
  //sends request to api
};


