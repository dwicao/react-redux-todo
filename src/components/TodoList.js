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
        {visibleTodos.map((todo, index) => (
          <li
            key={index}
            >
            {
              todo.isDone ?
                <strike>
                  <ToggleTodo
                    isDone={todo.isDone}
                    todoId={todo.id}
                    actions={actions} />
                  {todo.text}
                  <button onClick={_removeTodo(index)}>&times;</button>
                </strike>
              :
                <span>
                  <ToggleTodo
                    isDone={todo.isDone}
                    todoId={todo.id}
                    actions={actions} />
                  {todo.text}
                  <button onClick={_removeTodo(index)}>&times;</button>
                </span>
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
