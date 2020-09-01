import React from 'react';

import './footer.css';

type Props = {
  isEditing: boolean
  messageId: number
}

const Footer = ({ isEditing, messageId }: Props) => (
  <footer className='message-footer'>

    <button className='message-footer--button'>
      {isEditing
        ? <span className="icon-check" />
        : <span className="icon-pencil" />
      }
    </button>

    <button className='message-footer--button'>
      <span className="icon-bin" />
    </button>

  </footer>
);

export default Footer;
