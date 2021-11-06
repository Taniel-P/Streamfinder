import React from 'react';
import MediaTileCarousel from '../sharedComponents/MediaTileCarousel';
import './Home.css';
import axios from 'axios';
// import TempDisplay1 from '../Search/TempDisplay1';
import Temp from './Temp';
import data from './tempHomeData';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggested: [],
      history: [],
      trending: []
    };
  }

  componentDidMount() {
    //if the prev props id is different from current and if id is not null
    //when this page is hit - it should run a ajax request to server

    //for the current id


    if (this.props.user !== null && this.props.user) {
      axios.get(`/home/homePage?${this.props.user}`)
        .then(({data}) => {
          console.log('thyyyy data', data);

          this.setState({
            suggested: data.suggested,
            history: data.history,
            trending: data.trending
          });
        });
    }



  }

  render() {
    return (
      <div>
        {/* <div id="Search">
          <div className='test'>
            <h1 className='search-header'>Streamfinder</h1>
          </div>
          <input
            className='search-box'
            type="text"
            placeholder='search a movie to display streaming providers 🎣'
          />
          <button
            // onClick={this.handleClick} - figure out something here
            className='search-button'>Search
          </button>
        </div> */}
        <h2 className='s-header-home'>suggested</h2>
        <Temp data={this.state.suggested}/>

        <h2 className='t-header-home'>Trending</h2>
        <Temp data={this.state.trending}/>

        <h2 className='h-header-home'>History</h2>
        <Temp data={this.state.history}/>
        {Object.keys(data).map((carouselLabel, i) => (
          <MediaTileCarousel key={`mtc${i}`} tempData={data[carouselLabel]} label={ carouselLabel } />
        ))}
      </div>
    );
  }
}

export default Home;
