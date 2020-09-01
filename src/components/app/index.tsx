import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import Login from 'components/Login';
import Messenger from 'components/Messenger';

import Header from './Header';

type PropsFromState = {
  user: Author | null
}

const mapStateToProps = (state: State): PropsFromState => ({
  user: selectors.getLoggedInUser(state),
});

const App = ({ user }: PropsFromState) => (
  <>
    <Header user={user} />
    {user
      ? <Messenger />
      : <Login />
    }
  </>
);

export default connect(mapStateToProps)(App);
