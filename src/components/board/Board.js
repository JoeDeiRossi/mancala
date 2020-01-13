import React from 'react';
import Store from '../store/Store';
import Pit from '../pit/Pit';
import './board.css';

function Board() {
  return (
    <div className='board'>
      <Store />
      <div className="pitsContainer player2">
        <div className="flexContainer">
          <Pit />
          <Pit />
          <Pit />
          <Pit />
          <Pit />
          <Pit />
        </div>
      </div>
      <div className="pitsContainer player1">
        <div className="flexContainer">
          <Pit />
          <Pit />
          <Pit />
          <Pit />
          <Pit />
          <Pit />
        </div>
      </div>
      <Store />
    </div>
  )
}

export default Board;
