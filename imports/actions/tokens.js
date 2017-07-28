export const SET_TOKENS = 'SET_TOKENS'
export const DELETE_TOKENS = 'DELETE_TOKENS'

export const setTokens = (accessToken, idToken) => ({
    type: SET_TOKENS,
    accessToken: accessToken,
    idToken: idToken,
})
export const setIDToken = (idToken) => ({
  type: SET_TOKENS
  idToken: idToken
})
export const setAccessToken = (accessToken) => ({
  type: SET_TOKENS
  accessToken: accessToken
})

export const deleteTokens = () => ({
  type: DELETE_TOKENS
})
