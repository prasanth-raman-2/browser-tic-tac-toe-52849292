import React from 'react';
import './GameBoard.css';

const GameBoard = ({ squares, onSquareClick }) => (
  <div className="game-board">
    {squares.map((square, i) => (
      <button
        key={i}
        className="square"
        onClick={() => onSquareClick(i)}
      >
        {square}
      </button>
    ))}
  </div>
);

export default GameBoard;
