const initialState: LoginState = 1;

export default (state: LoginState = initialState, action: any) => {
  return state;
};

export const getLogin = (state: State): LoginState => state.login;
