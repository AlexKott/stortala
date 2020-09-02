import { Middleware } from 'redux';

import * as actions from 'actions';
import { newMessageText } from 'constants/texts';

const middleware: Middleware = store => next => async (action: MessageActionType) => {

  if (action.type === 'messages/CREATE') {
    // TODO: API call
    const newMessage: Message = {
      id: Math.floor(Math.random() * 10000),
      created: (new Date()).getTime(),
      authorId: action.payload.authorId,
      parentId: action.payload.parentId,
      text: action.payload.text || newMessageText,
    };

    store.dispatch(actions.addMessage(newMessage));
  }

  if (action.type === 'messages/DELETE') {
    // TODO: implement
  }

  if (action.type === 'messages/UPDATE') {
    // TODO: implement
  }

  next(action);
}

export default middleware;
