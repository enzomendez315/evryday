import React, { useState, useEffect, useCallback, memo } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View, TextInput, Button, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { COLORS } from '../../theme/theme';
import { syncMealFoodsList, deleteMeal, getFoodItemFromId, getAllRecipes, saveAsRecipe, addRecipeToMeal } from '../../logic/diet-api'
import PopupComponent from '../../components/PopupMenu';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

let DEBUG = false;

// A FlatList item for the recipe display popup
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

// A popup item for the recipe name input
const RecipeNameInput = ({ onPress, closePopup }) => {
  const [name, setName] = useState('');
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
        color={COLORS.primaryOrange}
        onPress={async () => {
          closePopup();
          onPress(name);
        }}
      />
    </View>
  )
};

// // A header for both menu popups
// const PopupHeader = ({ title, closePopup }) => {
//   return (
//     <View style={styles.popupHeader}>
//       <TouchableOpacity onPress={() => closePopup()}>
//         <Text
//           style={[
//             styles.closeButton,
//             { alignSelf: 'flex-start', fontSize: 24, color: 'white', },
//           ]}>
//           x
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.popupTitle}>{title}</Text>
//       <Text></Text>
//     </View>
//   );
// };



// The main component for the Add Meal Screen
const AddMealScreen = (props) => {
  const { navigation, route } = props;
  const [navMenuVisible, setNavMenuVisible] = useState(false);
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
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setNavMenuVisible(!navMenuVisible)}>
          <View>
            <Ionicons name="menu-outline" size={36} color={COLORS.darkBlue} />
          </View>
        </TouchableOpacity>
      ),
    })
  }, []);

  useEffect(() => {
    getAllRecipes(setRecipeList);
    setMealData(route.params.meal);
    syncMealFoodsList(mealData, setFoodList);
    DEBUG && console.log('Add meal route.params', route.params);
  }, [route.params]);

  useEffect(() => {
    navigation.setOptions({
      title: mealData.name ?? 'New Meal',
    });
  }, [mealData]);

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
              navigation.navigate('Edit Food', { foodItem: foodItem, meal: mealData, mealToFoodId });
            }}>
            <Text style={styles.foodItem}>
              {food.name}, {food.calories}cal</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  const NavPopupData = [
    {
      id: 0,
      name: 'Add new food',
      onPress: () => {
        navigation.navigate('Search Food', route.params);
      },
    },
    {
      id: 1,
      name: 'Use a recipe',
      onPress: () => {
        setRecipePopupVisible(true);
      },
    },
    {
      id: 2,
      name: 'Save as recipe',
      onPress: () => {
        setSavePopupVisible(true);
      },
    },
    {
      id: 3,
      name: 'Delete meal',
      onPress: () => {
        deleteMeal(mealData?.id).then(() => navigation.navigate('Diet Home'));
      },
    },
  ];

  const NavPopupItem = memo(
    ({ item, onPress }) => (
      <TouchableOpacity onPress={() => { onPress(item) }} style={styles.menuRow}>
        <Text style={styles.rowLabel}>{item.name}</Text>
      </TouchableOpacity>
    ),
    (prevProps, nextProps) => {
      return prevProps.item.id === nextProps.item.id;
    }
  );

  //The onPress function for the recipe popup
  const addToMeal = async (item) => {
    console.log(item.name, 'pressed');
    await addRecipeToMeal(mealId = mealData.id, recipeId = item.id);
    syncMealFoodsList(mealData, setFoodList);
  };

  const navMenuOnPress = (item) => {
    console.log(item.name, 'pressed');
    setNavMenuVisible(false);
    item.onPress();
  }

  let letterRegex = /^[a-zA-Z][a-zA-Z\s,]*$/;
  const saveRecipe = async (name) => {
    if (name === null || !letterRegex.test(name)) {
      console.log('Bad Input')
      return;
    }
    console.log('Good Input: ', name)
    await saveAsRecipe(mealData.id, name).then((newMeal) => {
      navigation.navigate('Diet Home');
    })
  }

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.peach} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ color: COLORS.dustyOrange }}>

          <PopupComponent
            isVisible={recipePopupVisible}
            setIsVisible={setRecipePopupVisible}
            data={recipeList}
            ItemComponent={RecipePopupItem}
            onPress={addToMeal}
            //Header={PopupHeader}
          />

          <PopupComponent
            isVisible={savePopupVisible}
            setIsVisible={setSavePopupVisible}
            Content={RecipeNameInput}
            onPress={saveRecipe}
          />

          <PopupComponent
            isVisible={navMenuVisible}
            setIsVisible={setNavMenuVisible}
            data={NavPopupData}
            ItemComponent={NavPopupItem}
            onPress={navMenuOnPress}
            stylePrefix='rightSide'
          />

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

          <View style={styles.mealContainer}>
            <ScrollView>
              {foodListView}
            </ScrollView>
            <TouchableOpacity style={styles.Button}
              onPress={() => navigation.navigate('Search Food', route.params)}>
              <Text style={styles.ButtonText}>Add New Food</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );

  // <Text>HUGE TIP: don't eat the mysterious cookies the little
  // girls in front of the grocery store are selling. They're not
  // cookies. They're rocks. I learned that the hard way.
  // </Text>

};

export default AddMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.peach,
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
    marginHorizontal: 10,
  },
  foodItem: {
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
    margin: 5,
    color: 'white',

  },
  Button: {
    backgroundColor: COLORS.dustyOrange,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10
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
    color: 'white',
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
    color: 'white',
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
    backgroundColor: COLORS.primaryOrange,
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 6,
    paddingLeft: 50,
    paddingRight: 50,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
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
    color: 'white'
  },
  popupContentContainer: {
    flex: -1,
    width: '100%',
    maxHeight: '100%',
    gap: 5,
    backgroundColor: COLORS.dustyOrange,
  },
  recipeTab: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    backgroundColor: COLORS.peach,
    borderColor: COLORS.dustyOrange, // 'black',
  },
  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  recipeIngredients: {
    fontSize: 16,
    color: 'white',
  },
  recipeNutrition: {
    fontSize: 16,
    marginTop: 8,
    color: 'white',
  },
  textInput: {
    borderColor: COLORS.dustyOrange,
    backgroundColor: COLORS.peach,
    borderRadius: 1,
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
  }

});