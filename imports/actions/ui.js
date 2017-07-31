export const SET_CAMPAIGNS_SEARCH_STRING = 'SET_CAMPAIGNS_SEARCH_STRING'
export const SET_INBOX_SEARCH_STRING = 'SET_INBOX_SEARCH_STRING'

export const setCampaignsSearchString = searchString => ({
  type: SET_CAMPAIGNS_SEARCH_STRING,
  searchString: searchString,
})

export const setCampaignsSearchStringFromEvent = event => ({
  type: SET_CAMPAIGNS_SEARCH_STRING,
  searchString: event.target.value,
})

export const setInboxSearchString = searchString => ({
  type: SET_INBOX_SEARCH_STRING,
  searchString: searchString
})

export const setInboxSearchStringFromEvent = event => ({
  type: SET_INBOX_SEARCH_STRING,
  searchString: event.target.value,
})
