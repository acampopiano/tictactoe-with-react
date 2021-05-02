import React from 'react'
import PropTypes from "prop-types";
export const Announcement = (props) => {
    return (
        <div className={props.winner ? "visible":"hidden"}>
            <h2>Game Over</h2>            
        </div>
    )
}

Announcement.propTypes = {
    winner:PropTypes.string
}

