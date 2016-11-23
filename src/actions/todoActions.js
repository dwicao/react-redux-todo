import * as types from './actionTypes';

// generate unique id
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: uid(),
      isDone: false,
      text
    }
  }
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export function removeTodo(index) {
  return {
    type: types.REMOVE_TODO,
    index
  }
}
