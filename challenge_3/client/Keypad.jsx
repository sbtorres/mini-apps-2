import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th colSpan="3">Input Score</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td colSpan="3">10</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Keypad;