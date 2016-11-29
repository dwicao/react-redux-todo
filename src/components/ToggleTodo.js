import React, {PropTypes} from 'react';

const ToggleTodo = (props) => {
	const {
		isDone,
		todoId,
		actions
	} = props;

	const _toggleClick = id => event => actions.toggleTodo(id);

	if(isDone) {
		return <button onClick={_toggleClick(todoId)}>&#9745;</button>;
	} else {
		return <button onClick={_toggleClick(todoId)}>&#9744;</button>;
	}

};

ToggleTodo.propTypes = {
	isDone: PropTypes.bool.isRequired,
	todoId: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default ToggleTodo;
