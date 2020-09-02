const initialState: MessagesState = {
  1: {
    id: 1,
    created: 1598957195445,
    text: 'A message',
    authorId: 1,
    parentId: null,
  },
  2: {
    id: 2,
    created: 1598736185445,
    text: 'A different message with a much longer and more interesting text that is actually wrapping lines',
    authorId: 2,
    parentId: null,
  },
  3: {
    id: 3,
    created: 1598957015445,
    text: 'An answer',
    authorId: 2,
    parentId: 1,
  },
};

export default (state: MessagesState = initialState, action: MessageActionType): MessagesState => {

  switch (action.type) {
    case 'messages/DELETE': {
      const stateCopy = { ...state };
      delete stateCopy[action.payload.messageId];

      return stateCopy;
    }

    case 'messages/ADD': {
      return {
        ...state,
        [action.payload.message.id]: {
          ...action.payload.message,
        },
      };
    }

    case 'messages/UPDATE': {
      return {
        ...state,
        [action.payload.messageId]: {
          ...state[action.payload.messageId],
          text: action.payload.text,
        },
      };
    }

    default:
      return state;
  }
};

export const getMessages = (state: State): MessagesState => state.messages;
