import React from 'react';

import Message from './Message';

import './feed.css';

type Props = {
  messages: DisplayMessage[]
}

const Feed = ({ messages }: Props) => (
  <ul className='feed'>
    {messages.map(message => (
      <li key={message.id} className='feed--item'>
        <Message
          message={message}
          // TODO: replace passing ownId with state access
          ownId={2}
        />
      </li>
    ))}
  </ul>
);

export default Feed;
