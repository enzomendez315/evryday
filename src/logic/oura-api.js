import { DataStore } from 'aws-amplify/datastore';
import { OuraToken } from '../models';

const DEBUG = true;

export async function storeOuraToken(userId, accessToken, refreshToken, expiresIn) {
    const lastRefresh = new Date().toISOString();

    try {
        const token = await DataStore.save(
            new OuraToken({
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
        console.error('Error storing Oura token:', error);
    }
}

export async function getOuraToken(userId) {
    try {
        const token = await DataStore.query(OuraToken, (c) => c.userId('eq', userId));
        DEBUG && console.log('Fetched Oura token:', token);
        return token;
    } catch (error) {
        console.error('Error fetching Oura token:', error);
    }
}