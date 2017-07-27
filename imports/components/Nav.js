import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { NavLink } from 'react-router-dom'

export const Nav = ({children}) => (
  <div className={css(styles.nav)}>
    {children}
  </div>
)
export const NavItem =  ({ name, link, exact=false }) => (
  <div className={css(styles.navItemRoot)}>
    <NavLink
      className={css(styles.navLink)}
      to={link}
      exact={exact}
      activeStyle={{color: '#FFF'}}>
        {name}
    </NavLink>
  </div>
)
const styles = StyleSheet.create({
  nav: {
    margin: '0px 12px',
    backgroundColor: 'rgba(255,255,255,0.0)',
    height: '64px',
    width: '100vw',
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
    color: "#FFF8",
    textDecoration: 'none',
    padding: '0px 20px',
    fontSize: '20px',
    fontFamily: 'Futura',
    fontWeight: 400,
    borderRadius: '5px',
  }
})
