import React, {PropTypes} from 'react';
import ToggleTodo from './ToggleTodo';
import ButtonEditAndRemove from './ButtonEditAndRemove';
import EditTodo from './EditTodo';

const TodoItem = (props) => {
	const { actions, currTodo, index } = props;

  const truncateStr = (str, len) => {
    return str.length > len ? str.substring(0, len - 3) + '...' : str;
  };

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

  if(currTodo.isEditing){
    return <EditTodo {...props} />
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
