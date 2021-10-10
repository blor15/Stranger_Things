import React, { useState } from 'react';

import { Login } from './Login';
import { Posts } from './Posts';
import { UserContext } from './UserContext';

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
      <section>
        {!jwt ? <Login clearError={clearError} onAuthenticate={onAuthenticate} onError={onError} /> : <h1>You are logged in.</h1>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Posts />
      </section>
    </UserContext.Provider>
  );
};