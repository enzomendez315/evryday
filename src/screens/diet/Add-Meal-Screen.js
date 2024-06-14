import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { COLORS } from '../../theme/theme';
import { getMeal, calcMealMacros, deleteMeal } from '../../logic/diet-api'

// const foodsList = [
//   { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
//   { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
//   { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
// ];

// const mealData = {
//   name: 'New Meal',
//   calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
//   protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
//   carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
//   fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
// };

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

async function getUsersLog(setMealData, setFoodList, mealId) {
  await getMeal(mealId).then(async (meal) => {
    console.log(`Got meal: ${meal.id}`);
    await meal.foodItems.toArray().then(async (food) => {
      if (food.length == 0) {
        console.log('No food items');
        return;
      }
      console.log(`Got food: ${food[0].name} ${food[0].calories} ${food[0].protein} ${food[0].carbs} ${food[0].fat}`);
      setFoodList(food);
      await calcMealMacros(meal).then((macro) => {
        console.log(`Got macros calories: ${macro.calories} carbs: ${macro.carbs} fat: ${macro.fat} protein:${macro.protein}`);
        setMealData(macro);
      });
    });
  });
}

const AddMealScreen = (props) => {
  const { navigation, route } = props;
  const mealId = route.params.meal.id;
  console.log(`mealId: ${mealId}`);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [mealData, setMealData] = useState(route.params.meal);
  const [foodList, setFoodList] = useState();
  let foodListView = <></>;

  let pieSeries = [mealData.protein, mealData.carbs, mealData.fat]
  if (pieSeries.reduce((acc, val) => acc + val, 0) == 0) {
    pieSeries = [1, 1, 1]
  }

  useEffect(() => {
    setMealData(route.params.meal);
    console.log('route.params', route.params);
    //getUsersLog(setMealData, setFoodList, mealId);
  }, [route.params]);

  if (foodListView != undefined) {
    foodListView = (
      <>
        {foodList?.map((food, index) => (
          <Text style={styles.foodItem}
            key={index}>{food.name}, {food.calories}cal</Text>
        ))}
      </>
    );
  }

  console.log(route.params.meal);

  const RecipeListPopup = () => {
    navigation
    return (
      <Modal
        visible={isPopupVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsPopupVisible(!isPopupVisible)}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <TouchableOpacity onPress={() => setIsPopupVisible(false)}>
                <Text style={[styles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>x</Text>
              </TouchableOpacity>

              <Text style={styles.popupTitle}>Tasty Recipes</Text>

              <TouchableOpacity onPress={() => { /* Handle edit */ }}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.popupContentContainer}>
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
    <TouchableOpacity style={styles.recipeTab} onPress={onPress}>
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <Text style={styles.recipeIngredients}>
        Ingredients: {recipe.ingredients.map((ingredient) => `${ingredient.name} (${ingredient.serving})`).join(', ')}
      </Text>

      <Text style={styles.recipeNutrition}>
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
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <ScrollView>
          <RecipeListPopup />

          <Text style={styles.title}>{mealData.name}</Text>

          <View style={styles.mealContainer}>
            <ScrollView>
              {foodListView}
            </ScrollView>
            <TouchableOpacity style={styles.Button}
              onPress={() => navigation.navigate('Search Food', route.params)}>
              <Text style={styles.ButtonText}>Add New Food</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Button}
              onPress={() => navigation.navigate('Diet Home')}>
              <Text style={styles.ButtonText}>Complete Meal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Save as Recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() => setIsPopupVisible(true)}>
              <Text style={styles.ButtonText}>Use a Recipe</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pieMacroContainer}>
            <View style={styles.pieTextContainer}>
              <Text style={styles.pieText}>Macro Breakdown:</Text>
              <PieChart
                style={styles.pieChart}
                widthAndHeight={150}
                series={pieSeries}
                sliceColor={['lightblue', 'lightgreen', 'pink']}
              />
            </View>

            <View style={styles.macroContainer}>
              <Text style={styles.macroText}>
                Calories: {mealData.calories}</Text>

              <View style={styles.macroSquareTextContainer}>
                <View style={styles.proteinSquare} />
                <Text style={styles.macroText}>
                  Protein: {mealData.protein}g</Text>
              </View>

              <View style={styles.macroSquareTextContainer}>
                <View style={styles.carbsSquare} />
                <Text style={styles.macroText}>
                  Carbs: {mealData.carbs}g</Text>
              </View>

              <View style={styles.macroSquareTextContainer}>
                <View style={styles.fatSquare} />
                <Text style={styles.macroText}>
                  Fat: {mealData.fat}g</Text>
              </View>
            </View>
          </View>

          <Text>HUGE TIP: don't eat the mysterious cookies the little
            girls in front of the grocery store are selling. They're not
            cookies. They're rocks. I learned that the hard way.
          </Text>

          <TouchableOpacity style={styles.Button}
            onPress={() => {
              deleteMeal(mealId);
              navigation.navigate('Diet Home');
            }}>
            <Text style={styles.ButtonText}>Delete Meal</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealContainer: {
    justifyContent: 'space-around',
    marginTop: 40,
  },
  foodItem: {
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
    margin: 5,
    color: 'black',
  },
  Button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  pieMacroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginTop: 40,
    marginRight: 30,
  },
  pieTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  pieText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  macroContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
  },
  macroSquareTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  macroText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  proteinSquare: {
    width: 15,
    height: 15,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    marginRight: 5,
  },
  carbsSquare: {
    width: 15,
    height: 15,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    marginRight: 5,
  },
  fatSquare: {
    width: 15,
    height: 15,
    backgroundColor: 'pink',
    borderWidth: 1,
    marginRight: 5,
  },
  pieChart: {
    marginTop: 40,
    marginBottom: 40,
  },
  // Popup styles
  popupOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
  },
  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  popupTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  editButton: {
    fontSize: 18,
    color: '#0000ff', // Replace with your theme color
  },
  popupContentContainer: {
    height: 500,
    width: '100%',
  },
  // recipe tab styles
  recipeTab: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  recipeIngredients: {
    fontSize: 16,
  },
  recipeNutrition: {
    fontSize: 16,
    marginTop: 8,
  },
});