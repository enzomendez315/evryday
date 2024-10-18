import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './src/theme/theme';
import LottieView from "lottie-react-native";

import DashboardScreen from './src/screens/dashboard/Dashboard-Screen';
import WeightScreen from './src/screens/dashboard/Weight-Screen';
import SettingsScreen from './src/screens/Settings-Screen';
import DietScreen from './src/screens/diet/Diet-Screen';
import AddMealScreen from './src/screens/diet/Add-Meal-Screen';
import BarcodeScanningScreen from './src/screens/diet/Barcode-Scanning-Screen';
import PermissionsPage from './src/components/PermissionsPage';


import SleepScreen from './src/screens/sleep/Sleep-Screen';
import SearchFoodScreen from './src/screens/diet/Search-Food-Screen';
import AddFoodScreen from './src/screens/diet/Add-Food-Screen';
import ModifyFoodScreen from './src/screens/diet/Modify-Food-Obj-Screen';

import WorkoutHomeScreen from './src/screens/workout/Workout-Screen';
import ActiveWorkoutScreen from './src/screens/workout/Active-Workout-Screen';
import WorkingHistoryOverview from './src/screens/workout/Workout-History-Screen';
import WorkoutListScreen from './src/screens/workout/Workout-List-Screen';
import EditRoutineScreen from './src/screens/workout/Edit-Routine-Screen';

import BasicInfoScreen from './src/screens/Basic-Info-Screen';
import DailyGoalsScreen from './src/screens/dailyGoals/Daily-Goals-Screen';
import NutritionGoalsScreen from './src/screens/dailyGoals/Nutrition-Goals-Screen';

import { Amplify } from 'aws-amplify';
import { DataStore } from 'aws-amplify/datastore';
import awsconfig from './src/aws-exports';

import { User } from './src/models';
import { Hub } from 'aws-amplify/utils';

import { withAuthenticator } from '@aws-amplify/ui-react-native';

import { currentUserDetails } from './src/logic/account'
import { Text, View, Image } from 'react-native';
Amplify.configure(awsconfig);

// used to pass userID to all screens *in theory*
export const AccountContext = React.createContext("");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// needed to remove tab(s) for beginners
interface BottomNavBarTabsProps {
  dietTrack?: boolean;
  sleepTrack?: boolean;
  workoutTrack?: boolean;
}

function BottomNavBarTabs({ dietTrack = true, sleepTrack = true, workoutTrack = true }: BottomNavBarTabsProps) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryBlueHex,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {dietTrack && <Tab.Screen
        name="Diet"
        component={DietStack}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="nutrition" color={color} size={size} />
          ),
        }}
      />}
      {sleepTrack && <Tab.Screen
        name="Sleep"
        component={SleepStack}
        options={{
          tabBarLabel: 'Sleep',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sleep" color={color} size={size} />
          ),
        }}
      />}
      {workoutTrack && <Tab.Screen
        name="Workout"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={size}
            />
          ),
        }}
      />}
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// screens in the dashboard tab
function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Dashboard Home" component={DashboardScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Weight Screen" component={WeightScreen}
        options={{
          headerShown: true,
        }} />
    </Stack.Navigator>
  );
}

// screens in the settings tab
function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Settings Home" component={SettingsScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Basic Info" component={BasicInfoScreen} />
      <Stack.Screen name="Daily Goals" component={DailyGoalsScreen} />
      <Stack.Screen name="Nutrition Goals" component={NutritionGoalsScreen} />
    </Stack.Navigator>
  );
}

// screens in the diet tab
function DietStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Diet Home" component={DietScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Add Meal" component={AddMealScreen}
        options={({ navigation, route }) => ({
          title: "Add Meal",
          headerRight: () => (
            <Ionicons name="menu-outline" size={24} color={COLORS.darkBlue} />
          ),
        })} />
      <Stack.Screen name="Search Food" component={SearchFoodScreen}
        options={({ navigation, route }) => ({
          title: "Lookup Food",
          headerRight: () => (
            <Ionicons name="add-outline" size={24} color={COLORS.darkBlue} />
          ),
        })} />
      <Stack.Screen name="Add Food" component={AddFoodScreen} />
      <Stack.Screen name="Edit Food" component={AddFoodScreen}
        options={({ navigation, route }) => ({
          title: "Edit Food",
          headerRight: () => (
            <Ionicons name="trash" size={36} color={COLORS.darkBlue} />
          ),
        })} />
      <Stack.Screen name="Create Food Item" component={ModifyFoodScreen} initialParams={{ editable: true }} />
      <Stack.Screen name="Add Serving Option" component={ModifyFoodScreen} initialParams={{ editable: true }} />
      <Stack.Screen name="Edit Food Item" component={ModifyFoodScreen} initialParams={{ editable: true }} />
      <Stack.Screen name="Scan Barcode" component={BarcodeScanningScreen} />
      <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
    </Stack.Navigator>
  );
}

// screens in the sleep tab
function SleepStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Sleep Home" component={SleepScreen}
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
}

// screens in the workout tab
function WorkoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Workout Home" component={WorkoutHomeScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Active Workout" component={ActiveWorkoutScreen} />
      <Stack.Screen name="Workout History" component={WorkingHistoryOverview} />
      <Stack.Screen name="Workout List" component={WorkoutListScreen} />
      <Stack.Screen name="Edit Routine" component={EditRoutineScreen} />
    </Stack.Navigator>
  );
}

// Fully syncs the local Datastore with the remote database
export async function StartListening(user: string, setDBReady: React.Dispatch<React.SetStateAction<boolean>>) {
  console.log("DataStore is started");
  const listener = Hub.listen('datastore', async hubData => {
    const { event, data } = hubData.payload;
    if (event === 'ready') {
      console.log("DataStore is ready");
      listener(); // Stops the listener
      setDBReady(true);
    }
  })
}

function App() {
  const [userId, setUserId] = React.useState("");
  const [useDiet, setUseDiet] = React.useState(true);
  const [useSleep, setUseSleep] = React.useState(true);
  const [useWorkout, setUseWorkout] = React.useState(true);
  const [isDBReady, setDBReady] = React.useState(false);
  // ConsoleLogger.LOG_LEVEL = 'DEBUG'; // Uncomment to enable AWS debug logging
  React.useEffect(() => {
    currentUserDetails().then(async (user) => {
      setUserId(user);
      console.log(User); // Need to use a random model to initialize the DataStore
      // await DataStore.clear(); // clear the local Datastore before connecting to the remote database
      await DataStore.start();
      await StartListening(user, setDBReady);

      //TODO: Add a check for user settings to determine which tabs to show
      // it will look something like
      // if (user.settings.dietTracking == true) { setUseDiet(true) }
      // user settings will probably be stored in the user model
    });
  }, []);

  return (
    // This tag isn't being used, but it might be helpful in the future?
    <AccountContext.Provider value={userId}>
      {isDBReady ?

        <NavigationContainer>
          <BottomNavBarTabs dietTrack={useDiet}
            sleepTrack={useSleep} workoutTrack={useWorkout} />
        </NavigationContainer>

        : <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.backgroundBlue }}>
          <Text style={{ marginTop: 30 }}>Getting things ready ...</Text>
          <LottieView
            source={require('./src/animations/sloth_meditating.json')}
            style={{ width: "75%", height: "75%" }}
            autoPlay
            loop
          />
        </View>}
    </AccountContext.Provider>
  );
}

// Adds native ui for sign in functionality
// To bypass replace with 'export default App;'
export default withAuthenticator(App);
// export default App;