const { setConflictHandler } = require('aws-amplify/in-app-messaging');
const { AuthorizationCode } = require('simple-oauth2');
const axios = require('axios');

// This class helps authenticate clients while encapsulating all the logic
class FitbitOAuth2Client {
    API_ENDPOINT = "https://api.fitbit.com";
    AUTHORIZE_ENDPOINT = "https://www.fitbit.com"

    requestTokenUrl = '${this.API_ENDPOINT}/oauth2/token';
    authorizationUrl = '${this.AUTHORIZE_ENDPOINT}/oauth2/authorize';
    accessTokenUrl = this.requestTokenUrl;
    refreshTokenUrl = this.requestTokenUrl;
    
    // We only need a clientId and a clientSecret for authentication
    // All other arguments are optional, and used to get users' data
    constructor(clientId, clientSecret, accessToken = null, refreshToken = null, 
        expiresIn = null, refreshCallback = null, redirectUri = null) {
            this.clientId = clientId;
            this.clientSecret = clientSecret;
            this.refreshCallback = refreshCallback;
            this.redirectUri = redirectUri;
            this.token = {};

            // Add accessToken and refreshToken if defined
            // These are obtained after the user grants permission
            if (accessToken && refreshToken) {
                this.token['access_token'] = accessToken;
                this.token['refresh_token'] = refreshToken;
            }

            // Add timeout
            if (expiresIn) {
                this.token['expires_in'] = expiresIn;
            } else {
                this.token['expires_in'] = 1000;
            }

            // Grants access to restricted resources
            this.oAuthClient = new AuthorizationCode({
                client: {
                    id: this.clientId,
                    secret: this.clientSecret,
                },
                auth: {
                    tokenHost: this.API_ENDPOINT,
                    tokenPath: '/oauth2/token',
                    authorizeHost: this.AUTHORIZE_ENDPOINT,
                    authorizePath: '/oauth2/authorize',
                },
            });

            this.axiosInstance = axios.create({
                baseURL: this.API_ENDPOINT,
                timeout: this.token.expires_in,
            });

            this.setAxiosHeaders();
    }

    // Sets default headers on Axios instance
    setAxiosHeaders() {
        if (this.token.access_token) {
            this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${this.token.access_token}`;
        }
    }

    async refreshAccessToken() {
        if (!this.token.refresh_token) {
            throw new Error("No refresh token available");
        }
    }
}