import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import HistoricalEventsList from './HistoricalEventsList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historicalEvents: [],
    };
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(queryString) {
    axios.get(`http://localhost:3000/events?q=${queryString}`)
      .then((results) => {
        this.setState({
          historicalEvents: results.data,
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <Search getSearchResults={this.getSearchResults} />
        <div>
          {this.state.historicalEvents.length > 0 && 
            <HistoricalEventsList historicalEvents={this.state.historicalEvents}/>
          }
        </div>
      </div>
    )
  }
}

export default App;