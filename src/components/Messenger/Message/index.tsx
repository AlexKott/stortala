import React from 'react';
import classNames from 'classnames';

import Header from './Header';
import Footer from './Footer';

import './index.css';

type OwnProps = {
  isReply?: boolean
  message: DisplayMessage
}

type PropsFromState = {
  isEditing: boolean
  isOwn: boolean
}

const Message = ({
  message,
  isEditing,
  isOwn,
  isReply = false,
}: OwnProps & PropsFromState) => {

  const messageClassNames = classNames({
    'is-reply': isReply,
    'is-editing': isEditing,
  });

  return (
    <>
      <article className={`message ${messageClassNames}`}>
        <Header
          author={message.author}
          created={message.created}
        />

        {isEditing
          ? <textarea className='message--content-editor'>{message.text}</textarea>
          : <p className='message--content'>{message.text}</p>
        }

        {isOwn && (
          <Footer
            // TODO: replace passing state props with state access
            isEditing={isEditing}
            messageId={message.id}
          />
        )}
      </article>

      {message.replies?.map(reply => (
        <Message
          key={reply.id}
          message={reply}
          isReply={true}
          // TODO: replace passing state props with state access
          isEditing={false}
          isOwn={false}
        />
      ))}
    </>
  );
};

export default Message;
