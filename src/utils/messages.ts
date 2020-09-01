export const createDisplayMessage = (message: Message, authors: AuthorsState): DisplayMessage => ({
  id: message.id,
  created: message.created,
  text: message.text,
  author: authors[message.authorId],
});
