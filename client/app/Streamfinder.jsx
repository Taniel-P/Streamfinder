import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Auth from '../features/auth/Auth';
import SignIn from '../features/auth/SignIn';
import Home from '../features/home/Home';
import Search from '../features/search/Search';
import MediaDetail from '../features/media/MediaDetail';
import Account from '../features/accountPage/Account';
import ErrorBoundary from '../features/sharedComponents/ErrorBoundary';
import './Streamfinder.css';
/* the idea:
upon auth being valid -
* auth will send username and current history ids (from user schema) to StreamerFinder
and state will bet set
* Each component can use component did update for when their props
change.  upon this happening they can make an ajax request to server
to pull data needed from MovieSchema
*/
class Streamfinder extends React.Component {
  constructor(props) {
    super(props);

    this.updateSession = this.updateSession.bind(this);
    this.checkCache = this.checkCache.bind(this);
    this.updateCache = this.updateCache.bind(this);
    this.handleSearchIdSwitch = this.handleSearchIdSwitch.bind(this)

    this.cache = new Map();

    this.state = {
      sessionToken: this.props.sessionToken || null,
            //user establish because this is prior to auth being hooked up
      //this is under the impression auth was valid and currentId was sent
      //to this component and updated via component did update.
      currentId: 10138
    }
  }

  updateSession(token) {
    console.log(token);
    window.localStorage.setItem('sessionToken', 'fakehash');
    this.setState({ sessionToken: token });
  }

  checkCache(id) {
    return this.cache.get(id);
  }

  updateCache(id, data) {
    this.cache.set(id, data);
    this.state = {

    }
  }

  handleSearchIdSwitch(id) {
    //receives an id after search finishes retrieving new data
    //sets currentId resets currentID state with received Id
  }

  render() {
    const { sessionToken } = this.state;
    const { updateSession, checkCache, updateCache } = this;

    return !sessionToken ? (
      <SignIn updateSession={ updateSession } />
      ) : (
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/signIn">SignIn</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/account">User</Link>
            </li>
          </ul>

          <hr /> */}

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home checkCache={ checkCache } updateCache={ updateCache } />
            </Route>
            <Route exact path="/home">
              <Home checkCache={ checkCache } updateCache={ updateCache } currentId={this.state.currentId} />
            </Route>
            <Route path="/auth">
              <Auth updateSession={ updateSession } />
            </Route>
            <Route exact path="/signIn">
              <SignIn updateSession={ updateSession } />
            </Route>
            <Route path="/search">
              <ErrorBoundary>
                //search prolly only needs to update most recent id searched
                <Search checkCache={ checkCache } updateCache={ updateCache } switch={this.handleSearchIdSwitch} />
              </ErrorBoundary>
            </Route>
            <Route path="/media">
              <MediaDetail checkCache={ checkCache } updateCache={ updateCache } />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default Streamfinder;
