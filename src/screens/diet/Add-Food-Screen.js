import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../../theme/theme';
import { addFoodToMeal, getServingOptions } from '../../logic/diet-api'
import { useFocusEffect } from '@react-navigation/native';

let DEBUG = false;

const AddFoodScreen = (props) => {
  const { navigation, route } = props;
  const { item, meal } = route.params;

  DEBUG && console.log(`Add Food meal:`);
  DEBUG && console.log(meal);
  DEBUG && console.log(`Add Food item:`);
  DEBUG && console.log(item);

  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(0);
  const [servingOptions, setServingOptions] = useState([]);
  const [servingAmount, setServingAmount] = useState(100);
  const [dropDownItems, setDropDownItems] = useState([
    { label: 'Grams', value: 0 },
    { label: 'Count', value: 1 }
  ]);

  useEffect(() => {
    getServingOptions(item, setServingOptions, setDropDownItems, setServingAmount);
    setDropDownValue(0);
    return;
  }, [item, meal])

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <Text style={styles.title}>{item.name} was selected</Text>
        <Text style={styles.text}>
          I bet that {item.name} is gonna taste delicious</Text>

        <Image style={styles.image}
          source={require('../../images/apple.png')} />

        <View style={styles.macroContainer}>
          <Text style={styles.text}>Protein: {servingOptions[dropDownValue]?.protein}g</Text>
          <Text style={styles.text}>Carbs: {servingOptions[dropDownValue]?.carbs}g</Text>
          <Text style={styles.text}>Fat: {servingOptions[dropDownValue]?.fat}g</Text>
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
          <Text style={styles.caloriesText}>Calories: {servingOptions[dropDownValue]?.calories}</Text>
        </View>

        <TouchableOpacity
          onPress={async () => {
            //TODO: Add food to meal
            await addFoodToMeal(meal, item, servingOptions[dropDownValue]?.id, servingAmount).then((newMeal) => {
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
    backgroundColor: '#fff',
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});