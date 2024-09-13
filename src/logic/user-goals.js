import { DataStore } from 'aws-amplify/datastore';
import { DailyGoals } from '../models';

let DEBUG = false;

export async function getUserGoals(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            // check if the user's goals exist in the database
            DataStore.query(DailyGoals, (u) =>
                u.userId.eq(userID_)
            ).then((foundGoals) => {
                if (foundGoals == null || foundGoals.length == 0) {
                    DEBUG && console.log("no user goals found");
                    resolve(null);
                } else {
                    DEBUG && console.log(`User goals found:`, foundGoals[0]);
                    resolve(foundGoals[0]);
                }
            });
        } catch (err) {
            console.log(`Failed to find user goal things bro`);
            reject(err);
        }
    });
    return p;
}

export async function createUserGoals(userID_, minCalories_, maxCalories_, minSleep_, dailyWorkout_) {
    p = new Promise((resolve, reject) => {
        try {
            const newGoals = {
                userId: userID_,
                minCalories: parseInt(minCalories_),
                maxCalories: parseInt(maxCalories_),
                minSleep: parseFloat(minSleep_),
                dailyWorkout: dailyWorkout_,
            };
            DataStore.save(new DailyGoals(newGoals)).then((createdGoals) => {
                console.log(`Created user: ${createdGoals}`);
                resolve(createdGoals);
            });
        } catch (err) {
            console.log(`Failed to create user goals`);
            reject(err);
        }
    });
    return p;
}

export async function updateUserGoals(userID_, minCalories_, maxCalories_, minSleep_, dailyWorkout_) {
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(DailyGoals, (u) =>
                u.userId.eq(userID_)
            ).then((foundGoals) => {
                if (foundGoals == null || foundGoals.length == 0) {
                    console.error("No user goals found to update");
                    resolve(false);
                } else {
                    let goals = foundGoals[0];
                    const updatedGoals = DailyGoals.copyOf(goals, updated => {
                        updated.minCalories = parseInt(minCalories_);
                        updated.maxCalories = parseInt(maxCalories_);
                        updated.minSleep = parseFloat(minSleep_);
                        updated.dailyWorkout = dailyWorkout_;
                    });
                    DataStore.save(updatedGoals).then(() => {
                        console.log(`Updated user goals: ${updatedGoals}`);
                        resolve(true);
                    });
                }
            });
        } catch (err) {
            console.log(`Failed to update user goals`);
            reject(err);
        }
    });
    return p;
}