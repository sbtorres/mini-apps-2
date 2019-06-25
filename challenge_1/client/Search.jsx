import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput (event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

  render() {
    return (
      <form>
        <label> Search: 
          <input type="text" name="search" onChange={this.handleUserInput} />
        </label>
      </form>
    )
  }
}

export default Search;