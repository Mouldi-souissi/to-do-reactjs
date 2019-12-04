import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../js/actions/addtodo";

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ""
		};
	}
	handleDoChange = e => {
		this.setState({
			todo: e.target.value
		});
	};

	actionY = () => {
		this.props.actionX(this.state.todo, false, 0);
		this.setState({
			todo: ""
		});
	};

	render() {
		return (
			<div className='task-box'>
				<p className='title-box'>To-Do App!</p>
				<p>Add New To-Do</p>
				<input
					type='text'
					id='to-do'
					placeholder='Enter new task'
					onChange={this.handleDoChange}
					value={this.state.todo}
					// onChange={this.actionY}
				/>
				<br />
				<button
					className='add-btn'
					// onClick={() => this.props.addItem(this.state.todo)}>
					onClick={this.actionY}>
					Add
				</button>
			</div>
		);
	}
}

const mapActionsToProps = {
	actionX: addtodo
};

export default connect(null, mapActionsToProps)(Input);
