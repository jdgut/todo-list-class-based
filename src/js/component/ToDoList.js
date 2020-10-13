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
	}

	render() {
		return (
			<>
				<div className="container">
					<Header title="todos" />
					<div className="card">
						<Tasks tasks={this.state.tasks} />
						<Footer length={this.state.tasks.length} />
					</div>
				</div>
			</>
		);
	}
}

export { ToDoList as default };
