import React, {PropTypes} from 'react';

const TodoFilter = ({ todos, actions }) => {
	
	const _filter = filter => event => actions.setVisibilityFilter(filter);

	return (
		<div>
			<span>Show:</span>
			{' '}
			<button onClick={_filter('SHOW_ALL')}>All</button>
			<button onClick={_filter('SHOW_ACTIVE')}>Active</button>
			<button onClick={_filter('SHOW_COMPLETED')}>Completed</button>
		</div>
	);
}

export default TodoFilter;