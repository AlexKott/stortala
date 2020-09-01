const initialState: LoginState = null;

export default (state: LoginState = initialState, action: LoginActionType) => {
  if (action.type === 'login/SET_USER') {
    return action.payload.userId;
  }
  return state;
};

export const getLogin = (state: State): LoginState => state.login;
