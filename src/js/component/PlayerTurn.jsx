import React from "react";
import PropTypes from "prop-types";
export const PlayerTurn = props => {
	return (
		<div className={props.playerTurn ? "visible" : "hidden"}>
			<h2 className="text-center">Turno: Player {props.playerTurn}</h2>
		</div>
	);
};

PlayerTurn.propTypes = {
	playerTurn: PropTypes.string
};
