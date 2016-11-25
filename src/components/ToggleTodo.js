import React, {PropTypes} from 'react';

const ToggleTodo = ({ isDone, todoId, actions }) => {
	
	const _toggleClick = id => event => actions.toggleTodo(id);

	if(isDone) {
		return <button onClick={_toggleClick(todoId)}>&#9745;</button>;
	}

	return <button onClick={_toggleClick(todoId)}>&#9744;</button>;
};

ToggleTodo.propTypes = {
	isDone: PropTypes.bool.isRequired,
	todoId: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default ToggleTodo;