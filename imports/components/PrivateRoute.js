import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// Private Route Display Component
// Redirects to login if not authorized
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname: '/login', state: { from: props.location }}}/>
    )
  )}/>
)

//Links props from redux
const mapStateToProps = state => {
  return {
    isAuthenticated: (state.tokens.idToken !== '' && state.tokens.accessToken !== '')
  }
}

// Wrapped component
export default connect(mapStateToProps)(PrivateRoute)
