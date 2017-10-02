import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';
import './reset.css';
import { getSavedOrder } from './actions';

const store = configureStore();

store.dispatch(getSavedOrder());

render(
  <Root store={store} />,
  document.getElementById('root'),
);
