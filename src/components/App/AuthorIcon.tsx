import React from 'react';

import { shortenName } from 'utils/strings';

import './authorIcon.css';

type Props = {
  image?: string
  name: string
  size?: number
}

const AuthorIcon = ({ image, name, size = 80 }: Props) => (
  <div
    className='author-icon'
    style={{
      backgroundImage: image ? `url(${image})` : 'none',
      height: `${size}px`,
      width: `${size}px`,
    }}
  >
    {!image && (
      <span className='author-icon--text'>{shortenName(name)}</span>
    )}
  </div>
);

export default AuthorIcon;
