import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/messages'

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action._id,
          messageText: action.messageText,
          sender: action.sender,
          sentAt: action.sentAt,
          opened: action.opened
        }
      ]
    case REMOVE_MESSAGE:
      return [
        state.filter((message) => (message._id !== action._id))
      ]
    default:
      return state
  }
}

export default messages
