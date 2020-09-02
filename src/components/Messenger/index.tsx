import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'reducers/selectors';

import Composer from './Composer';
import Feed from './Feed';

import './index.css';

type PropsFromState = {
  authorId: number
}

const mapStateToProps = (state: State): PropsFromState => ({
  authorId: selectors.getLoggedInAuthor(state)?.id || 0,
})

const Messenger = ({ authorId }: PropsFromState) => (
  <section className='messenger'>
    <Composer authorId={authorId} />
    <Feed />
  </section>
);

export default connect(mapStateToProps)(Messenger);
