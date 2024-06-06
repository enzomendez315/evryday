import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { syncExerciseRoutines } from '../../logic/workout-api';
import { COLORS } from '../../theme/theme';
import { AccountContext } from '../../../App';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

let userID;

const exampleRoutineData = [
  {
    name: 'Hypertrophy 1',
    exercises: [
      {
        name: 'Squat',
        sets: [
          { setNumber: 1, weight: '185lb', reps: '10' },
          { setNumber: 2, weight: '185lb', reps: '10' },
          { setNumber: 3, weight: '185lb', reps: '10' },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Chest Press',
        sets: [
          { setNumber: 1, weight: '100lb', reps: '12' },
          { setNumber: 2, weight: '100lb', reps: '12' },
          { setNumber: 3, weight: '100lb', reps: '12' },
        ],
        muscleGroup: 'Chest',
      },
      {
        name: 'Seated Row',
        sets: [
          { setNumber: 1, weight: '110lb', reps: '12' },
          { setNumber: 2, weight: '110lb', reps: '12' },
          { setNumber: 3, weight: '110lb', reps: '12' },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Extension',
        sets: [
          { setNumber: 1, weight: '80lb', reps: '15' },
          { setNumber: 2, weight: '80lb', reps: '15' },
          { setNumber: 3, weight: '80lb', reps: '15' },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Incline Chest Press',
        sets: [
          { setNumber: 1, weight: '30lb', reps: '12' },
          { setNumber: 2, weight: '30lb', reps: '12' },
          { setNumber: 3, weight: '30lb', reps: '12' },
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
          { setNumber: 1, weight: '225lb', reps: '8' },
          { setNumber: 2, weight: '225lb', reps: '8' },
          { setNumber: 3, weight: '225lb', reps: '8' },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Shoulder Press',
        sets: [
          { setNumber: 1, weight: '80lb', reps: '10' },
          { setNumber: 2, weight: '80lb', reps: '10' },
          { setNumber: 3, weight: '80lb', reps: '10' },
        ],
        muscleGroup: 'Shoulder',
      },
      {
        name: 'Lat Pulldown',
        sets: [
          { setNumber: 1, weight: '120lb', reps: '12' },
          { setNumber: 2, weight: '120lb', reps: '12' },
          { setNumber: 3, weight: '120lb', reps: '12' },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Curl',
        sets: [
          { setNumber: 1, weight: '90lb', reps: '12' },
          { setNumber: 2, weight: '90lb', reps: '12' },
          { setNumber: 3, weight: '90lb', reps: '12' },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Dumbbell Fly',
        sets: [
          { setNumber: 1, weight: '25lb', reps: '12' },
          { setNumber: 2, weight: '25lb', reps: '12' },
          { setNumber: 3, weight: '25lb', reps: '12' },
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
          { setNumber: 1, weight: '135lb', reps: '10' },
          { setNumber: 2, weight: '135lb', reps: '10' },
          { setNumber: 3, weight: '135lb', reps: '10' },
        ],
        muscleGroup: 'Chest',
      },
      {
        name: 'Bent Over Row',
        sets: [
          { setNumber: 1, weight: '95lb', reps: '12' },
          { setNumber: 2, weight: '95lb', reps: '12' },
          { setNumber: 3, weight: '95lb', reps: '12' },
        ],
        muscleGroup: 'Back',
      },
      {
        name: 'Leg Press',
        sets: [
          { setNumber: 1, weight: '160lb', reps: '12' },
          { setNumber: 2, weight: '160lb', reps: '12' },
          { setNumber: 3, weight: '160lb', reps: '12' },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Calf Raise',
        sets: [
          { setNumber: 1, weight: '100lb', reps: '15' },
          { setNumber: 2, weight: '100lb', reps: '15' },
          { setNumber: 3, weight: '100lb', reps: '15' },
        ],
        muscleGroup: 'Leg',
      },
      {
        name: 'Tricep Pushdown',
        sets: [
          { setNumber: 1, weight: '50lb', reps: '12' },
          { setNumber: 2, weight: '50lb', reps: '12' },
          { setNumber: 3, weight: '50lb', reps: '12' },
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
            <TouchableOpacity onPress={() => {
              onClose();
              navigation.navigate("Edit Routine", { routineName: routine.name, exerciseData: routine.exercises, routineId: routine.id });
            }}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.startWorkoutButton}
            onPress={() => {
              // Close the popup first
              onClose();
              // Navigate to ActiveWorkout screen with the routine's name and data
              navigation.navigate('Active Workout', { routineName: routine.name, exerciseData: routine.exercises });
            }}
          >
            <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
          </TouchableOpacity>

          <Text style={styles.lastPerformedText}>Last Performed: {routine.lastPerformed}</Text>
          {routine.exercises.map((exercise, index) => (
            <ScrollView key={index} style={styles.exerciseContainer}>

              <Text style={styles.exerciseNamePopUp}>{exercise.name}</Text>
              <Text style={styles.muscleGroup}>{exercise.muscleGroup}</Text>

              {exercise.sets.map((set, setIndex) => (
                <Text key={setIndex} style={styles.exerciseSet}>
                  {`Set ${setIndex + 1}: ${set.weight} x ${set.reps}`}
                </Text>
              ))}


            </ScrollView>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const WorkoutHomeScreen = ({ navigation, route }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [routineData2, setRoutineData2] = useState(null);

  userID = React.useContext(AccountContext);

  // Function to open the popup with the selected routine
  const openPopup = (routine) => {
    setSelectedRoutine(routine);
    setIsPopupVisible(true);
  };

  // whenever the routine Data is updated, this is called
  useEffect(() => {
    syncExerciseRoutines(userID, setRoutineData2);
  }, []);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      syncExerciseRoutines(userID, setRoutineData2);
      return;
    }, [])
  );

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <View style={styles.container}>

        <Text style={styles.title}>Workout</Text>

        <TouchableOpacity
          style={styles.exerciseHistoryButton}
          onPress={() => navigation.navigate('Workout History')}>
          <Text style={styles.exerciseListButtonText}>History</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.exerciseListButton}
          onPress={() => navigation.navigate('Workout List')}>
          <Text style={styles.exerciseListButtonText}>Exercise List</Text>
        </TouchableOpacity>

        <View style={styles.routineHeader}>

          <Text style={styles.routineTitle}>Routines</Text>

          <TouchableOpacity style={styles.addRoutineButton}
            onPress={() => navigation.navigate("Edit Routine", { routineName: 'New Routine', exerciseData: [] })}>
            <Text style={styles.addRoutineButtonText}>+ Routine</Text>
          </TouchableOpacity>

        </View>
        <ScrollView style={styles.routinesContainer}>
          {routineData2 && routineData2.map((routine, index) => (
            <RoutineTab
              key={index}
              routine={routine}
              onPress={() => openPopup(routine)} />
          ))}
        </ScrollView>
      </View>
      {selectedRoutine && (
        <ExerciseListPopup
          visible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
          routine={selectedRoutine}
        />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    padding: 20,
  },

  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  routineTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  addRoutineButton: {
    backgroundColor: COLORS.primaryBlueHex,
    borderRadius: 15,
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
    backgroundColor: COLORS.darkBlue,
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
  },

  routineName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: COLORS.whiteHex

  },

  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  exerciseDetails: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  exerciseListButton: {
    backgroundColor: COLORS.primaryBlueHex,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',

  },

  exerciseHistoryButton: {
    backgroundColor: COLORS.primaryBlueHex,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,

  },

  exerciseListButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold', // add more styling as needed
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
  editButton: {
    fontSize: 18,
    color: COLORS.primaryBlueHex, // Replace with your theme color
  },

  startWorkoutButton: {
    backgroundColor: COLORS.primaryBlueHex, // Replace with your theme color
    padding: 15,
    borderRadius: 15,
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
    color: COLORS.lightBlue,
  },

  exerciseNamePopUp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primaryGrayHex,
  },

  muscleGroup: {
    fontSize: 16,
    color: COLORS.primaryGrayHex,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'left'
  },


  // Additional styles for your routines would go here
});

export default WorkoutHomeScreen;
