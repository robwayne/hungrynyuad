import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Search from './reusable/Search.js'
import SearchResults from './reusable/SearchResults.js'
import MessageResult from './MessageResult.js'
import ActionButton from './reusable/ActionButton.js'
import { addMessage } from '../actions/messages'
import { setInboxSearchStringFromEvent } from '../actions/ui'
import { randomMessage } from '../data'

const InboxIndex = ({messages, searchString, setSearchString, onActionButtonClick }) => (
  <Root>
    <Content>
      <Search onChange={setSearchString} value={searchString}/>
      <SearchResults emptyFooter="No inbox messages" normalFooter="End of inbox messages">
        {messages
          .map((m) => (
            <MessageResult key={m._id} message={m}/>
          ))
        }
      </SearchResults>
    </Content>
    <ActionButton onClick={onActionButtonClick}/>
  </Root>
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
