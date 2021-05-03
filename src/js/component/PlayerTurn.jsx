import React from "react";
import PropTypes from "prop-types";
export const PlayerTurn = props => {
	return (
		<div className={props.winner ? "hidden" : "visible"}>
			<h2 className="text-center">Turno: Player {props.playerTurn}</h2>
		</div>
	);
};

PlayerTurn.propTypes = {
	playerTurn: PropTypes.string,
	winner: PropTypes.string
};
