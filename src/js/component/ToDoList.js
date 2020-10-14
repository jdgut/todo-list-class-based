import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: ["Make the bed", "Do the dish"]
		};

		this.handleAddTask = this.handleAddTask.bind(this);
		this.handleDeleteTask = this.handleDeleteTask.bind(this);
	}

	handleAddTask(task) {
		if (!task) return "Invalid Task added";

		this.setState(prevState => {
			return {
				tasks: prevState.tasks.concat([task])
			};
		});
	}

	handleDeleteTask(id) {
		this.setState(prevState => {
			return {
				tasks: prevState.tasks.filter(
					task => task !== prevState.tasks[id]
				)
			};
		});
	}

	render() {
		return (
			<>
				<div className="container">
					<Header title="todos" />
					<div className="card">
						<Tasks
							tasks={this.state.tasks}
							handleAddTask={this.handleAddTask}
							handleDeleteTask={this.handleDeleteTask}
						/>
						<Footer length={this.state.tasks.length} />
					</div>
				</div>
			</>
		);
	}
}

export { ToDoList as default };
