import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../logic/user-goals';
import { AccountContext } from '../../App';

let userID;
let DEBUG = false;

const DailyGoalsScreen = () => {
    const [goalsInfo, setGoalsInfo] = useState({
        minCalories: 0,
        maxCalories: 0,
        minSleep: 0,
        dailyWorkout: false,
    });
    const [missingInfo, setMissingInfo] = useState(false);
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user goals info...");
        getUserGoals(userID).then((goals) => {
            if (goals == null) {
                console.log("Goals info isn't made yet");
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
        if (goalsInfo.minCalories == 0 || goalsInfo.maxCalories == 0 || goalsInfo.minSleep == 0) {
            setMissingInfo(true);
            return;
        }
        DEBUG && console.log("Submitting goal info...");
        getUserGoals(userID).then(async (goals) => {
            if (goals == null) {
                // make new goals
                await createUserGoals(userID, goalsInfo.minCalories, goalsInfo.maxCalories, goalsInfo.minSleep, goalsInfo.dailyWorkout);
            }
            else {
                // update goals
                await updateUserGoals(userID, goalsInfo.minCalories, goalsInfo.maxCalories, goalsInfo.minSleep, goalsInfo.dailyWorkout);
            }
        });
        DEBUG && console.log("Returning to settings home...");
        navigation.navigate('Settings Home');
    };

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Set Your Daily Goals</Text>

            <View style={styles.body}>
                {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Minimum Calories:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={goalsInfo.minCalories.toString()}
                        onChangeText={text => setGoalsInfo({ ...goalsInfo, minCalories: text })}
                        placeholder="Enter your calorie goal"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Maximum Calories:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={goalsInfo.maxCalories.toString()}
                        onChangeText={text => setGoalsInfo({ ...goalsInfo, maxCalories: text })}
                        placeholder="Enter your calorie goal"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Minimum Sleep Duration:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={goalsInfo.minSleep.toString()}
                        onChangeText={text => setGoalsInfo({ ...goalsInfo, minSleep: text })}
                        placeholder="Enter your sleep goal"
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Daily Workout:</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={goalsInfo.dailyWorkout}
                        onValueChange={itemValue => setGoalsInfo({ ...goalsInfo, dailyWorkout: itemValue })}>
                        <Picker.Item label="Yes" value={true} />
                        <Picker.Item label="No" value={false} />
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
        backgroundColor: 'lightgray',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        padding: 10,
        color: 'black',
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
    },
    label: {
        flex: .4,
        padding: 10,
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

export default DailyGoalsScreen;
