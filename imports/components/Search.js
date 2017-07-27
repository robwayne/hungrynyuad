import React from 'react';
import { StyleSheet, css } from 'aphrodite'

export default ({onChange, value}) => (
  <div className={css(styles.root)}>
    <input className={css(styles.input)} type="text" name="search" placeholder="Search" onChange={onChange} value={value}/>
  </div>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    height: '36px',
    width: '100%',
    padding: '0px 45px'
  },
  input: {
    width: '100%',
    height: '36px',
    padding: '0px 10px',
    borderRadius: '5px',
    fontFamily: 'Futura',
    fontSize: '14px',
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#FFF',
    transition: 'box-shadow 0.1s ease-in-out',
    ':focus': {
      boxShadow: '0px 0px 45px #0008'
    },
    '::-webkit-input-placeholder': {
      color: '#FFF8'
    }
  }
})
