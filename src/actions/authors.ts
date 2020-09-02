export const loginAuthor = (authorId: number): LoginAuthorAction => ({
  type: 'authors/LOGIN',
  payload: {
    authorId,
  },
});

export const createAuthor = (name: string): CreateAuthorAction => ({
  type: 'authors/CREATE',
  payload: {
    name,
  },
});

export const addAuthor = (author: Author): AddAuthorAction => ({
  type: 'authors/ADD',
  payload: {
    author,
  },
});
