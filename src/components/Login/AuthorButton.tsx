import React from 'react';

import './authorButton.css';

type Props = Author

const AuthorButton = ({ id, image, name }: Props) => (
  <button
    type='button'
    className='author-button'
  >
    <div
      className='author-button--image'
      style={{ backgroundImage: `url(${image})` }}
    />
    {name}
  </button>
);

export default AuthorButton;
