import React from 'react';
import './pit.css';

function Pit() {
  const [count, setCount] = React.useState(4);

  const selectPit = () => {
    console.log('pit clicked');
  }

  return (
    <div className="pit">
      <div className="innerPit" onClick={selectPit}>
        {count}
      </div>
    </div>
  )
}

export default Pit;
