import React, {PropTypes} from 'react';
import IconEdit from '../../../icons/edit.svg';
import IconDelete from '../../../icons/delete.svg';

const ButtonEditAndRemove = (props) => {
	const {
		todoId,
		index,
		actions
	} = props;

	const _removeTodo = id => event => actions.removeTodo(id);

  const _toggleEdit = id => event => actions.toggleEditTodo(id);

	return (
		<span className="ButtonEditAndRemove_container">
      <button className="ToggleEditButton" onClick={_toggleEdit(todoId)}>
        <IconEdit className="IconEdit IconSvg" />
      </button>
      <button className="RemoveTodoButton" onClick={_removeTodo(todoId)}>
        <IconDelete className="IconDelete IconSvg" />
      </button>
    </span>
	);
};

ButtonEditAndRemove.propTypes = {
	todoId: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

export default ButtonEditAndRemove;
