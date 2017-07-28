import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'

import { authHeader } from '../utils'
import Button from './reusable/Button.js'
import { loggedIn, setAccessToken, setIDToken, getAccessToken, getIDToken } from '../utils/AuthService.js';
import { Redirect } from 'react-router-dom'

import { setTokens } from '../actions/tokens'
import { setUserInformation } from '../actions/user'

const clientID = 'Nx4su9syS4W9yaOW2lOcFZeBh8nbxyx8'
const domain = 'jonahjoughin.auth0.com'

const Login = ({loggedIn, onAuth}) => {
  const lock = new Auth0Lock(clientID, domain, {})
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
    loggedIn
      ? (<Redirect to='/campaigns'/>)
      : (<div className={css(styles.root)}>
          <h1 className={css(styles.title)}>Hungry at NYUAD</h1>
          <Button name="Login" passedStyle={styles.Button} onClick={login}/>
          <Button name="Signup" passedStyle={styles.Button} onClick={signup}/>
        </div>)
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: (state.tokens.idToken !== '' && state.tokens.accessToken !== '')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAuth: (auth) => {
      dispatch(setTokens(auth.accessToken, auth.idToken))
      axios.get('https://jonahjoughin.auth0.com/userinfo', authHeader(auth.accessToken))
        .then((res) => {
          console.log(res)
          dispatch(setUserInformation(res.data.user_id, res.data.name, "email", 1))
        })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
    overflow: 'display',
    cursor: 'default',
  },
  title: {
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '36px',
    color: '#FFF',
    textAlign: 'center',
    margin: '20px 0px',
  },
  Button: {
    width: "500px",
    margin: "15px 0px",
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#FFF',
    ':hover': {
      backgroundColor: "#FFF",
      color: "#555"
    }
  }
})

const loginOptions =  {
  theme: {
    primaryColor: "#6E41BF",
  },
  languageDictionary: {
    title: "Hungry at NYUAD",
  },
  allowSignUp: false
}
const signupOptions =  {
  theme: {
    primaryColor: "#6E41BF",
  },
  languageDictionary: {
    title: "Hungry at NYUAD",
  },
  allowLogin: false
}
