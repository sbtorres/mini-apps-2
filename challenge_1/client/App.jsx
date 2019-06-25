import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(queryString) {
    axios.get(`http://localhost:3000/events?q=${queryString}`)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <Search getSearchResults={this.getSearchResults} />
    )
  }
}

export default App;