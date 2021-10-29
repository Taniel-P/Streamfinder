const database = require('../database/database.js');

database.getUserLogin = (/* { params } */) => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.getUserLogin(reviewIdFilter)
    // .then(() => resolve())
    // .catch(error => {
    //   console.log('reportReview error:', error);
    //   console.log('Server error', error);
    //   reject({ statusCode: 500, message: error });
    // });
  });
};


database.getUser = (/* { params } */) => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.getUserLogin(reviewIdFilter)
    // .then(() => resolve())
    // .catch(error => {
    //   console.log('reportReview error:', error);
    //   console.log('Server error', error);
    //   reject({ statusCode: 500, message: error });
    // });
  });
};


database.addUser = (userObj) => {
  return new Promise((resolve, reject) => {
    const filter = {username: userObj.username};
    const newUser = new database.User({
      username: userObj.username,
      pass: userObj.password,
      email: userObj.email,
    })
    console.log('HERE', newUser)
    database.User.updateMany(filter, newUser, {upsert: true})
    .then((user) => {
      console.log('USER=', user)
      resolve(user);
    })
    .catch((err) => {
      reject(err);
    })
  });
};


database.updateUser = (/* { params } */) => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.getUserLogin(reviewIdFilter)
    // .then(() => resolve())
    // .catch(error => {
    //   console.log('reportReview error:', error);
    //   console.log('Server error', error);
    //   reject({ statusCode: 500, message: error });
    // });
  });
};

module.exports.database = database;