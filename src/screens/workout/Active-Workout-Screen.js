import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 



const ActiveWorkout = ({route, navigation}) => {
  navigation = useNavigation();
  const [routineName, setRoutineName] = useState(route.params?.routineName || 'Workout');
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [workoutData, setWorkoutData] = useState(route.params?.workoutData || []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

   // WorkoutTab component is defined here
   const WorkoutTab = ({ exerciseData }) => {
    const [sets, setSets] = useState(exerciseData.sets);

    const addSet = () => {
      const newSetData = {
        setNumber: sets.length + 1,
        weight: '', // Initialize to empty string or a default value
        reps: '', // Initialize to empty string or a default value
        completed: false,
      };
      setSets([...sets, newSetData]);
    };

    const updateSetData = (setIndex, field, value) => {
      const updatedSets = sets.map((set, index) => {
        if (index === setIndex) {
          return { ...set, [field]: value };
        }
        return set;
      });
      setSets(updatedSets);
    };

    const completeSet = (setIndex) => {
      updateSetData(setIndex, 'completed', true);
    };

    return (
      <View style={styles.workoutTabContainer}>
        {sets.map((set, index) => (
          <View key={index} style={styles.setRow}>
            <Text style={styles.setText}>{set.setNumber}</Text>
            <Text style={styles.previousText}>{exerciseData.previous}lbs x {exerciseData.reps}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => updateSetData(index, 'weight', value)}
              value={set.weight}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => updateSetData(index, 'reps', value)}
              value={set.reps}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => completeSet(index)}>
              <Icon name="check" size={24} color={set.completed ? 'green' : 'grey'} />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity onPress={addSet}>
          <Text style={styles.addSetText}>+ Add Set</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.finishButton} onPress={() => navigation.goBack()}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
        <Icon name="clock-o" size={24} style={styles.clockIcon} />
      </View>
      <Text style={styles.routineName}>{routineName}</Text>
      <Text style={styles.activeClock}>{formatTime(secondsElapsed)}</Text>
      {/* Placeholder for the list of exercise tabs */}
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Exercise Tabs Will Go Here</Text>
        {workoutData.map((exerciseData, index) => (
        <WorkoutTab key={index} exerciseData={exerciseData} />
      ))}
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add more exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel workout</Text>
      </TouchableOpacity>
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
      marginBottom: 20,
    },
    finishButton: {
      // Style for the finish button
    },
    finishButtonText: {
      // Style for the finish button text
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
    placeholderContainer: {
      // Style for the placeholder container
    },
    placeholderText: {
      // Style for the placeholder text
    },
    addButton: {
      // Style for the add exercise button
    },
    addButtonText: {
      // Style for the add exercise button text
    },
    cancelButton: {
      // Style for the cancel workout button
    },
    cancelButtonText: {
      // Style for the cancel workout button text
    },

    workoutTabContainer: {
      // ... style for the workout tab container ...
    },
    setRow: {
      // ... style for each set row ...
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    setText: {
      // ... style for the set text ...
    },
    previousText: {
      // ... style for the previous text ...
    },
    input: {
      // ... style for the input fields ...
    },
    addSetText: {
      // ... style for the add set text ...
    },
    // Add additional styles as needed
  });
  
  export default ActiveWorkout;