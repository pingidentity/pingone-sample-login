// variable definitions and building authorization url

const environmentId = ''; // available on settings page of p14c admin console
const clientId = ''; // available on connections tab of admin console
const baseUrl = 'http://localhost/'; // URL of where you will host this application

const scopes = 'openid profile'; // default scopes to request
const responseType = 'token id_token';

const cookieDomain = ''; // unnecessary unless using subdomains (e.g., login.example.com, help.example.com, docs.example.com).  Then use a common root (e.g., .example.com)
const landingUrl = baseUrl; // url to send the person once authentication is complete
const logoutUrl = baseUrl + 'logout/'; // whitelisted url to send a person who wants to logout
const redirectUri = baseUrl + 'login/'; // whitelisted url P14C sends the token or code to

const authUrl = 'https://auth.pingone.com';
const apiUrl = 'https://api.pingone.com/v1';

// build the authorization url in case we need it

const authorizationUrl =
  authUrl +
  '/' +
  environmentId +
  '/as/authorize?client_id=' +
  clientId +
  '&response_type=' +
  responseType +
  '&redirect_uri=' +
  redirectUri +
  '&scope=' +
  scopes;

// populate any login buttons with the authorization URL

$('#signOnButton').attr('href', authorizationUrl);

// if environmentId or clientId are null warn the user

if (!clientId || !environmentId) {

  alert('Be sure to edit js/auth.js with your environmentId and clientId');

}

// simple function to parse json web token

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

// render navigation buttons depending on user login state

function renderButtonState() {
  console.log('renderButtonState called');
  if (Cookies.get('accessToken', { domain: cookieDomain })) {
    $('#preferencesButton').removeClass('d-none');
    $('#logoutButton').removeClass('d-none');
  } else {
    $('#signOnButton').removeClass('d-none');
  }
}
