import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const routineData = [
  {
    name: 'Hypertrophy 1',
    exercises: [
      {
        name: 'Squat',
        sets: [
          { setNumber: 1, weight: '185lb', reps: '10', completed: false },
          { setNumber: 2, weight: '185lb', reps: '10', completed: false },
          { setNumber: 3, weight: '185lb', reps: '10', completed: false },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Chest Press',
        sets: [
          { setNumber: 1, weight: '100lb', reps: '12', completed: false },
          { setNumber: 2, weight: '100lb', reps: '12', completed: false },
          { setNumber: 3, weight: '100lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Chest',
      },
      {
        name: 'Seated Row',
        sets: [
          { setNumber: 1, weight: '110lb', reps: '12', completed: false },
          { setNumber: 2, weight: '110lb', reps: '12', completed: false },
          { setNumber: 3, weight: '110lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Extension',
        sets: [
          { setNumber: 1, weight: '80lb', reps: '15', completed: false },
          { setNumber: 2, weight: '80lb', reps: '15', completed: false },
          { setNumber: 3, weight: '80lb', reps: '15', completed: false },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Incline Chest Press',
        sets: [
          { setNumber: 1, weight: '30lb', reps: '12', completed: false },
          { setNumber: 2, weight: '30lb', reps: '12', completed: false },
          { setNumber: 3, weight: '30lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Chest',
      },
    ],
    lastPerformed: '1 day ago',
  },

  {
    name: 'Hypertrophy 2',
    exercises: [
      {
        name: 'Deadlift',
        sets: [
          { setNumber: 1, weight: '225lb', reps: '8', completed: false },
          { setNumber: 2, weight: '225lb', reps: '8', completed: false },
          { setNumber: 3, weight: '225lb', reps: '8', completed: false },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Shoulder Press',
        sets: [
          { setNumber: 1, weight: '80lb', reps: '10', completed: false },
          { setNumber: 2, weight: '80lb', reps: '10', completed: false },
          { setNumber: 3, weight: '80lb', reps: '10', completed: false },
        ],
        muscleGroup: 'Shoulder',
      },
      {
        name: 'Lat Pulldown',
        sets: [
          { setNumber: 1, weight: '120lb', reps: '12', completed: false },
          { setNumber: 2, weight: '120lb', reps: '12', completed: false },
          { setNumber: 3, weight: '120lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Curl',
        sets: [
          { setNumber: 1, weight: '90lb', reps: '12', completed: false },
          { setNumber: 2, weight: '90lb', reps: '12', completed: false },
          { setNumber: 3, weight: '90lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Dumbbell Fly',
        sets: [
          { setNumber: 1, weight: '25lb', reps: '12', completed: false },
          { setNumber: 2, weight: '25lb', reps: '12', completed: false },
          { setNumber: 3, weight: '25lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Chest',
      },
    ],
    lastPerformed: '2 days ago',
  },
  {
    name: 'Hypertrophy 3',
    exercises: [
      {
        name: 'Bench Press',
        sets: [
          { setNumber: 1, weight: '135lb', reps: '10', completed: false },
          { setNumber: 2, weight: '135lb', reps: '10', completed: false },
          { setNumber: 3, weight: '135lb', reps: '10', completed: false },
        ],
        muscleGroup: 'Chest',
      },
      {
        name: 'Bent Over Row',
        sets: [
          { setNumber: 1, weight: '95lb', reps: '12', completed: false },
          { setNumber: 2, weight: '95lb', reps: '12', completed: false },
          { setNumber: 3, weight: '95lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Press',
        sets: [
          { setNumber: 1, weight: '160lb', reps: '12', completed: false },
          { setNumber: 2, weight: '160lb', reps: '12', completed: false },
          { setNumber: 3, weight: '160lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Calf Raise',
        sets: [
          { setNumber: 1, weight: '100lb', reps: '15', completed: false },
          { setNumber: 2, weight: '100lb', reps: '15', completed: false },
          { setNumber: 3, weight: '100lb', reps: '15', completed: false },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Tricep Pushdown',
        sets: [
          { setNumber: 1, weight: '50lb', reps: '12', completed: false },
          { setNumber: 2, weight: '50lb', reps: '12', completed: false },
          { setNumber: 3, weight: '50lb', reps: '12', completed: false },
        ],
        muscleGroup: 'Arm',
      },
    ],
    lastPerformed: '3 days ago',
  }



];

// Individual routine tab component
const RoutineTab = ({ routine, onPress }) => (
  <TouchableOpacity style={styles.routineTab} onPress={onPress}>
    <Text style={styles.routineName}>{routine.name}</Text>
    {routine.exercises && routine.exercises.map((exercise, index) => (
      <View key={index} style={styles.exerciseRow}>
        <Text style={styles.exerciseName}>{`${exercise.sets.length} x ${exercise.name}`}</Text>
      </View>
    ))}
  </TouchableOpacity>
);

const ExerciseListPopup = ({ navigation, visible, onClose, routine }) => {

  navigation = useNavigation();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.popupOverlay}>
        <View style={styles.popup}>
          <View style={styles.popupHeader}>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>×</Text>
            </TouchableOpacity>
            <Text style={styles.popupTitle}>{routine.name}</Text>
            <TouchableOpacity onPress={() => { /* Handle edit */ }}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.startWorkoutButton}
            onPress={() => {
              // Close the popup first
              onClose();
              // Navigate to ActiveWorkout screen with the routine's name and data
              navigation.navigate('Active Workout', { routineName: routine.name, workoutData: routine.exercises });
            }}
          >
            <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
          </TouchableOpacity>
      
          <Text style={styles.lastPerformedText}>Last Performed: {routine.lastPerformed}</Text>
          {routine.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              {exercise.sets.map((set, setIndex) => (
                <Text key={setIndex} style={styles.exerciseSet}>
                  {`Set ${set.setNumber}: ${set.weight} x ${set.reps} ${set.completed ? '(completed)' : ''}`}
                </Text>
              ))}
              <Text style={styles.muscleGroup}>{exercise.muscleGroup}</Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
}


const WorkoutHomeScreen = ({ navigation }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  // Function to open the popup with the selected routine
  const openPopup = (routine) => {
    setSelectedRoutine(routine);
    setIsPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const navigateToExerciseList = () => {
    navigation.navigate('Workout List');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Start Workout</Text>
        <TouchableOpacity style={styles.startWorkoutButton}>
          <Text style={styles.startWorkoutButtonText}>Start an Empty Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exerciseListButton} 
          onPress={navigateToExerciseList}>
          <Text style={styles.exerciseListButtonText}>Exercise List</Text>
        </TouchableOpacity>

        <View style={styles.routineHeader}>
          <Text style={styles.routineTitle}>Routines</Text>

          <TouchableOpacity style={styles.addRoutineButton}>
            <Text style={styles.addRoutineButtonText}>+ Routine</Text>
          </TouchableOpacity>

        </View>
        <ScrollView style={styles.routinesContainer}>
          {routineData.map((routine, index) => (
            <RoutineTab
              key={index}
              routine={routine}
              onPress={() => openPopup(routine)} />
          ))}
        </ScrollView>
      </SafeAreaView>
      {selectedRoutine && (
        <ExerciseListPopup
          visible={isPopupVisible}
          onClose={closePopup}
          routine={selectedRoutine}
        />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  startWorkoutButton: {
    backgroundColor: '#6200EE', // Use your app's theme color here
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  startWorkoutButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  routineTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addRoutineButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
  },
  addRoutineButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  routinesContainer: {
    flex: 1,
  },

  routineTab: {
    backgroundColor: '#f2f2f2', // This is a placeholder color
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  routineName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,

  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  exerciseName: {
    fontSize: 16,
  },

  exerciseDetails: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Popup styles
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
  editButton: {
    fontSize: 18,
    color: '#0000ff', // Replace with your theme color
  },
  startWorkoutButton: {
    backgroundColor: '#0000ff', // Replace with your theme color
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  startWorkoutButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastPerformedText: {
    fontSize: 16,
    marginBottom: 20,
  },
  exerciseContainer: {
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  muscleGroup: {
    fontSize: 16,
    color: 'grey',
  },

  exerciseListButton: {
    marginTop: 10, 
    backgroundColor: 'blue', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',

  },
  exerciseListButtonText: {
    // add your styling for the text here
    color: 'white', // example text color
    fontSize: 20,
    fontWeight: 'bold',
    // add more styling as needed
  },

  // Additional styles for your routines would go here
});

export default WorkoutHomeScreen;
