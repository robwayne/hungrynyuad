import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Progress from './reusable/Progress.js'
import { theme, pseudoShadow, pseudoShadowOnHover } from '../styles'

export default ({campaign}) => (
  <Link to={'/campaigns/'+campaign._id.toString()}>
    <Root>
        <Restaurant>{campaign.restaurant.name}</Restaurant>
        <Host>{campaign.host.name + " | " + campaign.host.reputation.toString() + " ★"}</Host>
        <ClosesAt>{moment(campaign.closesAt).fromNow()}</ClosesAt>
        <Progress progress={campaign.amountRaised} total = {campaign.restaurant.minimumOrder} />
        <Separator className='separator'/>
    </Root>
  </Link>
)
const Root = styled.div`
  background-color: rgba(255,255,255,0);
  width: 100%;
  position: relative;
  border-radius: 5px;
  cursor: pointer; cursor: hand;
  padding: 8px 10px 0px 10px;
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
const Restaurant = styled.div`
  color: #FFF;
  font-family: 'Futura';
  font-weight: 700;
  font-size: 20px;
`
const Host = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size: 14px;
  margin-top: 4px;
`
const ClosesAt = styled.div`
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
