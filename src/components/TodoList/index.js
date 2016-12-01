import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos,
    actions,
    visibilityFilter
  } = props;

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
  };

  const visibleTodos = getVisibleTodos(
    todos,
    visibilityFilter
  );

  return (
    <div className="TodoList_container">
      <span className="FilterLink">
        <FilterLink
          filter='SHOW_ALL'
          {...props}
        >
          View All
        </FilterLink>
        {' / '}
        <FilterLink
          filter='SHOW_ACTIVE'
          {...props}
        >
          Active
        </FilterLink>
        {' / '}
        <FilterLink
          filter='SHOW_COMPLETED'
          {...props}
        >
          Completed
        </FilterLink>
      </span>
      <ul className="TodoItem_ul">
        {visibleTodos.map((currTodo, index) => (
          <li 
            key={index}
            className="TodoItem_li">
            <TodoItem
              currTodo={currTodo}
              index={index}
              {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default TodoList;
