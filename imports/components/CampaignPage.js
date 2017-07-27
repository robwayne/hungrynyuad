import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import classNames from 'classnames'
import ProgressBar from './reusable/ProgressBar.js'
import TextArea from './reusable/TextArea.js'
import Button from './reusable/Button.js'

export default ({campaign}) => (
  <div className = {css(styles.root)}>
    <div className = {css(styles.restaurantImage)}/>
    <div className={css(styles.restaurant)}>{campaign.restaurant}</div>
    <div className={css(styles.host)}>{campaign.host + " | " + campaign.stars.toString() + " ★"}</div>
    <div className={css(styles.time)}>{"Order closes " + moment(campaign.time).fromNow()}</div>
    <div className={css(styles.flexContainer)}>
      <div className={css(styles.progressWrapper)}>
        <ProgressBar progress={campaign.progress/campaign.total} passedStyle={styles.progressBar}/>
      </div>
      <div className={css(styles.dirhams)}>{campaign.progress+"/"+campaign.total+"AED"}</div>
    </div>
    <div className={classNames('separator',css(styles.separator))}/>
    <TextArea placeholder="Add Order" passedStyle={styles.TextArea}/>
    <Button name="Submit" passedStyle={styles.Button}/>
  </div>
)

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    padding: '0px 45px',
    width: '100%',
    maxWidth: '1000px',
    position: 'absolute',
    top: '64px',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
  },
  restaurantImage: {
    backgroundColor: '#F00',
    height: '160px',
    width: '160px',
    borderRadius: '80px',
    margin: '20px 0px 10px 0px',
  },
  restaurant: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '36px',
    textAlign: 'center',
    margin: '0px 0px 5px 0px',
  },
  host: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '14px',
    textAlign: 'center',
    margin: '0px 0px 25px 0px',

  },
  time: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '20px',
    textAlign: 'center',
    margin: '0px 0px 25px 0px',
  },
  flexContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0px 0px 5px 0px',
  },
  progressWrapper: {
    width: '80px',
    flex: 1,
    paddingRight: '10px',
  },
  dirhams: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontSize: '20px',
    textAlign: 'right',
    minWidth: '120px',
  },
  separator: {
    height: '1px',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.25)',
    margin: '0px 0px 20px 0px'
  },
  TextArea: {
    width: '100%',
    margin: '0px 0px 20px 0px',
    height: '160px',
  },
  Button: {
    margin: '0px 0px 20px 0px',
    width: '100%',
    height: '42px',
  },
  progressBar: {
    height: '10px',
    borderRadius: '5px',
    width: '100%',
  }
})
