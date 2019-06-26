import React from 'react';
import Axios from 'axios';
import DateInputForm from './DateInputForm.jsx';
import LineChart from './LineChart.jsx';

class App extends React.Component {
  constructor(props){
    super (props);

    this.state = {
      dates: [],
      values: []
    };
    
    this.getDataForUserInputDates = this.getDataForUserInputDates.bind(this);
  }

  componentDidMount() {
    this.getDataForUserInputDates('2018-12-01', '2018-12-31');
  }

  getDataForUserInputDates(start, end) {
    Axios.get(`http://localhost:3000/api/history?start=${start}&end=${end}`)
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
        <DateInputForm getDataForUserInputDates={this.getDataForUserInputDates}/>
        <div>
            {this.state.dates.length > 1 && 
              <LineChart dates={this.state.dates} values={this.state.values} />
            }
        </div>
      </div>
    )
  }
}

export default App;
