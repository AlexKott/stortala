import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';
import AuthorIcon from 'components/App/AuthorIcon';

import './authorList.css';

type PropsFromState = {
  authors: Author[]
}

const mapStateToProps = (state: State): PropsFromState => ({
  authors: selectors.getAuthorList(state),
});

const AuthorList = ({ authors }: PropsFromState) => (
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

export default connect(mapStateToProps)(AuthorList);
