import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default ({progress}) => {
  const dynamicWidth = {
    width: (progress*100).toString()+"%"
  };
  return (
  <div className={css(styles.root)}>
    <div className={css(styles.progress)} style={dynamicWidth}/>
  </div> )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    height: '6px',
    borderRadius: '3px',
    width: '100%',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#11E910',
  }
})
