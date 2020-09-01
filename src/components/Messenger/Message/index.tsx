import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './index.css';

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
        <Header
          author={message.author}
          created={message.created}
        />
        <p className='message--content'>{message.text}</p>
        {message.author.id === ownId && (
          <Footer messageId={message.id} />
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
