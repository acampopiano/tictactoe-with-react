import React from "react";
import PropTypes from "prop-types";
export const GamePlayer = props => {
	return (
		<div className={props.winner ? "visible" : "hidden"}>
			<h2 className="text-center">
				{props.winner === "X" || props.winner === "O" ? (
					<span className="text-danger">{props.winner} WIN!</span>
				) : (
					<span className="text-danger">{props.winner}</span>
				)}
			</h2>
		</div>
	);
};

GamePlayer.propTypes = {
	winner: PropTypes.string
};
