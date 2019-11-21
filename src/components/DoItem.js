import React, { Component } from "react";
import { checkServerIdentity } from "tls";

export default class DoItem extends Component {
	constructor() {
		super();
		this.state = {
			done: false
		};
	}
	changebtn = () => {
		this.setState({
			done: !this.state.done
		});
	};
	render() {
		return (
			<div>
				<li>
					<span className={this.state.done ? "checked" : ""}>
						{this.props.item}
					</span>
					<button className='add-btn' onClick={this.changebtn}>
						{this.state.done ? "undo" : "complete"}
					</button>
					<button className='add-btn' onClick={this.props.removeItem}>
						Delete
					</button>
				</li>
			</div>
		);
	}
}
