declare type AuthorsState = {
  [id: number]: Author
}

declare type MessagesState = {
  [id: number]: Message
}

declare type State = {
  authors: AuthorState
  messages: MessagesState
}
