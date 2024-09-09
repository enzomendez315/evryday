import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../theme/theme';
import { createExerciseRoutine } from '../../logic/workout-api';
import { AccountContext } from '../../logic/account';


const SetItem = ({ setNumber, weight, reps, completed, onUpdate, onCheck, backgroundColor }) => {

  const [inputWeight, setInputWeight] = useState(weight);
  const [inputReps, setInputReps] = useState(reps);

  const handleComplete = () => {
    onCheck(setNumber, !completed);

  };

  return (
    <View style={[styles.setRow, { backgroundColor }]}> 

      <Text style={styles.setText}>{setNumber}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setInputWeight(value);
          onUpdate(setNumber -1, 'weight', value);
        }}
        value={inputWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setInputReps(value);
          onUpdate(setNumber -1 , 'reps', value);
        }}
        value={inputReps}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleComplete}>
        <Icon name="check" size={24} color={completed ? 'green' : 'grey'} />  
      </TouchableOpacity>
    </View>
  );
};

const ActiveWorkoutTab = ({ exerciseData, exerciseIndex, onUpdateSet }) => {
  const [sets, setSets] = useState(exerciseData.sets);

  // UPCOMING FEATURE** BREAKS APP IF USED

  // // Function to add new set
  // const addSet = () => {
  //   const newSetData = {
  //     setNumber: sets.length + 1,
  //     weight: '0lb', // Default weight
  //     reps: '0', // Default reps
  //     completed: false,
  //   };
  //   setSets([...sets, newSetData]);
  // };

  // Function to update set data (weight, reps)
  const updateSetData = (setIndex, field, value) => {
    const updatedSets = sets.map((set, index) => {
      if (index === setIndex) {
        return { ...set, [field]: value };
      }
      return set;
    });
    setSets(updatedSets);
    onUpdateSet(exerciseIndex, setIndex, field, value);
  };

  // Function to handle set completion
  const handleCheck = (setNumber, newCompleted) => {
    const updatedSets = sets.map((set) =>
      set.setNumber === setNumber ? { ...set, completed: newCompleted } : set
    );
    setSets(updatedSets);
  };

  return (
    <View style={styles.workoutTabContainer}>

      <Text style={styles.exerciseTitle}>{exerciseData.name}</Text>

      <View style={styles.labelsRow}>
        <Text style={styles.labelText}>Set</Text>
        <Text style={styles.labelText}>lbs</Text>
        <Text style={styles.labelText}>Rep</Text>
        <Icon name="check" size={24} color="grey" style={styles.labelIcon} />
      </View>

      <FlatList
        data={sets}
        renderItem={({ item, index }) => (
          <SetItem
            setNumber={index + 1}
            weight={item.weight}
            reps={item.reps}
            completed={item.completed}
            onUpdate={updateSetData}
            onCheck={handleCheck}
            key={index}
            backgroundColor={index % 2 === 0 ? '#f5f5f5' : '#ffffff'}
          />
        )}
        keyExtractor={(item, index) => index.toString()}

        // Add set method is current not work as intended
        // ListFooterComponent={
        //   <TouchableOpacity onPress={addSet} style={styles.addSetButton}>
        //     <Text style={styles.addSetText}>+ Add Set</Text>
        //   </TouchableOpacity>
        // }
      />
    </View>
  );
};

const ActiveWorkout = ({ route, navigation }) => {
  navigation = useNavigation();
  const routineName = route.params?.routineName || 'Workout';
  const [secondsElapsed, setSecondsElapsed] = useState(0);
 
  const [workoutData, setWorkoutData] = useState(route.params?.workoutData || []);
  const userID = useContext(AccountContext);

  // This function will update the workout data when the user modifies a set
  const onUpdateSet = (exerciseIndex, setIndex, field, value) => {
    const updatedWorkoutData = workoutData.map((exercise, exIndex) => {
      if (exIndex === exerciseIndex) {
        const updatedSets = exercise.sets.map((set, sIndex) => {
          if (sIndex === setIndex) {
            return { ...set, [field]: value };  // Update weight or reps
          }
          return set;
        });
        return { ...exercise, sets: updatedSets };
      }
      return exercise;
    });

    setWorkoutData(updatedWorkoutData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    // Function to save workout data when finish is clicked
    const handleFinishWorkout = async () => {
      try {
        if (!userID) {
          console.error("User ID is missing");
          return;
        }
  
        // Save the updated workout data to the database
        await createExerciseRoutine(userID, routineName, workoutData);
  
        // Navigate back after saving
        navigation.goBack();
      } catch (error) {
        console.error("Error saving workout data:", error);
      }
    };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinishWorkout}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
        <Icon name="clock-o" size={24} style={styles.clockIcon} />
      </View>
      <Text style={styles.routineName}>{routineName}</Text>
      <Text style={styles.activeClock}>{formatTime(secondsElapsed)}</Text>
      <FlatList
        data={workoutData}
        renderItem={({ item, index }) => (
          <ActiveWorkoutTab key={index.toString()} exerciseData={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel workout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  finishButton: {
    backgroundColor: COLORS.primaryBlueHex,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clockIcon: {
    // Style for the clock icon
  },
  routineName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeClock: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 20,
  },

  addButton: {

  },
  addButtonText: {

  },
  cancelButton: {

  },
  cancelButtonText: {

  },

  workoutTabContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    

  },
  setText: {
    fontSize: 14,
  },
  exerciseTitle: {
    fontSize: 20,
  },
  input: {

  },
  addSetText: {

  },

  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
   
  },
  // Add additional styles as needed
});

export default ActiveWorkout;