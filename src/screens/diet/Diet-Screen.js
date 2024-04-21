import React from 'react';
import { ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { dietHomeStyles } from '../../styles/dietStyles/dietHomeStyles';
import PieChart from 'react-native-pie-chart';
import { Bar } from 'react-native-progress';

const mealData = [
  {
    name: 'Breakfast',
    calories: 500,
    protein: 25,
    carbs: 50,
    fat: 20,
  },
  {
    name: 'Lunch',
    calories: 700,
    protein: 30,
    carbs: 70,
    fat: 30,
  },
  {
    name: 'Dinner',
    calories: 600,
    protein: 35,
    carbs: 60,
    fat: 25,
  },
  {
    name: 'Snack',
    calories: 200,
    protein: 10,
    carbs: 20,
    fat: 5,
  },
];

const calorieData = {
  proteinCurrent: mealData.reduce((acc, meal) => acc + meal.protein, 0),
  proteinGoal: 150,
  carbsCurrent: mealData.reduce((acc, meal) => acc + meal.carbs, 0),
  carbsGoal: 250,
  fatCurrent: mealData.reduce((acc, meal) => acc + meal.fat, 0),
  fatGoal: 75,
  caloriesCurrent: mealData.reduce((acc, meal) => acc + meal.calories, 0),
  caloriesGoal: 3000,
};

const DietScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={dietHomeStyles.title}>March 30, 2024</Text>

        <View>
          <Text style={dietHomeStyles.calorieHeader}>Calories</Text>
          <Text style={dietHomeStyles.calorieText}>
            {calorieData.caloriesCurrent}/{calorieData.caloriesGoal}
          </Text>
        </View>

        <PieChart
          style={dietHomeStyles.pieChart}
          widthAndHeight={200}
          series={[calorieData.caloriesGoal - calorieData.caloriesCurrent,
          calorieData.caloriesCurrent]}
          sliceColor={['#86A184', '#7CFC00']}
          coverFill={'#FFF'}
          doughnut={true}
        />

        <View style={dietHomeStyles.macroContainer}>
          <View style={dietHomeStyles.macroRectangleContainer}>
            <Text style={dietHomeStyles.macroText}>
              Protein: {calorieData.proteinCurrent}g/{calorieData.proteinGoal}g</Text>
            <Bar progress={calorieData.proteinCurrent / calorieData.proteinGoal}
              width={125}
              color={calorieData.proteinCurrent / calorieData.proteinGoal > 1 ? 'red' : 'blue'} />
          </View>
          <View style={dietHomeStyles.macroRectangleContainer}>
            <Text style={dietHomeStyles.macroText}>
              Carbs: {calorieData.carbsCurrent}g/{calorieData.carbsGoal}g</Text>
            <Bar progress={calorieData.carbsCurrent / calorieData.carbsGoal}
              width={125}
              color={calorieData.carbsCurrent / calorieData.carbGoal > 1 ? 'red' : 'blue'} />
          </View>
          <View style={dietHomeStyles.macroRectangleContainer}>
            <Text style={dietHomeStyles.macroText}>
              Fat: {calorieData.fatCurrent}g/{calorieData.fatGoal}g</Text>
            <Bar progress={calorieData.fatCurrent / calorieData.fatGoal}
              width={125}
              color={calorieData.fatCurrent / calorieData.fatGoal > 1 ? 'red' : 'blue'} />
          </View>

        </View>

        <View style={dietHomeStyles.mealsContainer}>

          <ScrollView contentContainerStyle={{ padding: 10 }} horizontal={true}>
            {mealData.map((meal, index) => (
              <TouchableOpacity style={{ padding: 5 }}
                key={index} margin={5}
                onPress={() => navigation.navigate('Add Meal', { meal })}>
                <Text style={dietHomeStyles.mealNameText}>{meal.name}</Text>
                <Text style={dietHomeStyles.mealText}>
                  {meal.calories}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={dietHomeStyles.addMealButton}
            onPress={() => navigation.navigate('Add Meal', {})}>
            <Text style={dietHomeStyles.addMealButtonText}>Add Meal</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    </>
  );
};

export default DietScreen;