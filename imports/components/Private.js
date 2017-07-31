import axios from 'axios'
import React from 'react'
import { dispatch, connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import Campaigns from './Campaigns.js'
import Inbox from './Inbox.js'
import { Nav, NavItem } from './reusable/Nav.js'
import Profile from './Profile.js'
import {loggedIn, getAccessToken } from '../utils/AuthService.js'
import { authHeader, coalesce } from '../utils'
import { setUserInformation } from '../actions/user'

class Private extends React.Component {
  componentWillMount() {
    this.props.onMount()
  }
  render() {
    return (
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
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => {
      axios.get('https://jonahjoughin.auth0.com/userinfo', authHeader(getAccessToken()))
        .then((res) => {
          console.log(res)
          dispatch(setUserInformation(res.data.user_id, res.data.name, "email",coalesce(res.data.picture_large,res.data.picture), 1))
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(Private)
