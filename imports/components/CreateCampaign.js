import React from 'react'
import styled from 'styled-components'

import button from './reusable/Button'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
`

const Root = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
  background-color: #FFF;
  height: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`
const Restaurant = styled.input`
  flex: 1;
  margin: 10px;
  background-color: #D8D8D8;
  height: 42px;
  border-radius: 5px;
  padding: 0px 10px;
  font-family: 'Futura';
  font-size: 14px;
  &::-webkit-input-placeholder {
    color: #888;
  }
`
const ClosesAt = styled.input`
  width: 150px;
  margin: 10px;
  background-color: #D8D8D8;
  height: 42px;
  border-radius: 5px;
  padding: 0px 10px;
  font-family: 'Futura';
  font-size: 14px;
  text-align: center;
  &::-webkit-input-placeholder {
    color: #888;
  }
`
const FlexContainer = styled.div`
  display: flex;

`
const CreateButton = styled(button)`
  background-color: #7D48C3;
  margin: 10px;
  width: 100%;
  flex: 1;
  &:hover::after {
    opacity: 0
  }
`
const NevermindButton = button.extend`
  background-color: #D03002;
  margin: 10px;
  width: 150px;
  &:hover::after {
    opacity: 0
  }
`
export default ({onCreate, onNevermind}) => (
  <Background>
    <Root>
      <FlexContainer>
        <Restaurant placeholder="Restaurant"/>
        <ClosesAt placeholder="Closes At"/>
      </FlexContainer>
      <FlexContainer>
        <CreateButton>Create Campaign</CreateButton>
        <NevermindButton>Nevermind</NevermindButton>
      </FlexContainer>
    </Root>
  </Background>
)
