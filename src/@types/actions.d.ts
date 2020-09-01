/*** LOGIN ***/
declare type SetUserAction = {
  type: 'login/SET_USER'
  payload: {
    userId: number
  }
}

declare type LoginActionType = SetUserAction

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

declare type DeleteMessageAction = {
  type: 'messages/DELETE'
  payload: {
    messageId: number
  }
}

declare type MessageActionType =
  CreateMessageAction
  | AddMessageAction
  | DeleteMessageAction
