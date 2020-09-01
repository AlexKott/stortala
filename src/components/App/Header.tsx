import React from 'react';

import AuthorIcon from './AuthorIcon';

import logo from 'assets/logo.png';
import './header.css';

type Props = {
  user: Author | null
}

const Header = ({ user }: Props) => (
  <header className='header'>
    <img
      alt='logo'
      className='header--logo'
      height='50'
      width='100'
      src={logo}
    />
    {user && (
      <AuthorIcon
        image={user.image}
        name={user.name}
        size={60}
      />
    )}
  </header>
);

export default Header;
