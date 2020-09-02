import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import * as actions from 'actions';
import * as selectors from 'reducers/selectors';

import Header from './Header';
import Footer from './Footer';

import './index.css';
import { Dispatch } from 'redux';

type OwnProps = {
  isReply?: boolean
  message: DisplayMessage
}
type PropsFromState = {
  isOwn: boolean
}
type PropsFromDispatch = {
  onDelete(): DeleteMessageAction
}

const mapStateToProps = (state: State, props: OwnProps): PropsFromState => {
  const author = selectors.getLoggedInAuthor(state);

  return {
    isOwn: author?.id === props.message.author.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): PropsFromDispatch => ({
  onDelete: () => dispatch(actions.deleteMessage(props.message.id)),
});

const Message = ({
  message,
  isOwn,
  isReply = false,
  onDelete,
}: OwnProps & PropsFromState & PropsFromDispatch) => {

  const [isEditing, setIsEditing] = useState(false);
  const onToggleEdit = useCallback(() => {
    // TODO: save after edit
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

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
            onDelete={onDelete}
            onToggleEdit={onToggleEdit}
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

const ConnectedMessage = connect(mapStateToProps, mapDispatchToProps)(Message)
export default ConnectedMessage;
