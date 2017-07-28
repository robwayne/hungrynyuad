import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch } from 'react-router-dom'

import CampaignResult from './CampaignResult.js'
import CampaignsIndex from './CampaignsIndex.js'
import CampaignPage from './CampaignPage.js'

import testCampaigns from '../data/testCampaigns.js'

class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.setFilter = this.setFilter.bind(this)
    this.filterCampaigns = this.filterCampaigns.bind(this)
    this.state = {
      filter: ""
    }
  }
  setFilter(event) {
    this.setState({filter: event.target.value});
  }
  filterCampaigns(campaign) {
    const restaurantName=campaign.restaurant.name.toLowerCase()
    const hostName = campaign.host.name.toLowerCase()
    const match = this.state.filter.toLowerCase()
    return (restaurantName.indexOf(match) !== -1 || hostName.indexOf(match) !== -1);
  }
  render() {
    return (
      <Switch>
      <Route
        exact path = {this.props.match.url}
        render={()=>(
          <CampaignsIndex
            setFilter = {this.setFilter}
            filterCampaigns = {this.filterCampaigns}
            filter = {this.state.filter}
          />)
        }
      />
      <Route
        path = {this.props.match.url+"/:id"}
        render={({match})=>(<CampaignPage
            _id={match.params.id}
          />)
        }/>
      </Switch>
    )
  }
}

export default Campaigns
