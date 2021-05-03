import React from "react";
import PropTypes from "prop-types";
export const GamePlayer = props => {
	return (
		<div className={props.winner ? "visible" : "hidden"}>
			<h2 className="text-center">
				Ganador: Player {props.winner} Game Over
			</h2>
		</div>
	);
};

GamePlayer.propTypes = {
	winner: PropTypes.string
};
