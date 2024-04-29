import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from './src/screens/Dashboard-Screen';
import DietScreen from './src/screens/diet/Diet-Screen';
import AddMealScreen from './src/screens/diet/Add-Meal-Screen';

import SleepScreen from './src/screens/sleep/Sleep-Screen';
import SearchFoodScreen from './src/screens/diet/Search-Food-Screen';
import AddFoodScreen from './src/screens/diet/Add-Food-Screen';

import WorkoutHomeScreen from './src/screens/workout/Workout-Screen';
import ActiveWorkoutScreen from './src/screens/workout/Active-Workout-Screen';
import WorkingHistoryOverview from './src/screens/workout/Workout-History-Screen';
import WorkoutListScreen from './src/screens/workout/Workout-List-Screen';

import {Amplify} from 'aws-amplify';
import { DataStore, Predicates } from 'aws-amplify/datastore';
import { ConsoleLogger } from 'aws-amplify/utils';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
import { User } from './src/models';
import { Hub } from 'aws-amplify/utils';

import {withAuthenticator, useAuthenticator} from '@aws-amplify/ui-react-native';

import {currentUserDetails, userSignOut} from './src/logic/account'
import {initFoodItems, initNutritionLog} from './src/logic/diet-api'

const AccountContext = React.createContext("");

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
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={DietStack}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="fast-food-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sleep"
        component={SleepStack}
        options={{
          tabBarLabel: 'Sleep',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="sleep" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard Home" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

function DietStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="Diet Home" component={DietScreen} />
      <Stack.Screen name="Add Meal" component={AddMealScreen} />
      <Stack.Screen name="Search Food" component={SearchFoodScreen} />
      <Stack.Screen name="Add Food" component={AddFoodScreen} />
    </Stack.Navigator>
  );
}

function SleepStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sleep Home" component={SleepScreen} />
    </Stack.Navigator>
  );
}

function WorkoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workout Home" component={WorkoutHomeScreen} />
      <Stack.Screen name="Active Workout" component={ActiveWorkoutScreen} />
      <Stack.Screen name="Workout History" component={WorkingHistoryOverview} />
      <Stack.Screen name="Workout List" component={WorkoutListScreen} />
    </Stack.Navigator>
  );
}
async function RunOnStart(userId:string){
  // userSignOut();
    // console.log("started initFoodItems() and initNutritionLog()");
    await initFoodItems();
    await initNutritionLog(userId);
}

function App() {
  const [userId, setUserId] = React.useState("");
  // ConsoleLogger.LOG_LEVEL = 'DEBUG'; // Uncomment to enable AWS debug logging
  React.useEffect(() => {
    currentUserDetails().then(async (user) => {
      // console.log("user id: ", user);
      setUserId(user);
      console.log(User); // Need to use a random model to initialize the DataStore
      await DataStore.start();
      // await DataStore.clear(); //Clears the local DataStore
      await StartListening(user);
    });
  }, []);
  return (
    <AccountContext.Provider value={userId}>
      <NavigationContainer>
        <BottomNavBarTabs />
      </NavigationContainer>
    </AccountContext.Provider>
  );
}

// Fully syncs the local Datastore with the remote database before running RunOnStart()
export function StartListening(user:string){
  console.log("DataStore is started");
  const listener = Hub.listen('datastore', async hubData => {
      const  { event, data } = hubData.payload;
      if (event === 'ready') {
        console.log("DataStore is ready");
          listener(); // Stops the listener
          RunOnStart(user);
      }
  })
}

// Adds native ui for sign in functionality
// To bypass replace with 'export default App;'
export default withAuthenticator(App);
// export default App;




