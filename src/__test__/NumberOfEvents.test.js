import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

// Feature 3: Specify the number of events
describe(
  '<NumberOfEvents/> component',
  () => {

    let NumberOfEventsWrapper;

    beforeAll(
      () => {
        NumberOfEventsWrapper = shallow(
          <NumberOfEvents />
        );
      }
    );

    test(
      'render number input',
      () => {
        expect(
          NumberOfEventsWrapper.find('.number')
        )
          .toHaveLength(1);
      }
    );

    // Scenario 1: Set 32 as default number of events
    test(
      'render number of events as 32 by default',
      () => {
        expect(
          NumberOfEventsWrapper.state('numberOfEventsShown')
        )
          .toEqual(32);
      }
    );

    // Scenario 2: Number of Events Shown can be set by users
  }
);