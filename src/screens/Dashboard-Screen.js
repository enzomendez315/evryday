import React from 'react';
import {SafeAreaView, StatusBar, Text,  View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

// Health Score Tab Component:
const HealthScoreTab = () => {
  // Dummy health score data
  const healthScore = 85;
  const recommendation = "Aptly Ape: Oops! We've gone bananas on calories yesterday!";

  return (
    <TouchableOpacity style={styles.healthScoreTab}>
      <View style={styles.circle}>
        <Text style={styles.scoreText}>{healthScore}</Text>
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationText}>{recommendation}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Dieting Tab Component:
const DietTab = () => {
  // Dummy diet data
  const caloriesUnder = 762;
  const macros = { carbs: 50, protein: 40, fat: 10 };

  return (
    <TouchableOpacity style={styles.tab}>
      <View style={styles.circle}>
        <Text>{caloriesUnder} Under</Text>
      </View>
      {/* Use charting library to create the pie chart for macros */}
      <Text>Carbs: {macros.carbs}% Protein: {macros.protein}% Fat: {macros.fat}%</Text>
    </TouchableOpacity>
  );
};

// Working Out Tab Component:
const WorkoutTab = () => {
  // Dummy workout data
  const workouts = [
    { exercise: 'Squat', sets: '4 x', weight: '185lb', reps: 'x 10' },
    // Add more workouts as needed
  ];

  return (
    <TouchableOpacity style={styles.tab}>
      {workouts.map((workout, index) => (
        <Text key={index}>
          {workout.sets} {workout.exercise} {workout.weight} {workout.reps}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

// Sleeping Tab Component:
const SleepTab = () => {
  // Dummy sleep score data
  const sleepScore = 'B+';
  const sleepRecommendation = "Snugly Sloth: You snagged 8 hours of quality dream time today!";

  return (
    <TouchableOpacity style={styles.sleepTab}>
      <View style={styles.circle}>
        <Text style={styles.scoreText}>{sleepScore}</Text>
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationText}>{sleepRecommendation}</Text>
      </View>
    </TouchableOpacity>
  );
};


const Dashboard = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Render your components here */}
          <HealthScoreTab />
          <DietTab />
          <WorkoutTab />
          <SleepTab />
          {/* Add more components as needed */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  healthScoreTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20, // Add padding to the start of the row
    paddingEnd: 20, // Add padding to the end of the row
    paddingTop: 20, // Add padding to the top of the row
    paddingBottom: 20, // Add padding to the bottom of the row
    // ... other styling for the health score tab
  },
  sleepTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20, // Add padding to the start of the row
    paddingEnd: 20, // Add padding to the end of the row
    paddingTop: 20, // Add padding to the top of the row
    paddingBottom: 20, // Add padding to the bottom of the row
    // ... other styling for the sleep tab
  },

  circle: {
    width: 80, // Set the width and height to create a circle
    height: 80,
    borderRadius: 40, // Half of width/height to make it a circle
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Add some margin to separate from the text
  },
  scoreText: {
    // Add styling for the score text inside the circle
    fontSize: 24, // example size
    fontWeight: 'bold',
  },
  recommendationContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center vertically
  },
  recommendationText: {
    // Add styling for the recommendation text
    fontSize: 16, // example size
  },
  // Add more styles for the individual components as needed
});

export default Dashboard;