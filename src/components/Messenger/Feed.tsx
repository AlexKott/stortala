import React from 'react';

import ReplyButton from 'components/Messenger/ReplyButton';

import Message from './Message';

import './feed.css';

type Props = {
  messages: DisplayMessage[]
}

const Feed = ({ messages }: Props) => (
  <ul className='feed'>
    {messages.map((message, index) => (
      <li key={message.id} className='feed--item'>
        <Message
          message={message}
          // TODO: replace passing state props with state access
          isOwn={index === 0}
          isEditing={false}
        />
        <ReplyButton messageId={message.id} />
      </li>
    ))}
  </ul>
);

export default Feed;
