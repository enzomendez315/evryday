import {Auth, DataStore} from 'aws-amplify';
import {User} from '../models';

// const fetchCurrentUser = async () => {
//     try {
//         if (!Auth || !Auth.currentAuthenticatedUser) {
//             console.error('Auth module is undefined or currentAuthenticatedUser is not available');
//             throw new Error('Auth module not initialized');
//         }
//         const cognitoUser = await Auth.currentAuthenticatedUser();
//         const userId = cognitoUser.attributes.sub;
//         const users = await DataStore.query(User, c => c.userId("eq", userId));
//         return users.length > 0 ? users[0] : null;
//     } catch (error) {
//         console.error('Error fetching user:', error);
//         throw new Error('Failed to fetch user.');
//     }
// };

// const updateUserDetails = async (name, weight, age, gender) => {
//     try {
//         const currentUser = await fetchCurrentUser();
//         if (currentUser) {
//             await DataStore.save(
//                 User.copyOf(currentUser, updated => {
//                     updated.name = name;
//                     updated.weight = parseFloat(weight);
//                     updated.age = parseInt(age, 10);
//                     updated.gender = gender;
//                 })
//             );
//             console.log("User info updated successfully");
//             return true;
//         } else {
//             console.log("User not found");
//             return false;
//         }
//     } catch (error) {
//         console.error('Error updating user:', error);
//         throw new Error('Failed to update user details.');
//     }
// };

// export { fetchCurrentUser, updateUserDetails };