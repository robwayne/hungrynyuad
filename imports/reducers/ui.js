import { coalesce } from '../utils'
import { combineReducers } from 'redux'
import { SET_CAMPAIGNS_SEARCH_STRING, SET_INBOX_SEARCH_STRING } from '../actions/ui.js'

const defaultCampaignsState = {
    searchString: ''
}
const defaultInboxState = {
    searchString: ''
}

const campaigns = (state = defaultCampaignsState, action) => {
  switch (action.type) {
    case SET_CAMPAIGNS_SEARCH_STRING:
      return {
        searchString: coalesce(action.searchString, state.searchString),
      }
    default:
      return state
  }
}

const inbox = (state = defaultInboxState, action) => {
  switch (action.type) {
    case SET_INBOX_SEARCH_STRING:
      return {
        searchString: coalesce(action.searchString, state.searchString),
      }
    default:
      return state
  }

}

const ui = combineReducers({
  campaigns,
  inbox,
})

export default ui
