import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserDBEntry, updateUserDetails } from '../logic/account';
import { AccountContext } from '../../App';

let userID;
let DEBUG = true;

const BasicInfoScreen = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: 0,
        weight: 0,
        height: 0,
        gender: "",
    });
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user info...");
        getUserDBEntry(userID).then((user) => {
            if (user == null) {
                console.error("User info isn't made yet");
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

    const handleSubmit = async () => {
        DEBUG && console.log("Submitting user info...");
        await updateUserDetails(userID, userInfo.name,
            userInfo.weight, userInfo.age, userInfo.height, userInfo.gender);
        DEBUG && console.log("Returning to settings home...");
        navigation.navigate('Settings Home');
    };

    return (

        <View style={styles.container}>

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
