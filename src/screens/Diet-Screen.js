import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {dietStyles as styles} from '../dietStyles';
import PieChart from 'react-native-pie-chart';

const DietScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>March 30, 2024</Text>

        <View>
        <Text style={styles.calorieHeader}>Calories</Text>
        <Text style={styles.calorieText}>1700/2000</Text>
        </View>

        <PieChart
          style={styles.pieChart}
          widthAndHeight={200}
          series={[300, 1700]}
          sliceColor={['#808080', '#7CFC00']}
          coverFill={'#FFF'}
          doughnut={true}
        />

        <View style={styles.macroContainer}>
        <Text style={styles.macroText}>Protein: 100g/150g</Text>
        <Text style={styles.macroText}>Carbs: 200g/250g</Text>
        <Text style={styles.macroText}>Fat: 50g/75g</Text>
        </View>
        
        <View style={styles.mealContainer}>
          <Text style={styles.mealText}>Dinner</Text>
          <Text style={styles.mealText}>Snack</Text>
          <Button title="Add Meal" onPress={() => navigation.navigate('AddMeal')} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DietScreen;