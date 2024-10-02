import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../../logic/user-goals';
import { AccountContext } from '../../../App';
import { COLORS } from '../../theme/theme';

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

        <ScrollView style={styles.container}>
            <Text style={styles.title}>Set Your Daily Goals</Text>

            <View style={styles.body}>
                {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

                <Text style={styles.sectionHeader}>Nutrition Goals</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Nutrition Goals") }}>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
                        <View style={styles.nutritionContainer}>
                            <Text>Calorie Goal</Text>
                            <Text>{goalsInfo.calorieGoal - goalsInfo.nutritionBuffer / 100 * goalsInfo.calorieGoal} -
                                {goalsInfo.calorieGoal + goalsInfo.nutritionBuffer / 100 * goalsInfo.calorieGoal}cal </Text>
                        </View>
                        <View style={styles.nutritionContainer}>
                            <Text>Carb Goal</Text>
                            <Text>{goalsInfo.carbGoal - goalsInfo.nutritionBuffer / 100 * goalsInfo.carbGoal} -
                                {goalsInfo.carbGoal + goalsInfo.nutritionBuffer / 100 * goalsInfo.carbGoal}g </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
                        <View style={styles.nutritionContainer}>
                            <Text>Protein Goal</Text>
                            <Text>{goalsInfo.proteinGoal - goalsInfo.nutritionBuffer / 100 * goalsInfo.proteinGoal} -
                                {goalsInfo.proteinGoal + goalsInfo.nutritionBuffer / 100 * goalsInfo.proteinGoal}g </Text>
                        </View>
                        <View style={styles.nutritionContainer}>
                            <Text>Fat Goal</Text>
                            <Text>{Math.round(goalsInfo.fatGoal - goalsInfo.nutritionBuffer / 100 * goalsInfo.fatGoal)} -
                                {Math.round(goalsInfo.fatGoal + goalsInfo.nutritionBuffer / 100 * goalsInfo.fatGoal)}g </Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <Text style={styles.sectionHeader}>Sleep Goal</Text>
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

                <Text style={styles.sectionHeader}>Workout Goal</Text>
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

                <View style={{ padding: 10 }}>
                    <Button title='Submit' onPress={handleSubmit} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundBlue,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        color: 'black',
    },
    body: {
        padding: 10,
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
    sectionHeader: {
        fontSize: 25,
        color: 'black',
        padding: 10,
    },
    nutritionContainer: {
        alignItems: 'center',
        flex: .8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
    },
});

export default DailyGoalsScreen;
