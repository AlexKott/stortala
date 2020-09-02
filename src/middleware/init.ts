import { Middleware } from 'redux';

import sendRequest from 'adapters/http';

const middleware: Middleware = store => next => async (action: AuthorActionType | InitAction) => {

  if (action.type === 'app/INIT') {
    try {
      const responses = await Promise.all([
        sendRequest('authors', 'get'),
        sendRequest('messages', 'get'),
      ]);
      action.payload.authors = responses[0].authors;
      action.payload.messages = responses[1].messages;

    } catch (error) {
      console.error(error);
    }
  }

  next(action);
};

export default middleware;
