import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Streamfinder from '../../app/Streamfinder';
import CreateAccount from './CreateAccount';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      redirect: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    // this.props.updateSession(this.state.username);

    axios.post('/auth/login', this.state)
      .then((res) => {
        console.log('/login Res', res);
        if (!res.data) {
          alert('Incorrect password');
        } else {
          this.setState({
            redirect: '/twoFa'
          });
          // this.props.updateSession(this.state.username);
        }
      })
      .catch((err) => {
        console.log('/login', err);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {user: this.state.username}
      }} />;
    }

    return (
      // <Router>
      //   <Switch>
      //     <Route path="/signIn">
      <div className="loginContainer">
        <div className="login-titleHeader">
          <h1>Streamfinder</h1>
        </div>
        <div className="loginPage" onKeyPress={this.handleKeyPress}>
          <div className="mainLoginPage">
            <h1 className="loginHeader">Sign In</h1>
            <div className="login-username">
              <input autoFocus type="text" name="username" autoComplete="username" id="username" placeholder="Username" onChange={this.handleChange}></input>
            </div>
            <div className="login-password">
              <input type="password" name="password" autoComplete="current-password" id="password" placeholder="Password" onChange={this.handleChange}></input>
            </div>
            <button onClick={this.handleSubmit}>Sign in</button>
            <div>
              <Link style={{ color: 'cornflowerblue' }} to="/createAccount">New to Streamfinder? Sign up now!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;