import React from 'react'
import Auth0Lock from 'auth0-lock'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.clientId = clientId
    this.domain = domain

    this.lock = new Auth0Lock(clientId, domain, {})
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }


  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken)
    console.log("Logged in")
  }

  getLock() {
    // An instance of Lock
    return new Auth0Lock(this.clientId, this.domain);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show(loginOptions)
  }
  signup() {
    this.lock.show(signupOptions)
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }
}

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
