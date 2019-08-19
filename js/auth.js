// variable definitions and building authorization url

const environmentId = 'b9da0edc-794c-453f-8988-f09426f36865'; // available on settings page of p14c admin console
const clientId = '5f5ca4fb-ac2e-4f2f-bcf6-fcea98a8b8c0'; // available on connections tab of admin console
const baseUrl = 'https://pingidentity.github.io/pingone-customers-sample-login/'; // URL of where you will host this application

const scopes = 'openid profile'; // default scopes to request
const responseType = 'token id_token';

const cookieDomain = ''; // unnecessary unless using subdomains (e.g., login.example.com, help.example.com, docs.example.com).  Then use a common root (e.g., .example.com)
const landingUrl = baseUrl; // url to send the person once authentication is complete
const logoutUrl = baseUrl + 'logout/'; // whitelisted url to send a person who wants to logout
const redirectUri = baseUrl + 'login/'; // whitelisted url P14C sends the token or code to

const authUrl = 'https://auth.pingone.com';
const apiUrl = 'https://api.pingone.com/v1';

// if environmentId or clientId are null warn the user

if (!clientId || !environmentId) {
  alert('Be sure to edit js/auth.js with your environmentId and clientId');
}

// doLogin function: generates and stores nonce, redirects to authorization request url

function doLogin() {
  console.log('doLogin called');
  let nonce = generateNonce(60);
  let authorizationUrl =
    authUrl +
    '/' +
    environmentId +
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

  console.log(authorizationUrl);
  
  window.localStorage.setItem('nonce', nonce);

  // window.localStorage.setItem('nonce', 'bogus nonce that does not match');

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
