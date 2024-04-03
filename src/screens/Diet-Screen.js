import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const DietScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Diet</Text>
      </SafeAreaView>
    </>
  );
};

export default DietScreen;