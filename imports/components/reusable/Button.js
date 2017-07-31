import React from 'react'
import styled from 'styled-components'

export default styled.div`
  background-color: #FFF;
  border-radius: 5px;
  width: 100%;
  height: 42px;
  font-family: 'Futura';
  font-size: 14px;
  color: #FFF;
  text-align: center;
  line-height: 42px;
  position: relative;
  cursor: pointer; cursor: hand;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
  }
  &:hover::after {
    opacity: 1;
  }
`
