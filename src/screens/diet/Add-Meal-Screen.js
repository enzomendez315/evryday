import React, { useState, useEffect, useCallback, memo } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View, TextInput, Button, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { COLORS } from '../../theme/theme';
import { syncMealFoodsList, deleteMeal, getFoodItemFromId, getAllRecipes, saveAsRecipe } from '../../logic/diet-api'
import PopupComponent from '../../components/PopupMenu';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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

let DEBUG = true;

const RecipePopupData = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    name: 'Broccoli and Apple',
    ingredients: [
      { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
      { name: 'Apple', calories: 100, protein: 1, carbs: 20, fat: 0, serving: '100g' },
    ],
    calories: 150,
    protein: 6,
    carbs: 30,
    fat: 5,
  }
];

function recipeOnPress(recipe, closePopup) {
  console.log(recipe.name + ' pressed')
  closePopup()
}

const RecipePopupItem = memo(
  ({ item, onPress }) => (
    <TouchableOpacity style={styles.recipeTab} onPress={onPress}>
        <Text style={styles.recipeName}>{item.name}</Text>
        <Text style={styles.recipeIngredients}>
          Ingredients:{' '}
          {item.ingredients
            .map((ingredient) => `${ingredient.name} (${ingredient.serving})`)
            .join(', ')}
        </Text>
        <Text style={styles.recipeNutrition}>
          Calories: {item.calories} | Protein: {item.protein}g | Carbs:{' '}
          {item.carbs}g | Fat: {item.fat}g
        </Text>
    </TouchableOpacity>
  ),
  (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id;
  }
);

const RecipeNameInput = ({ onPress, closePopup }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  let letterRegex = /^[a-zA-Z][a-zA-Z\s,]*$/;
  return (
    <View style={styles.popupContentContainer}>
      <Text style={styles.popupTitle}>Recipe Name</Text>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(newName) => setName(newName)}
          value={name}
        />
      </ View>
      <Button
        title="Create"
        onPress={async () => {
          closePopup();
          onPress(name);
        }}
      />
    </View>
  )
};

const PopupHeader = ({ title, closePopup }) => {
  return (
    <View style={styles.popupHeader}>
      <TouchableOpacity onPress={() => closePopup()}>
        <Text
          style={[
            styles.closeButton,
            { alignSelf: 'flex-start', fontSize: 24 },
          ]}>
          x
        </Text>
      </TouchableOpacity>
      <Text style={styles.popupTitle}>{title}</Text>
      <Text></Text>
    </View>
  );
};



/////

const AddMealScreen = (props) => {
  const { navigation, route } = props;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [recipePopupVisible, setRecipePopupVisible] = useState(false);
  const [savePopupVisible, setSavePopupVisible] = useState(false);
  const [mealData, setMealData] = useState(route.params.meal);
  const [foodList, setFoodList] = useState();
  let foodListView = <></>;
  DEBUG && console.log(`Add meal screen mealId: ${mealData.id} meal: ${mealData?.name}`);

  const [recipeList, setRecipeList] = useState([]);

  let pieSeries = [mealData.protein, mealData.carbs, mealData.fat]
  if (pieSeries.reduce((acc, val) => acc + val, 0) == 0) {
    pieSeries = [1, 1, 1]
  }

  useEffect(() => {
    getAllRecipes(setRecipeList);
    setMealData(route.params.meal);
    syncMealFoodsList(mealData, setFoodList);
    DEBUG && console.log('Add meal route.params', route.params);
  }, [route.params]);

  if (foodListView != undefined) {
    foodListView = (
      <>
        {foodList?.map((food, index) => (
          <TouchableOpacity key={index}
            onPress={async () => {
              // makes a food item clickable and  to edit or remove e
              DEBUG && console.log(food.name + ' pressed');
              let mealToFoodId = food?.mealToFoodId;
              const foodItem = await getFoodItemFromId(food.id);
              navigation.navigate('Edit Food', { foodItem:foodItem, meal:mealData, mealToFoodId });
            }}>
            <Text style={styles.foodItem}>
              {food.name}, {food.calories}cal</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  const tempPress = (item) => {
    console.log(item.name,'pressed');
  };

  let letterRegex = /^[a-zA-Z][a-zA-Z\s,]*$/;
  const saveRecipe = async (name) => {
    if(name === null || !letterRegex.test(name)){
      console.log('Bad Input')
      return;
    }
    console.log('Good Input: ', name)
    await saveAsRecipe(mealData.id, name).then((newMeal) => {
      // navigation.navigate('', {newMeal});
    })
  }

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <ScrollView>

        <PopupComponent
          isVisible={recipePopupVisible}
          setIsVisible={setRecipePopupVisible}
          data={recipeList}
          ItemComponent={RecipePopupItem}
          onPress={tempPress}
          Header={PopupHeader}
        />

        <PopupComponent
          isVisible={savePopupVisible}
          setIsVisible={setSavePopupVisible}
          Content={RecipeNameInput}
          onPress={saveRecipe}
        />

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
            <TouchableOpacity style={styles.Button}
              onPress={() => setSavePopupVisible(true)}>
              <Text style={styles.ButtonText}>Save as Recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() => setRecipePopupVisible(true)}>
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
              deleteMeal(mealData?.id).then(() => navigation.navigate('Diet Home'));
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
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 6,
    paddingLeft: 50,
    paddingRight: 50,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
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
    color: 'black'
  },
  popupContentContainer: {
    flex:-1,
    width: '100%',
    maxHeight: '100%',
    gap: 5
  },
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
  textInput: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    textAlign: 'center'
  }
});