import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { addFoodStyles } from '../../styles/dietStyles/addFoodStyles';
import { FoodItem } from '../../models';
import { addFoodToMeal } from '../../logic/diet-api'


const AddFoodScreen = (props) => {
  const { navigation, route } = props;
  const { item, meal} = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('gram');
  const [items, setItems] = useState([
    { label: 'Grams', value: 'gram' },
    { label: 'Count', value: 'count' }
  ]);

  console.log(item);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={addFoodStyles.title}>{item.name} was selected</Text>
        <Text style={addFoodStyles.text}>
          I bet that {item.name} is gonna taste delicious</Text>

        <Image style={addFoodStyles.image}
          source={require('../../images/apple.png')} />

        <View style={addFoodStyles.macroContainer}>
          <Text style={addFoodStyles.text}>Protein: {item.protein}g</Text>
          <Text style={addFoodStyles.text}>Carbs: {item.carbs}g</Text>
          <Text style={addFoodStyles.text}>Fat: {item.fat}g</Text>
        </View>

        <View style={addFoodStyles.servingInputContainer}>
          <Text style={addFoodStyles.text}>Serving: </Text>
          <TextInput style={addFoodStyles.textInput} placeholder='100' />
          <DropDownPicker
            containerStyle={{ height: 40, width: 100 }}
            defaultValue={'gram'}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <Text style={addFoodStyles.caloriesText}>Calories: {item.calories}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            //Uncomment to add food to a meal
            // addFood(meal.mealId, item.id).then((m) => { 
              navigation.navigate('Add Meal', {meal});
            // });
          }}
          style={addFoodStyles.button}>
          <Text style={addFoodStyles.buttonText}>Add Food</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

async function addFood(mealId, foodId) {
  p = new Promise((resolve, reject) => {
    try {
      addFoodToMeal(mealId, foodId).then((m) => {
        resolve(m);
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  })
}

export default AddFoodScreen;