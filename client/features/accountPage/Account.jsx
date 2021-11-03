import React from 'react';
import axios from 'axios';
import './Account.css';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'userjkhjkhName',
      email: 'emajnknil',
      password: null,
      platforms: [
        {name: 'Netflix', id: 'netflix', isSelected: true, cost: 17.99},
        {name: 'Amazon', id: 'amazon', isSelected: false, cost: 16.99},
        {name: 'HBO', id: 'hbo', isSelected: true, cost: 15.99},
        {name: 'Disney', id: 'disney', isSelected: false, cost: 17.99}
      ]
    }
  }

  componentDidMount() {
    axios.get('/auth/user', {params: this.state})
    .then((res) => {
      console.log('ACCOUNT GET', res);
    })
    .catch((err) => {
      console.log('ACCOUNT GET ERR', err);
    })
  }

  render() {
    return (
      <div className="accountPage">
        <div className="users-header">
          <h1 className="users-title">Streamfinder</h1>
          <input className="users-searchBar" type="text" placeholder="Search For Movies" />
          <img className="users-homeIcon" src="../home/homeIcon.png" />
          <img className="users-userIcon" src="../home/userIcon.png" />
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
              return sub.name + ' '
            }
          }
          )}</ul>
          <ul>Total Cost: {this.state.platforms.filter(({isSelected}) => isSelected === true).reduce((sum, subs) => {
              return sum + subs.cost
              }, 0)}</ul>
          <ul>Most used subscription: </ul>
        </div>
      </div>
    )
  }
}

export default Account;
