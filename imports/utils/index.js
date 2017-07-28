import axios from 'axios'

export const coalesce = (...args) =>  (
    args.find((a) => (a !== null && a !== undefined))
)

export const authHeader = (accessToken) => (
  {'headers': { 'Authorization': "Bearer "+accessToken}}
)
export const generateID = (prefix) => (
  prefix+"_"+Math.random().toString(36).substr(2, 10)
)
