require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();

const DEBUG = true;

const clientID = process.env.OURA_CLIENT_ID;
const clientSecret = process.env.OURA_CLIENT_SECRET;
const redirectURI = process.env.OURA_REDIRECT_URI;
const port = 3000;

// Step 1: Redirect to Oura’s authorization page
app.get('/authorize', (request, response) => {
  const authorizationURL = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURI}&scope=email+personal+daily`;
  response.redirect(authorizationURL);
});

// Step 2: Handle callback and exchange code for access token
app.get('/callback', async (request, response) => {
  const code = request.query.code;
  DEBUG && console.log(`The code is ${code}`);

  try {
    const tokenResponse = await axios.post('https://api.ouraring.com/oauth/token', {
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectURI,
      code: code,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Access tokens last 24 hours
    const accessToken = tokenResponse.data.access_token;
    const refreshToken = tokenResponse.data.refresh_token;
    DEBUG && console.log(`The access token is ${accessToken}`);
    DEBUG && console.log(`The refresh token is ${refreshToken}`);

    // Store accessToken securely or use it for API requests
    response.send('Access Token obtained successfully');
  } catch (error) {
    console.error('Error obtaining access token:', error);
    response.status(500).send('Error obtaining access token');
  }
});

// Step 3: Use the access token to call Oura API
async function getUserData(accessToken) {
  try {
    const response = await axios.get('https://api.ouraring.com/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data); // Use user data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

app.listen(port, () => console.log(`Server running on http://localhost:${port}/authorize`));

// https.createServer(credentials, app).listen(port, () => {
//   console.log(`Server running on https://localhost:${port}/authorize`);
// });