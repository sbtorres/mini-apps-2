import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props){
    super (props);

    this.state = {
      historicalData: {}
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/history')
      .then((historicalData) => {
        this.setState({
          historicalData: historicalData.data
        })
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div>Test!</div>
    )
  }
}

export default App;
