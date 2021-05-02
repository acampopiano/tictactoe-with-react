import React from 'react'
import PropTypes from "prop-types";

export const Tile = (props) => {
    tileClick=(props)=>{
        props.updateBoard(props.loc, props.turn);
    }
    return (
        <div className={"tile " + props.loc} onClick={() => tileClick(props)}>
            <p>{props.value}</p>
        </div>
    )
}

