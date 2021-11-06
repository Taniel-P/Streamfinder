const axios = require('axios');
const API_KEY = process.env.API_KEY;
module.exports = {

  getHistory: (movieName) => {

    const name = movieName.replace(' ', '%20');
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`;

    return axios.get(url)
      .then(({data}) => {

        const {id, title, overview, poster_path, vote_average, vote_count} = data.results[0];
        const imgUrl = `https://www.themoviedb.org/t/p/w1280${poster_path}`;
        const movieObj =
        {
          id,
          mediaType: 'Movie',
          title,
          rating: vote_average,
          ratingCount: vote_count,
          summary: overview,
          imgUrl: imgUrl,
          hulu: null,
          disney: null,
          netflix: null,
          hbo: null,
          apple: null,
          amazon: null
        };
        return movieObj;
      });
  },
  getTrending: () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    return axios.get(url)
      .then(({data}) => {

        let firstFive = data.results.map((resultObj, i) => {

          if (i <= 4) {
            return {
              id: resultObj.id,
              mediaType: 'Movie',
              title: resultObj.title,
              rating: resultObj.vote_average,
              ratingCount: resultObj.vote_count,
              summary: resultObj.overview,
              imgUrl: `https://www.themoviedb.org/t/p/w1280${resultObj.poster_path}`,
              hulu: null,
              disney: null,
              netflix: null,
              hbo: null,
              apple: null,
              amazon: null
            };
          }

        });
        firstFive = firstFive.filter((obj) => { if (obj !== undefined) { return obj; } });
        return firstFive;
      });
  },
  getSuggested: (id) => {
    console.log(id);
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

    return axios.get(url)
      .then(({data}) => {

        let firstFive = data.results.map((resultObj, i) => {

          if (i <= 4) {
            return {
              id: resultObj.id,
              mediaType: 'Movie',
              title: resultObj.title,
              summary: resultObj.overview,
              rating: resultObj.vote_average,
              ratingCount: resultObj.vote_count,
              imgUrl: `https://www.themoviedb.org/t/p/w1280${resultObj.backdrop_path}`,
              hulu: null,
              disney: null,
              netflix: null,
              hbo: null,
              apple: null,
              amazon: null
            };
          }

        });
        firstFive = firstFive.filter((obj) => { if (obj !== undefined) { return obj; } });
        return firstFive;
      });

  },
  getProviders: (idArr) => {
    const arr = []
    

    const providers = new Promise((resolve, reject) => {
      idArr.forEach((id) => {
      const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`
     
   
        const data = axios.get(url)
          .then(({data}) => {
            const results = data.results.US
            arr.push(results)
         
            if(arr.length === idArr.length) {

              return arr
            }

          
          })

        data.then((data) => {
       
          if (data !== undefined) {
            // console.log(data)
            resolve(data)
          }
       
        })
      })
    })
    providers.then((providerData) => {
      return(providerData)

    })
    return providers    
  }
};