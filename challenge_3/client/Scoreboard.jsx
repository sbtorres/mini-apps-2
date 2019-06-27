import React from 'react';
import FrameHeader from './FrameHeader.jsx';
import Frame from './Frame.jsx';
import Keypad from './Keypad.jsx';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: [
        'Scott',
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      total: 0
    };

    this.handleScoreInput = this.handleScoreInput.bind(this);
  }

  handleScoreInput(nextScore) {
    console.log(nextScore);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Player</th>
              <FrameHeader />
            </tr>
            <tr>
              {this.state.player1.map((tableRow, index) => {
                return(<Frame tableRow={tableRow} key={index}/>)
              })}
              <td>{this.state.total}</td>
            </tr>
          </tbody>
        </table>
        <Keypad handleScoreInput={this.handleScoreInput} />
      </div>
    )
  }
}

export default Scoreboard;