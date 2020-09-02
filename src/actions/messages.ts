export const createMessage =
  (authorId: number, parentId: number | null, text: string = ''): CreateMessageAction => ({
    type: 'messages/CREATE',
    payload: {
      authorId,
      parentId,
      text,
    },
  });

export const addMessage = (message: Message): AddMessageAction => ({
  type: 'messages/ADD',
  payload: {
    message,
  },
});

export const updateMessage = (messageId: number, text: string): UpdateMessageAction => ({
  type: 'messages/UPDATE',
  payload: {
    messageId,
    text,
  },
});

export const deleteMessage = (messageId: number): DeleteMessageAction => ({
  type: 'messages/DELETE',
  payload: {
    messageId,
  },
});
