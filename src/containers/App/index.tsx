import React from 'react';
import { Router } from '@reach/router';

import LoginPage from '../../views/Login';
import Dashboard from '../../views/Dashboard';

const AppContainer = () => {
  return (
    <Router>
      <Dashboard path="/" />
      <LoginPage path="/login" />
    </Router>
  );
};

export default AppContainer;
