import React, {PropTypes} from 'react';

const ButtonEditAndRemove = (props) => {
	const {
		todoId,
		index,
		actions
	} = props;

	const _removeTodo = index => event => actions.removeTodo(index);

  const _toggleEdit = id => event => actions.toggleEditTodo(id);

	return (
		<span>
      <button className="ToggleEditButton" onClick={_toggleEdit(todoId)}>&#8230;</button>
      <button className="RemoveTodoButton" onClick={_removeTodo(index)}>&times;</button>
    </span>
	);
};

ButtonEditAndRemove.propTypes = {
	todoId: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

export default ButtonEditAndRemove;
