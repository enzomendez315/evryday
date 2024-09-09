import { OAuth2 } from "./oauth2";

const DEBUG = false;

export class Fitbit {
    static US = "en_US";
    static API_ENDPOINT = "https://api.fitbit.com";
    static AUTHORIZE_ENDPOINT = "https://www.fitbit.com";
    static WEEK_DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    static PERIODS = ["1d", "7d", "30d", "1w", "1m", "3m", "6m", "1y", "max"];
    static SCOPE = [
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

    // The clientID and clientSecret come from <https://dev.fitbit.com/apps/new> after 
    // creating a Fitbit app
    // TODO: Find the redirect url to take the user from the browser 
    // back to the EvryDay app after requesting permission
    constructor(clientId, clientSecret, accessToken = null, refreshToken = null,
        expiresIn = null, refreshCallback = null, redirectUri = null, system = Fitbit.US) {

        this.client = new OAuth2(clientId, clientSecret, Fitbit.API_ENDPOINT,
            Fitbit.AUTHORIZE_ENDPOINT, accessToken, refreshToken, expiresIn,
            refreshCallback, redirectUri);
    }

    async makeRequest() {

    }
}