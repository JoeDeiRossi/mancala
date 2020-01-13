import React from 'react';
import './store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className='storeContainer'>
        <div className='innerStore'>
          {this.state.count}
        </div>
      </div>
    )
  }
}

export default Store;
