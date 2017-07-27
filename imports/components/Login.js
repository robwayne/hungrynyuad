import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Button from './reusable/Button.js'
import { loggedIn, setAccessToken, setIDToken, getAccessToken, getIDToken } from '../utils/AuthService.js';
import { Redirect } from 'react-router-dom'
import Auth0Lock from 'auth0-lock'

const clientID = 'Nx4su9syS4W9yaOW2lOcFZeBh8nbxyx8'
const domain = 'jonahjoughin.auth0.com'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: loggedIn() }
  }
  componentDidMount() {
    this.lock = new Auth0Lock(clientID, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
  }
  _doAuthentication(authResult){
    setAccessToken(authResult.accessToken)
    setIDToken(authResult.idToken)
    console.log("Tokens: ",getAccessToken(), getIDToken())
    this.setState({ loggedIn: loggedIn() })
  }
  login() {
    this.lock.show(loginOptions)
  }
  signup() {
    this.lock.show(signupOptions)
  }
  render() {
    return (
      loggedIn() ? (<Redirect to='/campaigns'/>) :
      (<div className={css(styles.root)}>
        <h1 className={css(styles.title)}>Hungry at NYUAD</h1>
        <Button name="Login" passedStyle={styles.Button} onClick={this.login.bind(this)}/>
        <Button name="Signup" passedStyle={styles.Button} onClick={this.signup.bind(this)}/>
      </div>)
    )
  }
}

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
