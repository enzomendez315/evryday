import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createExerciseRoutine } from '../../logic/workout-api';
import { COLORS } from '../../theme/theme';
import { useFocusEffect } from '@react-navigation/native';
import { AccountContext } from '../../../App';

let userID = '';

const DeleteExercisePopup = ({ setShowDeleteModal, showDeleteModal, exerciseToDelete, handleConfirmDelete }) => {
    return (
        <Modal
            visible={showDeleteModal}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setShowDeleteModal(false)}
        >
            <View style={styles.popupOverlay}>
                <View style={styles.popup}>
                    <View style={styles.popupHeader}>
                        <Text>Are you sure you want to delete {exerciseToDelete} from this routine?</Text>
                    </View>
                    <TouchableOpacity style={styles.addSetButton}
                        onPress={() => {
                            handleConfirmDelete();
                            setShowDeleteModal(false);
                        }} >
                        <Text style={{ color: 'white' }}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSetButton}
                        onPress={() => {
                            setShowDeleteModal(false);
                        }} >
                        <Text style={{ color: 'white' }}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const EditRoutineScreen = ({ route, navigation }) => {
    let tempRoutineName = route.params?.routineName;
    let initWorkoutData = route.params?.workoutData;
    const [workoutData, setWorkoutData] = useState(initWorkoutData);
    const [routineName, setRoutineName] = useState(tempRoutineName);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [exerciseToDelete, setExerciseToDelete] = useState('');

    userID = React.useContext(AccountContext);

    const handleDeleteExercise = (exerciseName) => {
        setExerciseToDelete(exerciseName);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        // Perform delete operation here
        let newWorkoutData = [...workoutData];
        // Remove the exercise from the workoutData array
        newWorkoutData = newWorkoutData.filter(item => item.name !== exerciseToDelete);
        setWorkoutData(newWorkoutData);
        console.log(`Deleting exercise: ${exerciseToDelete}`);
        setShowDeleteModal(false);
    };

    // called every time the screen is opened
    useFocusEffect(
        React.useCallback(() => {
            console.log("running useFocusEffect in edit routine screen");
            setRoutineName(route.params?.routineName);
            setWorkoutData(route.params?.workoutData);
            console.log("this is userID: ", userID);
        }, [route]));

    // called by + Set button
    const AddSet = (exerciseName) => {
        let newWorkoutData = [...workoutData];
        let exercise = newWorkoutData.find(item => item.name === exerciseName);
        let newSet = {
            setNumber: exercise.sets.length + 1,
            reps: exercise.sets[0].reps,
            weight: exercise.sets[0].weight,
        };
        exercise.sets.push(newSet);
        setWorkoutData(newWorkoutData);
    }

    // called by Remove Set button
    const RemoveSet = (exerciseName) => {
        let newWorkoutData = [...workoutData];
        let exercise = newWorkoutData.find(item => item.name === exerciseName);
        exercise.sets.pop();
        setWorkoutData(newWorkoutData);
    }

    return (
        <View style={styles.container}>
            <DeleteExercisePopup showDeleteModal={showDeleteModal} handleConfirmDelete={handleConfirmDelete}
                exerciseToDelete={exerciseToDelete} setShowDeleteModal={setShowDeleteModal} />
            <ScrollView>
                <View style={styles.routineContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>{routineName}</Text>
                        <TouchableOpacity
                            style={styles.addSetButton}
                            onPress={() => {
                                console.log('Save Changes');
                                console.log(workoutData);
                                console.log(workoutData[0].sets);
                                createExerciseRoutine(userID, routineName, workoutData);
                                //navigation.navigate("Routine List", { routineName: routineName, workoutData: workoutData });
                            }}>
                            <Text style={{ color: 'white' }}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>


                    {/* This is the loop for all the exercise types in the routine */}
                    {workoutData && workoutData.map((item, index) => (
                        <View style={styles.exercisesContainer} key={index}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.title}>{item.name}</Text>
                                <TouchableOpacity
                                    style={styles.addSetButton}
                                    onPress={() => handleDeleteExercise(item.name)}>
                                    <Text style={{ color: 'white' }}>Delete Exercise</Text>
                                </TouchableOpacity>
                            </View>

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
                                        onChange={(e) => {
                                            let newWorkoutData = [...workoutData];
                                            let exercise = newWorkoutData.find(exercise => exercise.name === item.name);
                                            exercise.sets[setIndex].reps = e.nativeEvent.text;
                                            setWorkoutData(newWorkoutData);
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={styles.textInputWeight}
                                            defaultValue={set.weight.toString().replace('lb', '')}
                                            inputMode='numeric'
                                            onChange={(e) => {
                                                let newWorkoutData = [...workoutData];
                                                let exercise = newWorkoutData.find(exercise => exercise.name === item.name);
                                                exercise.sets[setIndex].weight = e.nativeEvent.text;
                                                setWorkoutData(newWorkoutData);
                                            }}
                                        />
                                        <Text>lb</Text>
                                    </View>

                                </View>
                            ))}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={styles.addSetButton}
                                    onPress={() => AddSet(item.name)}>
                                    <Text style={{ color: 'white' }}>+ Set</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addSetButton}
                                    onPress={() => RemoveSet(item.name)}>
                                    <Text style={{ color: 'white' }}>Remove Set</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addSetButton}
                        onPress={() => navigation.navigate("Workout List", { routineName: routineName, workoutData: workoutData })}>
                        <Text style={{ color: 'white' }}>+ Exercise</Text>
                    </TouchableOpacity>
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
        width: 120,
    },
    popupOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '90%',
    },
    popupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    popupTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default EditRoutineScreen;