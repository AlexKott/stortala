import React from 'react';

import { forms as texts } from 'constants/texts';

import './messageForm.css';

const MessageForm = () => (
  <form className='message-form'>
    <textarea
      className='message-form--input'
      placeholder={texts.messagePlaceholder}
    />
    <button
      className='message-form--button'
      type='submit'
    >
      {texts.submit}
    </button>
  </form>
);

export default MessageForm;
