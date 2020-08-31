import React from 'react';

import logo from 'images/logo.png';

import './header.css';

const Header = () => (
  <header className='header'>
    <img
      alt='logo'
      className='header--logo'
      height="50"
      width="142"
      src={logo}
    />
  </header>
);

export default Header;
