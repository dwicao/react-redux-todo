import React, { PropTypes } from 'react';

const TodoList = ({ todos, actions, visibilityFilter }) => {

  const _toggleClick = id => event => actions.toggleTodo(id);

  const _removeTodo = index => event => actions.removeTodo(index);

  const getVisibleTodos = (allTodos, whatFilter) => {
    switch(whatFilter) {
      case 'SHOW_ALL':
        return allTodos;
      case 'SHOW_COMPLETED':
        return allTodos.filter(
          t => t.isDone
        );
      case 'SHOW_ACTIVE':
        return allTodos.filter(
          t => !t.isDone
        );
    }
  }

  const visibleTodos = getVisibleTodos(
    todos,
    visibilityFilter
  );

  return (
    <ul>
      {visibleTodos.map((todo, index) => (
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
