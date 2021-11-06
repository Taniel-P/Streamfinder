'use strict';
const {getMovie, getHistory} = require('./homeDB')
const {
  sendErrorResponse,
  sendResponse
} = require("../helpers");

exports.getHomeInfo = (req, res, next) => {
  const user = req.url.split('?')[1];
  let queryUser = user.replace('%20', ' ')
  getHistory(queryUser).then((historyData) => {
    console.log(historyData)
    const finalData = {
      history: historyData,
      suggested: [],
      trending:[]
    }
    res.send(finalData)

    
  })
  // getMovie(id).then((homeData) => {
  //   //send itttt 🚀

  //   res.send(homeData)
  // })
}