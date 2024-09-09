import { createContext } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import { User } from '../models';

import { Auth } from 'aws-amplify';

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
export async function getUserDBEntry() {
    p = new Promise((resolve, reject) => {
        try {
            // get the current user from aws auth
            getCurrentUser().then((user) => {
                // check if the user exists in the database
                DataStore.query(User, (u) =>
                    u.id.eq(user.username)
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
            });
        } catch (err) {
            console.log(`Failed to find user things bro`);
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

// Create the AccountContext
export const AccountContext = createContext();

// Define the AccountProvider to wrap your app
export const AccountProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Example: Fetch userId from Amplify Auth or other methods
    const fetchUserId = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser(); // Replace this with your authentication method
        setUserId(user.username); // Set userId to the value from Auth
      } catch (error) {
        console.error('Failed to fetch user ID:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <AccountContext.Provider value={userId}>
      {children}
    </AccountContext.Provider>
  );
};
