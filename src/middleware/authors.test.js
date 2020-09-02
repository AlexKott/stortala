import middleware from './authors';

import * as actions from 'actions';

describe('middleware/authors', () => {
  let store, next, request;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(),
    };
    next = jest.fn();
    request = jest.fn();
  });

  it('should always forward the action', () => {
    const action = { type: 'TEST' };

    middleware(store)(next)(action);

    expect(next).toBeCalledWith(action);
  });

  describe('creating authors', () => {
    it('should send a request', async () => {
      request.mockImplementation(() => ({ author: { name: test } }));
      const action = actions.createAuthor('test');

      await middleware(store)(next)(action, request);

      expect(request).toBeCalled();
    });

    it('should dispatch an action with the new author', async () => {
      const author = { id: 1, name: 'test' };
      request.mockImplementation(() => ({ author }));
      const action = actions.createAuthor('test');

      await middleware(store)(next)(action, request);

      expect(store.dispatch).toBeCalled();
      expect(store.dispatch.mock.calls[0][0]).toHaveProperty(['payload', 'author'], author);
    });
  });
});
