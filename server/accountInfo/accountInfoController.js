'use strict';

const {
  sendErrorResponse,
  sendResponse
} = require("../helpers");

exports.getUserInfo = (req, res, next) => {
  console.log('WERE HERE')
  console.log('GET USER INFO', req.body)
  res.status(204).send('This is the response')
};