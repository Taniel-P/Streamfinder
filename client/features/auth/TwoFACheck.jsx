import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './TwoFACheck.css';

class TwoFACheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      redirect: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit() {
    axios.post('/auth/twoFaCheck', {code: this.state.code, phoneNumber: this.props.location.state.phoneNumber})
      .then((res) => {
        console.log('2FACheck', res);
        if (res.data === 'approved') {
          this.props.updateSession(this.props.location.state.phoneNumber.username);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="twoFaCheckContainer">
        <div className="twoFaCheck-titleHeader">
          <h1>Stremfinder</h1>
        </div>
        <div className="twoFaCheckPage" onKeyPress={this.handleKeyPress}>
          <div className="mainTwoFaCheckPage">
            <h1 className="twoFaCheckHeader">Enter Code</h1>
            <div className="twoFaCheckCode">
              <input autoFocus id="code" onChange={this.handleChange} placeholder="Enter code"></input>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoFACheck;