import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default ({message}) => (
    <div className = {css(styles.root)}>
        <div className={css(styles.message)}>{message.text}</div>
        <div className={css(styles.restaurant)}>{message.restaurant}</div>
        <div className={css(styles.time)}>{moment(message.time).fromNow()}</div>
        <div className={classNames('separator',css(styles.separator))}/>
    </div>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    height: '64px',
    width: '100%',
    position: 'relative',
    borderRadius: '5px',
    cursor: ['pointer','hand'],
    padding: '0px 10px',
    backfaceVisibility: 'hidden',
    '::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      borderRadius: '5px',
      opacity: 0,
      transition: 'opacity 0.2s ease-in-out',
      boxShadow: '0px 0px 45px rgba(0,0,0,0.5)',
      backfaceVisibility: 'hidden',
    },
    ':hover::after': {
      opacity: 1,
    },
    ':hover > .separator': {
      opacity: 0,
    },
  },
  message: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '20px',
    position: 'absolute',
    left: '10px',
    top: '8px'
  },
  restaurant: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '14px',
    position: 'absolute',
    left: '10px',
    top: '36px',
  },
  time: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '14px',
    position: 'absolute',
    right: '10px',
    top: '8px',
  },
  separator: {
    height: '1px',
    position: 'absolute',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(255,255,255,0.25)',
    left: '10px',
    right: '10px',
    transition: 'opacity 0.2s ease-in-out',
  },
})
