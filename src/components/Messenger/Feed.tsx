import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import FeedItem from './FeedItem';

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
    {messages.map(message => (
      <FeedItem
        key={`feed-item-${message.id}`}
        authorId={authorId}
        message={message}
      />
    ))}
  </ul>
);

export default connect(mapSateToProps)(Feed);
