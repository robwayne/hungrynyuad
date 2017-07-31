import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { NavLink } from 'react-router-dom'
import { setTokens } from '../../actions/tokens.js'
import styled from 'styled-components'

export const Nav = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media(min-width: 768px) {
    justify-content: flex-start;
  }
`

export const NavItem =  ({ name, link, exact=false, notification=false }) => (
  <div className={css(styles.navItemRoot)}>
    <NavLink
      className={css(styles.navLink, notification && styles.withNotification)}
      to={link}
      exact={exact}
      activeStyle={{color: '#FFF'}}>
        {name}
        {notification && <div className={css(styles.notificationIndicator)}/>}

    </NavLink>
  </div>
)
const styles = StyleSheet.create({
  navItemRoot: {
    display: 'inline-block',
    height: '64px',
  },
  navLink: {
    display: 'block',
    margin: '12px 2px',
    height: '40px',
    lineHeight: '40px',
    color: "rgba(255,255,255,0.5)",
    textDecoration: 'none',
    padding: '0px 20px',
    position: 'relative',
    fontSize: '20px',
    fontFamily: 'Futura',
    fontWeight: 400,
    borderRadius: '5px',
  },
  withNotification: {
    paddingRight: '40px',
  },
  notificationIndicator: {
    display: 'inline-block',
    height: '10px',
    width: '10px',
    borderRadius: '5px',
    backgroundColor: '#11E910',
    position: 'absolute',
    right: '20px',
    top: '15px',
  }
})
