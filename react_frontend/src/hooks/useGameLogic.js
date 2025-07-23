import { useState } from 'react';

export const useGameLogic = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  
  const getCurrentBoard = () => history[stepNumber];
  
  const makeMove = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current];
    squares[index] = stepNumber % 2 === 0 ? 'X' : 'O';
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
  };
  
  return { getCurrentBoard, makeMove, stepNumber };
};
