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
  const username = req.query.username;
  if (username) {
    authService.getUser(req.query)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      console.log('Server getUser Err', err);
      res.status(500).send(err);
    })
  } else {
    return sendErrorResponse({res, statusCode: 400, message: ''});
  }
};

exports.postUser = (req, res, next) => {
  const user = req.body;
  if (user.name === null) {
    res.status(201).send('Name empty');
  }
  if (user.username === null) {
    res.status(201).send('Username Empty');
  }
  if (user.email === null) {
    res.status(201).send('Username email');
  }
  if (user.password === null) {
    res.status(201).send('Password empty');
  }
  if (user.name && user.username && user.email && user.password) {
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
