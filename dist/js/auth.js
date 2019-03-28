// variable definitions and building authorization url

const environmentId = '47ccf5bf-700c-4933-acd5-21f6524c808f'; // available on settings page of p14c admin console
const populationId = '9c07631a-261d-4205-8f91-d5bf07761bb4'; // available by inspecting json of a user within admin console
const clientId = '58d35489-681c-4f2f-a941-fbed7f4aece3'; // available on connections tab of admin console
const scopes = 'openid profile address email openid';
const responseType = 'token id_token';
const acrValue = 'Single_Factor'; // Single_Factor or Multi_Factor.  Must be assigned as a Policy to your app connection 

const cookieDomain = ''; // unnecessary unless using subdomains (e.g., login.example.com, help.example.com, docs.example.com).  Then use a common root (e.g., .example.com)
const landingUrl = 'https://localhost:5500/'; // url to send the person once authentication is complete
const logoutUrl = 'https://localhost:5500/logout/'; // whitelisted url to send a person who wants to logout
const authUrl = 'https://auth.pingone.com';
const apiUrl = 'https://api.pingone.com/v1';
const redirectUri = 'https://localhost:5500/login/'; // whitelisted url P14C sends the token or code to

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
  scopes +
  '&acr_values=' +
  acrValue;

// populate any login buttons with the authorization URL

$('#signOnButton').attr('href', authorizationUrl);

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
