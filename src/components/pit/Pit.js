import React from 'react';
import './pit.css';

function Pit() {
  const [count, setCount] = React.useState(4);

  return (
    <div className="pit">
      <div className="innerPit" onClick={() => console.log('pit clicked')}>
        {count}
      </div>
    </div>
  )
}

export default Pit;
