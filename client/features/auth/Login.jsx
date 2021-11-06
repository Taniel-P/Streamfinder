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
    // const { pathname } = this.props.location;
    // if (pathname && pathname === '/auth' || pathname === '/login' || pathname === '/createAccount') {
    //   this.setState({
    //     redirect: '/'
    //   });
    // }
    this.props.updateSession('fakehash');
    axios.post('/auth/login', this.state)
      .then((res) => {
        console.log('/login Res', res);
        if (!res.data) {
          alert('Incorrect password');
        } else {
        }

      })
      .catch((err) => {
        console.log('/login Err', err);
      });
  }

  render() {
    window.localStorage.removeItem('sessionToken');
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }

    return (
      // <Router>
      //   <Switch>
      //     <Route path="/signIn">
      <div className="loginPage" onKeyPress={ this.handleKeyPress }>
        <h1 className="loginHeader">Sign In</h1>
        <div className="login-username">
          <input autoFocus type="text" name="username" autocomplete="username" id="username" placeholder="Username" onChange={this.handleChange}></input>
        </div>
        <div className="login-password">
          <input type="password" name="password" autocomplete="current-password" id="password" placeholder="Password" onChange={this.handleChange}></input>
        </div>
        <button onClick={this.handleSubmit}>Sign in</button>
        <div>
          <Link to="/createAccount">New to Streamfinder? Sign up now!</Link>
        </div>
      </div>
      //     </Route>
      //     <Route path='/auth'>
      //       <Auth />
      //     </Route>
      //   </Switch>
      // </Router>
    );
  }
}

export default Login;