import React from 'react';

import AuthorIcon from 'components/App/AuthorIcon';

import './authorList.css';

type Props = {
  authors: Author[]
}

const AuthorList = ({ authors }: Props) => (
  <ul className='author-list'>
    {authors.map(author => (
      <li key={author.id}>
        <button
          type='button'
          className='author-list--button'
        >
          <AuthorIcon image={author.image} name={author.name} />
          {author.name}
        </button>
      </li>
    ))}
  </ul>
);

export default AuthorList;
