import React, { Component } from 'react';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations } from './api';

import './App.css';
import './nprogress.css';
import 'tailwindcss/tailwind.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  };

  updateEvents = (location, eventCount) => {

    let eventLocations;

    getEvents()
      .then(
        (events) => {
          eventLocations = events;
          if (location === "all") {
            eventLocations = events;
          }
          if (location !== "all") {
            eventLocations = events.filter(
              (event) => (
                event.location === location
              )
            );
          }
          if (eventCount > 0) {
            eventLocations = events.slice(0, eventCount);
          }
          if (eventCount === 0 || eventCount === "") {
            eventLocations = events;
          }
          this.setState({
            events: eventLocations,
            eventCount
          });
        }
      );
  };

  componentDidMount() {
    this.mounted = true;
    getEvents()
      .then(
        (events) => {

          if (this.mounted) {
            this.setState({
              events,
              locations: extractLocations(events)
            });
          }

        }
      );
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {

    return (
      <div className="App" >
        <h1 className="text-5xl my-4">Meet</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
};

export default App;
