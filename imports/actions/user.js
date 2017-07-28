export const SET_USER_INFORMATION = 'SET_USER_INFORMATION'
export const ADD_FAVOURITE_RESTAURANT = 'ADD_FAVOURITE_RESTAURANT'
export const REMOVE_FAVOURITE_RESTAURANT = 'REMOVE_FAVOURITE_RESTAURANT'

export const setUserInformation = (_id, name, email, reputation) => ({
  type: SET_USER_INFORMATION,
  _id: _id,
  name: name,
  email: email,
  reputation: reputation,
})

export const addFavouriteRestaurant = (_id, name, imageURL) => ({
  type: ADD_FAVOURITE_RESTAURANT,
  _id: _id,
  name: name,
  imageURL: imageURL,
})

export const removeFavouriteRestaurant = (_id) => ({
  type: REMOVE_FAVOURITE_RESTAURANT,
  _id: _id,
})
