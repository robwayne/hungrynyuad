import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute.js'
import Campaigns from './components/Campaigns.js'
import Inbox from './components/Inbox.js'
import { Nav, NavItem } from './components/reusable/Nav.js'
import Login from './components/Login.js'
import AuthService from './utils/AuthService.js'

const auth = new AuthService('Nx4su9syS4W9yaOW2lOcFZeBh8nbxyx8', 'jonahjoughin.auth0.com');
const Profile = () => ( <h1>Profile</h1> )

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

export default () => (
  <div className={css(styles.appContainer)}>
    <Switch>
      <Route
        path = "/login"
        render={()=>(
          <Login auth={auth}/>
        )
        }/>
      <PrivateRoute path = "/" component={Private} authorized = {auth.loggedIn()}/>
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
