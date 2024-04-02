import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const AddFoodScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Add Food</Text>
      </SafeAreaView>
    </>
  );
};

export default AddFoodScreen;