import React from 'react';
import './Home.css';

const Home = props => (
  <div id="Home">
    <div className="home-header">
        <h1 className="home-title">Streamfinder</h1>
        <input className="home-searchBar" type="text" placeholder="Search For Movies"/>
        {/* <img className="home-homeIcon" src="homeIcon.png"/>
        <img className="home-userIcon" src="userIcon.png"/> */}
      </div>
      <hr/>
      <h1 className="home-suggested">Suggested</h1>
      <div className="movieModule">
        <div className="moviename">Movie name</div>
        <div className="movieImage">IMG</div>
        <div className="services">Services</div>
        <div className="starRating">*****</div>
      </div>
      <hr/>
      <h1 className="home-trending">Trending Movies</h1>
      <div className="movieModule">
        <div className="moviename">Movie name</div>
        <div className="movieImage">IMG</div>
        <div className="services">Services</div>
        <div className="starRating">*****</div>
      </div>
      <hr/>
      <h1 className="home-history">History</h1>
      <div className="movieModule">
        <div className="moviename">Movie name</div>
        <div className="movieImage">IMG</div>
        <div className="services">Services</div>
        <div className="starRating">*****</div>
      </div>
    </div>
);

export default Home;
