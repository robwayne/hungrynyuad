import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, authorized=false, ...rest }) => (
  <Route {...rest} render={props => (
    authorized ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
