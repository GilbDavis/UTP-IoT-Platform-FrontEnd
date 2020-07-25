import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tokenAuthentication from './config/authToken';

import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import DashboardContainer from './containers/dashboardContainer';
import PrivateRoute from './components/privateRoute/privateRoute'

import AuthState from './context/authentication/authState';
import AlertState from './context/alerts/alertState';

function App() {

  const token = localStorage.getItem("token");
  if (token) {
    tokenAuthentication(token);
  }

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <PrivateRoute path="/dashboard" component={DashboardContainer} />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
