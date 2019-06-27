import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import Keypad from './Keypad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Scoreboard />
        <Keypad />
      </div>
    )
  }
}

export default App;
