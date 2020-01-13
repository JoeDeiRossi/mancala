import React from 'react';
import Store from '../store/Store';
import Pit from '../pit/Pit';
import './board.css';

function Board() {
  const p2Style = {
    'flexDirection': 'row-reverse'
  }

  const pitNumbers = [6, 5, 4, 3, 2, 1];
  const pits = pitNumbers.map((number) =>
    <Pit key={number}>
      {number}
    </Pit>
  );

  return (
    <div className='board'>
      <Store />
      <div className="pitsContainer player2">
        <div className="flexContainer" style={p2Style}>
          {pits}
        </div>
      </div>
      <div className="pitsContainer player1">
        <div className="flexContainer">
          {pits}
        </div>
      </div>
      <Store />
    </div>
  )
}

export default Board;
