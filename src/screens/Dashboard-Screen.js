import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import { syncDailyLog } from '../logic/sleep-api';
import { syncDietDashboardData } from '../logic/diet-api';
import { getCurrentUser } from 'aws-amplify/auth';
import { getUserDBEntry } from '../logic/account';
import { COLORS } from '../theme/theme';

let date;
let userID;

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
const DietTab = ({ calorieData }) => {
  const navigation = useNavigation();
  if (calorieData === null) {
    return (
      <TouchableOpacity
        style={styles.dietTab}
        onPress={() => navigation.navigate('Diet')}>
        <Text>Loading...</Text>
      </TouchableOpacity>
    );
  }

  // NOTE: if calories is 0, the percentage will be NaN and the pie chart will not render (it might crash the app)

  // gets calorie percentage, protein and carbs are 4 calories per gram, fat is 9
  let tempCarbs = (((calorieData.carbsCurrent * 4) / calorieData.caloriesCurrent) * 100).toFixed(0);
  let tempProtein = (((calorieData.proteinCurrent * 4) / calorieData.caloriesCurrent) * 100).toFixed(0);
  let tempFat = (((calorieData.fatCurrent * 9) / calorieData.caloriesCurrent) * 100).toFixed(0);

  // normalize the percentages
  let total = parseInt(tempCarbs) + parseInt(tempProtein) + parseInt(tempFat);
  let finalCarbs = parseInt((parseInt(tempCarbs) / total * 100).toFixed(0));
  let finalProtein = parseInt((parseInt(tempProtein) / total * 100).toFixed(0));
  let finalFat = parseInt((parseInt(tempFat) / total * 100).toFixed(0));

  // if the total is NaN, set all to 1 so the pie chart renders
  if (isNaN(total)) {
    finalCarbs = 1;
    finalProtein = 1;
    finalFat = 1;
  }

  const macros = [
    { name: 'Carbs', percentage: finalCarbs, color: 'skyblue' },
    { name: 'Protein', percentage: finalProtein, color: 'salmon' },
    { name: 'Fat', percentage: finalFat, color: 'purple' },
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
    <TouchableOpacity
      style={styles.dietTab}
      onPress={() => navigation.navigate('Diet')}>
      {calorieData !== null ? (
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circle}>
            <Text style={styles.caloriesText}>{calorieData.caloriesCurrent}</Text>
            <Text>Calories</Text>
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
              <Text key={index} style={[styles.macroText, { color: macro.color }]}>
                {/* If they are all 1 to render pie chart, make them 0 */}
                {macro.name}: {macro.percentage === 1 ? 0 : macro.percentage}%
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <Text>No calorie data today</Text>
      )}
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
      onPress={() => navigation.navigate('Workout')}>
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
const SleepTab = ({ sleepData }) => {
  const sleepRecommendation = "Snugly Sloth: You snagged 8 hours of quality dream time today!";
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.sleepTab}
      onPress={() => navigation.navigate('Sleep')}>
      {sleepData != null && sleepData.length > 0 ? (
        <View>
          <View style={styles.circle}>
            <Text style={styles.scoreText}>{sleepData[0].hours}h</Text>
          </View>
          <View style={styles.recommendationContainer}>
            <Text style={styles.recommendationText}>
              You got {sleepData[0].hours} of sleep with a quality of {sleepData[0].quality}
            </Text>
          </View>
        </View>
      ) : (
        <Text>No sleep data today</Text>
      )}

    </TouchableOpacity>
  );
};

// gets date in format 'YYYY-MM-DD', just new Date() is UTC not local time
function getLocalDate() {
  let tempDate = new Date();
  const year = tempDate.getFullYear();
  const month = String(tempDate.getMonth() + 1).padStart(2, '0');
  const day = String(tempDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

// gets date in format 'Weekday, Month DD'
// takes input from getLocalDate
function getFormattedDate() {
  let tempDate = new Date();
  const weekDay = tempDate.toLocaleString('default', { weekday: 'long' });
  const month = tempDate.toLocaleString('default', { month: 'long' });
  const day = tempDate.getDate();
  const formattedDate = `${weekDay}, ${month} ${day}`;
  return formattedDate;
}

const Dashboard = (props) => {
  const [sleepData, setSleepData] = useState(null);
  const [calorieData, setCalorieData] = useState(null);

  // bool for diet tab loading too soon
  // TODO: fix diet api to handle null data calls
  let tempLoading = true;

  // called only once when the screen is first loaded
  useEffect(() => {
    date = getLocalDate();
    getCurrentUser().then((user) => {
      userID = user.username;
      syncDailyLog(userID, setSleepData, date);
      syncDietDashboardData(userID, date, setCalorieData);
      getUserDBEntry(userID).then((user) => {
        console.log("the user name is: " + user.name);
      });
      tempLoading = false;
    });
  }, []);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      syncDailyLog(userID, setSleepData, date);
      syncDietDashboardData(userID, date, setCalorieData);
      return;
    }, [])
  );

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView style={styles.container}>
        {/* Render your components here */}
        <Text style={styles.title}>{getFormattedDate()}</Text>
        <ScrollView contentContainerStyle={{ backgroundColor: '#DADADA' }}>
          <Text style={styles.tabHeaderText}>Health Score</Text>
          <HealthScoreTab style={styles.tab} />
          <Text style={styles.tabHeaderText}>Nutrition</Text>
          <DietTab style={styles.tab} calorieData={calorieData} />
          <Text style={styles.tabHeaderText}>Exercise</Text>
          <WorkoutTab style={styles.tab} />
          <Text style={styles.tabHeaderText}>Sleep</Text>
          <SleepTab style={styles.tab} sleepData={sleepData} />
          {/* Add more components as needed */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black'
  },
  tabHeaderText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  defaultTabStyle: {
    // Default styling for tabs
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  healthScoreTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8, // smooth edges
    marginBottom: 10,
    marginHorizontal: 10,
  },
  sleepTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    //borderColor: '#919191',
    //borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },

  dietTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    //borderColor: '#919191',
    //borderTopWidth: 1,

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
    //borderColor: '#919191',
    //borderTopWidth: 1,
    //borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
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