const { query } = require("express")

module.exports = {
  transformToHomeResponse: (queryResponse) => {
    // const homeSuggestedDisplay = queryResponse.suggested.map((movieObj) => {
    //   const finalObj = {}

    //   finalObj.title = movieObj.title
    //   finalObj.imgUrl = movieObj.imgUrl
    //   // return {title: movieObj.title, imgUrl: movieObj.imgUrl}
    //   return finalObj
    // })

    // const homeTrendingDisplay = queryResponse.trending.map((movieObj) => {
    //   const finalObj = {}
    //   finalObj.title = movieObj.title
    //   finalObj.imgUrl = movieObj.imgUrl
    //   return finalObj
    // })

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

