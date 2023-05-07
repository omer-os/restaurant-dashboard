import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';

const Routes = () => (
  <Router>
    <Switch>
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/signup" component={SignUp} />

      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default Routes;
