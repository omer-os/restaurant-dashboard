import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default Routes;
