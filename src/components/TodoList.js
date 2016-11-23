import React, { PropTypes } from 'react';

const TodoList = ({ todos, actions }) => {

  const _toggleClick = id => event => actions.toggleTodo(id);

  const _removeTodo = index => event => actions.removeTodo(index);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={_toggleClick(todo.id)}>
          {
            todo.isDone ?
              <strike>
                {todo.text}
                <button onClick={_removeTodo(index)}>&times;</button>
              </strike>
            :
              <span>
                {todo.text}
                <button onClick={_removeTodo(index)}>&times;</button>
              </span>
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
