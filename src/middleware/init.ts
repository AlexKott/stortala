import { Middleware } from 'redux';

import httpRequest from 'adapters/http';

const middleware: Middleware = store => next => async (action: InitAction, request = httpRequest) => {

  if (action.type === 'app/INIT') {
    try {
      const responses = await Promise.all([
        request('authors', 'GET'),
        request('messages', 'GET'),
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
