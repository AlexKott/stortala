import React from 'react';

import AuthorList from './AuthorList';
import LoginForm from './LoginForm';

import './index.css';

const Login = () => (
  <section className='login'>
    <h1>Welcome!</h1>
    <section className='login--intro'>
      <p>To start using our messenger please select your account from the list of existing authors or create a new one by entering your name.</p>
      <p>Our innovative passwordless login uses a modern machine-learning AI mindcontrolling blockchain technology and PHP to ensure no unauthorised authors can access your account.</p>
    </section>

    <LoginForm />
    <AuthorList />
  </section>
);

export default Login;
