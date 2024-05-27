import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/theme';


const EditRoutineScreen = ({ route, navigation }) => {
    navigation = useNavigation();
    let routineName = route.params?.routineName || 'New Workout';
    let tempWorkoutData = route.params?.workoutData || [];
    const [workoutData, setWorkoutData] = useState(tempWorkoutData);
    const [text, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Routine Screen</Text>
            <ScrollView>
                <View style={styles.routineContainer}>
                    <Text style={styles.title}>{routineName}</Text>
                    {workoutData.map((item, index) => (
                        <View style={styles.exercisesContainer} key={index}>
                            <Text>Exercise: {item.name}</Text>
                            <Text>Target: {item.muscleGroup}</Text>

                            <View style={styles.setContainerHeader}>
                                <Text>Set</Text>
                                <Text>Reps</Text>
                                <Text>Weight</Text>
                            </View>

                            {item.sets.map((set, setIndex) => (
                                <View style={styles.setContainer} key={setIndex}>
                                    <Text>{set.setNumber}</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        defaultValue={set.reps.toString()}
                                        inputMode='numeric'
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={styles.textInputWeight}
                                            defaultValue={set.weight.toString().replace('lb', '')}
                                            inputMode='numeric'
                                        />
                                        <Text>lb</Text>
                                    </View>

                                </View>
                            ))}

                            <TouchableOpacity style={styles.addSetButton}
                                onPress={() => console.log("add set pressed")}>
                                <Text style={{ color: 'white' }}>+ Set</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    routineContainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        margin: 10,
    },
    exercisesContainer: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white'
    },
    setContainerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
    },
    setContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: COLORS.lightGray,
    },
    textInput: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    textInputWeight: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        margin: 1, //only difference from and textInput
        backgroundColor: 'white',
        borderRadius: 8,
    },
    addSetButton: {
        backgroundColor: COLORS.primaryBlueHex,
        padding: 10,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: 100,
    },
});

export default EditRoutineScreen;