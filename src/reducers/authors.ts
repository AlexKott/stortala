const initialState: AuthorsState = {};

export default (state: AuthorsState = initialState, action: AuthorActionType): AuthorsState => {

  switch (action.type) {
    case 'app/INIT': {
      return action.payload.authors?.reduce(
        (newState: AuthorsState, author: Author) => ({
          ...newState,
          [author.id]: author,
        }), {}) || {};
    }

    case 'authors/ADD': {
      return {
        ...state,
        [action.payload.author.id]: {
          ...action.payload.author,
        },
      };
    }

    default:
      return state;
  };
};

export const getAuthors = (state: State): AuthorsState => state.authors;
