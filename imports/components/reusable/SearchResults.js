import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({children, emptyFooter, normalFooter}) => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.results)}>
        {React.Children.map(children, (child, i) => {
          return (<div className={css(styles.resultContainer, i % 2 === 0 ? styles.left : styles.right)}>{child}</div>)
        })}
      </div>
      <div className={css(styles.footer)}>
        {React.Children.count(children) === 0 ? emptyFooter:normalFooter}
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflowY: 'auto',
    padding: '0px 45px',
    width: '100%',
  },
  results: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
  resultContainer: {
    width: '50%',
    paddingBottom: '10px',
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  left: {
    paddingRight: '5px',
    '@media (max-width: 768px)': {
      paddingRight: '0px',
    }
  },
  right: {
    paddingLeft: '5px' ,
    '@media (max-width: 768px)': {
      paddingLeft: '0px',
    }
  },
  footer: {
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    padding: '10px 0px 20px 0px',
  }
})
