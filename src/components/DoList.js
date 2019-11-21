import React, { Component } from "react";
import DoItem from "./DoItem";

export default class DoList extends Component {
	render() {
		return (
			<div id='items'>
				<p id='title-items'>Let's get some work done!</p>
				<ul id='tasks'>
					{this.props.moh.map(el => (
						<DoItem
							item={el.desc}
							key={el.id}
							isDone={el.isDone}
							removeItem={() => this.props.removeItem(el.id)}
						/>
					))}
				</ul>
			</div>
		);
	}
}
