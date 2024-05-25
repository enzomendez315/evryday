import { DataStore } from 'aws-amplify/datastore';
import { SleepLog } from '../models';

const DEBUG = false;

// sleep date is in form dateVariable.toISOString().substring(0, 10)
// this goes from a date object to a string in the format "YYYY-MM-DD"

// creates a new sleep entry into the datastore
// checks if one already exists for the user and date
// called by UI when user submits a new sleep entry
export async function makeSleepEntry(userID_, date_, hoursSlept_, sleepQuality_) {
    DEBUG && console.log("Making a new sleep entry with the date: ", date_);
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
            DEBUG && console.log('sleep log saved successfully!', sleeplog);
        } catch (error) {
            console.log('Error saving sleep log', error);
        }
    } else {
        DEBUG && console.log("Entry already exists for this date and user");
    }
}

// updates an existing sleep entry in the datastore
// uses getSleepEntry to get the entry to update
export async function editSleepEntry(userID_, date_, hoursSlept_, sleepQuality_) {
    if (await getSleepEntry(userID_, date_) !== null) {
        try {
            const sleeplog = await DataStore.save(
                SleepLog.copyOf(await getSleepEntry(userID_, date_), updated => {
                    updated.hoursSlept = hoursSlept_;
                    updated.sleepQuality = sleepQuality_;
                })
            );
            DEBUG && console.log('sleep log updated successfully!', sleeplog);
        } catch (error) {
            console.log('Error updating sleep log', error);
        }
    } else {
        DEBUG && console.log("Entry does not exist for this date and user");
    }
}

// deletes a sleep entry from the datastore
export async function deleteSleepEntry(userId, date) {
    DEBUG && console.log(`Deleting sleep log for userId: ${userId} date: ${date}`);
    try {
        await DataStore.delete(SleepLog, (u) => u.and(c => [
            u.userId.eq(userId),
            u.date.eq(date)
        ]));
        DEBUG && console.log(`Deleted sleep log for userId: ${userId} date: ${date}`);
    } catch (err) {
        console.log(`Failed to delete sleep log for userId: ${userId} date: ${date} error: ${err}`);
    }
}

// called in dashboard to get the user's sleep log for the day
export async function syncDailyLog(userID_, setSleepData, date) {
    let tempSleepData = [];
    DEBUG && console.debug("Getting user's day sleep log");
    let userID = userID_;
    DEBUG && console.log(`userid: ${userID}`)
    await getSleepEntry(userID, date).then(async (data) => {
        if (data === null) {
            DEBUG && console.log(`No Sleep Log found for userId: ${userID} date: ${date}`);
            setSleepData([]);
            return;
        }
        tempSleepData.push({ day: data.date, hours: data.hoursSlept, quality: data.sleepQuality });
        setSleepData(tempSleepData);
    });
}

// gets the sleep entries for a month and year
// calls hook function to update UI
// month is 1-12, year is 4 digit number
// can get with new Date().getMonth() + 1 and new Date().getFullYear()
// setIsLoading is only passed when the screen first calls this function
export async function syncUsersMonthLog(userID_, month, year, setSleepData, setIsLoading = () => { }) {
    let tempSleepData = [];
    DEBUG && console.debug("Getting user's sleep log");
    let userID = userID_;
    DEBUG && console.log(`userid: ${userID}`)
    date = new Date(Date.now()).toISOString().substring(0, 10);
    await getSleepEntriesForMonth(userID, month, year).then(async (data) => {
        if (data === null) {
            DEBUG && console.log(`No Sleep Log found for userId: ${userID} date: ${date}`);
            setSleepData([]);
            setIsLoading(false);
            return;
        }
        data.forEach(element => {
            tempSleepData.push({ day: element.date, hours: element.hoursSlept, quality: element.sleepQuality });
        });
        // sorts the sleep data by date
        tempSleepData.sort((a, b) => new Date(a.day) - new Date(b.day));
        setSleepData(tempSleepData);
        setIsLoading(false);
    });
}

// queries datastore and returns the entry from user and date
// returns null if no entry is found
// helper function for syncDailyLog
async function getSleepEntry(userId, date) {
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(SleepLog, (u) => u.and(c => [
                u.userId.eq(userId),
                u.date.eq(date)
            ])).then((log) => {
                if (log.length == 0) {
                    DEBUG && console.log("no log found");
                    resolve(null);
                }
                else {
                    DEBUG && console.log(`Sleep log found: ${log[0].id}`);
                    // returns the first log found because only one should exist
                    resolve(log[0]);
                }
            });
        } catch (err) {
            console.log(`Failed to find a sleep log for UserId: ${userId} Date: ${date} error: ${err}`);
            reject(err);
        }
    });
    return p;
}

// write me a fucntion that gets the sleep logs for a user from a certain month and year from date in the format of "YYYY-MM-DD"
// Copilot Written - BEWARE
// helper function for syncUsersMonthLog
async function getSleepEntriesForMonth(userId, month, year) {
    // month is 1-12, if month is less than 10, add a 0 in front
    if (month < 10) {
        month = `0${month}`;
    }
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(SleepLog, (c) => c.and(c => [
                c.userId.eq(userId),
                c.date.beginsWith(`${year}-${month}`),
            ])).then((logs) => {
                if (logs.length == 0) {
                    DEBUG && console.log("no logs found");
                    resolve(null);
                }
                else {
                    DEBUG && console.log(`Sleep logs found: ${logs}`);
                    resolve(logs);
                }
            });
        } catch (err) {
            console.log(`Failed to find sleep logs for UserId: ${userId} error: ${err}`);
            reject(err);
        }
    });
    return p;
}