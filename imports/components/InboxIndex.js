import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

import Search from './reusable/Search.js'
import SearchResults from './reusable/SearchResults.js'
import MessageResult from './MessageResult.js'
import testMessages from '../data/testMessages.js'

export default ({ setFilter,filterMessages, filter }) => (
  <div className={css(styles.root)}>
    <Search onChange={setFilter} value={filter}/>
    <SearchResults emptyFooter="No inbox messages" normalFooter="End of inbox messages">
      {testMessages
        .filter((m) => (filterMessages(m)))
        .sort((m1,m2) => (m2.time-m1.time))
        .map((m) => (
          <MessageResult
            key={m._id}
            message={m}
          />
      ))}
    </SearchResults>
  </div>
)

const styles = StyleSheet.create({
  root: {
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
