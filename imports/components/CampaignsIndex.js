import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

import Search from './Search.js'
import SearchResults from './SearchResults.js'
import CampaignResult from './CampaignResult.js'
import testCampaigns from '../data/testCampaigns.js'

export default ({ setFilter,filterCampaigns, filter }) => (
  <div className={css(styles.root)}>
    <Search onChange={setFilter} value={filter}/>
    <SearchResults>
      {testCampaigns
        .slice(10)
        .filter((c) => (filterCampaigns(c)))
        .sort((c1,c2) => (c1.time-c2.time))
        .map((c) => (
          <CampaignResult
            key={c._id}
            campaign={c}
          />
      ))}
    </SearchResults>
  </div>
)

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1000px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '64px',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
  }
})