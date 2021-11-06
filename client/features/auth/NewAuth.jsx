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
import './NewAuth.css';

const NewAuth = ({ updateSession }) => (
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

export default NewAuth;
