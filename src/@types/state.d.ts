declare type AuthorsState = {
  [id: number]: Author
}

declare type LoginState = number | null

declare type MessagesState = {
  [id: number]: Message
}

declare type State = {
  authors: AuthorState
  login: LoginState
  messages: MessagesState
}
