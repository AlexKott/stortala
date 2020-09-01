/*** LOGIN ***/
declare type SetUserAction = {
  type: 'login/SET_USER'
  userId: number
}

declare type LoginActionType = SetUserAction

/*** MESSAGES ***/

declare type DeleteMessageAction = {
  type: 'messages/DELETE'
  messageId: number
}

declare type MessageActionType = DeleteMessageAction
