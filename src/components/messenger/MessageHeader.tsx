import React from 'react';

import './messageHeader.css';

type Props = {
  author: Author
  created: number
}

const MessageHeader = ({
  author,
  created,
}: Props) => (
    <header className='message-header'>
      <div
        className='message-header--author'
        style={{ backgroundImage: `url(${author.image})` }}
      />
      {author.name} at {created}
    </header>
  );

export default MessageHeader;
