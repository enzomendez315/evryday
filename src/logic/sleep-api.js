/*
This file is used by the sleep-screen ui to interact with the datastore
The order it is called is as follows:
1. clearLocalData and SLEEPLOG are called when the sleep page is opened
2. getSleepEntry is called internally by SLEEPLOG to query the datastore for the sleep entry
3. makeSleepEntry is called when the user submits a new sleep entry
*/

import { DataStore } from 'aws-amplify/datastore';
import { SleepLog } from '../models';

// creates a new sleep entry into the datastore
// checks if one already exists for the user and date
export async function makeSleepEntry(userID_, date_, hoursSlept_, sleepQuality_) {
    if (await getSleepEntry(userID_, date_) === null) {
        try {
            const sleeplog = await DataStore.save(
                new SleepLog({
                    userId: userID_, //int
                    date: date_, //string
                    hoursSlept: hoursSlept_,  //int
                    sleepQuality: sleepQuality_, //int
                    restfulnessScore: 5, //int
                    dreamJournal: "no journal" //string
                })
            );
            console.log('sleep log saved successfully!', sleeplog);
        } catch (error) {
            console.log('Error saving sleep log', error);
        }
    } else {
        console.log("Entry already exists for this date and user");
    }
}

// queries datastore and returns the entry from user and date
// called by SLEEPLOG
// returns null if no entry is found
export async function getSleepEntry(userId, date) {
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(SleepLog, (u) => u.and(c => [
                u.userId.eq(userId),
                u.date.eq(date)
            ])).then((oldLog) => {
                if (oldLog.length == 0) {
                    //console.log("no log found");
                    resolve(null);
                }
                else {
                    console.log(`Sleep log found: ${oldLog}`);
                    resolve(oldLog[0]);
                }
            });
        } catch (err) {
            console.log(`Failed to find a sleep log for UserId: ${userId} Date: ${date} error: ${err}`);
            reject(err);
        }
    });
    return p;
}

// this is a promise that is called when the sleep page is opened
// it returns a sleep entry for the current user and date
// if no entry is found, it returns null
export const SLEEPLOG = async (userId, date) => {
    p = new Promise(async (resolve, reject) => {
        try {
            await getSleepEntry(userId, date).then(async (sleepLog) => {
                if (sleepLog == null) {
                    //console.log("No sleep log found");
                    resolve(null);
                }
                console.log(`Retreiving Sleep Log id: ${sleepLog.id} userId: ${userId} date: ${date}`);
                resolve({
                    sleepLog,
                    userId: userId,
                    date: date
                });
            });
        } catch (error) {
            console.log(`Failed to find SLEEPLOG for UserId: ${userId} Date: ${date} error: ${error}`);
            reject(error);
        }
    });
    return p;
}

// deletes a sleep entry from the datastore, might delete all entries for a user
export async function deleteSleepEntry(userId, date) {
    try {
        await DataStore.delete(SleepLog, (log) => log.userId.eq(userId));
        console.log(`Deleted sleep log for userId: ${userId} date: ${date}`);
    } catch (err) {
        console.log(`Failed to delete sleep log for userId: ${userId} date: ${date} error: ${err}`);
    }
}

// clears local data when page is opened
// done to make sure there aren't any old entries not synced
//
// TODO: Find a better way to sync the cloud and local data
export async function clearLocalData() {
    try {
        await DataStore.clear();
        console.log("Local data cleared");
    } catch (err) {
        console.log(`Failed to clear local data error: ${err}`);
    }
}