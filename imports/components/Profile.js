import React from 'react'
import { connect } from 'react-redux'

import { getAccessToken } from '../utils/AuthService.js'

// Profile Display Component
const Profile = ({_id, name, email, reputation}) => (
  <div>
    <div>{"Id: "+_id}</div>
    <div>{"Name: "+name}</div>
    <div>{"Email: "+email}</div>
    <div>{"Reputation: "+reputation}</div>
  </div>
)

// Links props from redux
const mapStateToProps = (state, ownProps) => {
  return {
    _id: state.user.basicInformation._id,
    name: state.user.basicInformation.name,
    email: state.user.basicInformation.email,
    reputation: state.user.basicInformation.reputation,
  }
}

// Wrapped component
export default connect(mapStateToProps)(Profile)
