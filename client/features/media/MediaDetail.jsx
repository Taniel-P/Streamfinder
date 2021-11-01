import React from 'react';
import StarRatingInteractive from '../sharedComponents/StarRatingInteractive';
import Search from './../search/Search.jsx';
import Reviews from './../reviews/Reviews.jsx';
import test from './testData.js';
import './MediaDetail.css';

//figure out how to wrap with error boundary and logger
//need to find a way to get banner images to each movie/tv show

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
      userSubs: [],
      watchWithSubscribed: [],
      watchWithUnsubscribed: []
    };
    //bind
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.getUserSubscriptions = this.getUserSubscriptions.bind(this);
    this.determineWatch = this.determineWatch.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
    this.getUserSubscriptions();
    this.determineWatch();
  }

  getMovieDetails() {
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
  }

  getUserSubscriptions() {
    //another request to db to find out what subscriptions the user has OR this can be passed to me in props
    this.setState({
      userSubs: test.userSubs
    });
  }

  determineWatch() {
    let subscribed = [];
    let unsubscribed = [];
    for (let i = 0; i < this.state.subscriptions.length; i++) {
      if (userSubs.includes(this.state.subscriptions[i])) {
        subscribed.push(this.state.subscriptions[i]);
      } else {
        unsubscribed.push(this.state.subscriptions[i]);
      }
    }
    this.setState({
      watchWithSubscribed: subscribed,
      watchWithUnsubscribed: unsubscribed
    });
  }

  render() {
    return (
      <div id="MovieDetail">
        <div className="overview-header">
          <h1 className="overview-title">Streamfinder</h1>
          <Search />
          {/* <input className="overview-searchBar" type="text" placeholder="Search For Movies"/> */}
          {/* <img className="overview-homeIcon" src="../home/homeIcon.png"/>
          <img className="overview-userIcon" src="../home/userIcon.png"/> */}
        </div>
        <hr/>
        <div className="bannerImage">
          <img className="overview-banner" src="bannerImage.jpeg"/>
        </div>
        <div className="aboutMovie">
          <h1 className="overview-aboutHeader">About {this.state.name}</h1>
          <p className="aboutDescription">{this.state.summary}</p>
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