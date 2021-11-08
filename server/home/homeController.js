'use strict';
const {getMovie, getHistory} = require('./homeDB');
const {
  sendErrorResponse,
  sendResponse
} = require('../helpers');
const {transformSuggestedResponse, transformHistoryResponse, transformTrendingResponse} = require('./movieHelpers');
exports.getHomeInfo = (req, res, next) => {
  const user = req.url.split('?')[1];
  let queryUser = user.replace('%20', ' ');
  getHistory(queryUser).then((userObj) => {
    let userId = userObj.currentId;
    getMovie(userId).then((sAndTData) => {
      const finalData = {
        history: transformHistoryResponse({history: userObj.history}),
        suggested: transformSuggestedResponse({suggested: sAndTData.suggested}),
        trending: transformTrendingResponse({trending: sAndTData.trending})
      };
      // console.log(finalData, "🚀")
      res.send(finalData);
    });





  });
  // getMovie(id).then((homeData) => {
  //   //send itttt 🚀

  //   res.send(homeData)
  // })
};