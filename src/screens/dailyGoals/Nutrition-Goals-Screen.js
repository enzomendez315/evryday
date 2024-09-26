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
    const navigation = useNavigation();

    userID = React.useContext(AccountContext);

    // gets the user's info from the DB entry and fills in the hooks
    useEffect(() => {
        DEBUG && console.log("Getting user goals info...");
    }, []);

    // function to handle changes in the sliders
    // so that the sum of the sliders is always 100 or less
    // updatedValue is the new value of the slider macroType
    // macroType is either "protein", "carb", or "fat"
    // if you're debugging this, I'm sorry for the spaghetti code
    const handleMacroChange = (updatedValue, macroType) => {
        // calculate the sum of the other two sliders
        const otherSlidersSum = 100 - parseInt(updatedValue);
        // if the sum of the sliders is less than 100, set the new value
        switch (macroType) {
            case "protein":
                // if the sum is less than 100, only change the protein slider
                if (parseInt(updatedValue) + parseInt(carbPercent) + parseInt(fatPercent) <= 100) {
                    setProteinPercent(updatedValue);
                    break;
                }
                // if the sum is greater than 100, set the protein slider to the new value
                // and lower the other slider with the higher value
                // if the other sliders are equal, lower them both at the same rate
                else {
                    setProteinPercent(updatedValue);
                    if (parseInt(carbPercent) > parseInt(fatPercent)) {
                        setCarbPercent(parseInt(otherSlidersSum) - parseInt(fatPercent));
                        break;
                    }
                    else if (parseInt(fatPercent) > parseInt(carbPercent)) {
                        setFatPercent(otherSlidersSum - parseInt(carbPercent));
                        break;
                    }
                    else {
                        setCarbPercent(Math.floor(otherSlidersSum / 2));
                        setFatPercent(Math.ceil(otherSlidersSum / 2));
                        break;
                    }
                }
            case "carb":
                if (parseInt(proteinPercent) + parseInt(updatedValue) + parseInt(fatPercent) <= 100) {
                    setCarbPercent(updatedValue);
                    break;
                }
                else {
                    setCarbPercent(updatedValue);
                    if (parseInt(proteinPercent) > parseInt(fatPercent)) {
                        setProteinPercent(otherSlidersSum - parseInt(fatPercent));
                        break;
                    }
                    else if (parseInt(fatPercent) > parseInt(proteinPercent)) {
                        setFatPercent(otherSlidersSum - parseInt(proteinPercent));
                        break;
                    }
                    else {
                        setProteinPercent(Math.floor(otherSlidersSum / 2));
                        setFatPercent(Math.ceil(otherSlidersSum / 2));
                        break;
                    }
                }
            case "fat":
                if (parseInt(proteinPercent) + parseInt(carbPercent) + parseInt(updatedValue) <= 100) {
                    setFatPercent(updatedValue);
                    break;
                }
                else {
                    setFatPercent(updatedValue);
                    if (parseInt(proteinPercent) > parseInt(carbPercent)) {
                        setProteinPercent(otherSlidersSum - parseInt(carbPercent));
                        break;
                    }
                    else if (parseInt(carbPercent) > parseInt(proteinPercent)) {
                        setCarbPercent(otherSlidersSum - parseInt(proteinPercent));
                        break;
                    }
                    else {
                        setProteinPercent(Math.floor(otherSlidersSum / 2));
                        setCarbPercent(Math.ceil(otherSlidersSum / 2));
                        break;
                    }
                }
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
                        onChangeText={text => setCalorieGoal(text)}
                        placeholder="Enter your calorie goal"
                    />
                </View>

                <View style={styles.macroContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Protein Percent:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={proteinPercent.toString()}
                            onChangeText={text => {
                                handleMacroChange(text, "protein");
                            }}
                            placeholder="Enter your protein percentage goal"
                        />
                    </View>

                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={proteinPercent}
                        onValueChange={value => handleMacroChange(value, "protein")}
                    />


                    <View style={{ flexDirection: 'row' }}>
                        <Text>Carb Percent:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={carbPercent.toString()}
                            onChangeText={text => {
                                handleMacroChange(text, "carb");
                            }}
                            placeholder="Enter your carb percentage goal"
                        />
                    </View>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={carbPercent}
                        onValueChange={value => handleMacroChange(value, "carb")}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text>Fat Percent:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={fatPercent.toString()}
                            onChangeText={text => {
                                handleMacroChange(text, "fat");
                            }}
                            placeholder="Enter your fat percentage goal"
                        />
                    </View>
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
