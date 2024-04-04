import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 



const ActiveWorkout = ({route, navigation}) => {
  navigation = useNavigation();
  const [routineName, setRoutineName] = useState(route.params?.routineName || 'Workout');
  const [secondsElapsed, setSecondsElapsed] = useState(0);

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
      {/* Placeholder for the list of exercise tabs */}
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Exercise Tabs Will Go Here</Text>
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
    // Add additional styles as needed
  });
  
  export default ActiveWorkout;