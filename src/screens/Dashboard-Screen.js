import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const Dashboard = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;