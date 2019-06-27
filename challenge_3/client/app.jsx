import React from 'react';
import Scoreboard from './Scoreboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Scoreboard />
      </div>
    )
  }
}

export default App;
