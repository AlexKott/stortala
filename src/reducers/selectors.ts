import { createSelector } from 'reselect';

import { createDisplayMessage } from 'utils/messages';

import { getAuthors } from './authors';
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

        ...createDisplayMessage(message, authors),
        replies: messageList
          .filter(m => m.parentId === message.id)
          .map(m => ({ ...createDisplayMessage(m, authors) })),

      }))
  });
