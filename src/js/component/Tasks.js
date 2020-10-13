import React from "react";
import PropTypes from "prop-types";
import AddTask from "./AddTask";
import Task from "./Task";

const Tasks = props => {
	return (
		<ul className="list-group list-group-flush">
			<li className="list-group-item" key="addTask">
				<AddTask />
			</li>
			{props.tasks.map((task, i) => (
				<li className="list-group-item" key={i}>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.array
};

export { Tasks as default };
