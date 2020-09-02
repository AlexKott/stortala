export const initApp = (): InitAction => ({
  type: 'app/INIT',
  payload: {},
});

export * from './authors';
export * from './messages';
