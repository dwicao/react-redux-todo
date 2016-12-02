import { applyMiddleware, createStore } from 'redux';
import { save } from 'redux-localstorage-simple';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( save() )
  );
}
