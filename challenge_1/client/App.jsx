import React from 'react';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(queryString) {
    console.log(queryString);
  }

  render() {
    return (
      <Search getSearchResults={this.getSearchResults} />
    )
  }
}

export default App;