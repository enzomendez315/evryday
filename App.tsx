import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/Dashboard-Screen';
import DietScreen from './src/screens/Diet-Screen';
import WorkoutScreen from './src/screens/Workout-Screen';
import SleepScreen from './src/screens/Sleep-Screen';
import AddMealScreen from './src/screens/Add-Meal-Screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavBarTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#1ee94d',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
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
        component={SleepScreen}
        options={{
          tabBarLabel: 'Sleep',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="sleep" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
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

function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DietScreen} />
      <Stack.Screen name="AddMeal" component={AddMealScreen} />
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