import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals } from '../logic/user-goals';
import { AccountContext } from '../../App';

let userID;
let DEBUG = true;

const DailyGoalsScreen = () => {
    const [goalsInfo, setGoalsInfo] = useState({
        minCalories: 0,
        maxCalories: 0,
        minSleep: 0,
        dailyWorkout: false,
    });
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user goals info...");
        getUserGoals(userID).then((goals) => {
            if (goals == null) {
                console.error("Goals info isn't made yet");
                return;
            }
            else {
                setGoalsInfo({
                    minCalories: goals.minCalories,
                    maxCalories: goals.maxCalories,
                    minSleep: goals.minSleep,
                    dailyWorkout: goals.dailyWorkout,
                });
            }
        });
    }, []);

    const handleSubmit = async () => {
        DEBUG && console.log("Submitting goal info...");
        await updateUserGoals(userID, goalsInfo.minCalories, goalsInfo.maxCalories, goalsInfo.minSleep, goalsInfo.dailyWorkout);
        DEBUG && console.log("Returning to settings home...");
        navigation.navigate('Settings Home');
    };

    return (

        <View style={styles.container}>

            <Text style={styles.label}>Minimum Calories:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={goalsInfo.minCalories.toString()}
                onChangeText={text => setGoalsInfo({ ...goalsInfo, minCalories: text })}
                placeholder="Enter your calorie goal"
            />

            <Text style={styles.label}>Maximum Calories:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={goalsInfo.maxCalories.toString()}
                onChangeText={text => setGoalsInfo({ ...goalsInfo, maxCalories: text })}
                placeholder="Enter your calorie goal"
            />

            <Text style={styles.label}>Minimum Sleep Duration:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={goalsInfo.minSleep.toString()}
                onChangeText={text => setGoalsInfo({ ...goalsInfo, minSleep: text })}
                placeholder="Enter your sleep goal"
            />

            <Text style={styles.label}>Daily Workout:</Text>
            <Picker
                style={styles.picker}
                selectedValue={goalsInfo.dailyWorkout}
                onValueChange={itemValue => setGoalsInfo({ ...goalsInfo, dailyWorkout: itemValue })}>
                <Picker.Item label="Yes" value={true} />
                <Picker.Item label="No" value={false} />
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

export default DailyGoalsScreen;
