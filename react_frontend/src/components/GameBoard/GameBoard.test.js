import { render, fireEvent } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  test('renders squares with correct values', () => {
    const squares = Array(9).fill(null);
    const onSquareClick = jest.fn();
    const { container } = render(
      <GameBoard squares={squares} onSquareClick={onSquareClick} />
    );
    expect(container.getElementsByClassName('square')).toHaveLength(9);
  });
});
