import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Login } from './Login';
import { Posts } from './Posts';
import { UserContext } from './UserContext';
import { Logout } from './Logout';
// import  Search  from './Search';

export const App = () => {
  const [error, setError] = useState('');
  const [jwt, setJWT] = useState(null);

  const clearError = () => setError('');

  const onAuthenticate = response => {
    setJWT(response.data.token);
  }

  const onError = () => {
    setError('Auth failed');
  }

  return (
    <UserContext.Provider value={jwt}>
      <BrowserRouter>
        {jwt && <Logout />}
        <nav className="navbar navbar-default">
         <h2>Stranger's Things</h2>
          <div>
            {/* <Search /> */}
            <Link to="/login" id='login'>Login/Register </Link>
            <Link to="/posts">Posting </Link>
          </div>
        </nav>
        <Switch>
          <Route
            path="/login"
            component={!jwt ? () => <Login clearError={clearError} onAuthenticate={onAuthenticate} 
            onError={onError} /> : () => <h1>You are logged in.</h1>} /> 
          <Route path="/posts" component={Posts} />
        </Switch> 
      </BrowserRouter>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </UserContext.Provider>  
  );
};