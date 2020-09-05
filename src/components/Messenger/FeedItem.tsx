import React, { useState, useCallback } from 'react';

import Composer from './Composer';
import Message from './Message';

import './feedItem.css';

type Props = {
  authorId: number
  message: DisplayMessage
}

const FeedItem = ({ authorId, message }: Props) => {
  const [isReplying, setIsReplying] = useState(false);
  const onReply = useCallback(() => setIsReplying(true), [setIsReplying]);
  const onSend = useCallback(() => setIsReplying(false), [setIsReplying]);

  return (
    <li key={message.id} className='feed-item'>
      <Message message={message} />

      {isReplying
        ? (
          <Composer
            authorId={authorId}
            parentId={message.id}
            onSend={onSend}
          />
        ) : (
          <button
            className='feed-item--reply'
            type='button'
            onClick={onReply}
          >
            <span className='icon-plus' />
          </button>

        )}
    </li>
  );
};

export default FeedItem;
