import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import styled from 'styled-components'

const TextArea = styled.textarea`
  resize: none;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.25);
  padding: 10px;
  color: #FFF;
  font-family: 'Futura';
  font-size: 14px;
  transition: box-shadow 0.2s ease-in-out;
  &:focus {
    box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
  }
  &::-webkit-input-placeholder {
    color: rgba(255,255,255,0.5)
  }
`
export default TextArea
