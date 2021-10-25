import React from 'react';
import axios from 'axios';
import './Auth.css';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      userName: null,
      email: null,
      password: null,
      netflix: null,
      amazon: null,
      hbo: null,
      disney: null
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
    console.log('id', e.target.id)
    console.log('Target', e.target)
    this.setState({
      [e.target.id]: e.target.id
    })
  }

  onSubmit() {
    console.log('Clicked')
    axios.post('/user', this.state)
    .then((res) => {
      console.log('/user Res', res);
    })
    .catch((err) => {
      console.log('/user Err', err);
    })
  }

  render() {
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
        <div className="auth-userName">
          <input type="text" id="userName" placeholder="Username" onChange={this.handleChange}></input>
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
          <button id="netflix" onClick={this.handleMovieSelect}>Netflix</button>
          <button id="amazon" onClick={this.handleMovieSelect}>Amazon</button>
          <button id="hbo" onClick={this.handleMovieSelect}>HBO Max</button>
          <button id="disney" onClick={this.handleMovieSelect}>Disney+</button>
        </div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    </div>
    )
  };
}

export default Auth;
