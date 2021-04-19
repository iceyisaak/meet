import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 0,
    numberOfEventsShown: 32
  };

  handleOnChange = (e) => {
    const value = e.target.value;

    this.setState({
      numberOfEvents: value,
      numberOfEventsShown: value
    });

  };


  render() {

    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number"
          onChange={this.handleOnChange}
          value={this.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;