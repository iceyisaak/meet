import React, { Component } from 'react';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';
import EventGenre from './EventGenre';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import './App.css';
import './nprogress.css';
import 'tailwindcss/tailwind.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    warningText: ''
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

  getData = () => {

    const {
      locations,
      events
    } = this.state;

    const data = locations.map(
      (location) => {

        const number = events.filter(
          (event) => event.location === location
        ).length;

        const city = location.split(' ').shift();
        return { city, number };

      }
    );

    return data;
  };

  componentDidMount() {
    this.mounted = true;

    if (!navigator.onLine) {
      this.setState({
        warningText: 'No Internet Connection'
      });
    }
    if (navigator.onLine) {
      this.setState({
        warningText: ''
      });
    }

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

        <h4>Events in each city</h4>

        <div className="data-vis-wrapper">

          <EventGenre
            events={this.state.events}
          />
          <ResponsiveContainer
            height={400}
          >
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >

              <CartesianGrid />

              <XAxis
                type='category'
                dataKey='city'
                name='city'
              />

              <YAxis
                type='number'
                dataKey='number'
                name='number of events'
              />

              <Tooltip
                cursor={{
                  strokeDasharray: '3 3'
                }}
              />

              <Scatter
                data={this.getData()}
                fill='#8884d8'
              />

            </ScatterChart >
          </ResponsiveContainer>
        </div>

        {
          !navigator.onLine ?
            <WarningAlert text={this.state.warningText} />
            :
            < EventList events={this.state.events} />
        }

      </div >
    );
  }
};

export default App;
