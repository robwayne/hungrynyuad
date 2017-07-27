import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import classNames from 'classnames'
import ProgressBar from './ProgressBar.js'
import { Link } from 'react-router-dom'

export default ({campaign}) => (
  <Link to={'/campaigns/'+campaign._id.toString()}>
    <div className = {css(styles.root)}>
        <div className={css(styles.restaurant)}>{campaign.restaurant}</div>
        <div className={css(styles.host)}>{campaign.host + " | " + campaign.stars.toString() + " ★"}</div>
        <div className={css(styles.time)}>{moment(campaign.time).fromNow()}</div>
        <div className={css(styles.flexContainer)}>
          <div className={css(styles.progressWrapper)}>
            <ProgressBar progress={campaign.progress/campaign.total}/>
          </div>
          <div className={css(styles.dirhams)}>{campaign.progress+"/"+campaign.total+"AED"}</div>
        </div>
        <div className={classNames('separator',css(styles.separator))}/>
    </div>
  </Link>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    height: '85px',
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
  restaurant: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '20px',
    position: 'absolute',
    left: '10px',
    top: '8px'
  },
  host: {
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
  flexContainer: {
    position: 'relative',
    left: '0px',
    top: '58px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  progressWrapper: {
    width: '80px',
    flex: 1,
    paddingRight: '10px',
  },
  dirhams: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontSize: '14px',
    textAlign: 'right',
    minWidth: '90px',
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
  }
})
