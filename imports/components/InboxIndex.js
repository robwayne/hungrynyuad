import { StyleSheet, css } from 'aphrodite'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Search from './reusable/Search.js'
import SearchResults from './reusable/SearchResults.js'
import MessageResult from './MessageResult.js'
import ActionButton from './reusable/ActionButton.js'
import { addMessage } from '../actions/messages'
import { setInboxSearchStringFromEvent } from '../actions/ui'
import { randomMessage } from '../data'

const InboxIndex = ({messages, searchString, setSearchString, onActionButtonClick }) => (
  <div className={css(styles.root)}>
    <div className = {css(styles.mainContent)}>
      <Search onChange={setSearchString} value={searchString}/>
      <SearchResults emptyFooter="No inbox messages" normalFooter="End of inbox messages">
        {messages
          .map((m) => (
            <MessageResult key={m._id} message={m}/>
          ))
        }
      </SearchResults>
    </div>
    <ActionButton onClick={onActionButtonClick}/>
  </div>
)

const mapStateToProps = state => ({
  messages: state.messages
    .filter((m) => {
      const messageText = m.messageText.toLowerCase()
      const sender = m.sender.toLowerCase()
      const searchString = state.ui.inbox.searchString.toLowerCase()
      return (messageText.indexOf(searchString) !== -1 || sender.indexOf(searchString) !== -1)})
    .sort((m1,m2) => (m2.sentAt-m1.sentAt)),
  searchString: state.ui.inbox.searchString
})
const mapDispatchToProps = dispatch => ({
  setSearchString: event => (dispatch(setInboxSearchStringFromEvent(event))),
  onActionButtonClick: () => {
    dispatch(addMessage(randomMessage()))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InboxIndex)

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
