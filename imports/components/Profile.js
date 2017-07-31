import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import button from './reusable/Button.js'
import { setTokens } from '../actions/tokens'

// Profile Display Component
const Profile = ({basicInformation, logout}) => (
  <Root>
    <ImageContainer>
      <Img src={basicInformation.imageURL} />
    </ImageContainer>
    <Name>{basicInformation.name}</Name>
    <Reputation>{basicInformation.reputation+" ★"}</Reputation>
    <Button onClick={logout}>Logout</Button>
  </Root>
)

const mapStateToProps = (state, ownProps) => {
  return {
    basicInformation: state.user.basicInformation
  }
}
const mapDispatchToProps = dispatch => ({
  logout: event => {
    console.log("Logging out")
    dispatch(setTokens('',''))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const Root = styled.div`
  margin: 0 auto;
  padding: 0px 45px;
  width: 100%;
  max-width: 1000px;
  position: absolute;
  top: 64px;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`

const ImageContainer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 160px;
  margin: 0px 0px 10px 0px;
  flex: 0 0 auto;
  overflow: hidden;
  box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
`
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const Name = styled.div`
  color: #FFF;
  font-family: 'Futura';
  font-weight: 700;
  font-size:20px;
  text-align: center;
  margin: 10px 0px 5px 0px;
  flex: 0 0 auto;
`
const Reputation = styled.div`
  color: rgba(255,255,255,0.5);
  font-family: 'Futura';
  font-size:14px;
  text-align: center;
  margin: 0px 0px 25px 0px;
  flex: 0 0 auto;
`

const Button = button.extend`
  width: 50%;
  background-color: rgba(255,255,255,0.25);
  color: #FFF;
  &:hover {
    background-color: #FFF;
    color: #555;
  }
`
