import { combineReducers } from 'redux'
import tokens from './tokens'
import user from './user'

const rootReducer = combineReducers({
  tokens,
  user
})

export default rootReducer
