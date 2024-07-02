import { Text, SafeAreaView, StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import {useState, useEffect} from "react";

  const foodItemTest = {
    id: 123213,
    name: 'Pasta',
    servingSize: 1,
    servingSizeUnit: 'cup',
    calories: 245,
    carbs: 15,
    fat: 5,
    protein: 10
  }

const FoodItemForm = (props) => {
  const { navigation, route } = props
  const foodItem = route?.params?.item
  // const foodItem = foodItemTest
  const parentCallBack = route?.params?.callBack
  const previousPage = route?.params?.previousPage
  const [edit, setEdit] = useState(true)
  const [isNew, setIsNew] = useState(true)
  const [foodID, setFoodID] = useState(null);
  const [name, setName] = useState('');
  const [servingSize, setServingSize] = useState(1);
  const [servingSizeUnit, setServingSizeUnit] = useState('cup');
  const [calories, setCalories] = useState(1);
  const [carbs, setCarbs] = useState(1);
  const [fat, setFat] = useState(1);
  const [protein, setProtein] = useState(1);

  useEffect(() => {
    if (foodItem) {
      if(foodItem?.id) {
        setFoodID(foodItem?.id)
        setEdit(false)
        setIsNew(false)
      }
      setName(foodItem?.name)
      setServingSize(foodItem?.servingSize)
      setServingSizeUnit(foodItem?.servingSizeUnit)
      setCalories(foodItem?.calories)
      setCarbs(foodItem?.carbs)
      setFat(foodItem?.fat)
      setProtein(foodItem?.protein)
    }
  }, [])

  const createFoodItem = () => {
    const foodItem = {
      name: name,
      servingSize: servingSize,
      servingSizeUnit: servingSizeUnit,
      calories: calories,
      carbs: carbs,
      fat: fat,
      protein: protein
    }
    return foodItem
  }

  const toggleEditable = () => {
    setEdit(!edit)
  }

  const handleSubmit = () => {
    console.log('handleSubmit Hit')
    //TODO: Add new item or update existing item.
    //if isNew then create new food item


    // else update excisting item


    // navigate back to previous page
    // parentCallBack()
  }
  
  return (
  <View>
    <View>
      <View style={foodItemFormStyle.container}>
        <View style={foodItemFormStyle.row}>
          <Button style={foodItemFormStyle.button}
            title='Return'
            onPress={() => console.log('return pressed')}
          />
          <Button style={foodItemFormStyle.button}
            title='Edit'
            onPress={() => toggleEditable()}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Name </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newName => setName(newName)}
            value={name}
            editable={edit}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Serving Size </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newSS=> setServingSize(newSS)}
            value={servingSize}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Serving Size Unit </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newSSU => setServingSizeUnit(newSSU)}
            value={servingSizeUnit}
            editable={edit}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Calories </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newCal => setCalories(newCal)}
            value={calories}
            editable={edit}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Carbohydrate </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newCarbs => setCarbs(newCarbs)}
            value={carbs}
            editable={edit}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Fat </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newFat => setFat(newFat)}
            value={fat}
            editable={edit}
          />
        </View>
        <View style={foodItemFormStyle.row}>
          <Text style={foodItemFormStyle.text}> Protein </Text>
          <TextInput 
            style={foodItemFormStyle.textInput}
            onChangeText={newProtein=> setProtein(newProtein)}
            value={protein}
            editable={edit}
          />
        </View>
          <Button style={foodItemFormStyle.button}
            title='Submit'
            onPress={() => Alert.alert('Button pressed')}
          />
      </View>
    </View>
  </View>
  );
}

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