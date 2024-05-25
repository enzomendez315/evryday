import { getCurrentUser, signOut, fetchAuthSession } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import { User } from '../models';



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

export async function userSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}