import React from 'react';

import AuthorIcon from './AuthorIcon';

import logo from 'assets/logo.png';
import './header.css';

type Props = {
  author: Author | null
}

const Header = ({ author }: Props) => (
  <header className='header'>
    <img
      alt='logo'
      className='header--logo'
      height='50'
      width='100'
      src={logo}
    />
    {author && (
      <AuthorIcon
        image={author.image}
        name={author.name}
        size={60}
      />
    )}
  </header>
);

export default Header;
