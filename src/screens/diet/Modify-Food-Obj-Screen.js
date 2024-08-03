import { Text, SafeAreaView, StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import {useState, useEffect} from "react";

const DEBUG = true;

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
  const { navigation, route } = props
  const foodItem = route.params?.item
  const meal = route.params?.meal
  const parentCallBack = route.params?.callBack
  const previousPage = route.params?.previousPage
  const [editable, setEditable] = useState(true);
  const [isNew, setIsNew] = useState(true);
  const [foodID, setFoodID] = useState(null);
  const [name, setName] = useState('');
  const [servingSize, setServingSize] = useState(100);
  const [servingSizeUnit, setServingSizeUnit] = useState('g');
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);

  // const [editable, setEditable] = useState(true);
  // const [isNew, setIsNew] = useState(true);
  // const [foodID, setFoodID] = useState(route.params?.foodItem?.name ?? null);
  // const [name, setName] = useState(route.params?.foodItem?.name ?? '');
  // const [servingSize, setServingSize] = useState(route.params?.foodItem?.name ?? 100);
  // const [servingSizeUnit, setServingSizeUnit] = useState(route.params?.foodItem?.name ?? 'g');
  // const [calories, setCalories] = useState(route.params?.foodItem?.name ?? 0);
  // const [carbs, setCarbs] = useState(route.params?.foodItem?.name ?? 0);
  // const [fat, setFat] = useState(route.params?.foodItem?.name ?? 0);
  // const [protein, setProtein] = useState(route.params?.foodItem?.name ?? 0);

  function setFloat(value, func){
    if (!isNaN(value)) {
      func(parseFloat(value));
    }
  }

  useEffect(() => {
    DEBUG && console.log(`FoodItemForm`);
    DEBUG && console.log(foodItem);
    DEBUG && console.log(meal);
    if (foodItem) {
      if(foodItem?.id) {
        setFoodID(foodItem?.id)
        setEditable(false)
        setIsNew(false)
      }
      setName(foodItem?.name)
      setServingSize(foodItem?.servingSize)
      setServingSizeUnit(foodItem?.servingSizeUnit)
      setCalories(foodItem?.calories)
      setCarbs(foodItem?.carbs)
      setFat(foodItem?.fat)
      setProtein(foodItem?.protein)
    } else {
      DEBUG && console.log(`No Item Passed`);
    }
  }, [])

  // const createFoodItem = () => {
  //   const foodItem = {
  //     name: name,
  //     servingSize: servingSize,
  //     servingSizeUnit: servingSizeUnit,
  //     calories: calories,
  //     carbs: carbs,
  //     fat: fat,
  //     protein: protein
  //   }
  //   return foodItem
  // }

  const toggleEditable = () => {
    setEditable(!editable)
  }

  const handleSubmit = () => {
    console.log('handleSubmit Hit')
    //TODO: Add new item or update existing item.
    //if isNew then create new food item


    // else update existing item


    // navigate back to previous page
    // parentCallBack()

    /*
    check if item already exists, if not create a new item
    check if user is the food items owner, if so edit the item, else make a copy of the item and edit the copy
    check if 

    if item is part of the users current meal update the meal with the new item

    check if user is item owner
    */
  }
  
  return (
  // <View>
  //   <View>
      <View style={foodItemFormStyle.container}>
        <View style={foodItemFormStyle.row}>
          <Button style={foodItemFormStyle.button}
            title='Edit'
            onPress={() => toggleEditable()}
          />
          <Button style={foodItemFormStyle.button}
            title='Remove'
            onPress={() => toggleEditable()}
          />
        </View>
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
            onChangeText={newSS=> setFloat(newSS, setServingSize)}
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
            onChangeText={newProtein=> setFloat(newProtein, setProtein)}
            value={protein.toString()}
            editable={editable}
          />
        </View>
          <Button style={foodItemFormStyle.button}
            title='Submit'
            onPress={() => handleSubmit()}
          />
      </View>
  //   </View>
  // </View>
  );
}
export default FoodItemForm;

// export default function App() {
//   return (
//     <View>
//       {FoodItemForm(foodItemTest)}
//     </View>
//   );
// }


const foodItemFormStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  row: {
    flex: 1,
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
    backgroundColor: '#c5fcfc', 
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
})