export const isGameOver = (squares) => {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winningCombos.some(combo => 
    squares[combo[0]] && 
    squares[combo[0]] === squares[combo[1]] && 
    squares[combo[1]] === squares[combo[2]]
  );
};
