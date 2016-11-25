import React, {PropTypes} from 'react';

const FilterLink = (props) => {

	const { filter, visibilityFilter, actions, children } = props;

	const _handleClick = event => {
		event.preventDefault();
		actions.setVisibilityFilter(filter);
	};

	if(filter === visibilityFilter) {
		return <span>{children}</span>;
	}

	return (
		<a href="#"
			onClick={_handleClick}>
			{children}
		</a>
	);
}

FilterLink.propTypes = {
	filter: PropTypes.string.isRequired,
	visibilityFilter: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
	children: PropTypes.string.isRequired
};

export default FilterLink;