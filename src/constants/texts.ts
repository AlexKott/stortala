import { Route } from './routes';

export const pageTitles: { [route in Route]: string } = {
  login: 'Welcome! Please login.',
  messages: 'Messages',
};

export const forms = {
  messagePlaceholder: 'One thing I always wanted to say is ...',
  submit: 'Tell\'em',
};
