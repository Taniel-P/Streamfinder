module.exports = {
  transformToSearchDisplay: (movieObj) => {
    const finalSearchResponse = movieObj.history.map((movie) => {
      const finalObj = {}
      const finalProviderArr = []
      // console.log(movie)
      


      finalObj.title = movie.title
      finalObj.imgUrl = movie.imgUrl
      finalObj.providers = [movie.hulu ? movie.hulu: null, movie.disney ? movie.disney: null, movie.netflix ? movie.netflix : null, movie.hbo ? movie.hbo: null, movie.apple ? movie.apple : null, movie.amazon ? movie.amazon : null]
      return finalObj
    })
    return finalSearchResponse
  }
  
}