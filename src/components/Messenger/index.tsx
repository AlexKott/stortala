import React from 'react';

import Composer from './Composer';
import Feed from './Feed';

import './index.css';

const Messenger = () => (
  <section className='messenger'>
    <Composer />
    <Feed />
  </section>
);

export default Messenger;
