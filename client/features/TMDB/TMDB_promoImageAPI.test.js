import TMDB_promoImageAPI from './TMDB_promoImageAPI.js';
import 'regenerator-runtime/runtime';

describe('Test TMDB-promoImageAPI class', () => {
  it('Should create a meaningful URL when given an endpoint', () => {
    const imageURL = new TMDB_promoImageAPI('/test').size('s');
    // console.log(imageURL.size('s'));
    expect(imageURL).toBe('https://image.tmdb.org/t/p/w200/test');
  });
});
