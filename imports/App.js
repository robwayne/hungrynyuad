import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute.js'
import Campaigns from './components/Campaigns.js'
import Inbox from './components/Inbox.js'
import { Nav, NavItem } from './components/reusable/Nav.js'
import Login from './components/Login.js'
import Profile from './components/Profile.js'
import {loggedIn} from './utils/AuthService.js'



export default () => (
  <div className={css(styles.appContainer)}>
    <Switch>
      <Route
        path = "/login"
        component={Login}/>
      <PrivateRoute path = "/" component={Private}/>
    </Switch>
  </div>
)

const Private = () => (
  <div>
    <Nav>
      <NavItem name="Profile" link="/profile"/>
      <NavItem name="Campaigns" link="/campaigns"/>
      <NavItem name="Inbox" link="/inbox" notification={true}/>
    </Nav>
    <Switch>
      <Redirect exact from='/' to='/campaigns'/>
      <Route path="/campaigns" component={Campaigns}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/inbox" component={Inbox}/>
    </Switch>
  </div>
)



const styles = StyleSheet.create({
  appContainer: {
    backgroundImage: 'linear-gradient(-226deg, #3023AE 0%, #A25BCD 100%)',
    height: '100vh',
    width: '100vw',
    position: 'relative',
  }
})
