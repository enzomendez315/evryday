const { AuthorizationCode } = require('simple-oauth2');

// This class helps authenticate clients while encapsulating all the logic
class FitbitOAuth2Client {
    API_ENDPOINT = "https://api.fitbit.com";
    AUTHORIZE_ENDPOINT = "https://www.fitbit.com"

    requestTokenUrl = '${API_ENDPOINT}/oauth2/token';
    authorizationUrl = '${AUTHORIZE_ENDPOINT}/oauth2/authorize';
    accessTokenUrl = requestTokenUrl;
    refreshTokenUrl = requestTokenUrl;
    
    // We only need a clientId and a clientSecret for authentication
    // All other arguments are optional, and used to get users' data
    constructor(clientId, clientSecret, accessToken = null, refreshToken = null, 
        expiresAt = null, refreshCallback = null, redirectUri = null) {
            this.clientId = clientId;
            this.clientSecret = clientSecret;
            this.token = {};

            // Add accessToken and refreshToken if defined
            // These are obtained after the user grants permission
            if (accessToken && refreshToken) {
                this.token['access_token'] = accessToken;
                this.token['refresh_token'] = refreshToken;
            }

            // Add expiration if applicable
            if (expiresAt) {
                this.token['expires_at'] = expiresAt;
            }

            this.refreshCallback = refreshCallback;
            this.redirectUri = redirectUri;
    }
}