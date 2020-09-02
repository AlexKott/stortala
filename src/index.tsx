import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as actions from 'actions';
import combinedReducer from 'reducers';
import * as middlewareModules from 'middleware';
import createServer from './server';
import App from 'components/App';

import './index.css';

if (process.env.REACT_APP_USE_MOCK_SERVER === '1') {
  const useSeeds: boolean = process.env.REACT_APP_USE_SEEDS === '1';
  createServer(useSeeds);
}

const customMiddleware = Object.values(middlewareModules);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(...customMiddleware)),
);

store.dispatch(actions.initApp());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
