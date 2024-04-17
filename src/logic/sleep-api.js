import { generateClient } from 'aws-amplify/api';
import { DataStore } from 'aws-amplify/datastore';
import { SleepLog } from '../models';

export async function addSleepLogEntry(logDetails) {
    try {
        await DataStore.save(
            new SleepLogLog({
                "userId": "45c8ce94-ae73-4f6e-a2c8-dd5a87707c4d",
                "date": "Lorem ipsum dolor sit amet",
                "hoursSlept": 8.5,
                "sleepQuality": 90,
                "restfulnessScore": 75,
                "dreamJournal": "Amazing sleep"
            })
        );
    } catch (err) {
        console.log(err);
    }
}

export async function getAllSleepLogEntries() {
    try {
        const models = await DataStore.query(SleepLog);
        return models;
    } catch (err){
        console.log(err);
    }
}