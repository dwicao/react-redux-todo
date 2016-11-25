import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';
import ToggleTodo from './ToggleTodo';

const TodoList = (props) => {

  const { todos, actions, visibilityFilter } = props;

  const _toggleClick = id => event => actions.toggleTodo(id);

  const _removeTodo = index => event => actions.removeTodo(index);

  const _toggleEdit = id => event => actions.toggleEditTodo(id);

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
    const renderToggleTodo = () => (
      <ToggleTodo
        isDone={currTodo.isDone}
        todoId={currTodo.id}
        actions={actions} />
    );

    const renderButton = () => (
      <span>
        <button onClick={_toggleEdit(currTodo.id)}>&#8230;</button>
        <button onClick={_removeTodo(index)}>&times;</button>
      </span>
    );

    const _onKeyDown = event => {
      const input = event.target;
      const text = input.value;
      const isEnterKey = (event.which === 13);
      const isLongEnough = text.length > 0;

      if(isEnterKey && isLongEnough) {
        actions.editTodo(currTodo.id, text);
        actions.toggleEditTodo(currTodo.id);
        return (
          <div>
            {renderToggleTodo()}
            <span>{currTodo.text}</span>
            {renderButton()}
          </div>
        );
      }
    }

    const _onChange = event => {
      actions.editTodo(currTodo.id, event.target.value);
      event.target.value = currTodo.text;
    }

    const _onApply = () => {
      actions.toggleEditTodo(currTodo.id);
    }

    if(currTodo.isEditing){
      return (
        <div>
        <input
          type="text"
          maxlength="10"
          onKeyDown={_onKeyDown}
          onChange={_onChange}
          value={currTodo.text} />
          <button onClick={_onApply}>Apply</button>
        </div>
      );
    }

    if(currTodo.isDone) {
      return (
        <div>
          {renderToggleTodo()}
          <strike>{currTodo.text}</strike>
          {renderButton()}
        </div>
      );
    } else {
      return (
        <div>
          {renderToggleTodo()}
          <span>{currTodo.text}</span>
          {renderButton()}
        </div>
      );  
    }

  };


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
            {renderList(currTodo, index)}
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
