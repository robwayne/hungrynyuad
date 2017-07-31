import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { theme, pseudoShadow, pseudoShadowOnHover } from '../styles'

export default ({message}) => (
    <Root>
        <Message>{message.messageText}</Message>
        <Sender>{message.sender}</Sender>
        <SentAt>{moment(message.sentAt).fromNow()}</SentAt>
        <Separator className='separator '/>
    </Root>
)
const Root = styled.div`
  border-radius: 5px;
  position: relative;
  width: 100%;
  padding: 8px 10px 0px 10px;
  cursor: pointer; cursor: hand;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
    backface-visibility: hidden;
  }
  &:hover::after {
    opacity: 1;
  }
  &:hover > .separator {
    opacity: 0;
  }
`
const Message = styled.div`
  font-family: 'Futura';
  font-size: 20px;
  font-weight: 700;
  color: #FFF;
  max-width: 50%;
`
const Sender = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size: 14px;
  margin-top: 4px;
`
const SentAt = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size: 14px;
  position: absolute;
  right: 10px;
  top: 8px;
`
const Separator = styled.div`
  background-color: rgba(255,255,255,0.25);
  transition: opacity 0.2s ease-in-out;
  margin-top: 5px;
  height: 1px;
`
