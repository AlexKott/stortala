import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import Composer from './Composer';
import Feed from './Feed';

import './index.css';

type PropsFromState = {
  userId: number
}

const mapStateToProps = (state: State): PropsFromState => ({
  userId: selectors.getLoggedInUser(state)?.id || 0,
})

const Messenger = ({ userId }: PropsFromState) => (
  <section className='messenger'>
    <Composer userId={userId} />
    <Feed />
  </section>
);

export default connect(mapStateToProps)(Messenger);
