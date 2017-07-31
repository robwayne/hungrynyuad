import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const ActionButton = ({onClick}) => (
  <div className={css(styles.ActionButton)} onClick={onClick}/>
)

const styles = StyleSheet.create({
  ActionButton: {
    width: '60px',
    height: '60px',
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundImage: 'url(/images/action_button.png)',
    backgroundSize: 'cover',
    //boxShadow: '0px 0px 45px rgba(0,0,0,0.5)',
    cursor: ['hand','pointer'],
    overflow: 'visible',
  }
})

export default ActionButton
