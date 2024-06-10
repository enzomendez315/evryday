import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SetItem = ({ setNumber, previous, onUpdate, onCheck }) => {

  const [inputWeight, setInputWeight] = useState(weight);
  const [inputReps, setInputReps] = useState(reps);

  const handleComplete = () => {
    onCheck(setNumber, !completed);
  };

  return (
    <View style={styles.setRow}>
      <Text style={styles.setText}>Set {setNumber}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setInputWeight(value);
          onUpdate(setNumber, 'weight', value);
        }}
        value={inputWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setInputReps(value);
          onUpdate(setNumber, 'reps', value);
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

const ActiveWorkoutTab = ({ exerciseData }) => {
  const [sets, setSets] = useState(exerciseData.sets);

  // Function to add new set
  const addSet = () => {
    const newSetData = {
      setNumber: sets.length + 1,
      weight: '0lb', // Default weight
      reps: '0', // Default reps
      completed: false,
    };
    setSets([...sets, newSetData]);
  };

  // Function to update set data (weight, reps)
  const updateSetData = (setIndex, field, value) => {
    const updatedSets = sets.map((set, index) => {
      if (index === setIndex) {
        return { ...set, [field]: value };
      }
      return set;
    });
    setSets(updatedSets);
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
      <FlatList
        data={sets}
        renderItem={({ item, index }) => (
          <SetItem
            setNumber={item.setNumber}
            weight={item.weight}
            reps={item.reps}
            completed={item.completed}
            onUpdate={updateSetData}
            onCheck={handleCheck}
            key={index}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <TouchableOpacity onPress={addSet} style={styles.addSetButton}>
            <Text style={styles.addSetText}>+ Add Set</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const ActiveWorkout = ({ route, navigation }) => {
  navigation = useNavigation();
  const routineName = route.params?.routineName || 'Workout';
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const workoutData = route.params?.workoutData?.exercises || [];

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
      <FlatList
        data={workoutData}
        renderItem={({ item, index }) => (
          <ActiveWorkoutTab key={index.toString()} exerciseData={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => { /* implement add exercise logic */ }}>
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