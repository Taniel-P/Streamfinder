const { query } = require("express")

module.exports = {
  transformSuggestedResponse: (queryResponse) => {
  
    const homeSuggestedDisplay = queryResponse.suggested.map((movieObj) => {
      const finalObj = {}

      finalObj.title = movieObj.title
      finalObj.imgUrl = movieObj.imgUrl
      // return {title: movieObj.title, imgUrl: movieObj.imgUrl}
      return finalObj
    })
    return homeSuggestedDisplay

    // const homeTrendingDisplay = queryResponse.trending.map((movieObj) => {
    //   const finalObj = {}
    //   finalObj.title = movieObj.title
    //   finalObj.imgUrl = movieObj.imgUrl
    //   return finalObj
    // })

  },
  transformTrendingResponse: (queryResponse) => {
    const homeSuggestedDisplay = queryResponse.trending.map((movieObj) => {
      const finalObj = {}

      finalObj.title = movieObj.title
      finalObj.imgUrl = movieObj.imgUrl
      // return {title: movieObj.title, imgUrl: movieObj.imgUrl}
      return finalObj
    })
    return homeSuggestedDisplay
  },

  transformHistoryResponse: (queryResponse) => {
    const homeHistoryDisplay = queryResponse.history.map((movieObj) => {
      const finalObj = {}
      finalObj.title = movieObj[0].title
      finalObj.imgUrl = movieObj[0].imgUrl
      return finalObj
    })
    return homeHistoryDisplay
  }
}

