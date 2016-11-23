import React, { PropTypes } from 'react';

const TodoList = (props) => {

  const { todos, actions } = props;

  const toggleClick = id => event => actions.toggleTodo(id);

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={toggleClick(todo.id)}>
          {
            todo.isDone ?
            <strike>{todo.text}</strike>
            :
            <span>{todo.text}</span>
          }
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
