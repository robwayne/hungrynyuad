import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Progress from './reusable/Progress.js'
import textArea from './reusable/TextArea.js'
import button from './reusable/Button.js'

const CampaignPage = ({_id, campaign}) => (
  <Root>
    <ImageContainer>
      <Img src={campaign.restaurant.imageURL}/>
    </ImageContainer>
    <Restaurant>{campaign.restaurant.name}</Restaurant>
    <Host>{campaign.host.name + " | " + campaign.host.reputation.toString() + " ★"}</Host>
    <ClosesAt>{"Order closes " + moment(campaign.closesAt).fromNow()}</ClosesAt>
    <Progress progress={campaign.amountRaised} total = {campaign.restaurant.minimumOrder} />
    <Separator/>
    <TextArea onChange={()=>{alert("Changed")}} placeholder="Add Order"/>
    <Button name="Submit"onClick={()=>{alert("Clicked!")}}/>
  </Root>
)

const mapStateToProps = (state, ownProps) => ({
  campaign: state.campaigns.find((c) => (c._id === ownProps._id))
})

export default connect(mapStateToProps)(CampaignPage)

const Root  = styled.div`
  margin: 0 auto;
  padding: 0px 45px;
  width: 100%;
  max-width: 100%;
  position: absolute;
  top: 64px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  overflow: auto;

`
const ImageContainer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 160px;
  margin: 20px 0px 10px 0px;
  flex: 0 0 auto;
  overflow: hidden;
  box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
`
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const Restaurant = styled.div`
  color: #FFF;
  font-family: 'Futura';
  font-weight: 700;
  font-size:36px;
  text-align: center;
  margin: 0px 0px 5px 0px;
  flex: 0 0 auto;
`
const Host = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size:14px;
  text-align: center;
  margin: 0px 0px 25px 0px;
  flex: 0 0 auto;
`
const ClosesAt = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size: 20px;
  text-align: center;
  margin: 0px 0px 25px 0px;
  flex: 0 0 auto;
`
const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(255,255,255,0.25);
  margin-bottom: 20px;
  flex: 0 0 auto;
`
const TextArea = styled(textArea)`
  width: 100%;
  margin-bottom: 20px;
  height: 160px;
  flex: 0 0 auto;
  resize: none;
`
const Button = styled(button)`
  margin-bottom: 20px;
  width: 100%;
  height: 42px;
  flex: 0 0 autp;
`
