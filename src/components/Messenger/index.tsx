import React from 'react';

import Composer from './Composer';
import Feed from './Feed';

import './index.css';

// TODO: load messages
const messages: DisplayMessage[] = [
  {
    id: 1,
    created: 5000,
    author: {
      id: 1,
      name: 'Tom',
      image: 'https://pbs.twimg.com/profile_images/757516655266238464/F7Xr_ain_400x400.jpg',
    },
    text: 'A message',
    replies: [
      {
        id: 3,
        created: 6000,
        author: {
          id: 2,
          name: 'Bob',
          image: 'https://pbs.twimg.com/profile_images/585982031567421440/kKsp_kIp_400x400.jpg',
        },
        text: 'An answer',
      },
    ]
  },
  {
    id: 2,
    created: 4000,
    author: {
      id: 2,
      name: 'Bob',
      image: 'https://pbs.twimg.com/profile_images/585982031567421440/kKsp_kIp_400x400.jpg',
    },
    text: 'A different message with a much longer and more interesting text that is actually wrapping lines',
  },
];

const Messenger = () => (
  <section className='messenger'>
    <Composer />
    <Feed messages={messages} />
  </section>
);

export default Messenger;
