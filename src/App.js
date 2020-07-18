import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
      </Switch>
    </Router>
  );
}

export default App;
