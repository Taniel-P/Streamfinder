const axios = require('axios');
const API_KEY = process.env.API_KEY
module.exports = {
 
  getHistory: (movieName) => {
  
    const name = movieName.replace(' ', '%20')
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`

    return axios.get(url)
      .then(({data}) => {
       
         const {id, title, overview, poster_path} = data.results[0]
         const imgUrl = `https://www.themoviedb.org/t/p/w1280${poster_path}`
         const movieObj = 
         {
          id, 
          mediaType: 'Movie', 
          title, 
          summary: overview, 
          imgUrl: imgUrl,
          hulu: null,
          disney: null,
          netflix: null,
          hbo: null,
          apple: null,
          amazon: null
        }
         return movieObj
      })
  },
  getTrending: () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    return axios.get(url)
      .then(({data}) => {
        
        let firstFive = data.results.map((resultObj, i) => {
    
          if (i <= 4) {
            return {
              id: resultObj.id, 
              mediaType: 'Movie', 
              title: resultObj.title, 
              summary: resultObj.overview, 
              imgUrl: `https://www.themoviedb.org/t/p/w1280${resultObj.poster_path}`,
              hulu: null,
              disney: null,
              netflix: null,
              hbo: null,
              apple: null,
              amazon: null
            } 
          }
          
        })
        firstFive = firstFive.filter((obj) => {if (obj !== undefined) {return obj}})
        return firstFive
      })
  }, 
  getSuggested: (id) => {
    //check here jaimie
     console.log(id)

  }
}