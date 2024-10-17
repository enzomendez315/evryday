import React, { useEffect, useState, useMemo } from 'react';
import { SafeAreaView, Button, StatusBar, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import { syncDailySleepLog, getSleepScore } from '../../logic/sleep-api';
import { syncDietDashboardData, getNutritionScore } from '../../logic/diet-api';
import { getExerciseScore } from '../../logic/workout-api';
import { getCurrentUser } from 'aws-amplify/auth';
import { getUserDBEntry } from '../../logic/account';
import { COLORS } from '../../theme/theme';
import { getFormattedDate, setActiveDate, getActiveDate } from '../../logic/date-time';
import { syncMostRecentWorkoutLogForDate } from '../../logic/workout-api';
// for selecting dates at the top of the screen
import { PickDatePopup } from '../../components/datePicker';
import FeatherIcon from 'react-native-vector-icons/Feather';

let userID;
const DEBUG = true;

// Health Score Tab Component:
const HealthScoreTab = (lastSynced) => {

  const today = getActiveDate();
  // Using a single useState object so that the component only re-renders once when updated
  const [scores, setScores] = useState({
    sleep: null,
    nutrition: null,
    exercise: 100 // TODO: Set initial state to null once logs have dates
  });

  useEffect(() => {
    let ignore = false;
    const fetchScores = async () => {
      try {
        DEBUG && console.log('Fetching scores...');
        let sleepScore = await getSleepScore(userID, today);
        let nutritionScore = await getNutritionScore(userID, today);
        // let exerciseScore = await getExerciseScore(userID, today);
        let exerciseScore = 100;
        if (!ignore) {
          DEBUG && console.log('Scores fetched!');
          DEBUG && console.log(`Sleep score is ${sleepScore}`);
          DEBUG && console.log(`Nutrition score is ${nutritionScore}`);
          DEBUG && console.log(`Exercise score is ${exerciseScore}`);
          setScores({
            sleep: sleepScore,
            nutrition: nutritionScore,
            exercise: exerciseScore,
          });
        }
      } catch (error) {
        DEBUG && console.error('Error fetching scores:', error);
      }
    }

    fetchScores();

    // Clean up function
    return () => { ignore = true; };
  }, [today, lastSynced]);

  const healthScore = useMemo(() => {
    divisor = 0;
    sum = 0;
    for (const key in scores) {
      if (scores[key] !== null) {
        divisor++;
        sum += scores[key];
      }
    }
    if (divisor === 0) {
      return 0;
    }
    return Math.round(sum / divisor);
  }, [scores]);

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
  const [workout, setWorkout] = useState(null);

  // Fetch the most recent workout log for today
  useEffect(() => {
    const fetchWorkoutForToday = async () => {
      try {
        const today = new Date(); // Get today's date
        const recentLog = await syncMostRecentWorkoutLogForDate(today); // Fetch today's workout
        setWorkout(recentLog); // Set the workout data
      } catch (error) {
        console.error('Error fetching recent workout for today:', error);
      }
    };

    fetchWorkoutForToday();
  }, []);

  return (
    <TouchableOpacity
      style={styles.workoutTab}
      onPress={() => navigation.navigate('Workout')}>
      <Text style={styles.workoutHistoryTitle}>Today's Workout</Text>
      {workout ? (
        <View style={styles.workoutItem}>
          <Text style={styles.workoutExercise}>
            {`Date: ${workout.date}`} {/* Display the workout date */}
          </Text>
          <Text style={styles.workoutDetails}>
            {`Duration: ${workout.durationMinutes} minutes`} {/* Display workout duration */}
          </Text>
        </View>
      ) : (
        <Text>No workout yet</Text> // If no workout for today, show this message
      )}
    </TouchableOpacity>
  );
};

// Sleeping Tab Component:
const SleepTab = ({ sleepData }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.sleepTab}
      onPress={() => navigation.navigate('Sleep')}>
      {sleepData != null && sleepData.length > 0 ? (
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circle}>
            <Text style={styles.scoreText}>{sleepData[0].hours}h</Text>
          </View>
          <View style={styles.recommendationContainer}>
            <Text style={styles.recommendationText}>
              You got a quality of {sleepData[0].quality}
            </Text>
          </View>
        </View>
      ) : (
        <Text>No sleep data today</Text>
      )}

    </TouchableOpacity>
  );
};





