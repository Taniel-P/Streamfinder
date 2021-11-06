//exports req functions
'use strict';
const {getUserSubs} = require('./mediaDetailDB.js');
const {
  sendErrorResponse,
  sendResponse
} = require('../helpers');

exports.getUserSubscriptions = (req, res, next) => {

};

// // 'use strict';
// // const {getMovie, getHistory} = require('./homeDB')
// // const {
// //   sendErrorResponse,
// //   sendResponse
// // } = require("../helpers");

// exports.getHomeInfo = (req, res, next) => {
//   console.log('req.url: ', req.url)
//   const userId = req.url.split('?')[1];
//   let queryUser = user.replace('%20', ' ')
//   getHistory(queryUser).then((historyData) => {
//     const finalData = {
//       history: historyData,
//       suggested: [],
//       trending:[]
//     }
//     res.send(finalData)


//   })
//   // getMovie(id).then((homeData) => {
//   //   //send itttt 🚀

//   //   res.send(homeData)
//   // })
// }