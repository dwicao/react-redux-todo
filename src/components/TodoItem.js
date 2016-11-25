import React, {PropTypes} from 'react';
import ToggleTodo from './ToggleTodo';

const TodoItem = (props) => {
	const { actions, currTodo, index } = props;

	const _toggleClick = id => event => actions.toggleTodo(id);

  const _removeTodo = index => event => actions.removeTodo(index);

  const _toggleEdit = id => event => actions.toggleEditTodo(id);

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

  const truncateStr = (str, len) => {
    return str.length > len ? str.substring(0, len - 3) + '...' : str;
  } 

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
        <strike>{truncateStr(currTodo.text, 36)}</strike>
        {renderButton()}
      </div>
    );
  } else {
	  return (
	    <div>
	      {renderToggleTodo()}
	      <span>{truncateStr(currTodo.text, 36)}</span>
	      {renderButton()}
	    </div>
	  );
	}

};

TodoItem.propTypes = {
	actions: PropTypes.object.isRequired,
	currTodo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

export default TodoItem;