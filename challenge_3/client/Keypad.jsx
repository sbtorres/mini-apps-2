import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };

    this.handleKeypadClick = this.handleKeypadClick.bind(this);
  }

  handleKeypadClick(event) {
    let inputScore = event.target.getAttribute('name');
    this.setState({
      score: inputScore
    })
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th colSpan="3">Input Score</th>
            </tr>
            <tr>
              <td name="1" onClick={this.handleKeypadClick}>1</td>
              <td name="2" onClick={this.handleKeypadClick}>2</td>
              <td name="3" onClick={this.handleKeypadClick}>3</td>
            </tr>
            <tr>
            <td name="4" onClick={this.handleKeypadClick}>4</td>
            <td name="5" onClick={this.handleKeypadClick}>5</td>
            <td name="6" onClick={this.handleKeypadClick}>6</td>
            </tr>
            <tr>
            <td name="7" onClick={this.handleKeypadClick}>7</td>
            <td name="8" onClick={this.handleKeypadClick}>8</td>
            <td name="9" onClick={this.handleKeypadClick}>9</td>
            </tr>
            <tr>
            <td colSpan="3" name="10" onClick={this.handleKeypadClick}>10</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div>
            {this.state.score !== 0 &&
              <div>
                <span>Input Score: {this.state.score}</span>
                <button >Submit Score!</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Keypad;