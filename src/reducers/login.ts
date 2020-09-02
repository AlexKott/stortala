const initialState: LoginState = null;

export default (state: LoginState = initialState, action: AuthorActionType) => {

  if (action.type === 'authors/LOGIN') {
    return action.payload.authorId;
  }

  if (action.type === 'authors/ADD') {
    return action.payload.author.id;
  }

  return state;
};

export const getLogin = (state: State): LoginState => state.login;
