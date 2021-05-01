import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {

  state = {
    eventCount: "",
    eventShown: 32,
    errorText: ''
  };

  handleOnChange = (e) => {

    const value = e.target.value;

    if (value < 0 || value > 32) {
      alert('1111');
      this.setState({
        errorText: 'Please enter a number between 1 - 32'
      });
      alert('2222');
    }

    if (value === 0 || value === "") {
      this.setState({
        eventShown: 32,
        eventCount: "",
        errorText: ''
      });
    }

    if (value > 0 && value <= 32) {

      this.setState({
        eventCount: value,
        eventShown: value,
        errorText: ''
      });
    }

    this.props.updateEvents("", value);

  };


  render() {

    return (
      <div className="NumberOfEvents my-5">
        <h3>Number of Results:</h3>
        <input
          type="number"
          name="numberOfEvents"
          className="number"
          onChange={this.handleOnChange}
          value={this.state.eventCount}
        />
        <ErrorAlert
          text={this.state.errorText}
        />
      </div>
    );
  }
}

export default NumberOfEvents;