// Weight Tab Component:
const WeightTab = ({ weightData }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.weightTab}
      onPress={() => navigation.navigate('Weight Screen')}>
      <Text>this is the weighting area</Text>
    </TouchableOpacity>
  );
};






const Dashboard = (props) => {
  const [sleepData, setSleepData] = useState(null);
  const [calorieData, setCalorieData] = useState(null);
  const [lastSynced, setLastSynced] = useState(null);
  const [isPickDatePopupVisible, setIsPickDatePopupVisible] = useState(false);
  const [calendarDate, setCalendarDate] = useState(getActiveDate());
  const [dateHook, setDateHook] = useState(getActiveDate());

  // bool for diet tab loading too soon
  // TODO: fix diet api to handle null data calls
  let tempLoading = true;

  const navigation = useNavigation();

  // called only once when the screen is first loaded
  useEffect(() => {
    getCurrentUser().then((user) => {
      userID = user.username;
      // check if user info is made
      getUserDBEntry(userID).then((user) => {
        // if a user entry doesn't exist, direct the user to the basic info screen
        if (user == null) {
          console.log("User info isn't made yet");
          navigation.navigate('Settings')
          // once in settings, the user will be directed to the basic info screen
          // to make user and daily goals
          return;
        }
      });
      syncDailySleepLog(userID, setSleepData, dateHook);
      syncDietDashboardData(userID, dateHook, setCalorieData);
      setLastSynced(new Date());
      tempLoading = false;
    });
  }, []);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      if (dateHook !== getActiveDate()) {
        setDateHook(getActiveDate());
        return;
      }
      setDateHook(getActiveDate());
      syncDailySleepLog(userID, setSleepData, dateHook);
      syncDietDashboardData(userID, dateHook, setCalorieData);
      setLastSynced(new Date());
      return;
    }, [dateHook])
  );

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView style={styles.container}>
        <View contentContainerStyle={{ backgroundColor: COLORS.backgroundBlue }}>
          <PickDatePopup isPickDatePopupVisible={isPickDatePopupVisible} calendarDate={calendarDate} setCalendarDate={setCalendarDate}
            setDateHook={setDateHook} setIsPickDatePopupVisible={setIsPickDatePopupVisible} />
          <View style={styles.dateHeaderContainer}>
            <Button title="<"
              onPress={() => {
                setActiveDate(-1);
                setDateHook(getActiveDate())
              }} />

            <TouchableOpacity style={styles.dateTitleContainer} onPress={() => setIsPickDatePopupVisible(true)}>
              <Text style={styles.dateTitle}>{getFormattedDate(dateHook)}</Text>
              <FeatherIcon name="calendar" size={24} color="black" />
            </TouchableOpacity>

            <Button title=">"
              onPress={() => {
                setActiveDate(1);
                setDateHook(getActiveDate())
              }} />
          </View>

          <ScrollView style={{ marginBottom: 80 }}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.tabHeaderText}>Health Score</Text>
            <HealthScoreTab lastSynced={lastSynced} />
            <Text style={styles.tabHeaderText}>Nutrition</Text>
            <DietTab calorieData={calorieData} />
            <Text style={styles.tabHeaderText}>Sleep</Text>
            <SleepTab sleepData={sleepData} />
            <Text style={styles.tabHeaderText}>Exercise</Text>
            <WorkoutTab />
            <Text style={styles.tabHeaderText}>Weight</Text>
            <WeightTab />
            {/* Add more components as needed */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundBlue,
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'left',
    paddingLeft: 10,
  },

  tabHeaderText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  defaultTabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  healthScoreTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8, // smooth edges
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  sleepTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  weightTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
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
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
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