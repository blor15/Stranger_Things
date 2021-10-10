import React, { useCallback, useState } from 'react';
import { login } from '../api/login';
import { register } from '../api/register';

export const Login = (prop) => {
  const { clearError, onAuthenticate, onError } = prop;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInputChange = useCallback((event) => {
    clearError();
    setUsername(event.target.value);
  });

  const handlePasswordInputChange = useCallback((event) => {
    clearError();
    setPassword(event.target.value);
  });
    
  return (
    <section>
      <label htmlFor="UsernameInput">Username</label>
      <input id="UsernameInput" type="text" onChange={handleUsernameInputChange} />
      <label htmlFor="PasswordInput">Password</label>
      <input id="PasswordInput" type="password" onChange={handlePasswordInputChange} />
      <button onClick={() => login(onAuthenticate, onError, { username, password })} className="btn btn-primary btn-sm">Log in</button>
      <button onClick={() => register(onAuthenticate, onError, { username, password })} className="btn btn-info btn-sm">Register</button> 
    </section>
  )
};