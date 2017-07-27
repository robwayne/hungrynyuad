import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { NavLink } from 'react-router-dom'

export const Nav = ({children}) => (
  <div className={css(styles.nav)}>
    {children}
  </div>
)
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
  nav: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    height: '64px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      justifyContent: 'space-evenly',
    }
  },
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
