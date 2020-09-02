import { Middleware } from 'redux';

import httpRequest from 'adapters/http';
import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: AuthorActionType, request = httpRequest) => {
  if (action.type === 'authors/CREATE') {
    try {
      const response = await request('authors', 'POST', { name: action.payload.name });
      store.dispatch(actions.addAuthor(response.author));

    } catch (error) {
      console.error(error);
    }
  }

  next(action);

};

export default middleware;
