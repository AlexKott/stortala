import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import Login from 'components/Login';
import Messenger from 'components/Messenger';

import Header from './Header';

type PropsFromState = {
  author: Author | null
}

const mapStateToProps = (state: State): PropsFromState => ({
  author: selectors.getLoggedInAuthor(state),
});

const App = ({ author }: PropsFromState) => (
  <>
    <Header author={author} />
    {author
      ? <Messenger />
      : <Login />
    }
  </>
);

export default connect(mapStateToProps)(App);
