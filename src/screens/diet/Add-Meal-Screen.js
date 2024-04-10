import React, { useState } from 'react';
import { Modal, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { addMealStyles } from '../../styles/dietStyles/addMealStyles';
import PieChart from 'react-native-pie-chart';

const foodsList = [
  { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
  { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
  { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
  { name: 'Apple', calories: 100, protein: 1, carbs: 20, fat: 0, serving: '100g' },
];

const mealData = {
  name: 'New Meal',
  calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
  protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
  carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
  fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
};

const recipeData = [
  {
    name: 'Chicken and Rice',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
      { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
    ],
    calories: 500,
    protein: 25,
    carbs: 50,
    fat: 20,
  },
  {
    name: 'Chicken and Broccoli',
    ingredients: [
      { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
      { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
    ],
    calories: 350,
    protein: 20,
    carbs: 40,
    fat: 15,
  },
  {
    name: 'Rice and Broccoli',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
      { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
    ],
    calories: 250,
    protein: 15,
    carbs: 30,
    fat: 10,
  },
  {
    name: 'Apple and Rice',
    ingredients: [
      { name: 'Apple', calories: 100, protein: 1, carbs: 20, fat: 0, serving: '100g' },
      { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
    ],
    calories: 300,
    protein: 11,
    carbs: 40,
    fat: 5,
  },
  {
    name: 'Chicken and Apple',
    ingredients: [
      { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
      { name: 'Apple', calories: 100, protein: 1, carbs: 20, fat: 0, serving: '100g' },
    ],
    calories: 400,
    protein: 16,
    carbs: 50,
    fat: 15,
  },
  {
    name: 'Broccoli and Apple',
    ingredients: [
      { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
      { name: 'Apple', calories: 100, protein: 1, carbs: 20, fat: 0, serving: '100g' },
    ],
    calories: 150,
    protein: 6,
    carbs: 30,
    fat: 5,
  },
];

const AddMealScreen = (props) => {
  const { navigation, route } = props;
  const item1 = route.params;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  console.log(item1);

  const RecipeListPopup = () => {
    return (
      <Modal
        visible={isPopupVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsPopupVisible(!isPopupVisible)}
      >
        <View style={addMealStyles.popupOverlay}>
          <View style={addMealStyles.popup}>
            <View style={addMealStyles.popupHeader}>
              <TouchableOpacity onPress={() => setIsPopupVisible(false)}>
                <Text style={[addMealStyles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>x</Text>
              </TouchableOpacity>

              <Text style={addMealStyles.popupTitle}>Tasty Recipes</Text>

              <TouchableOpacity onPress={() => { /* Handle edit */ }}>
                <Text style={addMealStyles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={addMealStyles.popupContentContainer}>
              <ScrollView>
                {recipeData.map((recipe, index) => (
                  <RecipeTab recipe={recipe} onPress={() => onRecipePress(recipe)} key={index} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  const RecipeTab = ({ recipe, onPress }) => (
    <TouchableOpacity style={addMealStyles.recipeTab} onPress={onPress}>
      <Text style={addMealStyles.recipeName}>{recipe.name}</Text>
      <Text style={addMealStyles.recipeIngredients}>
        Ingredients: {recipe.ingredients.map((ingredient) => `${ingredient.name} (${ingredient.serving})`).join(', ')}
      </Text>

      <Text style={addMealStyles.recipeNutrition}>
        Calories: {recipe.calories} | Protein: {recipe.protein}g | Carbs: {recipe.carbs}g | Fat: {recipe.fat}g
      </Text>
    </TouchableOpacity>
  )

  const onRecipePress = (recipe) => {
    console.log(recipe.name + ' pressed')
    setIsPopupVisible(false);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <RecipeListPopup />

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
            <TouchableOpacity style={addMealStyles.Button}
              onPress={() => navigation.navigate('Diet Home')}>
              <Text style={addMealStyles.ButtonText}>Complete Meal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={addMealStyles.Button}>
              <Text style={addMealStyles.ButtonText}>Save as Recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={addMealStyles.Button}
              onPress={() => setIsPopupVisible(true)}>
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

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddMealScreen;