import React, { Component } from 'react';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations } from './api';

import './App.css';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32
  };

  updateEvents = (location, eventCount) => {
    getEvents()
      .then(
        (events) => {
          const locationEvents = (location === "all") ?
            events :
            events.filter(
              (event) => (
                event.location === location
              )
            );
          this.setState({
            events: locationEvents
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
