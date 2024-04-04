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
import WorkoutScreen from './src/screens/workout/Workout-Screen';
import SleepScreen from './src/screens/Sleep-Screen';
import SearchFoodScreen from './src/screens/diet/Search-Food-Screen';
import AddFoodScreen from './src/screens/diet/Add-Food-Screen';
import ActiveWorkout from './src/screens/workout/Active-Workout-Screen';

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
    <Stack.Navigator>
      <Stack.Screen name="Workout Home" component={WorkoutScreen} />
      <Stack.Screen name="Active Workout" component={ActiveWorkout} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBarTabs />
    </NavigationContainer>
  );
}