import React, {PropTypes} from 'react';

const ToggleTodo = (props) => {
	const {
		isDone,
		todoId,
		actions
	} = props;

	const _toggleClick = id => event => actions.toggleTodo(id);

	if(isDone) {
		return (
			<div>
				<button
					className="ToogleTodoButton"
					onClick={_toggleClick(todoId)}>
					&#9745;
				</button>
			</div>
		);
	} else {
		return (
			<div>
				<button
					className="ToogleTodoButton"
					onClick={_toggleClick(todoId)}>
					&#9744;
				</button>
			</div>
		);
	}

};

ToggleTodo.propTypes = {
	isDone: PropTypes.bool.isRequired,
	todoId: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default ToggleTodo;
