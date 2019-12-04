import React, { Component } from "react";
import { connect } from "react-redux";
import { removetodo } from "../js/actions/removetodo";
import { completetodo } from "../js/actions/completetodo";
import { edittodo } from "../js/actions/edittodo";

class DoItem extends Component {
	constructor() {
		super();
		this.state = {
			done: false,
			editing: false,
			editValue: ""
		};
	}
	changebtn = e => {
		this.props.completetodo(e.target.id, this.state.done);
		this.setState({
			done: !this.state.done
		});
	};
	removeItem = e => {
		this.props.removetodo(e.target.id);
	};
	handleedit = e => {
		this.props.edittodo(e.target.id, this.state.editValue);
		this.setState({
			editing: !this.state.editing,
			editValue: this.props.el.input
		});
	};
	handlechangeedit = e => {
		this.setState({
			editValue: e.target.value
		});
	};
	render() {
		return (
			<div>
				<li>
					<span className={this.props.el.isDone ? "checked" : ""}>
						{this.props.el.input}
					</span>
					<span className='all-btn'>
						<button
							className='edit-btn'
							onClick={this.handleedit}
							id={this.props.el.id}>
							{this.state.editing ? "Save" : "Edit"}
						</button>

						<button
							className='add-btn'
							onClick={this.changebtn}
							id={this.props.el.id}>
							{this.props.el.isDone ? "undo" : "complete"}
						</button>
						<button
							className='add-btn'
							id={this.props.el.id}
							onClick={this.removeItem}>
							Delete
						</button>
					</span>
					<br />
					{this.state.editing && (
						<input
							type='text'
							className='editinput'
							id={this.props.el.id}
							value={this.state.editValue}
							onChange={this.handlechangeedit}></input>
					)}
				</li>
			</div>
		);
	}
}
const mapActionsToProps = {
	removetodo,
	completetodo,
	edittodo
};

const mapStateToProps = state => ({
	tasks: state.tasks
});
export default connect(mapStateToProps, mapActionsToProps)(DoItem);
