import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import HistoricalEventsList from './HistoricalEventsList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostRecentQuery: '',
      historicalEvents: [],
      pageCount: 0,
    };
    this.getSearchResults = this.getSearchResults.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getSearchResults(queryString, offset = 1) {
    axios.get(`http://localhost:3000/events/?q=${queryString}&_page=${offset}`)
      .then((results) => {
        this.setState({
          mostRecentQuery: queryString,
          historicalEvents: results.data,
          pageCount: results.headers["x-total-count"] / 10,
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  handlePageClick(data) {
    let selected = data.selected;
    this.setState(() => {
      this.getSearchResults(this.state.mostRecentQuery, selected);
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
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default App;