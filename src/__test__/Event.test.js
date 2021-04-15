import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

// Feature 2: Show/Hide an Event's details
describe(
  '<Event/> conponent',
  () => {

    let EventWrapper;
    let summary;
    let eventStartTime;
    let timeZone;
    let location;

    beforeAll(
      () => {
        EventWrapper = shallow(
          <Event
            summary={summary}
            eventStartTime={eventStartTime}
            timeZone={timeZone}
            location={location}
          />
        );
      }
    );

    test(
      'hide event description by default',
      () => {

        expect(
          EventWrapper.state('showDetails')
        )
          .toBe(false);
      }
    );
  }
);;
// Scenario 1: An Event is collapsed by default


// Scenario 2: User can expand an event to see its details

// Scenario 3: User can collapse an event to hide its details