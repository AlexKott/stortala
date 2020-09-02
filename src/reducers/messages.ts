const initialState: MessagesState = {};

export default (state: MessagesState = initialState, action: MessageActionType): MessagesState => {

  switch (action.type) {
    case 'app/INIT': {
      return action.payload.messages?.reduce(
        (newState: MessagesState, msg: Message) => ({
          ...newState,
          [msg.id]: msg,
        }), {}) || {};
    }

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
