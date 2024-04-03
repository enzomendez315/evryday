import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {dietHomeStyles} from '../../styles/dietStyles/dietHomeStyles';
import PieChart from 'react-native-pie-chart';

const DietScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={dietHomeStyles.title}>March 30, 2024</Text>

        <View>
        <Text style={dietHomeStyles.calorieHeader}>Calories</Text>
        <Text style={dietHomeStyles.calorieText}>1700/2000</Text>
        </View>

        <PieChart
          style={dietHomeStyles.pieChart}
          widthAndHeight={200}
          series={[300, 1700]}
          sliceColor={['#808080', '#7CFC00']}
          coverFill={'#FFF'}
          doughnut={true}
        />

        <View style={dietHomeStyles.macroContainer}>
        <Text style={dietHomeStyles.macroText}>Protein: 100g/150g</Text>
        <Text style={dietHomeStyles.macroText}>Carbs: 200g/250g</Text>
        <Text style={dietHomeStyles.macroText}>Fat: 50g/75g</Text>
        </View>
        
        <View style={dietHomeStyles.mealContainer}>
          <Text style={dietHomeStyles.mealText}>Dinner</Text>
          <Text style={dietHomeStyles.mealText}>Snack</Text>
          <Button title="Add Meal" onPress={() => navigation.navigate('Add Meal')} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DietScreen;