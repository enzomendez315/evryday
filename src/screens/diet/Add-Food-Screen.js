import React, { useEffect, useState, memo } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, Image, View, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../../theme/theme';
import { addOrUpdateFoodToMeal, getServingOptions, removeFoodFromMeal, deleteFoodItem, favoriteAFoodItem } from '../../logic/diet-api'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AccountContext } from '../../../App';
import { NavMenuPopupComponent } from '../../components/PopupMenu';

let DEBUG = false;

const AddFoodScreen = (props) => {
  const { navigation, route } = props;
  const { foodItem, meal } = route.params;
  const mealToFoodId = route.params?.mealToFoodId;
  const userId = React.useContext(AccountContext);

  DEBUG && console.log('Add Food route.params', route.params);

  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(0);
  const [servingOptions, setServingOptions] = useState([]);
  const [servingAmount, setServingAmount] = useState('100');
  const [dropDownItems, setDropDownItems] = useState([
    { label: 'Grams', value: 0 }
  ]);

  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [macros, setMacros] = useState([0, 0, 0, 0]);
  const [disableInput, setDisableInput] = useState(false);
  const calcMacros = (serving, servingAmount) => {
    let servingSize = serving?.servingSize ?? 100;
    let calories = serving?.calories ?? 0;
    let protein = serving?.protein ?? 0;
    let carbs = serving?.carbs ?? 0;
    let fat = serving?.fat ?? 0;

    let multiplier = (parseFloat(servingAmount) ?? 100) / servingSize;
    calories = Math.round(calories * multiplier);
    protein = Math.round(protein * multiplier);
    carbs = Math.round(carbs * multiplier);
    fat = Math.round(fat * multiplier);

    setMacros([calories, carbs, fat, protein]);
  }

  // Navigation menu options
  const addNavTab = {
    id: 0,
    name: 'Create New Serving Option',
    onPress: async () => {
      navigation.navigate('Add Serving Option', { meal: meal, nextPage: 'Add Food', foodItem: foodItem })
    }
  }

  const editNavTab = {
    id: 1,
    name: 'Update Food values',
    onPress: async () => {
      DEBUG && console.log(servingOptions[dropDownValue]);
      let newFoodItem = {
        name: foodItem.name,
        id: foodItem.id,
        servingSize: servingOptions[dropDownValue]?.servingSize,
        servingSizeUnit: servingOptions[dropDownValue]?.servingUnit,
        calories: servingOptions[dropDownValue]?.calories,
        carbs: servingOptions[dropDownValue]?.carbs,
        fat: servingOptions[dropDownValue]?.fat,
        protein: servingOptions[dropDownValue]?.protein
      }
      navigation.navigate('Edit Food Item', { meal: meal, nextPage: 'Add Food', foodItem: newFoodItem })
    }
  }

  const deleteNavTab = {
    id: 2,
    name: 'Delete Food',
    onPress: async () => {
      await deleteFoodItem(foodItem.id).then(() => {
        navigation.navigate('Search Food', { meal: meal });
      });
    }
  }

  const favoriteNavTab = {
    id: 3,
    name: 'Add to Favorites',
    onPress: async () => {
      await favoriteAFoodItem(userId, foodItem.id);
    }
  }

  const [navPopupTabs, setNavPopupTabs] = useState([
    addNavTab,
    editNavTab,
    deleteNavTab,
    favoriteNavTab
  ]);

  //Updates the serving options when the screen is first opened or if the meal or item changes
  useEffect(() => {
    if (mealToFoodId !== undefined) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={async () => {
              await removeFoodFromMeal(mealToFoodId).then((newMeal) => {
                navigation.navigate('Add Meal', { meal: newMeal });
              });
            }}>
            <View>
              <Ionicons name="trash" size={24} color={COLORS.darkBlue} />
            </View>
          </TouchableOpacity>
        ),
      })
      // } else if (foodItem?.owner === userId) {
    } else if (true) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => setNavMenuVisible(!navMenuVisible)}>
            <View>
              <Ionicons name="menu-outline" size={24} color={COLORS.darkBlue} />
            </View>
          </TouchableOpacity>
        ),
      })
    }
    getServingOptions(foodItem, setServingOptions, setDropDownItems);
    setDropDownValue(0);
    return;
  }, [foodItem, meal])

  //Updates the serving amount when the dropdown value is changed
  useEffect(() => {
    setServingAmount(String(servingOptions[dropDownValue]?.servingSize ?? 100));
  }, [dropDownValue, servingOptions])

  //Updates the macros when the serving amount is changed
  useEffect(() => {
    if (servingOptions[dropDownValue] === undefined) { return; }
    calcMacros(servingOptions[dropDownValue], servingAmount);
  }, [dropDownValue, servingOptions, servingAmount])

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <NavMenuPopupComponent
          isVisible={navMenuVisible}
          setIsVisible={setNavMenuVisible}
          data={navPopupTabs}
        />
        <Text style={styles.title}>{foodItem?.name} was selected</Text>
        <Text style={styles.text}>
          I bet that {foodItem.name} is gonna taste delicious</Text>

        <Image style={styles.image}
          source={require('../../images/apple.png')} />

        <View style={styles.macroContainer}>
          <Text style={styles.text}>Protein: {macros[3]}g</Text>
          <Text style={styles.text}>Carbs: {macros[1]}g</Text>
          <Text style={styles.text}>Fat: {macros[2]}g</Text>
        </View>

        <View style={styles.servingInputContainer}>
          <Text style={styles.text}>Serving: </Text>
          <TextInput
            style={styles.textInput}
            placeholder={String(servingOptions[dropDownValue]?.servingSize ?? 100)}
            keyboardType='numeric'
            onChangeText={(input) => setServingAmount(input)}
            value={servingAmount}
          />
          <DropDownPicker
            containerStyle={{ height: 40, width: 100 }}
            defaultValue={'gram'}
            open={open}
            value={dropDownValue}
            items={dropDownItems}
            setOpen={setOpen}
            setValue={setDropDownValue}
            setItems={setDropDownItems}
          />
          <Text style={styles.caloriesText}>Calories: {macros[0]}</Text>
        </View>

        <TouchableOpacity
          disabled={disableInput}
          onPress={async () => {
            setDisableInput(true);
            await addOrUpdateFoodToMeal(meal, foodItem, servingOptions[dropDownValue]?.id, parseFloat(servingAmount), mealToFoodId).then((newMeal) => {
              setDisableInput(false);
              navigation.navigate('Add Meal', { meal: newMeal });
            });
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Food</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};


export default AddFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  macroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  servingInputContainer: {
    flexDirection: 'row',
    margin: 5,
    marginTop: 50,
  },
  textInput: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    borderWidth: 1,
    width: 50,
  },
  metricText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  caloriesText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    margin: 10,
    marginLeft: 40,
  },
  button: {
    backgroundColor: COLORS.primaryGreen,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});