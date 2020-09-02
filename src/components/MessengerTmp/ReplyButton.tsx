import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions';

import './replyButton.css';

type OwnProps = {
  authorId: number
  messageId: number
}
type PropsFromDispatch = {
  onClick(): CreateMessageAction
}

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): PropsFromDispatch => ({
  onClick: () => dispatch(actions.createMessage(props.authorId, props.messageId, '')),
});

const ReplyButton = ({ onClick }: OwnProps & PropsFromDispatch) => (
  <button
    className='reply-button'
    type='button'
    onClick={onClick}
  >
    <span className='icon-plus' />
  </button>
);

export default connect(null, mapDispatchToProps)(ReplyButton);
