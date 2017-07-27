import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Button from './reusable/Button.js'
import AuthService from '../utils/AuthService.js';
import { Redirect } from 'react-router-dom'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
  }
  componentDidMount() {
    this.auth = this.props.auth
    this.setState({ loggedIn: this.auth.loggedIn() })
    // instance of Lock
    this.lock = this.auth.getLock();
    this.lock.on('authenticated', () => {
      this.setState({ loggedIn: this.auth.loggedIn() })
    });
  }
  login() {
    this.auth.login();
  }
  signup() {
    this.auth.signup();
  }
  render() {
    return (
      this.state.loggedIn ? (<Redirect to='/campaigns'/>) :
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
