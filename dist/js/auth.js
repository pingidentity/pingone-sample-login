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

// set to pingone auth region (e.g. https://auth.pingone.com) or custom domain (e.g. https://auth.mydomain.com)
const authUrl = 'https://auth.pingone.com';

// if clientId missing warn the user
if (!clientId) {
  alert('Be sure to edit js/auth.js with your clientId');
}

// doLogin function: generates and stores nonce, redirects to authorization request url

function doLogin() {
  let nonce = generateNonce(60);
  let authorizationUrl =
    authUrl +
    (environmentId ? '/' + environmentId : '') +
    '/as/authorize?response_type=' +
    responseType +
    '&client_id=' +
    clientId +
    '&redirect_uri=' +
    redirectUri +
    '&scope=' +
    scopes +
    '&nonce=' +
    nonce;

  Cookies.set('nonce', nonce, { domain: cookieDomain });

  window.location.href = authorizationUrl;
}

// simple function to parse json web token

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

// function to generate random nonce

function generateNonce(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:;_-.()!';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
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
