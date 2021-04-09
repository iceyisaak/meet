# Meet

###### Last Updated 20210409

​

1. Project Description:
   ​

   - An app that allows users to:
     ​

     - Filter events by city.
     - Show/hide event details.
     - Specify number of events.
     - Use the app when offline.
     - Add an app shortcut to the home screen.
     - View a chart showing the number of upcoming events by city.

     ​

   - My role for this project:
     ​

     - Frontend Developer: ReactJS + SCSS

     ​

2. How to get the project running:  
   ​

   1. Run `npm run start`
   2. The project will be served at: `localhost:3000/`

      ​

3. Project Technologies & Dependencies:
   ​

   - Technologies:

     - ReactJS
     - SCSS

   - Dependencies:

     ```
      "@testing-library/jest-dom": "^5.11.10",
      "@testing-library/react": "^11.2.6",
      "@testing-library/user-event": "^12.8.3",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "4.0.3",
      "web-vitals": "^0.2.4",
      "workbox-background-sync": "^5.1.4",
      "workbox-broadcast-update": "^5.1.4",
      "workbox-cacheable-response": "^5.1.4",
      "workbox-core": "^5.1.4",
      "workbox-expiration": "^5.1.4",
      "workbox-google-analytics": "^5.1.4",
      "workbox-navigation-preload": "^5.1.4",
      "workbox-precaching": "^5.1.4",
      "workbox-range-requests": "^5.1.4",
      "workbox-routing": "^5.1.4",
      "workbox-strategies": "^5.1.4",
      "workbox-streams": "^5.1.4"
     ```

   - DevDependencies:

     ```
      "gh-pages": "^3.1.0"
     ```

---

### TDD & Test Scenario

    FEATURE 1: FILTER EVENTS BY CITY

    ```
    As a user
    I should be able to “filter events by city”
    So that I can see the list of events that take place in that city
    ```

    - Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

      - Given user hasn’t searched for any city
      - When the user opens the app
      - Then the user should see a list of all upcoming events

    - Scenario 2: User should see a list of suggestions when they search for a city.


      - Given the main page is open
      - When user starts typing in the city textbox
      - Then the user should see a list of cities (suggestions) that match what they’ve typed


    - Scenario 3: User can select a city from the suggested list.


      - Given the user was typing “Berlin” in the city textbox
        - And the list of suggested cities is showing
      - When the user selects a city (e.g., “Berlin, Germany”) from the list
      - Then their city should be changed to that city (i.e., “Berlin, Germany”)
        - And the user should receive a list of upcoming events in that city


    FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

      ```
      As a user,
      I want to ‘show/hide an event’s details’
      So that I can conveniently see more of the event I find relevant.
      ```

      - Scenario 1: An event element is collapsed by default

        - Given that all the events were loaded
        - When the user arrives at the main page
        - Then the event elements will be available, waiting to be clicked.

      - Scenario 2: User can expand an event to see its details

          -  Given that an interesting event is found
          -  When that event element is clicked
          -  Then the event detail element will be expanded
              - And the details of that event will be shown

      - Scenario 3: User can collapse an event to hide its details

          - Given that an event detail element is expanded
          - When that event element is clicked
          - Then the event detail element will be collapsed
              - And the event details will be hidden


    FEATURE 3: SPECIFY NUMBER OF EVENTS

    ```
    As a user
    I want to specify number of events
    So that I can view as many events on a page as I would like to
    ```

    - Scenario 1: When user hasn’t specified a number, 32 is the default number

      -  Given that the user arrived at the main page
      -  When the number of events is NOT specified
      -  Then the default number of events shown is set to 32 by default.

    - Scenario 2: User can change the number of events they want to see

      -  Given that the user arrived at the main page
      -  When the number of events is specified
      -  Then that many events will be shown to the user


    FEATURE 4: USE THE APP WHEN OFFLINE

      ```
      As a user
      I want to use the app when offline
      So that I can have access to the event information even without internet connection
      ```

    - Scenario 1: Show cached data when there’s no internet connection

      -  Given that the internet connection went off
      -  When the user needs to access the event information
      -  Then the cached data will still be made available

    - Scenario 2: Show error when the user changes the settings (city, time range)

      - Given that the internet connection went off
      - When the settings pertaining to the city, and time range are going to be changed
      - Then the error message will be shown


    FEATURE 5: DATA VISUALIZATION

    ```
    As a user
    I want to visually see the data
    So that I can easily understand the data being shown
    ```

    - Scenario 1: Show a chart with the number of upcoming events in each city

       - Given that the user wants to be informed of the upcoming events
       - When the user looks up the upcoming events
       - Then a chart with the number of upcoming events in each city will be shown

---
