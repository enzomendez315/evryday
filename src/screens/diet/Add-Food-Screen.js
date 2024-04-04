import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { addFoodStyles } from '../../styles/dietStyles/addFoodStyles';

const AddFoodScreen = (props) => {
  const { navigation, route } = props;
  const { item } = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={addFoodStyles.title}>{item[0]} was selected</Text>
        <Text style={addFoodStyles.text}>
          I bet that {item[0]} is gonna taste delicious</Text>
      </SafeAreaView>
    </>
  );
};

export default AddFoodScreen;