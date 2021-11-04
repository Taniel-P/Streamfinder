const { query } = require("express")

module.exports = {
  transformToHomeResponse: (queryResponse) => {
    const homeSuggestedDisplay = queryResponse.suggested.map((movieObj) => {
      const finalObj = {}

      finalObj.title = movieObj.title
      finalObj.imgUrl = movieObj.imgUrl
      // return {title: movieObj.title, imgUrl: movieObj.imgUrl}
      return finalObj
    })

    const homeTrendingDisplay = queryResponse.trending.map((movieObj) => {
      const finalObj = {}
      finalObj.title = movieObj.title
      finalObj.imgUrl = movieObj.imgUrl
      return finalObj
    })

    const homeHistoryDisplay = queryResponse.history.map((movieObj) => {
      const finalObj = {}
      finalObj.title = movieObj.title
      finalObj.imgUrl = movieObj.imgUrl
      return finalObj
    })
    const finalHomeResponse = {homeSuggestedDisplay, homeTrendingDisplay, homeHistoryDisplay}
    return finalHomeResponse
  }
}

