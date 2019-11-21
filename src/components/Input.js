import React, { Component } from "react";

export default class Input extends Component {
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

	// twof = () => {
	// 	this.props.addItem(this.state.todo);
	// };
	render() {
		return (
			<div className='task-box'>
				<p className='title-box'>To-Do App!</p>
				<p>Add New To-Do</p>
				<input
					type='text'
					id='to-do'
					placeholder='Enter new task'
					// value={this.state.todo}
					onChange={this.handleDoChange}
				/>
				<br />
				<button
					className='add-btn'
					onClick={() => this.props.addItem(this.state.todo)}>
					Add
				</button>
			</div>
		);
	}
}
