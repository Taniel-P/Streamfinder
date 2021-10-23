import React from 'react';
import './Auth.css';

const Auth = props => (
  <div id="Auth">
      <div className="auth-titleHeader">
      <h1>Streamfinder</h1>
    </div>
    <div className="mainCreateAccount" >
      <h1 className="createAccountHeader">Create Your Account</h1>
      <div className="auth-name">
      <input type="text" id="name" placeholder="Name"></input>
      </div>
      <div className="auth-userName">
        <input type="text" id="name" placeholder="Username"></input>
        </div>
      <div className="auth-email">
      <input type="text" id="email" placeholder="Email"></input>
      </div>
      <div className="auth-password">
      <input type="text" id="password" placeholder="Password"></input>
      </div>
      <div className="auth-subscriptionOptions">
        <label>Select Your Subscriptions</label>
        </div>
        <div className="auth-subscriptionIcons">
          <button>Netflix</button>
          <button>Amazon</button>
          <button>HBO Max</button>
          <button>Disney+</button>
        </div>
      <button>Submit</button>
    </div>
  </div>
);

export default Auth;
