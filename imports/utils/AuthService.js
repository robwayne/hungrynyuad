import React from 'react'
import Auth0Lock from 'auth0-lock'

export const setToken = (token, value) => {
  localStorage.setItem(token, value)
}
export const setIDToken = (value) => ( setToken('id_token', value) )
export const setAccessToken = (value) => ( setToken('access_token', value) )

export const getToken = (token) => ( localStorage.getItem(token) )
export const getIDToken = () => ( getToken('id_token') )
export const getAccessToken = () => ( getToken("access_token"))
export const loggedIn = () => (
  !!getIDToken() && !!getAccessToken()
)

export const logout = () => {
  localStorage.removeItem('id_token')
  localStorage.removeItem('access_token')
}
