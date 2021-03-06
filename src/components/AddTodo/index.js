import React, { PropTypes } from 'react';

const AddTodo = (props) => {
  const {
    todos,
    actions
  } = props;

  const _onAddTodo = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      actions.addTodo(text);
      input.value = '';
    }
  }

  return (
    <div className="AddTodo_container">
      <input
        className="AddTodo"
        type="text"
        placeholder="Add an item..."
        maxLength={40}
        onKeyDown={_onAddTodo} />
    </div>
  );
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default AddTodo;
