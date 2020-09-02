declare type InitAction = {
  type: 'app/INIT'
  payload: {
    authors?: Author[]
    messages?: Message[]
  }
}

/*** AUTHORS ***/
declare type LoginAuthorAction = {
  type: 'authors/LOGIN'
  payload: {
    authorId: number
  }
}

declare type CreateAuthorAction = {
  type: 'authors/CREATE'
  payload: {
    name: string
  }
}

declare type AddAuthorAction = {
  type: 'authors/ADD'
  payload: {
    author: Author
  }
}

declare type AuthorActionType =
  LoginAuthorAction
  | CreateAuthorAction
  | AddAuthorAction
  | InitAction

/*** MESSAGES ***/

declare type CreateMessageAction = {
  type: 'messages/CREATE'
  payload: {
    authorId: number
    parentId: number | null
    text: string
  }
}

declare type AddMessageAction = {
  type: 'messages/ADD'
  payload: {
    message: Message
  }
}

declare type UpdateMessageAction = {
  type: 'messages/UPDATE'
  payload: {
    messageId: number
    text: string
  }
}

declare type DeleteMessageAction = {
  type: 'messages/DELETE'
  payload: {
    messageId: number
  }
}

declare type MessageActionType =
  CreateMessageAction
  | AddMessageAction
  | UpdateMessageAction
  | DeleteMessageAction
  | InitAction
