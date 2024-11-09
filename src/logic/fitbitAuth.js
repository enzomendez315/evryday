require('dotenv').config();
const axios = require('axios');
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

const privateKey = fs.readFileSync('private.key', 'utf8');
const certificate = fs.readFileSync('certificate.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const clientID = process.env.FITBIT_CLIENT_ID;
const clientSecret = process.env.FITBIT_CLIENT_SECRET;
const redirectURI = process.env.FITBIT_REDIRECT_URI;
const port = 3001;

// Step 1: Redirect to Fitbit’s authorization page
app.get('/authorize', (request, response) => {
  const authorizationURL = `https://www.fitbit.com/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code&scope=activity%20heartrate%20sleep%20profile`;
  response.redirect(authorizationURL);
});

// Step 2: Handle callback and exchange code for access token
app.get('/callback', async (request, response) => {
  const code = request.query.code;
  try {
    const tokenResponse = await axios.post('https://api.fitbit.com/oauth2/token', null, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientID}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectURI,
      },
    });

    const accessToken = tokenResponse.data.access_token;
    const refreshToken = tokenResponse.data.refresh_token;

    // Store accessToken securely or use it for API requests
    response.send('Access Token obtained successfully');
  } catch (error) {
    console.error('Error obtaining access token:', error);
    response.status(500).send('Error obtaining access token');
  }
});

// Step 3: Use the access token to call Fitbit API (e.g., get user data)
async function getUserData(accessToken) {
  try {
    const response = await axios.get('https://api.fitbit.com/1/user/-/profile.json', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data); // Use user data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//app.listen(port, () => console.log(`Server running on http://localhost:${port}/authorize`));

https.createServer(credentials, app).listen(port, () => {
  console.log(`Server running on https://localhost:${port}/authorize`);
});