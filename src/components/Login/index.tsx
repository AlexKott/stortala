import React from 'react';

import AuthorButton from './AuthorButton';
import LoginForm from './LoginForm';

import './index.css';

// TODO: read users from local db / storage
const authors: Author[] = [
  {
    id: 1,
    name: 'Tom',
    image: 'https://pbs.twimg.com/profile_images/757516655266238464/F7Xr_ain_400x400.jpg',
  },
  {
    id: 2,
    name: 'Bob',
    image: 'https://pbs.twimg.com/profile_images/585982031567421440/kKsp_kIp_400x400.jpg',
  },
];

const Login = () => (
  <section className='login'>
    <h1>Welcome!</h1>
    <section className='login--intro'>
      <p>To start using our messenger please select your account from the list of existing authors or create a new one by entering your name.</p>
      <p>Our innovative passwordless login uses a modern machine-learning AI mindcontrolling blockchain technology and PHP to ensure no unauthorised users can access your account.</p>
    </section>

    <h2>If you already have an account</h2>
    <ul className='login--authors'>
      {authors.map(author => (
        <li key={author.id}>
          <AuthorButton {...author} />
        </li>
      ))}
    </ul>

    <h2>If you're new here</h2>
    <LoginForm />
  </section>
);

export default Login;
