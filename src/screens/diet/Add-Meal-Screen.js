import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {addMealStyles} from '../../styles/dietStyles/addMealStyles';
import PieChart from 'react-native-pie-chart';


const AddMealScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={addMealStyles.title}>New Meal</Text>

        <View style={addMealStyles.mealContainer}>
          <Text>Some Tasty Rice</Text>
          <Text>Some Tasty Chicken</Text>
          <Button style={addMealStyles.addMealButton}
          title="Add Food"
          onPress={() => navigation.navigate('Search Food')} />

        </View>

        <View style={addMealStyles.buttonContainer}>
          <Button title="Save Meal" onPress={() => {}} />
          <Button title="Use Saved Meal" onPress={() => {}} />
        </View>

        <View style={addMealStyles.pieMacroContainer}>
        <PieChart
          style={addMealStyles.pieChart}
          widthAndHeight={150}
          series={[300, 170, 200]}
          sliceColor={['lightblue', 'lightgreen', 'pink']}
          coverFill={'#FFF'}
          doughnut={true}
        />

        <View style={addMealStyles.macroContainer}>
          <Text>Calories: 670</Text>
          <Text>Protein: 100g</Text>
          <Text>Carbs: 200g</Text>
          <Text>Fat: 50g</Text>
        </View>
        </View>
        
        <Text>HUGE TIP: don't eat the mysterious cookies the little
          girls in front of the grocery store are selling. They're not
          cookies. They're rocks. I learned that the hard way.
        </Text>

      </SafeAreaView>
    </>
  );
};

export default AddMealScreen;