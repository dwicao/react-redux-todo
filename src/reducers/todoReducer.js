import * as types from '../actions/actionTypes';

export default function todoReducer(state = [], action) {
  switch(action.type) {

    case types.ADD_TODO:
      return [
        ...state,
        action.payload
      ];

    case types.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          return Object.assign({}, todo, { isDone: !todo.isDone });
        } else {
          return todo;
        }
      });

    case types.REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    default:
      return state;
  }

}
