import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default ({progress, passedStyle}) => {
  const dynamicWidth = {
    width: (progress*100).toString()+"%"
  };
  return (
  <div className={css(styles.root, passedStyle)}>
    <div className={css(styles.progress)} style={dynamicWidth}/>
  </div> )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#11E910',
  }
})
