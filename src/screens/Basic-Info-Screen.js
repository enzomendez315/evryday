import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserDBEntry, updateUserDetails, createUserDBEntry } from '../logic/account';
import { AccountContext } from '../../App';
import { getUser } from '../graphql/queries';
import { COLORS } from '../theme/theme';

let userID;
let DEBUG = false;

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
            <Text style={styles.title}>Welcome to the Basic Info Screen!</Text>

            <View style={styles.body}>

                {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={userInfo.name}
                        onChangeText={text => setUserInfo({ ...userInfo, name: text })}
                        placeholder="Enter your name"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Age:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={userInfo.age.toString()}
                        onChangeText={text => setUserInfo({ ...userInfo, age: text })}
                        placeholder="Enter your age"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Weight (lbs):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={userInfo.weight.toString()}
                        onChangeText={text => setUserInfo({ ...userInfo, weight: text })}
                        placeholder="Enter your weight"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Height (in):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={userInfo.height.toString()}
                        onChangeText={text => setUserInfo({ ...userInfo, height: text })}
                        placeholder="Enter your height"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Gender:</Text>
                    <Picker
                        selectedValue={userInfo.gender}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setUserInfo({ ...userInfo, gender: itemValue })}>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>

                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundBlue,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
        padding: 10,
    },
    body: {
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: .9,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
    },
    label: {
        flex: .4,
        padding: 10,
        color: 'black',
    },
    input: {
        flex: .6,
        height: 40,
        padding: 10,
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    picker: {
        flex: .6,
        height: 40,
        padding: 10,
        textAlign: 'center',
    },
});

export default BasicInfoScreen;
