import {getCurrentUser, signOut, fetchAuthSession} from 'aws-amplify/auth';

export async function currentUserDetails() {
    try {
        const { username, userId} = await getCurrentUser();
        console.log(`Username: ${username}`);
        console.log(`UserId: ${userId}`);
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        // console.log(`Access Token: ${accessToken}`);
        // console.log(`id Token: ${idToken}`);
    } catch (err) {
        console.log(err);
    }
}

export async function userSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export function testingFunc() {
    currentUserDetails();
}
