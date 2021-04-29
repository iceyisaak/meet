import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(
  feature,
  test => {

    test('An event element is collapsed by default',
      ({ given, when, then }) => {

        given('that all the events were loaded',
          () => {

          });

        when('the user arrives at the main page',
          () => {

          });

        then('the event elements will be available, waiting to be clicked.',
          () => {

          });
      });

    test('User can expand an event to see its details',
      ({ given, when, then, and }) => {
        given('that an interesting event is found',
          () => {

          });

        when('that event element is clicked',
          () => {

          });

        then('the event detail element will be expanded',
          () => {

          });

        and('the details of that event will be shown',
          () => {

          });
      });

    test('User can collapse an event to hide its details',
      ({ given, when, then, and }) => {
        given('that an event detail element is expanded',
          () => {

          });

        when('that event element is clicked',
          () => {

          });

        then('the event detail element will be collapsed',
          () => {

          });

        and('the event details will be hidden',
          () => {

          });

      }
    );
  }
);