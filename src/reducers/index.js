import {combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers({
  visibilityFilter,
  todos
});

export default rootReducer;
