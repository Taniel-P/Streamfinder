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

class Streamfinder extends React.Component {
  constructor(props) {
    super(props);

    this.updateSession = this.updateSession.bind(this);
    this.checkCache = this.checkCache.bind(this);
    this.updateCache = this.updateCache.bind(this);

    this.cache = new Map();

    this.state = {
      sessionToken: null
    }
  }

  updateSession(token) {
    this.setState({ sessionToken: hash });
  }

  checkCache(id) {
    return this.cache.get(id);
  }

  updateCache(id, data) {
    this.cache.set(id, data);
  }

  render() {
    const { sessionToken } = this.state;
    const { updateSession, checkCache, updateCache } = this;

    return !sessionToken ? <SignIn updateSession={ updateSession } /> : (
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
            <Route path="/auth">
              <Auth updateSession={ updateSession } />
            </Route>
            <Route exact path="/signIn">
              <SignIn updateSession={ updateSession } />
            </Route>
            <Route path="/search">
              <ErrorBoundary>
                <Search checkCache={ checkCache } updateCache={ updateCache } />
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
