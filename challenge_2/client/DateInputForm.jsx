import React from 'react';

class DateInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <label> Start Date: 
            <input type="text" name="start" value={this.state.start} />
          </label>
        </form>
        <form>
          <label> End Date: 
            <input type="text" name="start" value={this.state.start} />
          </label>
        </form>
      </div>
    )
  }
}

export default DateInputForm;