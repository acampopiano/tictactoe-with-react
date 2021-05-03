import React, { useState, useEffect, Component } from 'react'
import { element } from 'prop-types';
import Announcement from './component/Announcement';
import ResetButton from './omponent/ResetButton';
import Tile from './component/Tile';

const App = () => {
    const [gameBoard, setGameBoard] = useState([
        ' ', ' ', ' ' ,
        ' ', ' ', ' ', 
        ' ', ' ', ' ']); //estos espacios
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");

    const updateBoard=(loc, player)=>{
        
    }  
    const resetBoard= ()=>{

    }  
    return (
        <div className="container">
            <div className="menu">
                <h1>Tic-Tac-Tow With React</h1>
                <Announcement winner={winner} />
                <ResetButton reset={resetBoard} />
            </div>
            {gameBoard.map((value, i) =>{
                <Tile
                key={i}
                loc={i}
                value={value}
                updateBoard={updateBoard}
                turn={turn}
                />
            })}
        </div>
    )
}

export default App
