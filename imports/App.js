import React from 'react'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import styled from 'styled-components'

import PrivateRoute from './components/PrivateRoute.js'
import Login from './components/Login.js'
import Private from './components/Private.js'

const AppContainer = styled.div`
  background-image: linear-gradient(-226deg, #3023AE 0%, #A25BCD 100%);
  height: 100vh;
  width: 100vw;
  position: relative;
`

export default () => (
  <AppContainer>
    <Switch>
      <Route
        path = "/login"
        component={Login}/>
      <PrivateRoute path = "/" component={Private}/>
    </Switch>
  </AppContainer>
)
