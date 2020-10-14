import React from "react";
import PropTypes from "prop-types";

class DeleteTask extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteTask = this.handleDeleteTask.bind(this);
	}

	handleDeleteTask(e) {
		this.props.handleDeleteTask(e.target.id);
	}

	render() {
		return (
			<>
				<button
					id={this.props.taskId}
					className="remove-task"
					onClick={this.handleDeleteTask}>
					X
				</button>
			</>
		);
	}
}

DeleteTask.propTypes = {
	handleDeleteTask: PropTypes.func,
	taskId: PropTypes.number
};

export { DeleteTask as default };
