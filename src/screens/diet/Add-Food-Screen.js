import React, { useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, Image, View, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../../theme/theme';
import { addOrUpdateFoodToMeal, getServingOptions, removeFoodFromMeal, deleteFoodItem } from '../../logic/diet-api'
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AccountContext } from '../../../App';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

let DEBUG = false;

const AddFoodScreen = (props) => {
  const { navigation, route } = props;
  const { foodItem, meal } = route.params;
  const mealToFoodId = route.params?.mealToFoodId;
  const userId = React.useContext(AccountContext);

  DEBUG && console.log('Add Food route.params', route.params);

  const [menuPopUpVisible, setMenuPopupVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(0);
  const [servingOptions, setServingOptions] = useState([]);
  const [servingAmount, setServingAmount] = useState('100');
  const [dropDownItems, setDropDownItems] = useState([
    { label: 'Grams', value: 0 }
  ]);

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

  const onDelete = async () => {
    setMenuPopupVisible(false);
    await deleteFoodItem(foodItem.id).then(() => {
      navigation.navigate('Search Food', { meal: meal });
    });
  }
  const onEdit = async () => {
    setMenuPopupVisible(false);
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
    navigation.navigate('Edit Food Item', { meal:meal, nextPage:'Add Food', foodItem:newFoodItem })
  }
  const onAdd = async () => {
    setMenuPopupVisible(false);
    navigation.navigate('Add Serving Option', { meal:meal, nextPage:'Add Food', foodItem:foodItem })
  }

  //Updates the serving options when the screen is first opened or if the meal or item changes
  useEffect(() => {
    if(mealToFoodId !== undefined) {
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
          <TouchableOpacity onPress={() => setMenuPopupVisible(!menuPopUpVisible)}>
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
    if (servingOptions[dropDownValue] === undefined) {return;}
    calcMacros(servingOptions[dropDownValue], servingAmount);
  }, [dropDownValue, servingOptions, servingAmount])

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <MenuPopup isVisable={menuPopUpVisible} setIsVisable={setMenuPopupVisible} navigation={navigation} onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} />
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

const MenuPopup = ({isVisable, setIsVisable, onAdd, onEdit, onDelete}) => {

  const closePopup = () => {isVisable && setIsVisable(false) }
  
  return (
    <Modal
      visible={isVisable}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setIsVisable(!isVisable)}
    >
      <TouchableWithoutFeedback onPress={closePopup}> 
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.menuPopupOverlay}>
            <View style={styles.menuPopup}>
              <View>
                <TouchableOpacity
                    onPress={onAdd}
                    style={styles.menuRow}>
                    <Text style={styles.rowLabel}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onEdit}
                    style={styles.menuRow}>
                    <Text style={styles.rowLabel}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onDelete}
                    style={styles.menuRow}>
                    <Text style={styles.rowLabel}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

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
  menuPopupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 60,
    marginRight: 0,
    marginLeft: 'auto'
  },
  menuPopup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '90%',
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
});