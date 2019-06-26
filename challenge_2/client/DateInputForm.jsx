import React from 'react';

class DateInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '',
      end: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    })
  }

  render() {
    return (
      <div className="date-input-container">
        <form className="start-date-input">
          <label> Start Date: 
            <input type="text" name="start" value={this.state.start} onChange={this.handleUserInput} />
          </label>
        </form>
        <form className="end-date-input">
          <label> End Date: 
            <input type="text" name="end" value={this.state.end} onChange={this.handleUserInput} />
          </label>
        </form>
      </div>
    )
  }
}

export default DateInputForm;