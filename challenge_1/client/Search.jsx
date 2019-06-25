import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleUserInput (event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

  handleSearchButtonClick(event) {
    event.preventDefault();
    const { getSearchResults } = this.props;
    getSearchResults(this.state.search);
    this.setState({
      search: '',
    })
  }

  render() {
    return (
      <form>
        <label> Find Historical Events: 
          <input type="text" name="search" value={this.state.search} onChange={this.handleUserInput} />
        </label>
        <button onClick={this.handleSearchButtonClick}>Search!</button>
      </form>
    )
  }
}

export default Search;