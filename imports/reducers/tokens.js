import { coalesce } from '../utils'

const defaultState = {
  accessToken: '',
  idToken: '',
}

const tokens = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOKENS':
      return {
        accessToken: coalesce(action.accessToken, state.accessToken).
        idToken: coalesce(action.idToken, state.idToken),
      }
    case 'DELETE_TOKENS':
      return {
        accessToken: ''.
        idToken: '',
      }
    default:
      return state
  }
}

export default tokens
