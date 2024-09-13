import { Text, SafeAreaView, StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import React, { useState, useEffect } from "react";
import { FoodItem } from '../../models';
import { modifyFoodObject } from '../../logic/diet-api';
import { AccountContext } from '../../../App';

const DEBUG = false;

// const foodItemTest = {
//   id: 123213,
//   name: 'Pasta',
//   servingSize: 1,
//   servingSizeUnit: 'cup',
//   calories: 245,
//   carbs: 15,
//   fat: 5,
//   protein: 10
// }

const FoodItemForm = (props) => {

  const userId = React.useContext(AccountContext);

  const { navigation, route } = props
  const foodItem = route.params?.foodItem
  const meal = route.params?.meal
  const nextPage = route.params?.nextPage
  const [editable, setEditable] = useState(true);
  const [foodId, setFoodId] = useState(null);
  const [servingId, setServingId] = useState(null);
  const [name, setName] = useState('');
  const [servingSize, setServingSize] = useState(100);
  const [servingSizeUnit, setServingSizeUnit] = useState('g');
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);

  function setFloat(value, func) {
    if (isNaN(value)) {
      func(0);
    } else {
      func(parseFloat(value));
    }
  }

  useEffect(() => {
    DEBUG && console.log(`FoodItemForm`);
    DEBUG && console.log(foodItem);
    DEBUG && console.log(meal);
    if (foodItem) {
      if (foodItem?.id) {
        setFoodId(foodItem?.id)
        // setEditable(false)
        if (foodItem?.servingId !== undefined) {
          setServingId(foodItem?.servingId)
        }
      }
      setName(foodItem?.name ?? '')
      setServingSize(foodItem?.servingSize ?? 100)
      setServingSizeUnit(foodItem?.servingSizeUnit ?? 'g')
      setCalories(foodItem?.calories ?? 0)
      setCarbs(foodItem?.carbs ?? 0)
      setFat(foodItem?.fat ?? 0)
      setProtein(foodItem?.protein ?? 0)
    } else {
      DEBUG && console.log(`No Item Passed`);
    }
  }, [])

  // The user can only edit the serving size unit when editable is false
  const toggleEditable = () => {
    setEditable(!editable)
  }

  const handleSubmit = async () => {
    console.log('handleSubmit Hit')
    //Validate inputs
    // Must start with a letter and only contain letters and spaces
    let letterRegex = /^[a-zA-Z][a-zA-Z\s,]*$/;
    if (name === null || !letterRegex.test(name)) {
      console.log(`Invalid Name`);
      return;
    }
    if (servingSizeUnit === null || !letterRegex.test(servingSizeUnit)) {
      console.log(`Invalid Serving Size Unit`);
      return;
    }
    if (isNaN(servingSize) || servingSize < 0) { setServingSize(1) }
    if (isNaN(calories) || calories < 0) { setCalories(0) }
    if (isNaN(carbs) || carbs < 0) { setCarbs(0) }
    if (isNaN(fat) || fat < 0) { setFat(0) }
    if (isNaN(protein) || protein < 0) { setProtein(0) }

    await modifyFoodObject(name, servingSize, servingSizeUnit, calories, carbs, fat, protein, foodId, servingId, userId).then((newFoodItem) => {
      navigation.navigate(nextPage, { meal: meal, foodItem: newFoodItem });
    })
  }

  return (
    <View style={foodItemFormStyle.container}>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Name </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newName => setName(newName)}
          value={name}
          editable={editable}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Serving Size </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newSS => setFloat(newSS, setServingSize)}
          value={servingSize.toString()}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Serving Size Unit </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newSSU => setServingSizeUnit(newSSU)}
          value={servingSizeUnit}
          editable={editable}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Calories </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newCal => setFloat(newCal, setCalories)}
          value={calories.toString()}
          editable={editable}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Carbohydrate </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newCarbs => setFloat(newCarbs, setCarbs)}
          value={carbs.toString()}
          editable={editable}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Fat </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newFat => setFloat(newFat, setFat)}
          value={fat.toString()}
          editable={editable}
        />
      </View>
      <View style={foodItemFormStyle.row}>
        <Text style={foodItemFormStyle.text}> Protein </Text>
        <TextInput
          style={foodItemFormStyle.textInput}
          onChangeText={newProtein => setFloat(newProtein, setProtein)}
          value={protein.toString()}
          editable={editable}
        />
      </View>
      <Button style={foodItemFormStyle.button}
        title='Create Item'
        onPress={() => handleSubmit()}
      />
    </View>
  );
}
export default FoodItemForm;

const foodItemFormStyle = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "column",
    padding: 10,
    gap: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-inbetween",
    alignItems: "center",
    padding: 3,
  },
  text: {
    flex: 1
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white', 
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  }
})