import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './TwoFA.css';

class TwoFA extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      phoneNumber: null,
      data: null,
      username: null,
      redirect: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit() {
    console.log('clicked');
    axios.post('/auth/twoFa', this.state)
      .then((res) => {
        console.log('twoFA', res);
        this.setState({
          redirect: '/twoFaCheck',
          username: this.props.location.state.user,
          data: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {phoneNumber: this.state}
      }} />;
    }
    return (
      <div className="twoFaContainer">
        <div className="twoFa-titleHeader">
          <h1>Stremfinder</h1>
        </div>
        <div className="twoFaPage" onKeyPress={this.handleKeyPress}>
          <div className="mainTwoFaPage">
            <h1 className="twoFaHeader">Enter Phone Number</h1>
            <div className="twoFaPhone">
              <input autoFocus id="phoneNumber" onChange={this.handleChange} placeholder="Phone #"></input>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoFA;