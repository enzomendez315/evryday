import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../../logic/user-goals';
import { AccountContext } from '../../../App';

import { Slider } from '@miblanchard/react-native-slider';

let userID;
let DEBUG = false;

const NutritionGoalsScreen = () => {
    const [goalsInfo, setGoalsInfo] = useState({
        calorieGoal: 0,
        proteinPercent: 0,
        carbPercent: 0,
        fatPercent: 0,
    });
    const [missingInfo, setMissingInfo] = useState(false);
    // for sliders
    const [value, setValue] = useState(0);
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user goals info...");

    }, []);

    // function to handle changes in the sliders
    // so that the sum of the sliders is always 100
    // generated in part by our lord and savior, ChatGPT
    // not used yet
    const handleMacroChange = (updatedValue, macroType) => {
        const { calorieGoal, proteinPercent, carbPercent, fatPercent } = goalsInfo;

        // Calculate remaining percentage for the other two sliders
        const remainingPercent = 100 - updatedValue;
        let newProtein = proteinPercent;
        let newCarb = carbPercent;
        let newFat = fatPercent;

        // Determine which sliders to adjust
        if (macroType === 'protein') {
            const sumOtherMacros = carbPercent + fatPercent;
            newCarb = parseInt((carbPercent / sumOtherMacros) * remainingPercent);
            newFat = parseInt((fatPercent / sumOtherMacros) * remainingPercent);
            setGoalsInfo({ ...goalsInfo, proteinPercent: updatedValue, carbPercent: newCarb, fatPercent: newFat });
        } else if (macroType === 'carb') {
            const sumOtherMacros = proteinPercent + fatPercent;
            newProtein = parseInt((proteinPercent / sumOtherMacros) * remainingPercent);
            newFat = parseInt((fatPercent / sumOtherMacros) * remainingPercent);
            setGoalsInfo({ ...goalsInfo, proteinPercent: newProtein, carbPercent: updatedValue, fatPercent: newFat });
        } else if (macroType === 'fat') {
            const sumOtherMacros = proteinPercent + carbPercent;
            newProtein = parseInt((proteinPercent / sumOtherMacros) * remainingPercent);
            newCarb = parseInt((carbPercent / sumOtherMacros) * remainingPercent);
            setGoalsInfo({ ...goalsInfo, proteinPercent: newProtein, carbPercent: newCarb, fatPercent: updatedValue });
        }
    };

    const handleSubmit = async () => {
    };

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Set Your Nutrition Goals</Text>

            <View style={styles.body}>
                {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Calorie Goal:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={goalsInfo.calorieGoal.toString()}
                        onChangeText={text => setGoalsInfo({ ...goalsInfo, calorieGoal: text })}
                        placeholder="Enter your calorie goal"
                    />
                </View>

                <View style={styles.macroContainer}>
                    <Text>Protein Percent: {goalsInfo.proteinPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={goalsInfo.proteinPercent}
                        onValueChange={value => setGoalsInfo({ ...goalsInfo, proteinPercent: value })}
                    />

                    <Text>Carb Percent: {goalsInfo.carbPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={goalsInfo.carbPercent}
                        onValueChange={value => setGoalsInfo({ ...goalsInfo, carbPercent: value })}
                    />

                    <Text>Fat Percent: {goalsInfo.fatPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={goalsInfo.fatPercent}
                        onValueChange={value => setGoalsInfo({ ...goalsInfo, fatPercent: value })}
                    />
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
    macroContainer: {
        padding: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
});

export default NutritionGoalsScreen;
