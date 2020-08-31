import React from 'react';

import './message.css';
import MessageHeader from './MessageHeader';
import MessageFooter from './MessageFooter';

type OwnProps = {
  isReply?: boolean
  message: DisplayMessage
}

type PropsFromState = {
  ownId: number
}

const Message = ({
  message,
  ownId,
  isReply = false,
}: OwnProps & PropsFromState) => (
    <>
      <article className={`message ${isReply ? 'is-reply' : ''}`}>
        <MessageHeader
          author={message.author}
          created={message.created}
        />
        <p className='message--content'>{message.text}</p>
        {message.author.id === ownId && (
          <MessageFooter messageId={message.id} />
        )}
      </article>

      {message.replies?.map(reply => (
        <Message
          key={reply.id}
          message={reply}
          isReply={true}
          // TODO: replace passing ownId with state access
          ownId={ownId}
        />
      ))}
    </>
  );

export default Message;
