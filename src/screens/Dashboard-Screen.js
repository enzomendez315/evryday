import React from 'react';
import {SafeAreaView, StatusBar, Text,  View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import WorkoutScreen from './workout/Workout-Screen';

// Health Score Tab Component:
const HealthScoreTab = () => {
  // Dummy health score data
  const healthScore = 85;
  const recommendation = "Aptly Ape: Oops! We've gone bananas on calories yesterday!";
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    style={styles.healthScoreTab}
    onPress={() => navigation.navigate('Dashboard Home')}>
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
  const macros = [
    { name: 'Carbs', percentage: 50, color: 'skyblue' },
    { name: 'Protein', percentage: 40, color: 'salmon' },
    { name: 'Fat', percentage: 10, color: 'lightgreen' },
  ];

  const chartWidth = 80;
  const chartHeight = 80;
  const navigation = useNavigation();

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const pieChartData = macros.map((macro, index) => ({
    name: macro.name,
    population: macro.percentage,
    color: macro.color,
    legendFontColor: macro.color,
    legendFontSize: 15,
  }));
  
  return (
  <TouchableOpacity 
  style={styles.dietTab}
  onPress={() => navigation.navigate('Diet Home')}>
    <View style={styles.circle}>
      <Text style={styles.caloriesText}>{caloriesUnder} Under</Text>
    </View>
    <PieChart
      data={pieChartData}
      width={chartWidth}
      height={chartHeight}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"20"} // Adjust if your chart is not centered
      hasLegend={false}
      absolute={false}
    />
    <View style={styles.macroList}>
      {macros.map((macro, index) => (
        <Text key={index} style={[styles.macroText, {color: macro.color}]}>
          {macro.name}: {macro.percentage}%
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);
};

// Working Out Tab Component:
const WorkoutTab = () => {
  const navigation = useNavigation();
  // Dummy workout data
  const workouts = [
    { exercise: 'Squat', sets: '4 x', weight: '185lb', reps: 'x 10' },
    { exercise: 'Chest Press', sets: '3 x', weight: '100lb', reps: 'x 12' },
    { exercise: 'Seated Row', sets: '3 x', weight: '110lb', reps: 'x 12' },
    { exercise: 'Leg Extension', sets: '3 x', weight: '80lb', reps: 'x 15' },
    // Add more workouts as needed
  ];

  return (
    <TouchableOpacity 
    style={styles.workoutTab}
    onPress={() => navigation.navigate('Workout List')}>
    <Text style={styles.workoutHistoryTitle}>Workout History</Text>
    {workouts.map((workout, index) => (
      <View key={index} style={styles.workoutItem}>
        <Text style={styles.workoutExercise}>
          {workout.sets} {workout.exercise}
        </Text>
        <Text style={styles.workoutDetails}>
          {workout.weight} {workout.reps}
        </Text>
      </View>
    ))}
  </TouchableOpacity>
  );
};

// Sleeping Tab Component:
const SleepTab = () => {
  // Dummy sleep score data
  const sleepScore = 'B+';
  const sleepRecommendation = "Snugly Sloth: You snagged 8 hours of quality dream time today!";
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
    style={styles.sleepTab}
    onPress={() => navigation.navigate('Sleep Home')}>
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
    padding: 20,
  },
  sleepTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderColor: '#919191',
    borderBottomWidth: 1,
  },

  dietTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    borderColor: '#919191',
    borderTopWidth: 1,
  
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

  marcoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E1E2E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  chart: {
    width: 80, // Same as circle for consistency
    height: 80, // Same as circle for consistency
    radius: 40, // Half of width/height to make it a circle
  },

  caloriesText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },


  macroList: {
    marginLeft: 20,
  },

  macroText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  workoutTab: {
    // Style to match other tabs in your dashboard
    padding: 20,
    borderColor: '#919191',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  workoutHistoryTitle: {
    // Title styles as provided in the Figma-generated code
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 8,
  },
  workoutItem: {
    // Layout for each workout item, adjust as needed
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  workoutExercise: {
    // Style for the exercise text, taken from Figma-generated code
    fontSize: 16,
    fontWeight: '400',
  },
  workoutDetails: {
    // Style for the details text, taken from Figma-generated code
    fontSize: 16,
    fontWeight: '400',
  },
  // Add more styles for the individual components as needed
});

export default Dashboard;