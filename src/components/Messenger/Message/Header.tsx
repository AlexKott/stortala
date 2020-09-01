import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import AuthorIcon from 'components/App/AuthorIcon';

import './header.css';

type Props = {
  author: Author
  created: number
}

const Header = ({
  author,
  created,
}: Props) => (
    <header className='message-header'>
      <AuthorIcon
        image={author.image}
        name={author.name}
        size={60}
      />
      {author.name} – {formatDistanceToNow(created)} ago
    </header>
  );

export default Header;
