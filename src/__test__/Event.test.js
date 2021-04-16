import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

// Feature 2: Show/Hide an Event's details
describe(
  '<Event/> conponent',
  () => {

    let EventWrapper;
    const eventDetail = mockData[0];

    beforeAll(
      () => {
        EventWrapper = shallow(
          <Event
            event={eventDetail}
          />
        );
      }
    );


    // Scenario 1: An Event is collapsed by default
    test(
      'hide event description by default',
      () => {

        expect(
          EventWrapper.state('showDetails')
        )
          .toBe(false);
      }
    );

    // Scenario 2: User can expand an event to see its details
    test(
      'show event description upon a button click',
      () => {

        EventWrapper.find('button.button__hide-details').simulate('click');

        expect(
          EventWrapper.state('showDetails')
        )
          .toBe(true);
      }
    );;

    // Scenario 3: User can collapse an event to hide its details
    test(
      'hide event description upon a button click',
      () => {

        EventWrapper.find('button.button__show-details').simulate('click');

        expect(
          EventWrapper.state('showDetails')

        )
          .toBe(false);
      }
    );
  }
);;



