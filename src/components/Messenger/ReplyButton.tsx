import React from 'react';

import './replyButton.css';

type Props = {
  messageId: number
}

const ReplyButton = ({ messageId }: Props) => (
  <button
    className='reply-button'
    type='button'
  >
    <span className='icon-plus' />
  </button>
);

export default ReplyButton;
