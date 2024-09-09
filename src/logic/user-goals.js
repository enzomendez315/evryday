import { DataStore } from 'aws-amplify/datastore';
import { DailyGoals } from '../models';

let DEBUG = true;

// auto-generated, not sure if it works
export async function getUserGoals(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            // check if the user's goals exist in the database
            DataStore.query(DailyGoals, (u) =>
                u.userId.eq(userID_)
            ).then((foundUser) => {
                if (foundUser == null || foundUser.length == 0) {
                    DEBUG && console.log("no user goals found, making a new DB entry");
                    createUserGoals(userID_).then((newUser) => {
                        resolve(newUser);
                    });
                } else {
                    DEBUG && console.log(`User goals found: ${foundUser[0]}`);
                    resolve(foundUser[0]);
                }
            });
        } catch (err) {
            console.log(`Failed to find user things bro`);
            reject(err);
        }
    });
    return p;
}

export async function createUserGoals(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            const newGoals = {
                userId: userID_,
                minCalories: 1800,
                maxCalories: 2200,
                minSleep: 8,
                dailyWorkout: false,
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