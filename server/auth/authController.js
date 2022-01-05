'use strict';

const authService = require('./authService');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = require('twilio')(accountSid, authToken);

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
      });
  } else {
    return sendErrorResponse({ res, statusCode: 400, message: 'No credentials recieved' });
  }
};

exports.getUser = (req, res, next) => {
  const username = req.query['0'];
  if (username) {
    authService.getUser(username)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        console.log('Server getUser Err', err);
        res.status(500).send(err);
      });
  } else {
    return sendErrorResponse({ res, statusCode: 400, message: 'No username received' });
  }
};

exports.postUser = (req, res, next) => {
  const user = req.body;
  if (user.name === null) {
    res.status(201).send('Name required');
  }
  if (user.username === null) {
    res.status(201).send('Username required');
  }
  if (user.email === null) {
    res.status(201).send('Email required');
  }
  if (user.password === null) {
    res.status(201).send('Password required');
  }
  if (user.name && user.username && user.email && user.password) {
    authService.postUser(user)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    return sendErrorResponse({ res, statusCode: 400, message: 'No credentials received' });
  }
};

exports.putUser = (req, res, next) => {
  const user = req.body;
  if (user) {
    authService.putUser(user)
      .then(result => sendResponse({ res, responseBody: result.data }))
      .catch(error => sendErrorResponse({ res, statusCode: error.statusCode, message: error.message }));
  } else {
    return sendErrorResponse({ res, statusCode: 400, message: 'No user found' });
  }
};

exports.confirmUser = (req, res, next) => {
  const phone = '+1' + req.body.phoneNumber;

  client.verify.services.create({ friendlyName: 'My First Verify Service' })
    .then((service) => {
      console.log('1');
      client.verify.services(service.sid)
        .verifications
        .create({ to: phone, channel: 'sms' })
        .then((verification) => {
          console.log('2');
          res.status(200).send(service.sid);
        })
        .catch((err) => {
          console.log('Inner2FA ERR', err);
        });
    })
    .catch((err) => {
      console.log('2FA ERR', err);
    });
};

exports.authorizeUser = (req, res, next) => {
  const phone = '+1' + req.body.phoneNumber.phoneNumber;
  const id = req.body.phoneNumber.data;
  client.verify.services(id)
    .verificationChecks
    .create({ to: phone, code: req.body.code })
    .then((verificationCheck) => {
      console.log('STATUS', verificationCheck.status);
      res.status(200).send(verificationCheck.status);
    })
    .catch((err) => {
      console.log('authorizeUser ERR', err);
    });

};