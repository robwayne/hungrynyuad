import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default ({onChange, placeholder, passedStyle}) => (
  <textarea
    className = {css(styles.textArea, passedStyle)}
    placeholder={placeholder}
    onChange={onChange}
  />
)

const styles = StyleSheet.create({
  textArea: {
    resize: 'none',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: '5px',
    padding: '10px',
    color: '#FFF',
    fontFamily: 'Futura',
    fontSize: '14px',
    transition: 'box-shadow 0.1s ease-in-out',
    ':focus': {
      boxShadow: '0px 0px 45px rgba(0,0,0,0.5)'
    },
    '::-webkit-input-placeholder': {
      color: 'rgba(255,255,255,0.5)'
    },
    '::-moz-placeholder': {
      color: 'rgba(255,255,255,0.5)'
    },
    ':-ms-input-placeholder': {
      color: 'rgba(255,255,255,0.5)'
    },
  }
})
