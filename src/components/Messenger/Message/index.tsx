import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

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

const mapStateToProps = (state: State, props: OwnProps): PropsFromState => {
  const user = selectors.getLoggedInUser(state);

  return {
    isEditing: false,
    isOwn: user?.id === props.message.author.id,
  };
};

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
          isOwn={isOwn}
        />

        {isEditing
          ? <textarea className='message--content-editor'>{message.text}</textarea>
          : <p className='message--content'>{message.text}</p>
        }

        {isOwn && (
          <Footer
            isEditing={isEditing}
            messageId={message.id}
          />
        )}
      </article>

      {message.replies?.map(reply => (
        <ConnectedMessage
          key={reply.id}
          message={reply}
          isReply={true}
        />
      ))}
    </>
  );
};

const ConnectedMessage = connect(mapStateToProps)(Message)
export default ConnectedMessage;
