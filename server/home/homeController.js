'use strict';
const { getMovie, getHistory } = require('./homeDB')
const { transformSuggestedResponse, transformHistoryResponse, transformTrendingResponse } = require('./movieHelpers')
exports.getHomeInfo = (req, res, next) => {
  const user = req.url.split('?')[1];
  let queryUser = user.replace('%20', ' ')
  getHistory(queryUser).then((historyData) => {
    // console.log(historyData)
    getMovie(historyData.currentId).then((sAndTData) => {
      // console.log(sAndTData)

      const finalData = {
        history: transformHistoryResponse({history: historyData.history}),
        suggested: transformSuggestedResponse({suggested: sAndTData.suggested}),
        trending: transformTrendingResponse({trending:sAndTData.trending})
      }
      // console.log(finalData, "🚀")
      res.send(finalData)
    })
  })
}