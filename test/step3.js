const getEvents = document.getElementById("getEvents");
const events = document.getElementById("events");
const getCalendarEvents = "https://lh25xfzg7g.execute-api.eu-central-1.amazonaws.com/dev/api/get-events";
const accessTokenElement = document.getElementById("accessToken");

// Listen for a Click
getEvents.onclick = function () {
  const { access_token } = JSON.parse(accessTokenElement.innerText);
  const eventRequest = getCalendarEvents + "/" + access_token;
  fetch(eventRequest)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (json) {
        events.innerText = JSON.stringify(
          json,
          null,
          2
        );
      }
    );
};