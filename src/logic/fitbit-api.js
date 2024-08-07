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

    // Makes requests to the specified url
    // Only the url is required
    // Requests will default to GET if method is not specified
    async makeRequest(url, method = 'GET', data = null) {
        try {
            const response = await this.axiosInstance.request({
                url: url,
                method: method,
                data: data,
            });

            return response.data;
        } catch (error) { 
            // Refresh access token if status is "Unauthorized"
            if (error.response && error.response.status === 401) {
                await this.refreshAccessToken();
                return this.makeRequest(url, method, data);
            } else {
                throw error;
            }
        }
    }

    // Step 1
    // Returns the url the user needs to go to in order to grant authorization
    getAuthorizationUri(scope = null) {
        // Use the defaults if no scope is provided
        this.scope = scope || [
            "activity",
            "heartrate",
            "location",
            "nutrition",
            "profile",
            "settings",
            "sleep",
            "social",
            "weight",
        ];
        
        const authorizationUri = this.oAuthClient.authorizeURL({
            redirect_uri: this.redirectUri,
            scope: this.scope.join(' '), // Converted to a single string separated by spaces
        });

        return authorizationUri;
    }

    // Step 2
    // Uses the code from step 1 and calls Fitbit again to get an access token object
    async getAccessToken(code) {
        const tokenParams = {
            code: code,
            redirect_uri: this.redirectUri,
            scope: this.scope.join(' '),
            //scope: 'activity heartrate location nutrition profile settings sleep social weight',
        };

        try {
            const accessToken = await this.oAuthClient.getToken(tokenParams);
            this.token = accessToken.token;
            this.setAxiosHeaders();
            return accessToken.token;
        } catch (error) {
            console.error('Access token error: ${error.message}');
        }
    }

    // Step 3
    // Obtains a new access token from the refresh token obtained in step 2
    async refreshAccessToken() {
        if (!this.token.refresh_token) {
            throw new Error("No refresh token available");
        }

        const tokenObject = this.oAuthClient.createToken(this.token);

        try {
            const refreshedToken = await tokenObject.refresh();
            this.token = refreshedToken.token;
            this.setAxiosHeaders();

            if (this.refreshCallback) {
                this.refreshCallback(this.token);
            }
        } catch (error) {
            console.error('Error refreshing access token: ${error.message}');
        }
    }
}