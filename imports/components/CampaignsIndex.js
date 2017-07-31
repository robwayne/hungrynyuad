import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import Search from './reusable/Search.js'
import SearchResults from './reusable/SearchResults.js'
import CampaignResult from './CampaignResult.js'
import ActionButton from './reusable/ActionButton.js'
import CreateCampaign from './CreateCampaign.js'
import { addCampaign } from '../actions/campaigns'
import { setCampaignsSearchStringFromEvent } from '../actions/ui'
import { randomCampaign } from '../data'

const CampaignsIndex = ({campaigns, searchString, setSearchString, onActionButtonClick}) => (
  <Root>
    <Content>
      <Search onChange={setSearchString} value={searchString}/>
      <SearchResults emptyFooter="No matching campaigns" normalFooter="No more active campaigns">
        { campaigns
            .map((c) => (
              <CampaignResult key={c._id} campaign={c}/>
            ))
        }
      </SearchResults>
    </Content>
    <ActionButton onClick={onActionButtonClick}/>
    <CreateCampaign />
  </Root>
)

const mapStateToProps = state => ({
  campaigns: state.campaigns
    .filter((c) => {
      const restaurantName = c.restaurant.name.toLowerCase()
      const hostName = c.host.name.toLowerCase()
      const searchString = state.ui.campaigns.searchString.toLowerCase()
      return (restaurantName.indexOf(searchString) !== -1 || hostName.indexOf(searchString) !== -1)})
    .sort((c1,c2) => (c1.closesAt-c2.closesAt)),
  searchString: state.ui.campaigns.searchString
})
const mapDispatchToProps = dispatch => ({
  setSearchString: (event) => ( dispatch(setCampaignsSearchStringFromEvent(event))),
  onActionButtonClick: () => {
    dispatch(addCampaign(randomCampaign()))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsIndex)

const Root = styled.div`
  overflow: visible;
`
const Content = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  top: 64px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`
