import { combineReducers } from 'redux'
import tokens from './tokens'
import user from './user'
import campaigns from './campaigns'
import messages from './messages'
import ui from './ui'

const rootReducer = combineReducers({
  tokens,
  user,
  campaigns,
  messages,
  ui
})

export default rootReducer
