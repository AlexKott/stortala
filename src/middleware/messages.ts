import { Middleware } from 'redux';

import httpRequest from 'adapters/http';
import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: MessageActionType, request = httpRequest) => {
  if (action.type === 'messages/CREATE') {
    try {
      const requestPayload = {
        authorId: action.payload.authorId,
        parentId: action.payload.parentId,
        text: action.payload.text,
      };
      const response = await request('messages', 'POST', requestPayload);

      store.dispatch(actions.addMessage(response.message));

    } catch (error) {
      console.error(error);
    }
  }

  if (action.type === 'messages/DELETE') {
    try {
      await request('messages', 'DELETE', undefined, action.payload.messageId);
    } catch (error) {
      console.error(error);
    }
  }

  if (action.type === 'messages/UPDATE') {
    try {
      const requestPayload = {
        text: action.payload.text,
      };

      await request('messages', 'PUT', requestPayload, action.payload.messageId);
    } catch (error) {
      console.error(error);
    }
  }

  next(action);

};

export default middleware;
