import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";
import axios from 'axios';
// import Logger from '../../../logger.js'
import LogOut from '../sharedComponents/LogOut';
import HomeIcon from '../sharedComponents/HomeIcon';
import './Account.css';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'placeholder',
      email: 'placeholder',
      password: null,
      platforms: []
    };
  }

  componentDidMount() {
    const user = window.localStorage.getItem('sessionToken');
    axios.get('/auth/user', { params: user })
      .then((res) => {
        this.setState({
          username: res.data.username,
          email: res.data.email,
          password: null,
          platforms: res.data.platforms
        });
      })
      .catch((err) => {
        console.log('ACCOUNT GET ERR', err);
      });
  }

  render() {
    return (
      <div className="accountPage">
        <LogOut/>
        <div className="users-header">
          <h1 className="users-title">Streamfinder</h1>
          <input className="users-searchBar" type="text" placeholder="Search For Movies" />
          <HomeIcon />
        </div>
        <hr />
        <h1 className="users-account">Account</h1>
        <div className="movieModule">
        </div>
        <hr />
        <div className="memberInfo">
          <h2>Member Info</h2>
          <ul>Username: {this.state.username}</ul>
          <ul>Email: {this.state.email}</ul>
          <ul>Password: ********</ul>
          <button>Change password</button>
        </div>
        <hr />
        <div className="subscriptionInfo">
          <h2>Subscription Info</h2>
          <ul>Subscriptions: {this.state.platforms.map((sub) => {
            if (sub.isSelected) {
              return sub.name + ' ';
            }
          }
          )}</ul>
          <ul>Total Cost: {this.state.platforms.filter(({ isSelected }) => isSelected === true).reduce((sum, subs) => {
            return sum + subs.cost;
          }, 0)}</ul>
          <ul>Most used subscription: </ul>
        </div>
      </div>
    );
  }
}

export default Account;
