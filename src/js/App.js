import React, { useState, useEffect } from "react";

import { GamePlayer } from "./component/GamePlayer.jsx";
import { ResetButton } from "./component/ResetButton.jsx";
import { GameBoard } from "./component/GameBoard.jsx";
import { PlayerTurn } from "./component/PlayerTurn.jsx";
export const App = () => {
	const [gameBoard, setGameBoard] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]); //estos espacios
	const [playerTurn, setPlayerTurn] = useState("X");
	const [winner, setWinner] = useState(null);

	const updateBoard = (loc, player) => {
		if (gameBoard[loc] === "X" || gameBoard[loc] === "O" || winner) return; //invalid move
		let currentGameBoard = gameBoard;
		currentGameBoard.splice(loc, 1, playerTurn);
		setGameBoard(currentGameBoard);

		let topRow = gameBoard[0] + gameBoard[1] + gameBoard[2];
		if (topRow.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let middleRow = gameBoard[3] + gameBoard[4] + gameBoard[5];
		if (middleRow.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let bottomRow = gameBoard[6] + gameBoard[7] + gameBoard[8];
		if (bottomRow.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let leftColumn = gameBoard[0] + gameBoard[3] + gameBoard[6];
		if (leftColumn.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let middleColumn = gameBoard[1] + gameBoard[4] + gameBoard[7];
		if (middleColumn.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let rightColumn = gameBoard[2] + gameBoard[5] + gameBoard[8];
		if (rightColumn.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let leftDiag = gameBoard[0] + gameBoard[4] + gameBoard[8];
		if (leftDiag.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let rightDiag = gameBoard[2] + gameBoard[4] + gameBoard[6];
		if (rightDiag.match(/XXX|OOO/)) {
			setWinner(winner => playerTurn);
			return;
		}
		let moves = gameBoard.join("").replace(/ /g, "");
		if (moves.length === 9) setWinner(winner => "No Winners");

		setPlayerTurn(playerTurn => (player === "X" ? "O" : "X"));
	};
	const resetBoard = () => {
		setGameBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
		setPlayerTurn("X");
		setWinner(null);
	};
	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Tic-Tac-Tow With React</h1>
				{!winner} ?{" "}
				<PlayerTurn playerTurn={playerTurn} winner={winner} />:
				<GamePlayer winner={winner} />
				<div className="d-flex justify-content-center">
					<ResetButton reset={resetBoard} />
				</div>
			</div>
			<div className="game-board mt-3">
				{gameBoard.map((item, i) => (
					<GameBoard
						key={i}
						loc={i}
						turn={playerTurn}
						value={item}
						updateBoard={updateBoard}
					/>
				))}
			</div>
		</div>
	);
};
