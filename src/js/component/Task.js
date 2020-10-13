import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	return <>{props.task}</>;
};

Task.propTypes = {
	task: PropTypes.string
};

export { Task as default };
