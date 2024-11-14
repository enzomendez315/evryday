import { DataStore } from 'aws-amplify/datastore';
import { OuraToken, FitbitToken } from "../models";

export async function storeToken(userId, accessToken, refreshToken, expiresIn, tokenType) {
    const lastRefresh = new Date().toISOString();

    try {
        let token;

        if (tokenType == 'oura') {
            token = await DataStore.save(
                new OuraToken({
                    userId: userId,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    expiresIn: expiresIn,
                    lastRefresh: lastRefresh,
                }));
            DEBUG && console.log('Oura token stored:', token);
        } 
        else if (tokenType == 'fitbit') {
            token = await DataStore.save(
                new FitbitToken({
                    userId: userId,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    expiresIn: expiresIn,
                    lastRefresh: lastRefresh,
                }));
            DEBUG && console.log('Oura token stored:', token);
        } 
        else {
            throw new Error(`Invalid token type: ${tokenType}`);
        }
        
        return token;
    } catch (error) {
        console.error(`Error storing ${tokenType} token:`, error);
    }
}

export async function getToken(userId, tokenType) {
    try {
        const token = await DataStore.query(OuraToken, (c) => c.userId('eq', userId));
        DEBUG && console.log('Fetched Oura token:', token);
        return token;
    } catch (error) {
        console.error('Error fetching Oura token:', error);
    }
}

export function TokenExpired(token, tokenType) {
    const currentTime = Date.now() / 1000;  // Get current time in seconds
    const expirationTime = token.lastRefresh + token.expiresIn;
    return currentTime >= expirationTime;
}