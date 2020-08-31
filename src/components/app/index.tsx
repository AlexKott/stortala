import React from 'react';

import Header from './Header';
import TitleSection from './TitleSection';

import './titleSection.css';

// TODO: dynamic route
const route = 'messages';

const App = () => (
  <>
    <Header />
    <TitleSection route={route} />
  </>
);

export default App;
