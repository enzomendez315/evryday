import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const SleepScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Sleep</Text>
      </SafeAreaView>
    </>
  );
};

export default SleepScreen;