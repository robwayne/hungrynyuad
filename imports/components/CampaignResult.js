import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

import ProgressBar from './reusable/ProgressBar.js'
import { theme, pseudoShadow, pseudoShadowOnHover } from '../styles'

export default ({campaign}) => (
  <Link to={'/campaigns/'+campaign._id.toString()}>
    <div className = {css(styles.root)}>
        <div className={css(styles.restaurant)}>{campaign.restaurant.name}</div>
        <div className={css(styles.host)}>{campaign.host.name + " | " + campaign.host.reputation.toString() + " ★"}</div>
        <div className={css(styles.time)}>{moment(campaign.closesAt).fromNow()}</div>
        <div className={css(styles.flexContainer)}>
          <div className={css(styles.progressWrapper)}>
            <ProgressBar progress={campaign.amountRaised/campaign.restaurant.minimumOrder} passedStyle={styles.progressBar}/>
          </div>
          <div className={css(styles.dirhams)}>{campaign.amountRaised+"/"+campaign.restaurant.minimumOrder+"AED"}</div>
        </div>
        <div className={['separator',css(styles.separator)].join(' ')}/>
    </div>
  </Link>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    width: '100%',
    position: 'relative',
    borderRadius: theme.borderRadius,
    cursor: ['pointer','hand'],
    padding: '0px 10px',
    '::after': pseudoShadow,
    ':hover::after': pseudoShadowOnHover,
    ':hover > .separator': {
      opacity: 0,
    },
  },
  restaurant: {
    color: "#FFF",
    fontFamily: theme.primaryFontFace,
    fontWeight: 700,
    fontSize: theme.fontSizeMedium,
    position: 'relative',
    maxWidth: '25%',
    padding: '8px 0px 0px 0px',
  },
  host: {
    color: theme.lightTransparent,
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeSmall,
    position: 'relative',
    padding: '4px 0px 0px 0px',
  },
  time: {
    color: theme.lightTransparent,
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeSmall,
    position: 'absolute',
    right: '10px',
    top: '8px',
  },
  flexContainer: {
    position: 'relative',
    top: '3px',
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
    fontFamily: theme.primaryFontFace,
    fontSize: theme.fontSizeSmall,
    textAlign: 'right',
    minWidth: '90px',
  },
  separator: {
    backgroundColor: theme.mediumTransparent,
    transition: theme.opacityTransition,
    position: 'relative',
    top: '5px',
    height: '1px'
  },
  progressBar: {
    height: '6px',
    borderRadius: '3px',
    width: '100%',
  }
})
