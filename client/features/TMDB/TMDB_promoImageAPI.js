class TMDB_promoImageAPI {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.baseURL = 'https://image.tmdb.org/t/p/';
    this.s = 'w200';
    this.m = 'w500';
    this.l = 'original';
  }

  size(key = 's') {
    return `${this.baseURL}${this[key]}${this.endpoint}`;
  }
};

export default TMDB_promoImageAPI;
