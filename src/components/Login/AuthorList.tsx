import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from 'actions';
import * as selectors from 'reducers/selectors';
import AuthorIcon from 'components/App/AuthorIcon';

import './authorList.css';

type PropsFromState = {
  authors: Author[]
}
type PropsFromDispatch = {
  onLogin(userId: number): SetUserAction
}

const mapStateToProps = (state: State): PropsFromState => ({
  authors: selectors.getAuthorList(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  onLogin: (userId: number) => dispatch(actions.setUser(userId)),
});

const AuthorList = ({ authors, onLogin }: PropsFromState & PropsFromDispatch) => (
  <ul className='author-list'>
    {authors.map(author => (
      <li key={author.id}>
        <button
          type='button'
          className='author-list--button'
          onClick={() => onLogin(author.id)}
        >
          <AuthorIcon image={author.image} name={author.name} />
          {author.name}
        </button>
      </li>
    ))}
  </ul>
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
