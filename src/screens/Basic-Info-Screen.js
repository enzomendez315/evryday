import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { updateUserDetails } from '../logic/user-service';
import { useNavigation } from '@react-navigation/native';
import { userSignOut } from '../logic/account';


const BasicInfoScreen = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: 0,
        weight: 0,
        gender: "",
    });
    const navigation = useNavigation();

    const handleSubmit = async () => {
        // console.log('Submitting:', { name, weight, age, gender });

        //Currently does not work yet
        // try {

        //     const updateSuccess = await updateUserDetails(name, weight, age, gender);
        //     if (updateSuccess) {
        //         console.log("Update successful");
        //     } else {
        //         console.log("Update failed");
        //     }
        // } catch (error) {
        //     console.error("Failed to update user info:", error);
        // }

        // console.log('Attempting to navigate...');
        // navigation.navigate('Dashboard', {
        //     screen: 'Dashboard Home'
        // });

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
            <Button title="Back to Sign In" onPress={userSignOut} />
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
