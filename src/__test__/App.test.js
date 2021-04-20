import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe(
  '<App/> component',
  () => {

    let AppWrapper;

    beforeAll(
      () => {
        AppWrapper = shallow(
          <App />
        );
      }
    );

    test(
      'render list of events',
      () => {
        expect(
          AppWrapper
            .find(EventList)
        )
          .toHaveLength(1);
      }
    );

    test(
      'render CitySearch',
      () => {
        expect(
          AppWrapper
            .find(CitySearch)
        )
          .toHaveLength(1);
      }
    );

    test(
      'render number of events',
      () => {
        expect(
          AppWrapper
            .find(NumberOfEvents)
        )
          .toHaveLength(1);
      }
    );
  }
);


// Integration testing
describe(
  '<App/> integration',
  () => {

    let AppWrapper;

    beforeAll(
      () => {
        AppWrapper = mount(<App />);
      }
    );

    test('App passes "events" state as a prop to EventList',
      () => {
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState)
          .not
          .toEqual(undefined);
        expect(
          AppWrapper
            .find(EventList)
            .props()
            .events
        )
          .toEqual(AppEventsState);
        AppWrapper.unmount();
      }
    );


    test(
      'App passes "locations" to state as a prop to CitySearch',
      () => {
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState)
          .not
          .toEqual(undefined);
        expect(
          AppWrapper
            .find(CitySearch)
            .props()
            .locations
        )
          .toEqual(AppLocationsState);
        AppWrapper.unmount();
      }
    );

    // test(
    //   'get list of events matching the city selected by the user',
    //   async () => {

    //     const CitySearchWrapper = AppWrapper.find(CitySearch);
    //     const locations = extractLocations(mockData);

    //     CitySearchWrapper.setState({
    //       suggestions: locations
    //     });

    //     const suggestions = CitySearchWrapper.state('suggestions');
    //     const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    //     const selectedCity = suggestions[selectedIndex];

    //     await CitySearchWrapper.instance().handleItemClicked(selectedCity);

    //     const allEvents = await getEvents();
    //     const eventsToShow = allEvents.filter(
    //       (event) => event.location === selectedCity
    //     );

    //     expect(
    //       AppWrapper.state('events')
    //     )
    //       .toEqual(eventsToShow);

    //     AppWrapper.unmount();
    //   }
    // );
  }
);