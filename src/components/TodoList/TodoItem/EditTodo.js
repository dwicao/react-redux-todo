import React, { PropTypes } from 'react';
import ClickOutside from 'react-click-outside';
import IconCancel from '../../../icons/cancel.svg';

const EditTodo = (props) => {
  const {
    actions,
    currTodo,
    index
  } = props;

	let todoInputForm;

  const _onApply = () => {
		const text = todoInputForm.value;

		if(text.length > 0) {
			actions.editTodo(currTodo.id, text);
			actions.toggleEditTodo(currTodo.id);
		} else {
			actions.toggleEditTodo(currTodo.id);
		}
  };

  const _onKeyDown = event => {
    const text = event.target.value;
    const isEnterKey = (event.which === 13);
    const isEmpty = text.length === 0;

    if(!isEmpty && isEnterKey) {
      actions.editTodo(currTodo.id, text);
      actions.toggleEditTodo(currTodo.id);
    }

    if(isEmpty && isEnterKey) {
      actions.toggleEditTodo(currTodo.id);
    }
  };

  return (
    <ClickOutside
      className="EditTodo_container"
      onClickOutside={_onApply} >
      <input
        className="EditTodo_input"
        type="text"
        maxLength={40}
        onKeyDown={_onKeyDown}
        defaultValue={currTodo.text}
        ref={ el => todoInputForm = el } />
      <div>
        <button
          className="EditTodo_button"
          onClick={_onApply}>
            <IconCancel className="IconCancel IconSvg" />
        </button>
      </div>
    </ClickOutside>
  );
};

EditTodo.propTypes = {
	actions: PropTypes.object.isRequired,
	currTodo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

export default EditTodo;
