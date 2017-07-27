import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({children}) => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.results)}>
        {React.Children.map(children, (child, i) => {
          return (<div className={css(styles.resultContainer, i % 2 === 0 ? styles.left : styles.right)}>{child}</div>)
        })}
      </div>
      <div className={css(styles.footer)}>
        {React.Children.count(children) === 0 ? "No matching orders":"No more active orders"}
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflowY: 'scroll',
    padding: '0px 45px',
    backgroundColor: '#FFF0',
    width: '100%',
  },
  results: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#FFF0',
    width: '100%',
  },
  resultContainer: {
    backgroundColor: '#FFF0',
    width: '50%',
    paddingBottom: '10px',
  },
  left: { paddingRight: '5px' },
  right: { paddingLeft: '5px' },
  footer: {
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '14px',
    color: '#FFF8',
    textAlign: 'center',
    padding: '10px 0px 20px 0px',
  }
})