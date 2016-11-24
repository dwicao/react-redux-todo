import React, { PropTypes } from 'react';

const AddTodo = (props) => {

  const { todos, actions } = props;

  const onAddTodo = (event) => {
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
    <div>
      <input
          type="text"
          placeholder="Add Todo"
          onKeyDown={onAddTodo} />
    </div>
  );
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default AddTodo;
