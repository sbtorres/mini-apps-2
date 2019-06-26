import React from 'react';

class DateInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '',
      end: '',
      areValidDates: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  handleUserInput(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    })
  }

  handleSubmitButtonClick() {
    const { getDataForUserInputDates } = this.props;
    if (this.state.start < this.state.end) {
      getDataForUserInputDates(this.state.start, this.state.end);
      this.setState({
        areValidDates: true
      })
    } else {
      this.setState({
        areValidDates: false
      })
    }
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
        <button onClick={this.handleSubmitButtonClick}>Submit</button>
        <div>
          {!this.state.areValidDates &&
            <div className="error-message">End date is prior to start date, please re-enter valid dates.</div> 
          }
        </div>
      </div>
    )
  }
}

export default DateInputForm;