import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import { User } from '../models';

let DEBUG = true;

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
// called in the dashboard.js file in useEffect
export async function getUserDBEntry(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            // check if the user exists in the database
            DataStore.query(User, (u) =>
                u.userId.eq(userID_)
            ).then((foundUser) => {
                if (foundUser == null || foundUser.length == 0) {
                    DEBUG && console.log("no user DB entry found, making a new one");
                    createUserDBEntry(userID_).then((newUser) => {
                        resolve(newUser);
                    });
                } else {
                    DEBUG && console.log(`User found: ${foundUser[0].name}`);
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

export async function createUserDBEntry(userID_) {
    p = new Promise((resolve, reject) => {
        try {
            const newUser = {
                userId: userID_,
                name: "Squidward Tentacles",
                age: 0,
                weight: 0,
                height: 0,
                isFirstTime: true,
                gender: "male",
            };
            DataStore.save(new User(newUser)).then((createdUser) => {
                console.log(`Created user: ${createdUser.name}`);
                resolve(createdUser);
            });
        } catch (err) {
            console.log(`Failed to create user`);
            reject(err);
        }
    });
    return p;
}


export async function updateUserDetails(userID_, name_,
    weight_, age_, height_, gender_) {
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(User, (u) =>
                u.userId.eq(userID_)
            ).then((foundUser) => {
                if (foundUser == null || foundUser.length == 0) {
                    console.error("No user found to update");
                    resolve(false);
                } else {
                    let user = foundUser[0];
                    const updatedUser = User.copyOf(user, updated => {
                        updated.name = name_;
                        updated.weight = parseInt(weight_);
                        updated.age = parseInt(age_);
                        updated.height = parseInt(height_);
                        updated.gender = gender_;
                    });
                    DataStore.save(updatedUser).then(() => {
                        console.log(`Updated user: ${updatedUser.name}`);
                        resolve(true);
                    });
                }
            });
        } catch (err) {
            console.log(`Failed to update user`);
            reject(err);
        }
    });
    return p;
}

export async function userSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}