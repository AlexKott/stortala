import { Middleware } from 'redux';

import sendRequest from 'adapters/http';
import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: MessageActionType) => {
  if (action.type === 'messages/CREATE') {
    try {
      const requestPayload = {
        authorId: action.payload.authorId,
        parentId: action.payload.parentId,
        text: action.payload.text,
      };
      const response = await sendRequest('messages', 'post', requestPayload);

      store.dispatch(actions.addMessage(response.message));

    } catch (error) {
      console.error(error);
    }
  }

  if (action.type === 'messages/DELETE') {
    try {
      await sendRequest('messages', 'delete', undefined, action.payload.messageId);
    } catch (error) {
      console.error(error);
    }
  }

  if (action.type === 'messages/UPDATE') {
    try {
      const requestPayload = {
        text: action.payload.text,
      };

      await sendRequest('messages', 'patch', requestPayload, action.payload.messageId);
    } catch (error) {
      console.error(error);
    }
  }

  next(action);

};

export default middleware;
