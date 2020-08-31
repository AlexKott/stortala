import React from 'react';

import { forms as texts } from 'constants/texts';

import './composer.css';

const Composer = () => (
  <form className='composer'>
    <textarea
      className='composer--input'
      placeholder={texts.messagePlaceholder}
    />
    <button
      className='composer--button'
      type='submit'
    >
      {texts.submit}
    </button>
  </form>
);

export default Composer;
