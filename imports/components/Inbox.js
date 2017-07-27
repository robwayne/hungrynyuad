import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch } from 'react-router-dom'

import InboxIndex from './InboxIndex.js'
import testCampaigns from '../data/testCampaigns.js'

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.setFilter = this.setFilter.bind(this)
    this.filterMessages = this.filterMessages.bind(this)
    this.state = {
      filter: ""
    }
  }
  setFilter(event) {
    this.setState({filter: event.target.value});
  }
  filterMessages(message) {

    const text = message.text.toLowerCase()
    const restaurant = message.restaurant.toLowerCase()
    const match = this.state.filter.toLowerCase()
    return (text.indexOf(match) !== -1 || restaurant.indexOf(match) !== -1);

    return ("".indexOf(" ") !== -1);
  }
  render() {
    return (
      <Switch>
      <Route
        exact path = {this.props.match.url}
        render={()=>(
          <InboxIndex
            setFilter = {this.setFilter}
            filterMessages = {this.filterMessages}
            filter = {this.state.filter}
          />)
        }
      />
      </Switch>
    )
  }
}

export default Inbox
