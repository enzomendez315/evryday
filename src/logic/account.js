import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import { User } from '../models';

import { Auth } from 'aws-amplify';

let DEBUG = false;

export async function currentUserDetails() {
    p = new Promise((resolve, reject) => {
        try {
            getCurrentUser().then((user) => {
                resolve(user.username);
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }
    })
    return p;
}

// checks if the user has a user entry in the database yet
export async function getUserDBEntry(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            // check if the user exists in the database
            DataStore.query(User, (u) =>
                u.id.eq(userID_)
            ).then((foundUser) => {
                if (foundUser == null || foundUser.length == 0) {
                    console.log("no user found");
                    //createNewUser(); // TODO: Make this function
                    resolve(null);
                } else {
                    console.log(`User found: ${foundUser[0].name}`);
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

// called in the Basic-Info-Screen.js file
export async function syncUserDetails(userID_, setUserData) {
    DEBUG && console.debug("Getting user's day sleep log");
    let userID = userID_;
    DEBUG && console.log(`userid: ${userID}`)
    await getUserDBEntry(userID).then(async (data) => {
        if (data === null) {
            DEBUG && console.log(`No user found for userId: ${userID}`);
            setUserData(null);
            return;
        }
        DEBUG && console.log(`User found: ${data.name}`);
        setUserData(data);
    });
}

export async function userSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}