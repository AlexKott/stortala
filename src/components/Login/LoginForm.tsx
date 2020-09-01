import React from 'react';

import { forms as texts } from 'constants/texts';

import './loginForm.css';

const LoginForm = () => (
  <form className='login-form'>
    <input
      className='login-form--input'
      placeholder={texts.loginPlaceholder}
      type='text'
    />
    <button
      className='login-form--button'
      type='submit'
    >
      create
    </button>
  </form>
);

export default LoginForm;
