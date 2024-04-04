import React from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { addMealStyles } from '../../styles/dietStyles/addMealStyles';
import PieChart from 'react-native-pie-chart';

const foodsList = [
  { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
  { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
  { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
];

const mealData = {
  name: 'New Meal',
  calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
  protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
  carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
  fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
};

const AddMealScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={addMealStyles.title}>{mealData.name}</Text>

        <View style={addMealStyles.mealContainer}>
          <ScrollView>
            {foodsList.map((food, index) => (
              <Text style={addMealStyles.foodItem}
                key={index}>{food.name}, {food.calories}cal</Text>
            ))}
          </ScrollView>
          <TouchableOpacity style={addMealStyles.Button}
            onPress={() => navigation.navigate('Search Food')}>
            <Text style={addMealStyles.ButtonText}>Add New Food</Text>
          </TouchableOpacity>
        </View>

        <View style={addMealStyles.buttonContainer}>
          <TouchableOpacity style={addMealStyles.Button}>
            <Text style={addMealStyles.ButtonText}>Complete Meal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={addMealStyles.Button}>
            <Text style={addMealStyles.ButtonText}>Save as Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={addMealStyles.Button}>
            <Text style={addMealStyles.ButtonText}>Use a Recipe</Text>
          </TouchableOpacity>
        </View>

        <View style={addMealStyles.pieMacroContainer}>
          <View style={addMealStyles.pieTextContainer}>
            <Text style={addMealStyles.pieText}>Macro Breakdown:</Text>
            <PieChart
              style={addMealStyles.pieChart}
              widthAndHeight={150}
              series={[mealData.protein, mealData.carbs, mealData.fat]}
              sliceColor={['lightblue', 'lightgreen', 'pink']}
            />
          </View>

          <View style={addMealStyles.macroContainer}>
            <Text style={addMealStyles.macroText}>
              Calories: {mealData.calories}</Text>

            <View style={addMealStyles.macroSquareTextContainer}>
              <View style={addMealStyles.proteinSquare} />
              <Text style={addMealStyles.macroText}>
                Protein: {mealData.protein}g</Text>
            </View>

            <View style={addMealStyles.macroSquareTextContainer}>
              <View style={addMealStyles.carbsSquare} />
              <Text style={addMealStyles.macroText}>
                Carbs: {mealData.carbs}g</Text>
            </View>

            <View style={addMealStyles.macroSquareTextContainer}>
              <View style={addMealStyles.fatSquare} />
              <Text style={addMealStyles.macroText}>
                Fat: {mealData.fat}g</Text>
            </View>
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