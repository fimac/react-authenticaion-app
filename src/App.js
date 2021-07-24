import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './useToken';

const App = () => {
  const { token, setToken } = useToken();

  // Non null token check - !! - used only for initial setup to learn.
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className='wrapper'>
      <h1>Auth Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
