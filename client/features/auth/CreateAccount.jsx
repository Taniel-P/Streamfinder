import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from '../home/Home';
import axios from 'axios';
import './CreateAccount.css';

class CreateAccount extends React.Component {
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleMovieSelect(e) {
    let stateCopy = this.state.platforms;
    for (let i = 0; i < stateCopy.length; i++) {
      if (stateCopy[i].id === e.target.id) {
        stateCopy[i].isSelected = !stateCopy[i].isSelected;
      }
    }
    this.setState({
      platforms: stateCopy
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log('Clicked');
    axios.post('/auth/user', this.state)
      .then((res) => {
        console.log('/auth Res', res);
        if (res.status === 201) {
          alert('Complete filling information');
        }
        if (res.status === 200) {
          //Redirect to Signin page
          this.setState({ redirect: '/login' })
        }
      })
      .catch((err) => {
        console.log('/user Err', err);
        if (err) {
          console.log('ERROR', err);
          alert('Username or email is not available');
        }
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div id="CreateAccount" onKeyPress={ this.handleKeyPress }>
        <div className="ca-titleHeader">
          <h1>Streamfinder</h1>
        </div>
        <div className="mainCreateAccount" >
          <h1 className="createAccountHeader">Create Your Account</h1>
          <div className='ca-login-link'>
            <Link to="/login">Already have an account? Sign in here!</Link>
          </div>
          <div className="ca-name">
            <input autoFocus type="text" name="fname" id="name" placeholder="Name" onChange={this.handleChange}></input>
          </div>
          <div className="ca-username">
            <input type="text" name="username" autocomplete="username" id="username" placeholder="Username" onChange={this.handleChange}></input>
          </div>
          <div className="ca-email">
            <input type="text" name="email" autocomplete="email" id="email" placeholder="Email" onChange={this.handleChange}></input>
          </div>
          <div className="ca-password">
            <input type="password" name="password" autocomplete="new-password" id="password" placeholder="Password" onChange={this.handleChange}></input>
          </div>
          <div className="ca-subscriptionOptions">
            <label>Select Your Subscriptions</label>
          </div>
          <div className="ca-subscriptionIcons">
            {this.state.platforms.map((platform, i) =>
              <button id={platform.id} key={i} onClick={this.handleMovieSelect}>{platform.name}</button>
            )}
          </div>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
