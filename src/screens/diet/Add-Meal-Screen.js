import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const AddMealScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Add Meal</Text>
      </SafeAreaView>
    </>
  );
};

export default AddMealScreen;