import React, {PropTypes} from 'react';
import IconCheck from '../../../icons/check.svg';
import IconUncheck from '../../../icons/uncheck.svg';

const ToggleTodo = (props) => {
	const {
		isDone,
		todoId,
		actions
	} = props;

	const _toggleClick = id => event => actions.toggleTodo(id);

	const isCompleted = isDone ?
			<IconCheck className="IconCheck IconSvg" />
		:
			<IconUncheck className="IconUncheck IconSvg" />;

	return (
		<div className="ToogleTodoButton_container">
			<button
				className="ToogleTodoButton"
				onClick={_toggleClick(todoId)}>
					{isCompleted}
			</button>
		</div>
	);
};

ToggleTodo.propTypes = {
	isDone: PropTypes.bool.isRequired,
	todoId: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default ToggleTodo;
