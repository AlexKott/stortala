import React from 'react';

import AuthorIcon from './AuthorIcon';

import logo from 'assets/logo.png';
import './header.css';

// TODO: display logged in author

const Header = () => (
  <header className='header'>
    <img
      alt='logo'
      className='header--logo'
      height='50'
      width='100'
      src={logo}
    />
    <AuthorIcon name='Alex' size={60} />
  </header>
);

export default Header;
