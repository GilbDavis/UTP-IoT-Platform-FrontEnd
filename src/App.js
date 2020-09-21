import React, { useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import tokenAuthentication from './config/authToken';
import ReactGa from 'react-ga';

import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import DashboardContainer from './containers/dashboardContainer';
import PrivateRoute from './components/privateRoute/privateRoute'
import LandingPage from './containers/landingPage';

import AuthState from './context/authentication/authState';
import AlertState from './context/alerts/alertState';

function App() {

  const token = localStorage.getItem("token");
  if (token) {
    tokenAuthentication(token);
  }

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]);

  return (
    <AuthState>
      <AlertState>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <PrivateRoute path="/dashboard" component={DashboardContainer} />
        </Switch>
      </AlertState>
    </AuthState>
  );
}

export default withRouter(App);
