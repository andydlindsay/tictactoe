import { useState } from 'react';
import Square from './Square';

const Game = () => {
  const [currentTurn, setCurrentTurn] = useState('x');
  const [board, setBoard] = useState(Array(25).fill(''));

  const reset = () => {
    setCurrentTurn('x');
    setBoard(Array(25).fill(''));
  };

  const setPiece = (index) => {
    setBoard(board.map((el, i) => i === index ? currentTurn : el));
    switchTurn();
  };

  const switchTurn = () => {
    setCurrentTurn(currentTurn === 'x' ? 'o' : 'x');
  };

  const displayBoard = board.map((el, index) => {
    if ((index + 1) % 5 === 0) {
      return (<><Square setPiece={setPiece} value={el} index={index} key={index} /><br/></>);
    }
    return <Square setPiece={setPiece} value={el} index={index} key={index} />;
  });

  return (
    <div class="game">
      {displayBoard}
      <div>
        <button onClick={reset}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
