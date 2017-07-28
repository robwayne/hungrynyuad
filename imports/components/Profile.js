import React, { Component } from 'react'
import { getAccessToken } from '../utils/AuthService.js'
import { connect } from 'react-redux'

const Profile = ({_id, name, email, reputation}) => (
  <div>
    <div>{"Id: "+_id}</div>
    <div>{"Name: "+name}</div>
    <div>{"Email: "+email}</div>
    <div>{"Reputation: "+reputation}</div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    _id: state.user.basicInformation._id,
    name: state.user.basicInformation.name,
    email: state.user.basicInformation.email,
    reputation: state.user.basicInformation.reputation,
  }
}

export default connect(mapStateToProps)(Profile)
