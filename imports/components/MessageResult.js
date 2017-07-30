import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import moment from 'moment'

import { theme, pseudoShadow, pseudoShadowOnHover } from '../styles'

export default ({message}) => (
    <div className = {css(styles.root)}>
        <div className={css(styles.message)}>{message.messageText}</div>
        <div className={css(styles.restaurant)}>{message.sender}</div>
        <div className={css(styles.time)}>{moment(message.sentAt).fromNow()}</div>
        <div className={'separator '+css(styles.separator)}/>
    </div>
)

const styles = StyleSheet.create({
  root: {
    borderRadius: theme.primaryFontFace,
    position: 'relative',
    height: '64px',
    width: '100%',
    padding: '0px 10px',
    cursor: ['pointer','hand'],
    '::after': pseudoShadow,
    ':hover::after': pseudoShadowOnHover,
    ':hover > .separator': {
      opacity: 0,
    },
  },
  message: {
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeMedium,
    fontWeight: 700,
    color: "#FFF",
    position: 'absolute',
    maxWidth: '50%',
    left: '10px',
    top: '8px'
  },
  restaurant: {
    color: theme.lightTransparent,
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeSmall,
    position: 'absolute',
    left: '10px',
    top: '36px',
  },
  time: {
    color: theme.lightTransparent,
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeSmall,
    position: 'absolute',
    right: '10px',
    top: '8px',
  },
  separator: {
    backgroundColor: theme.mediumTransparent,
    transition: theme.opacityTransition,
    position: 'absolute',
    height: '1px',
    left: '10px',
    right: '10px',
    bottom: '0px',

  },
})
