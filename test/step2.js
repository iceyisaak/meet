const codeValue = document.getElementById("code");
const getAccessToken = document.getElementById("getToken");
const accessTokenElement = document.getElementById("accessToken");
const getToken = "https://lh25xfzg7g.execute-api.eu-central-1.amazonaws.com/dev/api/token";

getAccessToken.onclick = function () {
  let code = codeValue.value;

  // if the authorization code is not URL-encoded, then URL-encode it.
  if (decodeURIComponent(code) === code) {
    code = encodeURIComponent(codeValue.value);
  }
  const getTokenRequest = getToken + "/" + code;
  fetch(getTokenRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      accessTokenElement.innerText = JSON.stringify(json);
    });
};