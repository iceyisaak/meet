import React, { Component } from 'react';

class Event extends Component {

  state = {
    showDetails: false
  };

  handleButtonClicked = () => {
    this.setState({
      showDetails: true
    });
  };


  render() {

    return (
      <div className="Event">
        <h1>{this.props.event.summary}</h1>
        <p>{this.props.event.start.dateTime} ({this.props.event.timeZone}) </p>
        <p>@{this.props.event.summary} | {this.props.event.location}</p>
        <button
          className={
            this.showDetails ?
              "button__show-details" :
              "button__hide-details"
          }
          onClick={() => !this.handleButtonClicked()}
        >
          {
            this.showDetails ?
              'Show Details' :
              'Hide Details'
          }
        </button>
      </div>
    );
  }
}

export default Event;
