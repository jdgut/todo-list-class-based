import React from "react";
import PropTypes from "prop-types";

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddTask = this.handleAddTask.bind(this);
	}

	handleAddTask(e) {
		if (e.keyCode === 13) {
			const task = e.target.value.trim();
			const error = this.props.handleAddTask(task);
			e.target.value = "";

			if (error) {
				alert(error);
			}
		}
	}

	render() {
		return (
			<>
				<input
					type="text"
					placeholder="What needs to be done?"
					width="100%"
					onKeyDown={this.handleAddTask}
				/>
			</>
		);
	}
}

AddTask.propTypes = {
	handleAddTask: PropTypes.func
};

export { AddTask as default };
