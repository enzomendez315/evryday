import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { updateUserDetails } from '../logic/user-service';
import { useNavigation } from '@react-navigation/native';
import { userSignOut } from '../logic/account';


const BasicInfoScreen = () => {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigation = useNavigation();

    const handleSubmit = async () => {
        console.log('Submitting:', { name, weight, age, gender });

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
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />


            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
            />

            <Text style={styles.label}>Weight (lbs):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                placeholder="Enter your weight"
            />

            <Text style={styles.label}>Gender:</Text>
            <Picker
                selectedValue={gender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
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
