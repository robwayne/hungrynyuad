export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  _id: message._id,
  messageText: message.messageText,
  sender: message.sender,
  sentAt: message.sentAt,
  opened: message.opened,
})

export const removeMessage = (_id) => ({
  type: REMOVE_MESSAGE,
  _id: _id
})
