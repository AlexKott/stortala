import { Middleware } from 'redux';

import * as actions from 'actions';

const middleware: Middleware = store => next => async (action: AuthorActionType) => {

  if (action.type === 'authors/CREATE') {
    // TODO: API call
    const newAuthor: Author = {
      id: Math.floor(Math.random() * 10000),
      name: action.payload.name,
    };

    store.dispatch(actions.addAuthor(newAuthor));
  }

  next(action);
}

export default middleware;
