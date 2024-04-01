import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const WorkoutScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Workout</Text>
      </SafeAreaView>
    </>
  );
};

export default WorkoutScreen;