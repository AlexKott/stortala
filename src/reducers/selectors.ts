import { createSelector } from 'reselect';

import * as utils from 'utils';

import { getAuthors } from './authors';
import { getLogin } from './login';
import { getMessages } from './messages';

export const getAuthorList = createSelector(
  [
    getAuthors,
  ], (authors) => Object.values(authors)
);

export const getDisplayMessages = createSelector(
  [
    getMessages,
    getAuthors,
  ], (messages, authors) => {
    const messageList = Object.values(messages);

    return messageList
      .filter(message => message.parentId === null)
      .map((message): DisplayMessage => ({

        ...utils.createDisplayMessage(message, authors),
        replies: messageList
          .filter(m => m.parentId === message.id)
          .map(m => ({ ...utils.createDisplayMessage(m, authors) }))
          .sort(utils.sortByCreation(true)),

      }))
      .sort(utils.sortByCreation(false));
  });

export const getLoggedInAuthor = createSelector(
  [
    getLogin,
    getAuthors,
  ], (login, authors) => login ? authors[login] : null
);
