import { Middleware } from 'redux';

import sendRequest from 'adapters/http';
import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: AuthorActionType | InitAction) => {
  if (action.type === 'authors/CREATE') {
    try {
      const response = await sendRequest('authors', 'post', { name: action.payload.name });
      store.dispatch(actions.addAuthor(response.author));

    } catch (error) {
      console.error(error);
    }
  }

  next(action);

};

export default middleware;
