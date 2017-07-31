import { StyleSheet, css } from 'aphrodite'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import button from './reusable/Button.js'
import { theme } from '../styles'
import { authHeader, coalesce } from '../utils'
import { loggedIn, setAccessToken, setIDToken, getAccessToken, getIDToken } from '../utils/AuthService.js';
import { setTokens } from '../actions/tokens'


// Login Display Component
const Login = ({isAuthenticated, onAuth}) => {
  const lock = new Auth0Lock('Nx4su9syS4W9yaOW2lOcFZeBh8nbxyx8', 'jonahjoughin.auth0.com', {})
  lock.on('authenticated', onAuth)
  const authenticate = (options) => {
    lock.show(options)
  }
  const login = () => {
    authenticate(loginOptions)
  }
  const signup = () => {
    authenticate(signupOptions)
  }
  return (
    isAuthenticated
      ? (<Redirect to='/campaigns'/>)
      : (<div className={css(styles.root)}>
          <h1 className={css(styles.title)}>Hungry at NYUAD</h1>
          <Button onClick={login}>Log In</Button>
          <Button onClick={signup}>Sign Up</Button>
        </div>)
  )
}

// Links props from redux
const mapStateToProps = state => {
  return {
    isAuthenticated: (state.tokens.idToken !== '' && state.tokens.accessToken !== '')
  }
}

// Callback for retrieving and saving user data
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAuth: (auth) => {
      dispatch(setTokens(auth.accessToken, auth.idToken))
    }
  }
}

// Wrapped component
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const loginOptions =  {
  theme: { primaryColor: "#6E41BF" },
  languageDictionary: { title: "Hungry at NYUAD" },
  allowSignUp: false
}
const signupOptions =  {
  theme: { primaryColor: "#6E41BF" },
  languageDictionary: { title: "Hungry at NYUAD" },
  allowLogin: false
}
const Button = button.extend`
  width: 500px;
  margin: 15px 0px;
  background-color: rgba(255,255,255,0.25);
  color: #FFF;
  &:hover {
    background-color: #FFF;
    color: #555;
  }
`

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    padding: '0px 45px',
    width: '100%',
    maxWidth: '1000px',
    position: 'absolute',
    height: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeLarge,
    fontWeight: 700,
    color: '#FFF',
    textAlign: 'center',
    margin: '20px 0px',
  }
})
