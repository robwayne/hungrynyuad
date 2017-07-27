import React, { Component } from 'react'
import axios from 'axios'
import { getAccessToken } from '../utils/AuthService.js'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
  }

  componentDidMount() {
    axios.get('https://jonahjoughin.auth0.com/userinfo', {'headers': { 'Authorization': "Bearer "+getAccessToken()}})
    .then(res => {
      this.setState({"email":res.data.email})
      console.log("Res",res)
    });
  }
  render() {
    return <div>{"Email: "+this.state.email}</div>
  }
}

export default Profile
