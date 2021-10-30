import React from 'react';
import StarRatingInteractive from '../sharedComponents/StarRatingInteractive';
import Reviews from './../reviews/Reviews.jsx';
import test from './testData.js';
import './MediaDetail.css';

//figure out how to wrap with error boundary and logger

class MediaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      mediaType: '',
      name: '',
      rating: '',
      summary: '',
      subscriptions: [],
      reviews: [],
      userSubs: []
    };
    //bind
  }

  componentDidMount() {
    //this will be a request to the db to get info to apply to state
    this.setState({
      id: test.id,
      mediaType: test.mediaType,
      name: test.name,
      rating: test.rating,
      summary: test.summary,
      subscriptions: test.subscriptions,
      reviews: test.reviews
    });
    //another request to db to find out what subscriptions the user has OR this can be passed to me in props
    this.setState({
      userSubs: test.userSubs
    });
  }

  render() {
    return (
      <div id="MovieDetail">
        <div className="overview-header">
          <h1 className="overview-title">Streamfinder</h1>
          <input className="overview-searchBar" type="text" placeholder="Search For Movies"/>
          {/* <img className="overview-homeIcon" src="../home/homeIcon.png"/>
          <img className="overview-userIcon" src="../home/userIcon.png"/> */}
        </div>
        <hr/>
        <div className="bannerImage">
          <img className="overview-banner" src="bannerImage.jpeg"/>
        </div>
        <div className="aboutMovie">
          <h1 className="overview-aboutHeader">About "Movie Name"</h1>
          <p className="aboutDescription">About movie</p>
        </div>
        <div className="watchOn">
          <h2>Watch with your subscription on:</h2>
          <div className="watchOnIcons">
            Icon placeholder
          </div>
          <h2>Also available with a subscription to these providers:</h2>
          <div className="watchOnIcons">
            Icon placeholder
          </div>
        </div>
        <hr/>
        <div className="Reviews">
          <Reviews />
        </div>
      </div>
    );
  }
}

export default MediaDetail;