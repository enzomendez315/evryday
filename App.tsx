import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './src/theme/theme';

import DashboardScreen from './src/screens/Dashboard-Screen';
import SettingsScreen from './src/screens/Settings-Screen';
import DietScreen from './src/screens/diet/Diet-Screen';
import AddMealScreen from './src/screens/diet/Add-Meal-Screen';

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

import { Amplify } from 'aws-amplify';
import { DataStore, Predicates } from 'aws-amplify/datastore';
import { ConsoleLogger } from 'aws-amplify/utils';
import awsconfig from './src/aws-exports';

import { User } from './src/models';
import { Hub } from 'aws-amplify/utils';


import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

import { currentUserDetails, userSignOut } from './src/logic/account'
Amplify.configure(awsconfig);

const DEBUG = false;

// used to pass userID to all screens
export const AccountContext = React.createContext("");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavBarTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#1ee94d',
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
      <Tab.Screen
        name="Diet"
        component={DietStack}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="nutrition" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sleep"
        component={SleepStack}
        options={{
          tabBarLabel: 'Sleep',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sleep" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
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
      />
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
          headerStyle: {
            backgroundColor: COLORS.lightGreen,
          },
        }} />
    </Stack.Navigator>
  );
}

//Screen in Signup tab
function BasicInfoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="Basic Info" 
        component={BasicInfoScreen} 
        options={{ headerTitle: "Complete Your Profile" }}
      />
    </Stack.Navigator>
  );
}

// screens in the settings tab
function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Settings Home" component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightGreen,
          },
        }} />
    </Stack.Navigator>
  );
}

// screens in the diet tab
function DietStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Diet Home" component={DietScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightGreen,
          },
        }} />
      <Stack.Screen name="Add Meal" component={AddMealScreen} />
      <Stack.Screen name="Search Food" component={SearchFoodScreen} />
      <Stack.Screen name="Add Food" component={AddFoodScreen} />
      <Stack.Screen name="Edit Food" component={AddFoodScreen}
                    options={({ navigation, route}) => ({
                      title: "Edit Food",
                      headerRight: () => (
                        <Ionicons name="trash" size={24} color={COLORS.darkBlue} />
                      ),
                    })} />
      <Stack.Screen name="Create Food Item"  component={ModifyFoodScreen} initialParams={{ editable:true }} />
      <Stack.Screen name="Add Serving Option" component={ModifyFoodScreen} initialParams={{ editable:true }} />
      <Stack.Screen name="Edit Food Item" component={ModifyFoodScreen} initialParams={{ editable:true }} />
    </Stack.Navigator>
  );
}

// screens in the sleep tab
function SleepStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Sleep Home" component={SleepScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightGreen,
          },
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
          headerStyle: {
            backgroundColor: COLORS.lightGreen,
          },
        }} />
      <Stack.Screen name="Active Workout" component={ActiveWorkoutScreen} />
      <Stack.Screen name="Workout History" component={WorkingHistoryOverview} />
      <Stack.Screen name="Workout List" component={WorkoutListScreen} />
      <Stack.Screen name="Edit Routine" component={EditRoutineScreen} />
    </Stack.Navigator>
  );
}

// clears the datastore
// Sometimes duplicate data shows up in UI
// clearing helps that but causes some data to not load on first request
// TODO: decide if this is needed or not
async function RunOnStart(userId: string) {
  await DataStore.clear(); // Clear the local Datastore to prevent duplicate entries
  console.log("DataStore is cleared");
}

// Fully syncs the local Datastore with the remote database before running RunOnStart()
export async function StartListening(user: string) {
  console.log("DataStore is started");
  const listener = Hub.listen('datastore', async hubData => {
    const { event, data } = hubData.payload;
    if (event === 'ready') {
      console.log("DataStore is ready");
      listener(); // Stops the listener
      // RunOnStart(user); // run this function to clear local datastore
    }
  })
}

function App() {
  const [userId, setUserId] = React.useState("");
  const [isFirstTime, setIsFirstTime] = React.useState(false);
  
  // ConsoleLogger.LOG_LEVEL = 'DEBUG'; // Uncomment to enable AWS debug logging

  React.useEffect(() => {
    currentUserDetails().then(async (user) => {
      setUserId(user);
      console.log(User); // Need to use a random model to initialize the DataStore

      setIsFirstTime(user.isFirstTime);
     
      
      await DataStore.start();
      await StartListening(user);
    });
  }, []);



  return (
    // This tag isn't being used, but it might be helpful in the future?
    <AccountContext.Provider value={userId}>
      <NavigationContainer>
        {<BottomNavBarTabs />}
        {/* {isFirstTime ? <BottomNavBarTabs /> : <BasicInfoStack/>} */}
      </NavigationContainer>
    </AccountContext.Provider>
  );
}

// Adds native ui for sign in functionality
// To bypass replace with 'export default App;'
export default withAuthenticator(App);
// export default App;