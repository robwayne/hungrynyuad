export const ADD_CAMPAIGN = 'ADD_CAMPAIGN'
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN'

export const addCampaign = (campaign) => ({
  type: ADD_CAMPAIGN,
  _id: campaign._id,
  closesAt: campaign.closesAt,
  amountRaised: campaign.amountRaised,
  restaurant: campaign.restaurant,
  host: campaign.host
})

export const removeCampaign = (_id) => ({
  type: REMOVE_CAMPAIGN,
  _id: _id
})
