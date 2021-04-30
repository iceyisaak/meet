import React, { Component } from 'react';
import './Event.css';

class Event extends Component {

  state = {
    showDetails: false
  };

  handleButtonClicked = () => {
    this.setState(state => ({
      showDetails: !state.showDetails
    }));
  };


  render() {

    const { event } = this.props;

    return (
      <div className="event pb-1">
        <h1 className="text-5xl my-2">{event.summary}</h1>
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
            `
            bg-blue-700
            text-white  
              my-4 
              px-4
              py-2 
              rounded-md 
            ${this.state.showDetails ?
              "button__show-details" :
              "button__hide-details"
            }`
          }
          onClick={() => this.handleButtonClicked()}
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
