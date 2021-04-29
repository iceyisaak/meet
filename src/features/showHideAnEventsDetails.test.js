import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(
  feature,
  test => {

    let AppWrapper;
    let EventListWrapper;
    let EventWrapper;

    test('An event element is collapsed by default',
      ({ given, when, then }) => {

        given('that all the events were loaded',
          () => {
            EventListWrapper = mount(
              <EventList events={mockData} />
            );
            EventWrapper = mount(
              <Event event={mockData[0]} />
            );

          });

        when('the user arrives at the main page',
          () => {
            AppWrapper = mount(<App />);
            EventListWrapper.update();
            EventWrapper.update();
          });

        then('the event elements will be available, waiting to be clicked.',
          () => {
            AppWrapper.update();
            expect(
              AppWrapper
                .find('.event .event__description--hide')
                .hostNodes()
            )
              .toHaveLength(mockData.length);

          });
      });


    test('User can expand an event to see its details',
      ({ given, when, then, and }) => {

        given('that an interesting event is found',
          () => {
            EventWrapper = shallow(
              <Event event={mockData[0]} />
            );
          });

        when('that event element is clicked',
          () => {
            EventWrapper
              .find('.button__hide-details')
              .simulate('click');
          });

        then('the event detail element will be expanded',
          () => {
            expect(
              EventWrapper.state('showDetails')
            )
              .toBe(true);
          });

        and('the details of that event will be shown',
          () => {
            expect(
              EventWrapper
                .find('.event__description--show')
            )
              .toHaveLength(1);
          });
      });


    test('User can collapse an event to hide its details',
      ({ given, when, then, and }) => {

        given('that an event detail element is expanded',
          () => {
            EventWrapper.setState({
              showDetails: true
            });
            expect(
              EventWrapper.find('.event__description--show')
            )
              .toHaveLength(1);
          });

        when('that event element is clicked',
          () => {
            EventWrapper
              .find('.button__show-details')
              .simulate('click');
          });

        then('the event detail element will be collapsed',
          () => {
            expect(
              EventWrapper
                .state('showDetails')
            )
              .toBe(false);
          });

        and('the event details will be hidden',
          () => {
            expect(
              EventWrapper
                .find('.event__description--hide')
            )
              .toHaveLength(1);
          });

      }
    );
  }
);