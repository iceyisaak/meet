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

    const { event } = this.props;

    return (
      <div className="Event">
        <h1>{event.summary}</h1>
        <p>{event.start.dateTime} ({event.timeZone})</p>
        <p>@{event.summary} | {event.location}</p>
        <p className={
          this.state.showDetails ?
            "event__description--show" :
            "event__description--hide"
        }>
          {this.props.event.description}
        </p>
        <button
          className={
            this.state.showDetails ?
              "button__show-details" :
              "button__hide-details"
          }
          onClick={() => !this.handleButtonClicked()}
        >
          {
            this.state.showDetails ?
              'Hide Details' :
              'Show Details'
          }
        </button>
      </div>
    );
  }
}

export default Event;
