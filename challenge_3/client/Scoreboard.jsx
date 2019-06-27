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
        [0, 0, 0]
      ],
      total: 0,
      currentTurn: 0,
      isValidScore: true
    };

    this.handleScoreInput = this.handleScoreInput.bind(this);
    this.determineFrame = this.determineFrame.bind(this);
    this.determineNextTurn = this.determineNextTurn.bind(this);
  }

  handleScoreInput(nextScore) {
    let frame = this.determineFrame();
    let newBoard = this.state.player1;
    if (frame[1] === 1 && (nextScore + newBoard[frame[0]][0] > 10)) {
      this.setState({
        isValidScore: false
      })
    } else {
      newBoard[frame[0]][frame[1]] = nextScore;
      let updatedTotal = this.state.total + nextScore;
      let nextTurn = this.determineNextTurn(nextScore);
      this.setState({
        player1: newBoard,
        total: updatedTotal,
        currentTurn: nextTurn,
        isValidScore: true
      });
    }
  }

  determineFrame() {
    let currentTurn = this.state.currentTurn;
    let framePlacement = 1 + Math.floor(currentTurn / 2);
    let ballPlacement = currentTurn % 2;
    return [framePlacement, ballPlacement];
  }

  determineNextTurn(score) {
    if (this.state.currentTurn % 2 === 0 && score === 10) {
      return this.state.currentTurn + 2;
    } else {
      return this.state.currentTurn + 1;
    }
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
        <div>
          {!this.state.isValidScore && 
            <div>Not a valid score submission, total pins per frame cannot be greater than 10. Please re-input valid score.</div>
          }
        </div>
      </div>
    )
  }
}

export default Scoreboard;