import { DataStore } from 'aws-amplify/datastore';
import { OuraToken } from '../models';
import axios from 'axios';
import express from 'express';
// const axios = require('axios');
// const express = require('express');
const app = express();

const clientID = process.env.OURA_CLIENT_ID;
const clientSecret = process.env.OURA_CLIENT_SECRET;
const redirectURI = process.env.OURA_REDIRECT_URI;
const port = 3000;

const DEBUG = true;

// Redirects user to Oura's authorization page
export function authorizeOura() {
  app.get('/authorize', (request, response) => {
      const authorizationURL = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURI}&scope=email+personal+daily`;
      response.redirect(authorizationURL);
  });

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
  
      //response.send('Access Token obtained successfully');
      response.redirect('https://evryday.us/');
    } catch (error) {
      console.error('Error obtaining access token:', error);
      response.status(500).send('Error obtaining access token');
    }
  });

  app.listen(port, () => console.log(`Server running on http://localhost:${port}/authorize`));
}

// Handles the authorization callback and exchanges the code received for an access token
export function handleOuraCallback() {
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
    
        //response.send('Access Token obtained successfully');
        response.redirect('https://evryday.us/');
      } catch (error) {
        console.error('Error obtaining access token:', error);
        response.status(500).send('Error obtaining access token');
      }
  });
}