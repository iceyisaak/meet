// Declare variables
const getCodeElement = document.getElementById("getCode");
const resultElement = document.getElementById("result");
const resultLink = document.getElementById("authURL");
const getAuthURL = "https://3m5d2he177.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url";

// Once getCode Element is Clicked
getCodeElement.onclick = function () {

  // fetch getAuthURL
  fetch(getAuthURL)

    // Then return a response in JSON
    .then(
      function (response) {
        return response.json();
      }
    )

    // Display the result in JSON format
    .then(
      function (json) {
        const result = JSON.stringify(json);
        // Get the value of authUrl
        const { authUrl } = JSON.parse(result);
        // Add it to the html
        resultElement.innerText = result;
        resultLink.href = authUrl;
      }
    );
};