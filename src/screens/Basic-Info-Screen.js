import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserDBEntry, updateUserDetails, createUserDBEntry } from '../logic/account';
import { AccountContext } from '../../App';
import { getUser } from '../graphql/queries';

let userID;
let DEBUG = true;

const BasicInfoScreen = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: 0,
        weight: 0,
        height: 0,
        gender: "other",
    });
    const [missingInfo, setMissingInfo] = useState(false);
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user info...");
        getUserDBEntry(userID).then((user) => {
            if (user == null) {
                console.log("User info isn't made yet");
                return;
            }
            else {
                setUserInfo({
                    name: user.name,
                    age: user.age,
                    weight: user.weight,
                    height: user.height,
                    gender: user.gender,
                });
            }
        });
    }, []);

    // checks that all fields are filled in and then submits the user info
    const handleSubmit = async () => {
        if (userInfo.name == "" || userInfo.age == 0 || userInfo.weight == 0 ||
            userInfo.height == 0) {
            setMissingInfo(true);
            return;
        }
        DEBUG && console.log("Submitting user info...");

        // if there is no user entry, make one
        await getUserDBEntry(userID).then(async (user) => {
            if (user == null) {
                // make new user
                await createUserDBEntry(userID, userInfo.name,
                    userInfo.weight, userInfo.age, userInfo.height, userInfo.gender).then(async (newUser) => {
                        console.log(`Created user in basic info screen: ${newUser}`);
                    });
            }

            // if submitting changes to a pre-existing user
            else {
                console.log("User already exists, updating...");
                await updateUserDetails(userID, userInfo.name,
                    userInfo.weight, userInfo.age, userInfo.height, userInfo.gender);
            }
        });

        DEBUG && console.log("Returning to settings home...");
        navigation.navigate('Settings Home');
    };

    return (

        <View style={styles.container}>

            {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={userInfo.name}
                onChangeText={text => setUserInfo({ ...userInfo, name: text })}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={userInfo.age.toString()}
                onChangeText={text => setUserInfo({ ...userInfo, age: text })}
                placeholder="Enter your age"
            />

            <Text style={styles.label}>Weight (lbs):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={userInfo.weight.toString()}
                onChangeText={text => setUserInfo({ ...userInfo, weight: text })}
                placeholder="Enter your weight"
            />

            <Text style={styles.label}>Height (in):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={userInfo.height.toString()}
                onChangeText={text => setUserInfo({ ...userInfo, height: text })}
                placeholder="Enter your weight"
            />

            <Text style={styles.label}>Gender:</Text>
            <Picker
                selectedValue={userInfo.gender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setUserInfo({ ...userInfo, gender: itemValue })}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    label: {
        width: '100%',
        marginBottom: 10,
    },
    picker: {
        width: '100%',
        height: 50,
        marginBottom: 20,
    },
});

export default BasicInfoScreen;
