import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import classNames from 'classnames'
import ProgressBar from './ProgressBar.js'
import TextArea from './generic/TextArea.js'
import Button from './generic/Button.js'
import Abs from './generic/Absolute.js'

export default ({campaign}) => (
  <div className = {css(styles.root)}>
      <div className = {css(styles.restaurantImage)}/>
      <div className={css(styles.restaurant)}>{campaign.restaurant}</div>
      <div className={css(styles.host)}>{campaign.host + " | " + campaign.stars.toString() + " ★"}</div>
      <div className={css(styles.time)}>{"Order closes " + moment(campaign.time).fromNow()}</div>
      <div className={css(styles.flexContainer)}>
        <div className={css(styles.progressWrapper)}>
          <ProgressBar progress={campaign.progress/campaign.total}/>
        </div>
        <div className={css(styles.dirhams)}>{campaign.progress+"/"+campaign.total+"AED"}</div>
      </div>
      <div className={classNames('separator',css(styles.separator))}/>
      <Abs t="400px" l="0px" r="0px" h="160px">
        <TextArea placeholder="Add Order"/>
      </Abs>
      <Abs t="580px" l="0px" r='0px' h="42px">
        <Button name="Submit"/>
      </Abs>
  </div>
)

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1000px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '64px',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  restaurant: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '36px',
    position: 'absolute',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '200px',
  },
  restaurantImage: {
    backgroundColor: '#F00',
    height: '160px',
    width: '160px',
    borderRadius: '80px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '20px',
  },
  host: {
    color: "#FFF8",
    fontFamily: 'Futura',
    fontSize: '14px',
    position: 'absolute',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '250px',

  },
  time: {
    color: "#FFF8",
    fontFamily: 'Futura',
    fontSize: '20px',
    position: 'absolute',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '300px',
  },
  flexContainer: {
    position: 'relative',
    left: '0px',
    top: '350px',
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
    fontSize: '20px',
    textAlign: 'right',
    minWidth: '120px',
  },
  separator: {
    height: '1px',
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '380px',
    backgroundColor: '#FFF4',
    left: '0px',
    right: '0px',
  },
})
