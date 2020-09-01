export const createDisplayMessage = (message: Message, authors: AuthorsState): DisplayMessage => ({
  id: message.id,
  created: message.created,
  text: message.text,
  author: authors[message.authorId],
});

type SortingMessage = { [key: string]: any } & { created: number }
export const sortByCreation = (asc: boolean = true) => (a: SortingMessage, b: SortingMessage) => {
  if (a.created > b.created) {
    return asc ? 1 : -1;
  } else {
    return asc ? -1 : 1;
  }
};
