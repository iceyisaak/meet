Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given that the user arrived at the main page
    When the number of events is NOT specified
    Then the default number of events shown is set to 32 by default

  Scenario: User can change the number of events they want to see
    Given that the user arrived at the main page
    When the number of events is specified
    Then that many events will be shown to the user
