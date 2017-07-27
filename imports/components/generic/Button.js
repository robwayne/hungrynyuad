import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default ({name, onClick, w='100%',h='42px'}) => (
  <div
    onClick={onClick}
    className={css(styles.button)}
    style={{width: w, height: h}}
  >
    {name}
  </div>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFF",
    borderRadius: "5px",
    width: '100%',
    height: '42px',
    fontFamily: 'Futura',
    fontSize: '14px',
    color: "#555",
    textAlign: 'center',
    lineHeight: '42px',
    cursor: ['pointer','hand'],
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
    },
    ':hover::after': {
      opacity: 1,
    }
  }
})
