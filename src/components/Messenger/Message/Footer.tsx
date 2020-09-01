import React from 'react';

import './footer.css';

type Props = {
  messageId: number
}

const Footer = ({ messageId }: Props) => (
  <footer className='message-footer'>
    <button className='message-footer--button'>e</button>
    <button className='message-footer--button'>d</button>
  </footer>
);

export default Footer;
