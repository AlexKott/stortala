import middleware from './messages';

import * as actions from 'actions';

describe('middleware/messages', () => {
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

  describe('creating messages', () => {
    it('should send a request', async () => {
      request.mockImplementation(() => ({ message: {} }));
      const action = actions.createMessage(1, null, 'test');

      await middleware(store)(next)(action, request);

      expect(request).toBeCalled();
    });

    it('should dispatch an action with the new author', async () => {
      const message = { id: 1, authorId: 1, text: 'test' };
      request.mockImplementation(() => ({ message }));
      const action = actions.createMessage(1, null, 'test');

      await middleware(store)(next)(action, request);

      expect(store.dispatch).toBeCalled();
      expect(store.dispatch.mock.calls[0][0]).toHaveProperty(['payload', 'message'], message);
    });
  });

  describe('deleting messages', () => {
    it('should send a request', async () => {
      request.mockImplementation(() => ({}));
      const action = actions.deleteMessage(1);

      await middleware(store)(next)(action, request);

      expect(request).toBeCalled();
    });
  });

  describe('updating messages', () => {
    it('should send a request', async () => {
      request.mockImplementation(() => ({}));
      const action = actions.updateMessage(1, 'test');

      await middleware(store)(next)(action, request);

      expect(request).toBeCalled();
    });
  });
});
