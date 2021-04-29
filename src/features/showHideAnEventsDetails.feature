Feature: Show/Hide an event's details

  Scenario: An event element is collapsed by default
    Given that all the events were loaded
    When the user arrives at the main page
    Then the event elements will be available, waiting to be clicked.

  Scenario: User can expand an event to see its details
    Given that an interesting event is found
    When that event element is clicked
    Then the event detail element will be expanded
    And the details of that event will be shown

  Scenario: User can collapse an event to hide its details
    Given that an event detail element is expanded
    When that event element is clicked
    Then the event detail element will be collapsed
    And the event details will be hidden
