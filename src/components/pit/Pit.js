import React from 'react';
import './pit.css';

class Pit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4
    }
  }

  selectPit = () => {
    console.log('pit clicked');
    console.log(this);
  }

  render() {
    return (
      <div className="pit">
        <div className="innerPit" onClick={this.selectPit}>
          {this.state.count}
        </div>
      </div>
    )
  }
}

export default Pit;
