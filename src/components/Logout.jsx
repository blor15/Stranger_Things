import React from 'react'
import { Login  } from '../components/Login'

export function Logout(props) {
  const loggedIn = props.loggedIn
  if (loggedIn) {
    return <Login />;
  }
  return <button onClick={Logout}>Log out</button>;
}

