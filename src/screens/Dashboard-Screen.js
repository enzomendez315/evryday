import React from 'react';
import {SafeAreaView, StatusBar, Text,  View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

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
  const macros = [
    { name: 'Carbs', percentage: 50, color: 'skyblue' },
    { name: 'Protein', percentage: 40, color: 'salmon' },
    { name: 'Fat', percentage: 10, color: 'lightgreen' },
  ];

  const chartWidth = 80;
  const chartHeight = 80;

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
  <TouchableOpacity style={styles.dietTab}>
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

  dietTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
  
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
  
  // Add more styles for the individual components as needed
});

export default Dashboard;