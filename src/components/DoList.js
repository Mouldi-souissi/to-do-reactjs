import React, { Component } from "react";
import DoItem from "./DoItem";
import { connect } from "react-redux";

class DoList extends Component {
	render() {
		return (
			<div id='items'>
				<p id='title-items'>Let's get some work done!</p>
				<ul id='tasks'>
					{this.props.tasks.map((el, i) => (
						<DoItem
							key={i}
							el={el}
							// id={i}
							// item={el.desc}
							// isDone={el.isDone}
							// removeItem={() => this.props.removeItem(el.id)							}
						/>
					))}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	tasks: state.tasks
});
export default connect(mapStateToProps)(DoList);
