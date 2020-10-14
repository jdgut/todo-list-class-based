import React from "react";
import PropTypes from "prop-types";
import AddTask from "./AddTask";
import Task from "./Task";
import DeleteTask from "./DeleteTask";

class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		};
	}

	render() {
		return (
			<ul className="list-group list-group-flush">
				<li className="list-group-item" key="addTask">
					<AddTask handleAddTask={this.props.handleAddTask} />
				</li>
				{this.props.tasks.map((task, id) => (
					<li className="list-group-item" key={id}>
						<DeleteTask
							task={task}
							taskId={id}
							handleDeleteTask={this.props.handleDeleteTask}
						/>

						<Task task={task} />
					</li>
				))}
			</ul>
		);
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array,
	handleAddTask: PropTypes.func,
	handleDeleteTask: PropTypes.func
};

export { Tasks as default };
