import React from "react";
import PropTypes from "prop-types";

export const Tile = props => {
	function tileClick(props) {
		props.updateBoard(props.loc, props.turn);
	}
	return (
		<div className="box" onClick={() => tileClick(props)}>
			{props.value}
		</div>
	);
};

Tile.propTypes = {
	loc: PropTypes.number,
	turn: PropTypes.string,
	value: PropTypes.string,
	updateBoard: PropTypes.func
};
