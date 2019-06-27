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
      isValidScore: true,
      isGameOver: false,
    };

    this.handleScoreInput = this.handleScoreInput.bind(this);
    this.determineFrame = this.determineFrame.bind(this);
    this.determineNextTurn = this.determineNextTurn.bind(this);
    this.checkGameStatus = this.checkGameStatus.bind(this);
  }

  handleScoreInput(nextScore) {
    let frame = this.determineFrame();
    let newBoard = this.state.player1;
    if (this.state.currentTurn < 18 && frame[1] === 1 && (nextScore + newBoard[frame[0]][0] > 10)) {
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
        isValidScore: true,
      }, () => {
        this.checkGameStatus(); 
      });
    }
  }

  determineFrame() {
    let currentTurn = this.state.currentTurn;
    if (currentTurn === 20) {
      return [10, 2];
    } else {
      let framePlacement = 1 + Math.floor(currentTurn / 2);
      let ballPlacement = currentTurn % 2;
      return [framePlacement, ballPlacement];
    }
  }

  determineNextTurn(score) {
    if (this.state.currentTurn % 2 === 0 && score === 10) {
      return this.state.currentTurn + 2;
    } else {
      return this.state.currentTurn + 1;
    }
  }

  checkGameStatus() {
    let currentTurn = this.state.currentTurn;
    console.log(this.state.player1);
    let tenthFrameScore = this.state.player1[10][0] + this.state.player1[10][1]
    if (currentTurn > 19 && tenthFrameScore < 10) {
      this.setState({
        isGameOver: true,
      })
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
        <div>
          {this.state.isGameOver && 
            <div>
              <div>Nice game! Click "New Game" to start a new game!</div>
              <button>New Game!</button>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Scoreboard;