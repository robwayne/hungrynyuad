import { StyleSheet, css } from 'aphrodite'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import InboxIndex from './InboxIndex.js'

const Inbox = ({match}) => (
  <Switch>
    <Route
      exact path = {match.url}
      component = {InboxIndex}
    />
  </Switch>
)

export default Inbox
