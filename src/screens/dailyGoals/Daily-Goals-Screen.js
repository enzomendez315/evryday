import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../../logic/user-goals';
import { AccountContext } from '../../../App';

let userID;
let DEBUG = false;

const DailyGoalsScreen = () => {
    const [goalsInfo, setGoalsInfo] = useState({
        calorieGoal: 0,
        proteinGoal: 0,
        carbGoal: 0,
        fatGoal: 0,
        nutritionBuffer: 0,
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
                    calorieGoal: goals.calorieGoal,
                    proteinGoal: goals.proteinGoal,
                    carbGoal: goals.carbGoal,
                    fatGoal: goals.fatGoal,
                    minSleep: goals.minSleep,
                    nutritionBuffer: goals.nutritionBuffer,
                    dailyWorkout: goals.dailyWorkout,
                });
            }
        });
    }, []);

    const handleSubmit = async () => {
        if (goalsInfo.calorieGoal == 0 || goalsInfo.minSleep == 0
            || goalsInfo.proteinGoal == 0 || goalsInfo.carbGoal == 0 ||
            goalsInfo.fatGoal == 0 || goalsInfo.nutritionBuffer == 0) {
            setMissingInfo(true);
            return;
        }
        DEBUG && console.log("Submitting goal info...");
        getUserGoals(userID).then(async (goals) => {
            if (goals == null) {
                // make new goals
                await createUserGoals(userID, goalsInfo.calorieGoal, goalsInfo.minSleep, goalsInfo.dailyWorkout,
                    goalsInfo.proteinGoal, goalsInfo.carbGoal, goalsInfo.fatGoal, goalsInfo.nutritionBuffer);
            }
            else {
                // update goals
                await updateUserGoals(userID, goalsInfo.calorieGoal, goalsInfo.minSleep, goalsInfo.dailyWorkout,
                    goalsInfo.proteinGoal, goalsInfo.carbGoal, goalsInfo.fatGoal, goalsInfo.nutritionBuffer);
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

                <Button title="go to nutrition goals"
                    onPress={() => { navigation.navigate("Nutrition Goals") }} />

                <Text>Nutrition Goals</Text>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Calorie Goal: {goalsInfo.calorieGoal.toString()}</Text>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Protein Goal: {goalsInfo.proteinGoal.toString()}g</Text>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Carb Goal: {goalsInfo.carbGoal.toString()}g</Text>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Fat Goal: {goalsInfo.fatGoal.toString()}g</Text>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Nutrition Buffer: {goalsInfo.nutritionBuffer.toString()}</Text>
                </View>

                <Text>Sleep Goal</Text>
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

                <Text>Workout Goal</Text>
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
        flex: .5,
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
