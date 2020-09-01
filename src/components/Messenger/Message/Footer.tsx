import React from 'react';

import './footer.css';

type Props = {
  isEditing: boolean
  onDelete(): any
  onToggleEdit(): void
}

const Footer = ({ isEditing, onDelete, onToggleEdit }: Props) => (
  <footer className='message-footer'>

    <button
      className='message-footer--button'
      onClick={onToggleEdit}
    >
      {isEditing
        ? <span className="icon-check" />
        : <span className="icon-pencil" />
      }
    </button>

    <button
      className='message-footer--button'
      onClick={onDelete}
    >
      <span className="icon-bin" />
    </button>

  </footer>
);

export default Footer;
