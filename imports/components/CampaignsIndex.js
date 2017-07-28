import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'

import Search from './reusable/Search.js'
import SearchResults from './reusable/SearchResults.js'
import CampaignResult from './CampaignResult.js'
import { randomCampaign } from '../data'
import ActionButton from './reusable/ActionButton.js'
import { addActiveCampaign } from '../actions/activeCampaigns'
const CampaignsIndex = ({campaigns,setFilter,filterCampaigns, filter }) => (
  <div className={css(styles.root)}>
    <div className={css(styles.mainContent)}>
      <Search onChange={setFilter} value={filter}/>
      <SearchResults emptyFooter="No matching campaigns" normalFooter="No more active campaigns">
        {campaigns
      .   filter((c) => (filterCampaigns(c)))
          .sort((c1,c2) => (c1.closesAt-c2.closesAt))
          .map((c) => (
            <CampaignResult
              key={c._id}
              campaign={c}
            />
        ))}
      </SearchResults>
    </div>
    <AddActiveCampaignButton />
  </div>
)
const mapStateToProps = (state, ownProps) => {
  return {
    campaigns: state.activeCampaigns
  }
}

export default connect(mapStateToProps)(CampaignsIndex)

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addActiveCampaign(randomCampaign()))
    }
  }
}

const AddActiveCampaignButton = connect(null, mapDispatchToProps)(ActionButton)

const styles = StyleSheet.create({
  root: {
    overflow: 'visible',
  },
  mainContent: {
    position: 'absolute',
    margin: '0 auto',
    width: '100%',
    maxWidth: '1000px',
    top: '64px',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
  }
})
