import React from 'react';
import styled from 'styled-components'

export default ({onChange, value}) => (
  <Root>
    <Input type="text" name="search" placeholder="Search" onChange={onChange} value={value}/>
  </Root>
)

const Root = styled.div`
  height: 36px;
  width: 100%;
  padding: 0px 45px;
`
const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0px 10px;
  border-radius: 5px;
  font-family: 'Futura';
  background-color: rgba(255,255,255,0.25);
  color: white;
  transition: box-shadow 0.2s ease-in-out;
  backface-visibility: hidden;
  &:focus {
    box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
  }
  &::-webkit-input-placeholder {
    color: rgba(255,255,255,0.5);
  }
`
