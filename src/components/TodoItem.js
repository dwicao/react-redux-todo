import React, {PropTypes} from 'react';
import ToggleTodo from './ToggleTodo';
import EditTodo from './EditTodo';
import ButtonEditAndRemove from './ButtonEditAndRemove';

const TodoItem = (props) => {
	const { actions, currTodo, index } = props;

  const truncateStr = (str, len) => {
    return str.length > len ? str.substring(0, len - 3) + '...' : str;
  }

  const _onApply = () => {
		if(currTodo.text.length > 0) {
    	actions.toggleEditTodo(currTodo.id);
		} else {
			return;
		}
  }

  const renderToggleTodo = () => (
    <ToggleTodo
      isDone={currTodo.isDone}
      todoId={currTodo.id}
      {...props} />
  );

  const renderButton = () => (
    <ButtonEditAndRemove
      todoId={currTodo.id}
      {...props} />
  );

  const _onKeyDown = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isEmpty = text.length === 0;

		if(isEmpty && isEnterKey) {
			actions.toggleEditTodo(currTodo.id);
		}

    if(!isEmpty && isEnterKey) {
      actions.editTodo(currTodo.id, text);
      actions.toggleEditTodo(currTodo.id);
    }
  }

  if(currTodo.isEditing){
    return (
      <div>
        <input
          type="text"
          onKeyDown={_onKeyDown}
					defaultValue={currTodo.text} />
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
