import middleware from './init';

import * as actions from 'actions';

describe('middleware/init', () => {
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

  describe('initialising', () => {
    it('should request all authors', async () => {
      request.mockImplementation(() => ({ authors: [] }));
      const action = actions.initApp();

      await middleware(store)(next)(action, request);

      expect(request).toBeCalledWith('authors', 'GET');
    });

    it('should append the authors to the payload', async () => {
      const authors = [{ id: 1 }, { id: 2 }];
      request.mockImplementation(() => ({ authors }));
      const action = actions.initApp();

      await middleware(store)(next)(action, request);

      expect(next.mock.calls[0][0]).toHaveProperty(['payload', 'authors'], authors);
    });

    it('should request all messages', async () => {
      request.mockImplementation(() => ({ messages: [] }));
      const action = actions.initApp();

      await middleware(store)(next)(action, request);

      expect(request).toBeCalledWith('messages', 'GET');
    });

    it('should append the messages to the payload', async () => {
      const messages = [{ id: 1 }, { id: 2 }];
      request.mockImplementation(() => ({ messages }));
      const action = actions.initApp();

      await middleware(store)(next)(action, request);

      expect(next.mock.calls[0][0]).toHaveProperty(['payload', 'messages'], messages);
    });
  });
});
