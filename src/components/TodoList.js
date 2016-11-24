import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';
import ToggleTodo from './ToggleTodo';

const TodoList = (props) => {

  const { todos, actions, visibilityFilter } = props;

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

  const renderList = (currTodo, index) => {
    return (
      <div>
        <ToggleTodo
          isDone={currTodo.isDone}
          todoId={currTodo.id}
          actions={actions} />
        {currTodo.text}
        <button onClick={_removeTodo(index)}>&times;</button>
      </div>
    );
  }

  return (
    <div>
      <p>
        Show:
        {' '}
        <FilterLink
          filter='SHOW_ALL'
          {...props}
        >
          All
        </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_ACTIVE'
          {...props}
        >
          Active
        </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_COMPLETED'
          {...props}
        >
          Completed
        </FilterLink>
      </p>
      <ul>
        {visibleTodos.map((currTodo, index) => (
          <li key={index}>
            { currTodo.isDone ?
                <strike>{renderList(currTodo, index)}</strike>
              :
                <span>{renderList(currTodo, index)}</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default TodoList;
