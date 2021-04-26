import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    eventCount: "",
    eventShown: 32
  };

  handleOnChange = (e) => {

    const value = e.target.value;

    if (value === 0 || value < 0 || value === "") {
      this.setState({
        eventShown: 32,
        eventCount: ""
      });
    }

    if (value > 0) {

      this.setState({
        eventCount: value,
        eventShown: value
      });
    }

    this.props.updateEvents("", value);

  };


  render() {

    return (
      <div className="NumberOfEvents">
        <label>Number of Events</label>
        <input
          type="number"
          name="numberOfEvents"
          className="number"
          onChange={this.handleOnChange}
          value={this.state.eventCount}
        />
      </div>
    );
  }
}

export default NumberOfEvents;