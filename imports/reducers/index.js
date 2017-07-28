import { combineReducers } from 'redux'
import tokens from './tokens'
import user from './user'
import activeCampaigns from './activeCampaigns'

const rootReducer = combineReducers({
  tokens,
  user,
  activeCampaigns,
})

export default rootReducer
