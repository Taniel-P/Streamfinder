import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from './Login';
import CreateAccount from './CreateAccount';
import './Auth.css';

const Auth = ({ updateSession }) => (
  <Router>
    <Switch>
      <Route path="/createAccount">
        <CreateAccount updateSession={ updateSession } />
      </Route>
      <Route path="/*">
        <Login updateSession={ updateSession } />
      </Route>
    </Switch>
  </Router>
);

export default Auth;
