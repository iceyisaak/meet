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
          <NumberOfEvents updateEvents={() => { }} />
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
          NumberOfEventsWrapper.state('eventShown')
        )
          .toEqual(32);
      }
    );

    // Scenario 2: Number of Events Shown can be set by users
    test(
      'render Number of Events set by users',
      () => {
        NumberOfEventsWrapper
          .find('.number')
          .simulate(
            'change',
            {
              target: {
                value: 25
              }
            }
          );

        const value = NumberOfEventsWrapper.state('eventCount');
        expect(
          NumberOfEventsWrapper.state('eventShown')
        )
          .toEqual(value);
      }
    );


    test(
      'check change of eventsShown',
      () => {
        const eventCount = {
          target: {
            value: 2
          }
        };
        const value = eventCount.target.value;
        NumberOfEventsWrapper
          .find('.number')
          .simulate(
            'change',
            eventCount
          );
        expect(
          NumberOfEventsWrapper.state("eventCount")
        )
          .toBe(value);
        expect(
          NumberOfEventsWrapper.state("eventShown")
        )
          .toBe(value);
      }
    );

  }
);