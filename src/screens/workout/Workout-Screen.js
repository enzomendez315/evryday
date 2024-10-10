import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { syncExerciseRoutines } from '../../logic/workout-api';
import { COLORS } from '../../theme/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AccountContext } from '../../../App';
import { getActiveDate, getFormattedDate, setActiveDate } from '../../logic/date-time';
// for selecting dates at the top of the screen
import { PickDatePopup } from '../../components/datePicker';

let userID;

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
              navigation.navigate('Active Workout', {
                routineName: routine.name,
                workoutData: routine.exercises  // Pass the exercises to the ActiveWorkout screen
              });
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
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isPickDatePopupVisible, setIsPickDatePopupVisible] = useState(false);
  const [calendarDate, setCalendarDate] = useState(getActiveDate());
  const [dateHook, setDateHook] = useState(getActiveDate());

  userID = React.useContext(AccountContext);

  // Function to open the popup with the selected routine
  const openPopup = (routine) => {
    setSelectedRoutine(routine);
    setIsPopupVisible(true);
  };

  useEffect(() => {
    syncExerciseRoutines(userID, setRoutineData2, setIsDataLoading);
  }, []);

  // called every time the screen is opened, I think
  useFocusEffect(
    React.useCallback(() => {
      syncExerciseRoutines(userID, setRoutineData2, setIsDataLoading);
      setDateHook(getActiveDate());
      return;
    }, [])
  );

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView style={styles.container}>
        <PickDatePopup isPickDatePopupVisible={isPickDatePopupVisible} calendarDate={calendarDate} setCalendarDate={setCalendarDate}
          setDateHook={setDateHook} setIsPickDatePopupVisible={setIsPickDatePopupVisible} />

        <View style={styles.dateHeaderContainer}>
          <Button title="<"
            onPress={() => {
              setActiveDate(-1);
              setDateHook(getActiveDate());
            }} />

          <TouchableOpacity style={styles.dateTitleContainer} onPress={() => setIsPickDatePopupVisible(true)}>
            <Text style={styles.dateTitle}>{getFormattedDate(dateHook)}</Text>
            <FeatherIcon name="calendar" size={24} color="black" />
          </TouchableOpacity>

          <Button title=">"
            onPress={() => {
              setActiveDate(1);
              setDateHook(getActiveDate());
            }} />
        </View>

        <View style={styles.bodyContainer}>

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
              <Text style={styles.addRoutineButtonText}>Add Workout</Text>
            </TouchableOpacity>

          </View>

          <ScrollView style={styles.routinesContainer}>
            {isDataLoading && <Text>Loading...</Text>}
            {routineData2 && routineData2.map((routine, index) => (
              <RoutineTab
                key={index}
                routine={routine}
                onPress={() => openPopup(routine)} />
            ))}
          </ScrollView>

        </View>
      </SafeAreaView>
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
    backgroundColor: '#A6CC9A', //COLORS.backgroundBlue,
  },
  dateHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.backgroundBlue2,
  },
  dateTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 20,
  },
  bodyContainer: {
    padding: 10,
    flex: 1,
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
    backgroundColor: '#5D905A', //COLORS.primaryBlueHex,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },

  exerciseHistoryButton: {
    backgroundColor: COLORS.primaryBlueHex,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },

  exerciseListButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
    color: COLORS.primaryBlueHex,
  },

  startWorkoutButton: {
    backgroundColor: COLORS.primaryBlueHex,
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
