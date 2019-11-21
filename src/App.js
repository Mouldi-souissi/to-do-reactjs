import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import DoList from "./components/DoList";
import uuid from "uuid";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tasks: []
		};
	}
	addItem = parametreJayMenAppel => {
		let newState = this.state.tasks;
		newState.push({
			id: uuid(),
			desc: parametreJayMenAppel,
			isDone: false
		});
		this.setState({
			tasks: newState
		});
	};
	removeItem = id => {
		const filtered = this.state.tasks.filter(el => el.id !== id);
		this.setState({
			tasks: filtered
		});
	};
	render() {
		return (
			<div className='App'>
				<Input addItem={this.addItem} />
				<DoList
					moh={this.state.tasks}
					removeItem={this.removeItem}
					comItem={this.comItem}
				/>
			</div>
		);
	}
}
export default App;
