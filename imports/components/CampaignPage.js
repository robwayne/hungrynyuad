import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import classNames from 'classnames'
import ProgressBar from './reusable/ProgressBar.js'
import TextArea from './reusable/TextArea.js'
import Button from './reusable/Button.js'
import testRestaurants from '../data/testRestaurants.js'

export default ({campaign}) => {
  const imageURL = testRestaurants.find((r) => (r.name === (campaign.restaurant))).imageURL
  return (
  <div className = {css(styles.root)}>
    <div className = {css(styles.restaurantImage)}>
      <img src={imageURL} className = {css(styles.image)}/>
    </div>
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
    <Button name="Submit" passedStyle={styles.Button} onClick={()=>{alert("Clicked!")}}/>
  </div>
)}

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
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    cursor: 'default',
  },
  restaurantImage: {
    backgroundColor: '#FFF',
    height: '160px',
    width: '160px',
    borderRadius: '80px',
    margin: '20px 0px 10px 0px',
    flex: '0 0 auto',
    overflow: 'hidden',
    boxShadow: '0px 0px 45px rgba(0,0,0,0.5)',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  restaurant: {
    color: "#FFF",
    fontFamily: 'Futura',
    fontWeight: 700,
    fontSize: '36px',
    textAlign: 'center',
    margin: '0px 0px 5px 0px',
    flex: '0 0 auto',
  },
  host: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '14px',
    textAlign: 'center',
    margin: '0px 0px 25px 0px',
    flex: '0 0 auto',

  },
  time: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: 'Futura',
    fontSize: '20px',
    textAlign: 'center',
    margin: '0px 0px 25px 0px',
    flex: '0 0 auto',
  },
  flexContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0px 0px 5px 0px',
    flex: '0 0 auto',
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
    margin: '0px 0px 20px 0px',
    flex: '0 0 auto',
  },
  TextArea: {
    width: '100%',
    margin: '0px 0px 20px 0px',
    height: '160px',
    flex: '0 0 auto',
  },
  Button: {
    margin: '0px 0px 20px 0px',
    width: '100%',
    height: '42px',
    flex: '0 0 auto',
  },
  progressBar: {
    height: '10px',
    borderRadius: '5px',
    width: '100%',
  }
})
