import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/todoActions';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

import '../styles/main.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <AddTodo {...this.props} />
        <TodoList {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
