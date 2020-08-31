import React from 'react';

import logo from 'images/logo.png';

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
  </header>
);

export default Header;
