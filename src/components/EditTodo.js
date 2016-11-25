import React, { Component, PropTypes } from 'react';

export default class EditTodo extends Component {
	constructor(props) {
		super(props);

		this._onChange = this._onChange.bind(this);
		this._onApply = this._onApply.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);
	}

	_onChange(event) {
		const { actions, currTodo } = this.props;
    actions.editTodo(currTodo.id, event.target.value);
    event.target.value = currTodo.text;
  }

  _onApply() {
  	const { actions, currTodo } = this.props;
    actions.toggleEditTodo(currTodo.id);
  }

  _onKeyDown(event) {
  	const { actions, currTodo } = this.props;
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      actions.editTodo(currTodo.id, text);
      actions.toggleEditTodo(currTodo.id);
      return (
        <div>
          {renderToggleTodo()}
          <span>{currTodo.text}</span>
          {renderButton()}
        </div>
      );
    }
  }

	render() {
		return (
			<div>
				<input
          type="text"
          onKeyDown={this._onKeyDown}
          onChange={this._onChange}
          value={this.props.value} />
        <button onClick={this._onApply}>Apply</button>
			</div>
		);
	}
}