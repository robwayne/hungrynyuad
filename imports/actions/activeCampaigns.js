export const ADD_ACTIVE_CAMPAIGN = 'ADD_ACTIVE_CAMPAIGN'
export const REMOVE_ACTIVE_CAMPAIGN = 'REMOVE_ACTIVE_CAMPAIGN'

export const addActiveCampaign = (campaign) => ({
  type: ADD_ACTIVE_CAMPAIGN,
  _id: campaign._id,
  closesAt: campaign.closesAt,
  amountRaised: campaign.amountRaised,
  restaurant: campaign.restaurant,
  host: campaign.host
})

export const removeActiveCampaign = (_id) => ({
  type: REMOVE_ACTIVE_CAMPAIGN,
  _id: _id
})
