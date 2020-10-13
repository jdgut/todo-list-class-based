import React from "react";

class AddTask extends React.Component {
	render() {
		return (
			<>
				<input
					type="text"
					placeholder="What needs to be done?"
					width="100%"
				/>
			</>
		);
	}
}

export { AddTask as default };
