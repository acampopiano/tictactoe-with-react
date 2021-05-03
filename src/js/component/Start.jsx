import React from "react";
import PropTypes from "prop-types";

export const Start = props => {
	return (
		<div
			className={
				props.playerName1 && props.playerName2 ? "visible" : "hidden"
			}>
			<div className="row mt-3 mb-3">
				<form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                </form>
			</div>
		</div>
	);
};

Start.propTypes = {
	playerName1: PropTypes.string,
	playerName2: PropTypes.string
};
