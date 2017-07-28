import { StyleSheet, css } from 'aphrodite'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import CampaignsIndex from './CampaignsIndex.js'
import CampaignPage from './CampaignPage.js'

const Campaigns = ({match}) => (
      <Switch>
        <Route
          exact path = {match.url}
          component = {CampaignsIndex}
        />
        <Route
          path = {match.url+"/:id"}
          render={({match})=>(<CampaignPage
              _id={match.params.id}
            />)
        }/>
      </Switch>
)

export default Campaigns
