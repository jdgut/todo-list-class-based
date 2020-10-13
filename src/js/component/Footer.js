import React from "react";

const Footer = props => {
	return (
		<>
			<div className="footer">
				{props.length} {props.length > 1 ? `items` : `item`} left
			</div>
		</>
	);
};

export { Footer as default };
