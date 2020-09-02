import React, { useCallback, useState, FormEvent } from 'react';
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
  onSave(text: string): UpdateMessageAction
}

const mapStateToProps = (state: State, props: OwnProps): PropsFromState => {
  const author = selectors.getLoggedInAuthor(state);

  return {
    isOwn: author?.id === props.message.author.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): PropsFromDispatch => ({
  onDelete: () => dispatch(actions.deleteMessage(props.message.id)),
  onSave: (text: string) => dispatch(actions.updateMessage(props.message.id, text)),
});

const Message = ({
  message,
  isOwn,
  isReply = false,
  onDelete,
  onSave,
}: OwnProps & PropsFromState & PropsFromDispatch) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(message.text);

  const onToggleEdit = useCallback(() => {
    if (isEditing) {
      onSave(newText);
    }

    setIsEditing(!isEditing);
  }, [isEditing, newText, setIsEditing, onSave]);

  const onChangeText = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    setNewText(e.currentTarget.value);
  }, [setNewText]);

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
          ? <textarea
            className='message--content-editor'
            value={newText}
            onChange={onChangeText}
          />
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
