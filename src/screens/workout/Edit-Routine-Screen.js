import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createExerciseRoutine, updateExerciseRoutine, deleteExerciseRoutine } from '../../logic/workout-api';
import { COLORS } from '../../theme/theme';
import { useFocusEffect } from '@react-navigation/native';
import { AccountContext } from '../../../App';

const exampleExerciseData = [
    {
        name: 'Bench Press',
        sets: [
            // more attributes exist in the AWS database, but these are the important ones
            { reps: 10, weight: '185lb', time: '0', id: 'some big id string' },
            { reps: 10, weight: '185lb', time: '0', id: 'some big id string' },
            { reps: 10, weight: '185lb', time: '0', id: 'some big id string' },
        ],
        muscleGroup: 'Chest',
    }
];

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
    // the ? will prevent the app from crashing if the value is undefined
    // it will be undefined if params is null or undefined
    let tempRoutineName = route.params?.routineName;
    let initExerciseData = route.params?.exerciseData;
    let routineId = route.params?.routineId; // if it's a new routine, this will be undefined

    // exercise data is 
    const [exerciseData, setExerciseData] = useState(initExerciseData);
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
        let newExerciseData = [...exerciseData];
        // Remove the exercise from the exerciseData array
        newExerciseData = newExerciseData.filter(item => item.name !== exerciseToDelete);
        setExerciseData(newExerciseData);
        console.log(`Deleting exercise: ${exerciseToDelete}`);
        setShowDeleteModal(false);
    };

    // called every time the screen is opened
    useFocusEffect(
        React.useCallback(() => {
            console.log("running useFocusEffect in edit routine screen");
            setRoutineName(route.params?.routineName);
            setExerciseData(route.params?.exerciseData);
        }, [route]));

    // called by + Set button
    const AddSet = (exerciseName) => {
        let newExerciseData = [...exerciseData];
        let exercise = newExerciseData.find(item => item.name === exerciseName);
        // copy the reps and weight from recent set
        let newSet = {
            reps: exercise.sets[exercise.sets.length - 1].reps,
            weight: exercise.sets[exercise.sets.length - 1].weight,
        };
        exercise.sets.push(newSet);
        setExerciseData(newExerciseData);
    }

    // called by Remove Set button
    const RemoveSet = (exerciseName) => {
        let newExerciseData = [...exerciseData];
        let exercise = newExerciseData.find(item => item.name === exerciseName);
        exercise.sets.pop();
        setExerciseData(newExerciseData);
    }

    return (
        <View style={styles.container}>
            <DeleteExercisePopup showDeleteModal={showDeleteModal} handleConfirmDelete={handleConfirmDelete}
                exerciseToDelete={exerciseToDelete} setShowDeleteModal={setShowDeleteModal} />
            <ScrollView>
                <View style={styles.routineContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TextInput style={styles.title} value={routineName}
                            onChangeText={(newName) => setRoutineName(newName)} />

                        <TouchableOpacity
                            style={styles.addSetButton}
                            onPress={async () => {
                                if (routineId) {
                                    console.log('Update Routine');
                                    console.log(exerciseData);
                                    await updateExerciseRoutine(routineId, routineName, exerciseData);
                                    navigation.navigate("Workout Home");
                                } else {
                                    console.log('Create Routine');
                                    console.log(exerciseData);
                                    await createExerciseRoutine(userID, routineName, exerciseData);
                                    navigation.navigate("Workout Home");
                                }
                            }}>
                            {routineId ? <Text style={{ color: 'white' }}>Update Routine</Text> :
                                <Text style={{ color: 'white' }}>Create Routine</Text>}

                        </TouchableOpacity>
                    </View>


                    {/* This is the loop for all the exercise types in the routine */}
                    {exerciseData && exerciseData.map((item, index) => (
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
                                    <Text>{setIndex + 1}</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        defaultValue={set.reps.toString()}
                                        inputMode='numeric'
                                        onChange={(e) => {
                                            let newExerciseData = [...exerciseData];
                                            let exercise = newExerciseData.find(exercise => exercise.name === item.name);
                                            exercise.sets[setIndex].reps = e.nativeEvent.text;
                                            setExerciseData(newExerciseData);
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={styles.textInputWeight}
                                            defaultValue={set.weight.toString().replace('lb', '')}
                                            inputMode='numeric'
                                            onChange={(e) => {
                                                let newexerciseData = [...exerciseData];
                                                let exercise = newexerciseData.find(exercise => exercise.name === item.name);
                                                exercise.sets[setIndex].weight = e.nativeEvent.text;
                                                setExerciseData(newexerciseData);
                                            }}
                                        />
                                        <Text>lb</Text>
                                    </View>

                                </View>
                            ))}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={styles.addSetButton}
                                    onPress={() => AddSet(item.name)}>
                                    <Text style={{ color: 'white' }}>Add Set</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addSetButton}
                                    onPress={() => {
                                        if (item.sets.length > 1) RemoveSet(item.name)
                                        else console.log("minimum one set required")
                                    }}>
                                    <Text style={{ color: 'white' }}>Remove Set</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addSetButton}
                        onPress={() =>
                            navigation.navigate("Workout List", { routineName: routineName, exerciseData: exerciseData, routineId: routineId })}>
                        <Text style={{ color: 'white' }}>Add Exercise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSetButton}
                        onPress={async () => {
                            await deleteExerciseRoutine(routineId);
                            navigation.navigate("Workout Home")
                        }}>
                        <Text style={{ color: 'white' }}>Delete Routine</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.workoutBackgroundPistachio,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    routineContainer: {
        flex: 1,
        backgroundColor: COLORS.workoutBackgroundPistachio,
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
        backgroundColor: COLORS.workoutButtonGreen,
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