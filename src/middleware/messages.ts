import { Middleware } from 'redux';

import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: MessageActionType) => {

  if (action.type === 'messages/CREATE') {
    // TODO: API call
    const newMessage: Message = {
      id: Math.floor(Math.random() * 10000),
      created: (new Date()).getTime(),
      authorId: action.payload.authorId,
      parentId: action.payload.parentId,
      text: action.payload.text,
    };

    store.dispatch(actions.addMessage(newMessage));
  }

  next(action);
}

export default middleware;
