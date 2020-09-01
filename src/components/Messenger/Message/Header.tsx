import React from 'react';

import './header.css';

type Props = {
  author: Author
  created: number
}

const Header = ({
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

export default Header;
