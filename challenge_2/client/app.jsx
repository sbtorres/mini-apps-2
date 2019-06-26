import React from 'react';
import Axios from 'axios';
import LineChart from './LineChart.jsx';

class App extends React.Component {
  constructor(props){
    super (props);

    this.state = {
      dates: [],
      values: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/history/dec2018')
      .then((historicalData) => {
        let data = historicalData.data
        let dates = [];
        let values = [];
        for (let key in data) {
          dates.push(key);
          values.push(data[key]);
        }
        this.setState({
          dates: dates,
          values: values,
        });
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div>
          {this.state.dates.length > 1 && 
            <LineChart dates={this.state.dates} values={this.state.values} />
          }
      </div>
    )
  }
}

export default App;
