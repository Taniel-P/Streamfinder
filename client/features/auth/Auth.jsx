import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from '../home/Home';
import axios from 'axios';
import './Auth.css';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      email: null,
      password: null,
      platforms: [
        {name: 'Netflix', id: 'netflix', isSelected: false, cost: 17.99},
        {name: 'Amazon', id: 'amazon', isSelected: false, cost: 16.99},
        {name: 'HBO', id: 'hbo', isSelected: false, cost: 15.99},
        {name: 'Disney', id: 'disney', isSelected: false, cost: 17.99}
      ],
      redirect: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleMovieSelect(e) {
    let stateCopy = this.state.platforms;
    for (let i = 0; i < stateCopy.length; i++) {
      if (stateCopy[i].id === e.target.id) {
        stateCopy[i].isSelected = !stateCopy[i].isSelected;
      }
    }
    this.setState({
      platforms: stateCopy
    })
  }

  onSubmit() {
    console.log('Clicked')
    axios.post('/auth/user', this.state)
    .then((res) => {
      console.log('/auth Res', res);
      if (res.status === 201) {
        alert('Complete filling information');
      }
      if (res.status === 200) {
        this.setState({
          redirect: '/account'
        })
      }
      //Redirect to Signin page
    })
    .catch((err) => {
      console.log('/user Err', err);
      if (err) {
        console.log('ERROR', err)
        alert('Username or email is not available')
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div id="Auth">
      <div className="auth-titleHeader">
        <h1>Streamfinder</h1>
      </div>
      <div className="mainCreateAccount" >
        <h1 className="createAccountHeader">Create Your Account</h1>
        <div className="auth-name">
          <input type="text" id="name" placeholder="Name" onChange={this.handleChange}></input>
        </div>
        <div className="auth-username">
          <input type="text" id="username" placeholder="Username" onChange={this.handleChange}></input>
        </div>
        <div className="auth-email">
          <input type="text" id="email" placeholder="Email" onChange={this.handleChange}></input>
        </div>
        <div className="auth-password">
          <input type="text" id="password" placeholder="Password" onChange={this.handleChange}></input>
        </div>
        <div className="auth-subscriptionOptions">
          <label>Select Your Subscriptions</label>
        </div>
        <div className="auth-subscriptionIcons">
          {this.state.platforms.map((platform, i) =>
          <button id={platform.id} key={i} onClick={this.handleMovieSelect}>{platform.name}</button>
          )}
        </div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    </div>
    )
  };
}

export default Auth;
