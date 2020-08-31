import React from 'react';

import './messageFooter.css';

type Props = {
  messageId: number
}

const MessageFooter = ({ messageId }: Props) => (
  <footer className='message-footer'>
    <button className='message-footer--button'>e</button>
    <button className='message-footer--button'>d</button>
  </footer>
);

export default MessageFooter;
