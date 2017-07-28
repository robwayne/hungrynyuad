import { coalesce } from '../utils'
import { combineReducers } from 'redux'

const basicInformationDefaultState = {
  _id: '',
  name: '',
  email: '',
  reputation: 0,
  favouriteRestaurants: [],
  pastOrders: [],
}

const basicInformation = (state = basicInformationDefaultState, action) => {
  switch(action.type) {
    case 'SET_USER_INFORMATION':
      return ({
        _id: coalesce(action._id, state._id),
        name: coalesce(action.name, state.name),
        email: coalesce(action.email, state.email),
        reputation: coalesce(action.reputation, state.reputation),
      })
    default:
      return state
  }
}

const favouriteRestaurants = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVOURITE_RESTAURANT':
      return [
        ...state,
        {
          _id: action._id,
			    name: action.name,
			    imageURL: action.imageURL,
        }
      ]
    case 'REMOVE_FAVOURITE_RESTAURANT':
      return [
        state.filter((restaurant) => (restaurant._id !== action._id))
      ]
    default:
      return state
  }
}

const user = combineReducers({
  basicInformation,
  favouriteRestaurants,
})

export default user
