import { DataStore } from 'aws-amplify/datastore';
import { FitbitToken } from '../models';

const DEBUG = true;

export async function storeFitbitToken(userId, accessToken, refreshToken, expiresIn) {
    const lastRefresh = new Date().toISOString();

    try {
        const token = await DataStore.save(
            new FitbitToken({
                userId: userId,
                accessToken: accessToken,
                refreshToken: refreshToken,
                expiresIn: expiresIn,
                lastRefresh: lastRefresh,
            })
        );

        DEBUG && console.log('Token stored:', token);
        return token;
    } catch (error) {
        console.error('Error storing Fitbit token:', error);
    }
}

export async function getFitbitToken(userId) {
    try {
        const token = await DataStore.query(FitbitToken, (c) => c.userId('eq', userId));
        DEBUG && console.log('Fetched Fitbit token:', token);
        return token;
    } catch (error) {
        console.error('Error fetching Fitbit token:', error);
    }
}