import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import ReplyButton from 'components/Messenger/ReplyButton';
import Message from './Message';

import './feed.css';

type PropsFromState = {
  authorId: number
  messages: DisplayMessage[]
}

const mapSateToProps = (state: State): PropsFromState => ({
  authorId: selectors.getLoggedInAuthor(state)?.id || 0,
  messages: selectors.getDisplayMessages(state),
});

const Feed = ({ authorId, messages }: PropsFromState) => (
  <ul className='feed'>
    {messages.map((message, index) => (
      <li key={message.id} className='feed--item'>
        <Message message={message} />
        <ReplyButton
          authorId={authorId}
          messageId={message.id}
        />
      </li>
    ))}
  </ul>
);

export default connect(mapSateToProps)(Feed);
