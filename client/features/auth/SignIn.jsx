import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Streamfinder from '../../app/Streamfinder';
import Auth from './Auth';
import axios from 'axios';
import './signIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      redirect: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit() {
    this.props.updateSession('fakehash');
    axios.post('/auth/login', this.state)
    .then((res) => {
      console.log('/login Res', res);
      if (!res.data) {
        alert('Incorrect password')
      } else {
        this.setState({
          redirect: '/account'
        })
      }

    })
    .catch((err) => {
      console.log('/login Err', err);
    })
  }

  render() {
    window.localStorage.removeItem('sessionToken');
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      // <Router>
      //   <Switch>
      //     <Route path="/signIn">
            <div className="signInPage" >
              <h1 className="signInHeader">Sign In</h1>
              <div className="signIn-username">
                <input type="text" id="username" placeholder="Username" onChange={this.handleChange}></input>
              </div>
              <div className="signIn-password">
                <input type="text" id="password" placeholder="Password" onChange={this.handleChange}></input>
              </div>
              <button onClick={this.handleSubmit}>Sign in</button>
              <div>
                {/* <Link to="/auth">New to Streamfinder? Sign up now!</Link> */}
              </div>
            </div>
      //     </Route>
      //     <Route path='/auth'>
      //       <Auth />
      //     </Route>
      //   </Switch>
      // </Router>
    )
  }
};

export default SignIn;