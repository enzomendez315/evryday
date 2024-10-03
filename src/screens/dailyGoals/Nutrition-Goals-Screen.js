import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getUserGoals, updateUserGoals, createUserGoals } from '../../logic/user-goals';
import { AccountContext } from '../../../App';

import { Slider } from '@miblanchard/react-native-slider';
import { COLORS } from '../../theme/theme';

let userID;
let DEBUG = false;

const NutritionGoalsScreen = () => {
    const [calorieGoal, setCalorieGoal] = useState(0);
    const [nutritionBuffer, setNutritionBuffer] = useState(10);
    const [proteinPercent, setProteinPercent] = useState(0);
    const [carbPercent, setCarbPercent] = useState(0);
    const [fatPercent, setFatPercent] = useState(0);
    const [missingInfo, setMissingInfo] = useState(false);
    const [showRecommended, setShowRecommended] = useState(false);
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
                setCalorieGoal(goals.calorieGoal);
                setNutritionBuffer(goals.nutritionBuffer);
                // get the percentage of the macros from the calorie goal
                let proteinPercent = (goals.proteinGoal / (goals.calorieGoal / 4)) * 100;
                setProteinPercent(Math.round(proteinPercent));
                let carbPercent = (goals.carbGoal / (goals.calorieGoal / 4)) * 100;
                setCarbPercent(Math.round(carbPercent));
                let fatPercent = (goals.fatGoal / (goals.calorieGoal / 9)) * 100;
                setFatPercent(Math.round(fatPercent));
            }
        });
    }, []);

    // called every time the screen is opened
    useFocusEffect(
        React.useCallback(() => {
            DEBUG && console.log("Getting user goals info...");
            getUserGoals(userID).then((goals) => {
                if (goals == null) {
                    console.log("Goals info isn't made yet");
                    return;
                }
                else {
                    setCalorieGoal(goals.calorieGoal);
                    setNutritionBuffer(goals.nutritionBuffer);
                    // get the percentage of the macros from the calorie goal
                    let proteinPercent = (goals.proteinGoal / (goals.calorieGoal / 4)) * 100;
                    setProteinPercent(Math.round(proteinPercent));
                    let carbPercent = (goals.carbGoal / (goals.calorieGoal / 4)) * 100;
                    setCarbPercent(Math.round(carbPercent));
                    let fatPercent = (goals.fatGoal / (goals.calorieGoal / 9)) * 100;
                    setFatPercent(Math.round(fatPercent));
                }
            });
            return;
        }, [])
    );

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

    const fillRecommended = (calorieGoal_, proteinPercent_, carbPercent_, fatPercent_, nutritionBuffer_) => {
        setCalorieGoal(calorieGoal_);
        setProteinPercent(proteinPercent_);
        setCarbPercent(carbPercent_);
        setFatPercent(fatPercent_);
        setNutritionBuffer(nutritionBuffer_);
    };

    const handleSubmit = async () => {
        if (calorieGoal == 0) {
            setMissingInfo(true);
            return;
        }
        DEBUG && console.log("Submitting goal info...");
        getUserGoals(userID).then(async (goals) => {
            if (goals == null) {
                // make new goals
                await createUserGoals(userID, calorieGoal, 0, false,
                    calorieGoal * (proteinPercent / 100) / 4,
                    calorieGoal * (carbPercent / 100) / 4,
                    calorieGoal * (fatPercent / 100) / 9,
                    nutritionBuffer);
            }
            else {
                // update goals
                await updateUserGoals(userID, calorieGoal, 8, true,
                    calorieGoal * (proteinPercent / 100) / 4,
                    calorieGoal * (carbPercent / 100) / 4,
                    calorieGoal * (fatPercent / 100) / 9,
                    nutritionBuffer);
            }
            navigation.navigate('Daily Goals');
        });
    };

    return (

        <View style={styles.container}>
            <View style={styles.body}>
                {missingInfo && <Text style={styles.label}>Please fill in your information:</Text>}

                <View style={{ padding: 10 }}>
                    <Button title={showRecommended ? "Hide Recommended Goals" : "Show Recommended Goals"}
                        onPress={() => {
                            setShowRecommended(!showRecommended);
                        }} />
                </View>

                {showRecommended &&
                    <View style={styles.recommendedsContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Balanced</Text>
                            <TouchableOpacity style={styles.recommendedButton}
                                onPress={() => {
                                    fillRecommended(2000, 30, 40, 30, 10);
                                }}>
                                <Text>30-40-30</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>High Protein</Text>
                            <TouchableOpacity style={styles.recommendedButton}
                                onPress={() => {
                                    fillRecommended(2000, 40, 30, 30, 10);
                                }}>
                                <Text>40-30-30</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Low Carb</Text>
                            <TouchableOpacity style={styles.recommendedButton}
                                onPress={() => {
                                    fillRecommended(2000, 30, 20, 50, 10);
                                }}>
                                <Text>30-20-50</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Calorie Goal:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={calorieGoal.toString()}
                        onChangeText={text => setCalorieGoal(text)}
                        placeholder="Enter your calorie goal"
                    />
                    <View>
                        <Text>Minimum Calories: {calorieGoal - calorieGoal * (nutritionBuffer / 100)}</Text>
                        <Text>Maximum Calories: {parseInt(calorieGoal) + parseInt(calorieGoal) * (nutritionBuffer / 100)}</Text>
                    </View>
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
                        <View>
                            <Text>Protein Goal: {parseInt(calorieGoal * (proteinPercent / 100) / 4)}g</Text>
                            <Text>{parseInt(calorieGoal * (proteinPercent / 100) / 4) -
                                parseInt(parseInt(calorieGoal * (proteinPercent / 100) / 4) * (nutritionBuffer / 100))}
                                - {parseInt(calorieGoal * (proteinPercent / 100) / 4) +
                                    parseInt(parseInt(calorieGoal * (proteinPercent / 100) / 4) * (nutritionBuffer / 100))}
                            </Text>
                        </View>
                    </View>

                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={proteinPercent}
                        onValueChange={value => handleMacroChange(value, "protein")}
                    />

                </View>
                <View style={styles.macroContainer}>
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
                        <View>
                            <Text>Carb Goal: {parseInt(calorieGoal * (carbPercent / 100) / 4)}g</Text>
                            <Text>{parseInt(calorieGoal * (carbPercent / 100) / 4) -
                                parseInt(parseInt(calorieGoal * (carbPercent / 100) / 4) * (nutritionBuffer / 100))}
                                - {parseInt(calorieGoal * (carbPercent / 100) / 4) +
                                    parseInt(parseInt(calorieGoal * (carbPercent / 100) / 4) * (nutritionBuffer / 100))}
                            </Text>
                        </View>
                    </View>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={carbPercent}
                        onValueChange={value => handleMacroChange(value, "carb")}
                    />

                </View>
                <View style={styles.macroContainer}>

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
                        <View>
                            <Text>Fat Goal: {parseInt(calorieGoal * (fatPercent / 100) / 9)}g</Text>
                            <Text>{parseInt(calorieGoal * (fatPercent / 100) / 9) -
                                parseInt(parseInt(calorieGoal * (fatPercent / 100) / 9) * (nutritionBuffer / 100))}
                                - {parseInt(calorieGoal * (fatPercent / 100) / 9) +
                                    parseInt(parseInt(calorieGoal * (fatPercent / 100) / 9) * (nutritionBuffer / 100))}
                            </Text>
                        </View>
                    </View>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={fatPercent}
                        onValueChange={value => handleMacroChange(value, "fat")}
                    />
                </View>

                <View style={styles.macroContainer}>
                    <Text>Nutrition Buffer: {nutritionBuffer}%</Text>
                    <Slider
                        maximumValue={25}
                        minimumValue={5}
                        step={1}
                        value={nutritionBuffer}
                        onValueChange={value => setNutritionBuffer(value)}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundBlue,
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
    recommendedsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
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
    recommendedButton: {
        padding: 10,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 10,
        margin: 5,
    },
    macroContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
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
    recommendedButton: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        margin: 5,
    },
});

export default NutritionGoalsScreen;
