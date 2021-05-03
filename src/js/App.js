import React, { useState, useEffect } from "react";

import { Announcement } from "./component/Announcement.jsx";
import { ResetButton } from "./component/ResetButton.jsx";
import { Tile } from "./component/Tile.jsx";

const App = () => {
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
	const [turn, setTurn] = useState("X");
	const [winner, setWinner] = useState("");

	const updateBoard = (loc, player) => {
		if (gameBoard[loc] === "X" || gameBoard[loc] === "O" || winner) return; //invalid move
		let currentGameBoard = gameBoard;
		currentGameBoard.splice(loc, 1, turn);
		setGameBoard({ gameBoard: currentGameBoard });
		let topRow = gameBoard[0] + gameBoard[1] + gameBoard[2];
		if (topRow.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let middleRow = gameBoard[3] + gameBoard[4] + gameBoard[5];
		if (middleRow.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let bottomRow = gameBoard[6] + gameBoard[7] + gameBoard[8];
		if (bottomRow.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let leftColumn = gameBoard[0] + gameBoard[3] + gameBoard[6];
		if (leftColumn.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let middleColumn = gameBoard[1] + gameBoard[4] + gameBoard[7];
		if (middleColumn.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let rightColumn = gameBoard[2] + gameBoard[5] + gameBoard[8];
		if (rightColumn.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let leftDiag = gameBoard[0] + gameBoard[4] + gameBoard[8];
		if (leftDiag.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let rightDiag = gameBoard[2] + gameBoard[4] + gameBoard[6];
		if (rightDiag.match(/XXX|OOO/)) {
			setWinner({ winner: turn });
			return;
		}
		let moves = gameBoard.join("").replace(/ /g, "");
		if (moves.length === 9) setWinner({ winner: "d" });
		setTurn({ turn: turn === "X" ? "O" : "X" });
	};
	const resetBoard = () => {
		setGameBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
		setTurn("X");
		setWinner("");
	};
	return (
		<div className="container">
			<div className="menu">
				<h1 className="text-center">Tic-Tac-Tow With React</h1>
				<Announcement winner={winner} />
				<div className="d-flex justify-content-center">
					<ResetButton reset={resetBoard} />
				</div>
			</div>
			<div className="game-board mt-3">
				{gameBoard.map((value, i) => (
					<Tile
						key={i}
						loc={i}
						value={value}
						updateBoard={updateBoard}
						turn={turn}
					/>
				))}
			</div>
		</div>
	);
};
export default App;
