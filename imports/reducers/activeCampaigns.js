import { ADD_ACTIVE_CAMPAIGN, REMOVE_ACTIVE_CAMPAIGN } from '../actions/activeCampaigns'

const activeCampaigns = (state = [], action) => {
  switch (action.type) {
    case ADD_ACTIVE_CAMPAIGN:
      return [
        ...state,
        {
          _id: action._id,
          closesAt: action.closesAt,
          amountRaised: action.amountRaised,
          restaurant: {
            _id:action.restaurant._id,
            name: action.restaurant.name,
            minimumOrder: action.restaurant.minimumOrder,
            imageURL: action.restaurant.imageURL,
          },
          host: {
            _id: action.host._id,
            name: action.host.name,
            reputation: action.host.reputation,
          },
        }
      ]
    case REMOVE_ACTIVE_CAMPAIGN:
      return [
        state.filter((campaign) => (campaign._id !== action._id))
      ]
    default:
      return state
  }
}

export default activeCampaigns
