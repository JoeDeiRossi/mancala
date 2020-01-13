import React from 'react';
import Store from '../store/Store';
import Pit from '../pit/Pit';
import './board.css';

function Board() {
  const p2Style = {
    'flexDirection': 'row-reverse'
  }

  const pitNumbers = [12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5, 6];
  const pits = pitNumbers.map(number => 
    <Pit key={number} pitId={number} />
  );

  return (
    <div className='board'>
      <Store />
      <div className="pitsContainer">
        <div className="flexContainer">
          {pits}
        </div>
      </div>
      <Store />
    </div>
  )
}

export default Board;
