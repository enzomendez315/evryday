import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

const exercises = [
    { name: 'Bench Press (Barbell)', detail: '165 lbs (x4)', type: 'Chest' },
    { name: 'Plank', detail: '1:10', type: 'Core' },
    { name: 'Push Up', detail: '20 reps', type: 'Chest' },
    { name: 'T Bar Row', detail: '80 lbs (x3)', type: 'Back' },
    { name: 'Seated Row', detail: '126 lbs (x8)', type: 'Back' },
    { name: 'Squat', detail: '200 lbs (x5)', type: 'Legs' },
    { name: 'Deadlift', detail: '225 lbs (x5)', type: 'Back' },
    { name: 'Leg Press', detail: '350 lbs (x6)', type: 'Legs' },
    { name: 'Calf Raises', detail: '150 lbs (x10)', type: 'Calves' },
    { name: 'Lat Pulldown', detail: '100 lbs (x6)', type: 'Back' },
    { name: 'Overhead Press', detail: '60 lbs (x6)', type: 'Shoulders' },
    { name: 'Barbell Curl', detail: '50 lbs (x8)', type: 'Arms' },
    { name: 'Tricep Dip', detail: 'bodyweight (x10)', type: 'Arms' },
    { name: 'Pull Up', detail: 'bodyweight (x10)', type: 'Back' },
    { name: 'Pec Deck Fly', detail: '75 lbs (x8)', type: 'Chest' },
    { name: 'Incline Bench Press', detail: '135 lbs (x5)', type: 'Chest' },
    { name: 'Front Squat', detail: '185 lbs (x5)', type: 'Legs' },
    { name: 'Military Press', detail: '95 lbs (x5)', type: 'Shoulders' },
    { name: 'Shrugs', detail: '270 lbs (x8)', type: 'Shoulders' },
    { name: 'Leg Curl', detail: '80 lbs (x10)', type: 'Legs' },
    { name: 'Leg Extension', detail: '75 lbs (x10)', type: 'Legs' },
    { name: 'Lateral Raise', detail: '25 lbs (x10)', type: 'Shoulders' },
    { name: 'Reverse Fly', detail: '25 lbs (x10)', type: 'Back' },
    { name: 'Decline Bench Press', detail: '155 lbs (x5)', type: 'Chest' },
    { name: 'Chest Dip', detail: 'bodyweight (x12)', type: 'Chest' },
    { name: 'Hanging Leg Raise', detail: 'bodyweight (x15)', type: 'Core' },
    { name: 'Close-Grip Bench Press', detail: '125 lbs (x6)', type: 'Arms' },
    { name: 'Barbell Hack Squat', detail: '180 lbs (x5)', type: 'Legs' },
    { name: 'Hex Bar Deadlift', detail: '200 lbs (x5)', type: 'Back' },
    { name: 'Zercher Squat', detail: '160 lbs (x5)', type: 'Legs' },
    { name: 'Turkish Get Up', detail: '35 lbs (x5 per side)', type: 'Core' },
    { name: 'Farmer’s Walk', detail: '90 lbs (x30 seconds)', type: 'Core' },
    { name: 'Good Morning', detail: '120 lbs (x8)', type: 'Back' },
    { name: 'Dragon Flag', detail: 'bodyweight (x8)', type: 'Core' },
    { name: 'Hip Thrust', detail: '225 lbs (x6)', type: 'Legs' },
    { name: 'Box Jump', detail: '24 inches (x10)', type: 'Legs' },
    { name: 'Dumbbell Snatch', detail: '50 lbs (x6 per side)', type: 'Shoulders' },
    { name: 'Arnold Press', detail: '40 lbs (x8)', type: 'Shoulders' }
];

const WorkoutListScreen = ({ route, navigation }) => {
    let routineName = route.params?.routineName || '';
    let initWorkoutData = route.params?.exerciseData || [];
    let routineId = route.params?.routineId;

    const [workoutData, setWorkoutData] = useState(initWorkoutData);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredExercises, setFilteredExercises] = useState(exercises);

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFilteredExercises(exercises);
        } else {
            const filteredData = exercises.filter(exercise =>
                exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                exercise.type.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredExercises(filteredData);
        }
    };

    const handlePressed = (exerciseName, exerciseTarget) => {
        const newWorkoutData = [...workoutData,
        {
            name: exerciseName,
            sets: [{ weight: '10', reps: '8' }],
            muscleGroup: exerciseTarget
        }];
        navigation.navigate("Edit Routine", { routineName: routineName, exerciseData: newWorkoutData, routineId: routineId });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercises</Text>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Type here to search..."
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    onSubmitEditing={handleSearch}  // Search when the user submits the keyboard
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listContainer}>
                {filteredExercises.length > 0 ? (
                    filteredExercises.map((exercise, index) => (
                        <TouchableOpacity
                            key={index} style={styles.exerciseItem}
                            onPress={() => {
                                if (routineName !== '') handlePressed(exercise.name, exercise.type);
                            }}>
                            <Text style={styles.exerciseName}>{exercise.name}</Text>
                            <Text style={styles.exerciseDetail}>{exercise.detail}</Text>
                            <Text style={styles.exerciseType}>{exercise.type}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.noResultsText}>No Exercise Found</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 15,
        backgroundColor: COLORS.backgroundBlue,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'left'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },

    searchInput: {
        flex: 1,
        marginRight: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 16,
    },

    searchButton: {
        backgroundColor: COLORS.primaryBlueHex,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    searchButtonText: {
        fontSize: 16,
        color: COLORS.whiteHex,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    listContainer: {
        flex: 1
    },

    exerciseItem: {
        backgroundColor: COLORS.darkBlue,
        borderRadius: 15,
        padding: 12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    exerciseName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.whiteHex,
    },

    exerciseDetail: {
        fontSize: 14,
        color: COLORS.lightBlue,
    },
    exerciseType: {
        fontSize: 14,
        color: COLORS.lightGray,
    },

    noResultsText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    }
});

export default WorkoutListScreen;
