import { generateClient } from 'aws-amplify/api';
import { DataStore } from 'aws-amplify/datastore';
import { SleepLog } from '../models';

const sleepData = [
  { day: 'March 1, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 2, 2024', hours: 6.5, quality: 'Poor' },
  { day: 'March 3, 2024', hours: 8.0, quality: 'Great' },
  { day: 'March 4, 2024', hours: 7.0, quality: 'Good' },
  { day: 'March 5, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 6, 2024', hours: 6.5, quality: 'Poor' },
  { day: 'March 7, 2024', hours: 8.0, quality: 'Great' },
  { day: 'March 8, 2024', hours: 7.0, quality: 'Good' },
  { day: 'March 9, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 10, 2024', hours: 6.5, quality: 'Poor' },
];

export async function initSleepEntries(){
    const entries = await getAllSleepEntries();
    if (entries.length == 0){
        console.log("Initialized sleep entries");
        bulkCreateSleepEntries(sleepData);
    }
}

function bulkCreateSleepEntries(sleepArr){
    sleepArr.forEach(entry => {
        let sleepEntry = new SleepLog({
            date: entry.day,
            hoursSlept: entry.hours,
            sleepQuality: entry.quality
        })
        createSleepEntry(sleepEntry)
    });
}

export async function createSleepEntry(sleepEntry) {
    if (!sleepEntry) {
        return;
    }
    try {
        await DataStore.save(sleepEntry);
        console.log('Successfully added: ', sleepEntry);
    } catch (err) {
        console.log(err);
    }
}

export async function getAllSleepEntries(date) {
    if(!date){
        const sleepEntries = await DataStore.query(SleepLog);
        return sleepEntries;
    }
    const sleepEntries = await DataStore.query(SleepLog, (c) => c.name.contains(date));
    return sleepEntries;
}