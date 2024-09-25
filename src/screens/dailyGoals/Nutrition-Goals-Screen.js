import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../../logic/user-goals';
import { AccountContext } from '../../../App';

import { Slider } from '@miblanchard/react-native-slider';

let userID;
let DEBUG = false;

const NutritionGoalsScreen = () => {
    const [calorieGoal, setCalorieGoal] = useState(0);
    const [proteinPercent, setProteinPercent] = useState(0);
    const [carbPercent, setCarbPercent] = useState(0);
    const [fatPercent, setFatPercent] = useState(0);
    const [missingInfo, setMissingInfo] = useState(false);
    // for sliders
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user goals info...");

    }, []);

    // function to handle changes in the sliders
    // so that the sum of the sliders is always 100
    // updatedValue is the new value of the slider macroType
    // macroType is either "protein", "carb", or "fat"
    const handleMacroChange = (updatedValue, macroType) => {
        // calculate the sum of the other two sliders
        const otherSlidersSum = 100 - updatedValue;
        // set the new value of the slider
        switch (macroType) {
            case "protein":
                setProteinPercent(updatedValue);
                setCarbPercent(Math.floor(otherSlidersSum / 2));
                setFatPercent(Math.ceil(otherSlidersSum / 2));
                break;
            case "carb":
                setCarbPercent(updatedValue);
                setProteinPercent(Math.floor(otherSlidersSum / 2));
                setFatPercent(Math.ceil(otherSlidersSum / 2));
                break;
            case "fat":
                setFatPercent(updatedValue);
                setProteinPercent(Math.floor(otherSlidersSum / 2));
                setCarbPercent(Math.ceil(otherSlidersSum / 2));
                break;
            default:
                console.log("Invalid macro type");
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
                        value={calorieGoal.toString()}
                        onChangeText={text => setCalorieInfo()}
                        placeholder="Enter your calorie goal"
                    />
                </View>

                <View style={styles.macroContainer}>
                    <Text>Protein Percent: {proteinPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={proteinPercent}
                        onValueChange={value => handleMacroChange(value, "protein")}
                    />

                    <Text>Carb Percent: {carbPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={carbPercent}
                        onValueChange={value => handleMacroChange(value, "carb")}
                    />

                    <Text>Fat Percent: {fatPercent}</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={fatPercent}
                        onValueChange={value => handleMacroChange(value, "fat")}
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
