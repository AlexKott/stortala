export const setUser = (userId: number): SetUserAction => ({
  type: 'login/SET_USER',
  payload: {
    userId,
  },
});