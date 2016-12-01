import React, {PropTypes} from 'react';
import ToggleTodo from './ToggleTodo';
import ButtonEditAndRemove from './ButtonEditAndRemove';
import EditTodo from './EditTodo';

const TodoItem = (props) => {
	const {
		actions,
		currTodo,
		index
	} = props;

  const truncateStr = (str, len) => {
    return str.length > len ? str.substring(0, len - 3) + '...' : str;
  };

  if(currTodo.isEditing) {
    return <EditTodo {...props} />
  }

	const Tag = currTodo.isDone ? 'strike' : 'span';

  return (
    <div className="TodoItem">
			<ToggleTodo
				isDone={currTodo.isDone}
				todoId={currTodo.id}
				{...props} />
      <Tag className="TextTodo">
				{truncateStr(currTodo.text, 36)}
			</Tag>
			<ButtonEditAndRemove
				todoId={currTodo.id}
				{...props} />
    </div>
  );
};

TodoItem.propTypes = {
	actions: PropTypes.object.isRequired,
	currTodo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

export default TodoItem;
