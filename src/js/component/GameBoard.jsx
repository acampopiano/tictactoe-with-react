import React from "react";
import PropTypes from "prop-types";

export const GameBoard = props => {
	const gameClick = props => {
		props.updateBoard(props.loc, props.turn);
	};
	return (
		<div
			key={`${props.loc}`}
			className="box"
			onClick={() => gameClick(props)}>
			{props.value}
		</div>
	);
};

GameBoard.propTypes = {
	loc: PropTypes.number,
	turn: PropTypes.string,
	value: PropTypes.string,
	updateBoard: PropTypes.func
};
