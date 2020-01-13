import React from 'react';
import './store.css';

function Store() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='storeContainer'>
      <div className='innerStore'>
        {count}
      </div>
    </div>
  )
}

export default Store;
