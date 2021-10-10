import React from 'react'
import Login from '../components/Login'

if (isLoggedIn) {
    return <Login />
  }
  
  return <button onClick={logout}>Log out</button>