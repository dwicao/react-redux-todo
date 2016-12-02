import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { load } from "redux-localstorage-simple";
import configureStore from './store/configureStore';

import Home from './components/Home';

const store = configureStore(
  load()
);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
