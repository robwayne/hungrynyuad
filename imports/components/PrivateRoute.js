import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: (state.tokens.idToken !== '' && state.tokens.accessToken !== '')
  }
}

export default connect(mapStateToProps)(PrivateRoute)
