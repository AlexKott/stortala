import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import AuthorIcon from 'components/App/AuthorIcon';

import './header.css';

type Props = {
  author: Author
  created: number
  isOwn: boolean
}

const Header = ({
  author,
  created,
  isOwn,
}: Props) => (
    <header className='message-header'>
      <AuthorIcon
        image={author.image}
        name={author.name}
        size={60}
      />
      {isOwn ? 'You' : author.name} – {formatDistanceToNow(created)} ago
    </header>
  );

export default Header;
