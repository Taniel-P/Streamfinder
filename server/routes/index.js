'use strict';

const rootRouter = require('./root');
const homeRouter = require('./home');
const searchRouter = require('./search');
const authorizationRouter = require('./auth');
const accountInfoRouter = require('./accountInfo');
// const ratingsReviewsRouter = require('./ratingsReviews');

module.exports = (app) => {
  app.use('/', rootRouter);
  app.use('/home', homeRouter);
  app.use('/search', searchRouter);
  app.use('/auth', authorizationRouter);
  app.use('/accountInfo', accountInfoRouter);
  // app.use('/reviews', ratingsReviewsRouter);
};