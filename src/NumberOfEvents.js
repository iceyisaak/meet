import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: "",
    defaultNumberOfEvents: 32,
    numberOfEventsShown: ""
  };

  handleOnChange = (e) => {
    const value = e.target.value;

    this.setState({
      numberOfEvents: value,
      numberOfEventsShown: value
    });

    if (this.state.numberOfEvents === "") {
      this.setState({
        numberOfEventsShown: this.state.defaultNumberOfEvents
      });
    }
  };


  render() {

    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number"
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;