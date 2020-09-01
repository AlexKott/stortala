export const deleteMessage = (messageId: number): DeleteMessageAction => ({
  type: 'messages/DELETE',
  messageId,
});
