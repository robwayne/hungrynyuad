import { ADD_CAMPAIGN, REMOVE_CAMPAIGN } from '../actions/campaigns'

const campaigns = (state = [], action) => {
  switch (action.type) {
    case ADD_CAMPAIGN:
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
    case REMOVE_CAMPAIGN:
      return [
        state.filter((campaign) => (campaign._id !== action._id))
      ]
    default:
      return state
  }
}

export default campaigns
