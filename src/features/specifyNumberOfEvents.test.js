import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(
  feature,
  test => {

    let AppWrapper;
    let NumberOfEventsWrapper;
    test('When user hasn’t specified a number, 32 is the default number',
      ({ given, when, then }) => {

        given('that the user arrived at the main page',
          () => {
            AppWrapper = mount(<App />);
          });

        when('the number of events is NOT specified',
          () => {
            AppWrapper.update();
            NumberOfEventsWrapper = shallow(
              <NumberOfEvents updateEvents={() => { }} />
            );
          });

        then('the default number of events shown is set to 32 by default',
          () => {
            expect(
              NumberOfEventsWrapper.state('eventShown')
            )
              .toEqual(32);
          });
      });


    test('User can change the number of events they want to see',
      ({ given, when, then }) => {

        const inputValue = {
          target: {
            value: 20
          }
        };
        const value = inputValue.target.value;


        given('that the user arrived at the main page',
          () => {
            AppWrapper = mount(<App />);
          });


        when('the number of events is specified',
          () => {

            NumberOfEventsWrapper
              .find('.number')
              .simulate(
                'change',
                inputValue
              );
          });

        then('that many events will be shown to the user',
          () => {
            expect(
              NumberOfEventsWrapper
                .state('eventShown')
            )
              .toEqual(value);
          });


      }
    );

  }
);