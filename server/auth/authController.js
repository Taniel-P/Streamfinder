'use strict';

const authService = require('./authService');

const {
  sendErrorResponse,
  sendResponse
} = require("../helpers");

exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    authService.login(username, password)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send('Incorrect password');
    })
  } else {
    return sendErrorResponse({res, statusCode: 400, message: ''});
  }
};

exports.getUser = (req, res, next) => {
  const username = req.query.review_id;
  console.log('HEREEEEE', req)
  authService(req.query)
  .then((res) => {
    console.log('Query Res', res)
    res.status(200).send(res)
  })
  // res.status(201).send('THIS IS THE RES')
  // if (username) {
  //   authService.getUser(username)
  //   .then(result => sendResponse({ res, responseBody: result.data }))
  //   .catch(error => sendErrorResponse({ res, statusCode: error.statusCode, message: error.message }));
  // } else {
  //   return sendErrorResponse({res, statusCode: 400, message: ''});
  // }
};

exports.postUser = (req, res, next) => {
  const user = req.body;
  if (user) {
    authService.postUser(user)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  } else {
    return sendErrorResponse({res, statusCode: 400, message: ''});
  }
};

exports.putUser = (req, res, next) => {
  const user = req.body;
  if (user) {
    authService.putUser(user)
    .then(result => sendResponse({ res, responseBody: result.data }))
    .catch(error => sendErrorResponse({ res, statusCode: error.statusCode, message: error.message }));
  } else {
    return sendErrorResponse({res, statusCode: 400, message: ''});
  }
}
