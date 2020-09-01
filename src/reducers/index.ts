import { combineReducers } from 'redux';

import { default as authors } from './authors';
import { default as login } from './login';
import { default as messages } from './messages';

export default combineReducers({
  authors,
  login,
  messages,
});
