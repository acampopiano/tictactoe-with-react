import React from "react";
import PropTypes from "prop-types";
export const ResetButton = props => {
	return (
		<button className="btn btn-primary m-auto" onClick={props.reset}>
			Reset Game
		</button>
	);
};

ResetButton.propTypes = {
	reset: PropTypes.func
};
