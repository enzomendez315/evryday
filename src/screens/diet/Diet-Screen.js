import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity, 
  View, Modal, TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { syncDailyLogData, createMeal, calcMealMacros, updateWaterIntake } from '../../logic/diet-api'
import { useFocusEffect } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { AccountContext } from '../../../App';
import { COLORS } from '../../theme/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PopupComponent from '../../components/PopupMenu';
import { getFormattedDate, setActiveDate, getActiveDate } from '../../logic/date-time';
// for selecting dates at the top of the screen
import { PickDatePopup } from '../../components/datePicker';

let userId;

// this is the format logData should be in
const exampleLogData = [
  {
    name: 'Breakfast',
    id: 1,
    calories: 500,
    protein: 20,
    carbs: 50,
    fat: 10,
  },
];

const exampleCalorieData = {
  proteinCurrent: 0,
  proteinGoal: 150,
  carbsCurrent: 0,
  carbsGoal: 250,
  fatCurrent: 0,
  fatGoal: 75,
  caloriesCurrent: 0,
  caloriesGoal: 2000,
};

const WaterInputPopup = ({ onPress, closePopup }) => {
  const [amount, setAmount] = useState('');
  return (
    <View style={styles.popupContentContainer}>
    <Text style={styles.popupTitle}>Water Intake</Text>
    <View style={{ backgroundColor: COLORS.peach }}>
      <TextInput
        keyboardType='numeric'
        placeholder="Enter Amount of Water in Oz"
        placeholderTextColor={'white'}
        style={styles.textInput}
        onChangeText={(newAmount) => setAmount(newAmount)}
        value={amount}
      />
    </ View>
    <Button
      title="Add Water"
      color={COLORS.primaryOrange}
      onPress={async () => {
        closePopup();
        onPress(amount);
      }}
    />
  </View>
  )
};

const DietScreen = ({ navigation }) => {
  // log data contains information about meals
  // it is created in syncDailyLogData
  const [logData, setLogData] = useState(null);
  // const [userGoals, setUserGoals] = useState(null);
  const [waterIntakeAmount, setWaterIntakeAmount] = useState(0);
  const [mealPeriodPopupVisible, setMealPeriodPopupVisible] = useState(false);
  const [addWaterPopupVisible, setAddWaterPopupVisible] = useState(false);
  // calorie data is the data from the day's meals
  const [calorieData, setCalorieData] = useState(null);
  const [dateHook, setDateHook] = useState(getActiveDate());
  // for selecting dates at the top of the screen
  const [isPickDatePopupVisible, setIsPickDatePopupVisible] = useState(false);
  const [calendarDate, setCalendarDate] = useState(getActiveDate());

  userId = React.useContext(AccountContext);

  // Called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      // This if statement took me like an hour to figure out
      // if it's not here, the callback will be called twice
      // this is bad because syncDailyLogData is an async function
      // and will sometimes cause the previous date to be loaded
      if (dateHook !== getActiveDate()) {
        setDateHook(getActiveDate());
        return;
      }
      setDateHook(getActiveDate());
      syncDailyLogData(userId, dateHook, setCalorieData, setLogData, setWaterIntakeAmount);
    }, [dateHook])
  );


  let mealButtons = <></>

  if (logData !== undefined) {
    mealButtons = (
      <>
        {logData?.map((meal, index) => (
          <TouchableOpacity style={{ padding: 5 }}
            key={index} margin={5}
            onPress={() => navigation.navigate('Add Meal', { meal: meal })}>
            <Text style={styles.mealNameText}>{meal.name}</Text>
            <Text style={styles.mealText}>
              {meal.calories}
            </Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  let pieSeries;
  if (calorieData !== null) {
    let first = (calorieData.caloriesGoal - calorieData.caloriesCurrent) > 0 ? (calorieData.caloriesGoal - calorieData.caloriesCurrent) : 0;
    pieSeries = [first,
      calorieData.caloriesCurrent];
  }

  const addWater = async (amount) => {
    let numberRegex = /^\d*$/;
    if (amount === null || !numberRegex.test(amount)) {
      console.log('Bad Input')
      return;
    }
    console.log('Good Input: ', amount)

    await updateWaterIntake(userId, new Date().toISOString().substring(0, 10), parseInt(amount), setWaterIntakeAmount).then(() => {
      setAddWaterPopupVisible(false);
    })
  }

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.dustyOrange} />
      <SafeAreaView style={styles.container}>
        <MealPeriodPopup
          mealPeriodPopupVisible={mealPeriodPopupVisible}
          setMealPeriodPopupVisible={setMealPeriodPopupVisible}
          navigation={navigation}
          date={dateHook} />
        <PopupComponent
          isVisible={addWaterPopupVisible}
          setIsVisible={setAddWaterPopupVisible}
          Content={WaterInputPopup}
          onPress={addWater}
        />
        <PickDatePopup isPickDatePopupVisible={isPickDatePopupVisible} calendarDate={calendarDate} setCalendarDate={setCalendarDate}
          setDateHook={setDateHook} setIsPickDatePopupVisible={setIsPickDatePopupVisible} />
        <View style={styles.dateHeaderContainer}>
          <Button title="<"
            color={COLORS.dustyOrange}
            onPress={() => {
              setActiveDate(-1);
              setDateHook(getActiveDate())
            }} />

          <TouchableOpacity style={styles.dateTitleContainer} onPress={() => setIsPickDatePopupVisible(true)}>
            <Text style={styles.dateTitle}>{getFormattedDate(dateHook)}</Text>
            <FeatherIcon name="calendar" size={24} color="white" />
          </TouchableOpacity>

          <Button title=">"
            color={COLORS.dustyOrange}
            onPress={() => {
              setActiveDate(1);
              setDateHook(getActiveDate())
            }} />
        </View>
        <ScrollView>
          <Text style={styles.title}>Diet</Text>
          <Text style={styles.tabHeaderText}>Calories</Text>
          <View style={styles.calorieContainer}>

            {calorieData === null ? <Text style={styles.calorieHeader}>Loading...</Text> :
              <>
                <Text style={styles.calorieText}>
                  {calorieData.caloriesCurrent}/{calorieData.caloriesGoal}
                </Text>

                <PieChart
                  style={styles.pieChart}
                  widthAndHeight={150}
                  series={pieSeries}
                  sliceColor={[COLORS.lightGray, COLORS.lightGreen]}
                  coverFill={COLORS.whiteHex}
                  doughnut={true}
                />
              </>
            }
          </View>

          <Text style={styles.tabHeaderText}>Macros</Text>
          <View style={styles.macroContainer}>

            {calorieData === null ? <Text style={styles.calorieHeader}>Loading...</Text> :
              <>
                <View style={styles.macroRectangleContainer}>
                  <Text style={styles.macroText}>
                    Protein: {calorieData.proteinCurrent}g/{calorieData.proteinGoal}g</Text>
                  <Bar progress={calorieData.proteinCurrent / calorieData.proteinGoal}
                    width={125}
                    color={calorieData.proteinCurrent / calorieData.proteinGoal > 1 ? 'white' : 'white'} />
                </View>
                <View style={styles.macroRectangleContainer}>
                  <Text style={styles.macroText}>
                    Carbs: {calorieData.carbsCurrent}g/{calorieData.carbsGoal}g</Text>
                  <Bar progress={calorieData.carbsCurrent / calorieData.carbsGoal}
                    width={125}
                    color={calorieData.carbsCurrent / calorieData.carbGoal > 1 ? 'white' : 'white'} />
                </View>
                <View style={styles.macroRectangleContainer}>
                  <Text style={styles.macroText}>
                    Fat: {calorieData.fatCurrent}g/{calorieData.fatGoal}g</Text>
                  <Bar progress={calorieData.fatCurrent / calorieData.fatGoal}
                    width={125}
                    color={calorieData.fatCurrent / calorieData.fatGoal > 1 ? 'white' : 'white'} />
                </View>
              </>
            }

          </View>

          <Text style={styles.tabHeaderText}>Meals</Text>
          <View style={styles.mealsContainer}>

            {/* if log data is null it's loading, if not it checks if there are meals*/}
            {logData ?
              <>
                {logData.length === 0 ? <Text style={{ color: 'white' }}>No Meals For You</Text> :
                  <>
                    <ScrollView contentContainerStyle={{ padding: 10 }} horizontal={true}>
                      {mealButtons}
                    </ScrollView>
                  </>
                }
              </> : <Text>Loading...</Text>
            }

            <TouchableOpacity style={styles.addMealButton}
              onPress={async () => {
                setMealPeriodPopupVisible(true);
              }}>
              <Text style={styles.addMealButtonText}>Add Meal</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tabHeaderText}>Water Intake</Text>
          <View style={styles.mealsContainer}>

            {logData ?
              <>
                <ScrollView contentContainerStyle={styles.waterIntakeContainer} horizontal={true}>
                  <Text style={styles.macroText}>{waterIntakeAmount} Oz</Text>
                </ScrollView>
              </> : <Text style={{ color: 'white' }}>Loading...</Text>
            }

            <TouchableOpacity style={styles.addMealButton}
              onPress={async () => {
                setAddWaterPopupVisible(true);
              }}>
              <Text style={styles.addMealButtonText}>Add Water</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView >
    </>
  );
};

const MealPeriodPopup = ({ mealPeriodPopupVisible, setMealPeriodPopupVisible, navigation, date }) => {

  const addMealNavigation = async (mealPeriod) => {
    setMealPeriodPopupVisible(false)
    let newMeal = await createMeal(userId, date, mealPeriod);
    let tempVar = await calcMealMacros(newMeal);
    navigation.navigate('Add Meal', { meal: tempVar });
  }

  return (
    <Modal
      visible={mealPeriodPopupVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setMealPeriodPopupVisible(!mealPeriodPopupVisible)}
    >
      <TouchableWithoutFeedback onPress={() => setMealPeriodPopupVisible(false)}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupHeader}>
                <Text style={styles.popupTitle}>Add a Meal</Text>
              </View>

              <View style={styles.popupContent}>
                <TouchableOpacity
                  onPress={() => { addMealNavigation('Breakfast'); }}
                  style={styles.row}>

                  <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryOrange }]} />
                  <Text style={styles.rowLabel}>Breakfast</Text>
                  <View style={styles.rowSpacer} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { addMealNavigation('Lunch'); }}
                  style={styles.row}>

                  <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryOrange }]} />
                  <Text style={styles.rowLabel}>Lunch</Text>
                  <View style={styles.rowSpacer} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { addMealNavigation('Dinner'); }}
                  style={styles.row}>

                  <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryOrange }]} />
                  <Text style={styles.rowLabel}>Dinner</Text>
                  <View style={styles.rowSpacer} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { addMealNavigation('Snack'); }}
                  style={styles.row}>

                  <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryOrange }]} />
                  <Text style={styles.rowLabel}>Snack</Text>
                  <View style={styles.rowSpacer} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.peach,
  },
  dateHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.peach,
  },
  dateTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'left',
    paddingLeft: 10,
  },
  tabHeaderText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  },
  calorieContainer: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: COLORS.dustyOrange,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  calorieHeader: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  calorieText: {
    margin: 5,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  pieChart: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  macroContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 10,
    backgroundColor: COLORS.dustyOrange,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  macroText: {
    textAlign: 'left',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  mealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.dustyOrange,
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  mealNameText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    color: 'white',
  },
  mealText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    color: 'white',
  },
  addMealButton: {
    backgroundColor: COLORS.primaryOrange, //COLORS.primaryGreen,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
  },
  addMealButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // verticalLine: {
  //   height: '100%',
  //   width: 1,
  //   backgroundColor: 'black',
  // },
  // progressBar: {
  //   height: 20,
  //   width: '100%',
  //   backgroundColor: 'white',
  //   borderColor: '#000',
  //   borderWidth: 2,
  //   borderRadius: 5,
  // },
  macroRectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  waterIntakeContainer: {
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  popupOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // image: {
  //   width: 300,
  //   height: 300,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   marginTop: 20,
  //   marginBottom: 20,
  // },
  popup: {
    backgroundColor: COLORS.peach,
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
    color: 'white'
  },
  editButton: {
    fontSize: 18,
    color: '#0000ff', // Replace with your theme color
  },
  popupContent: {
    marginVertical: 20,
  },
  // contentContainer: {
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   height: '100%',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  // },
  // content: {
  //   backgroundColor: '#fff',
  //   marginHorizontal: 20,
  //   marginVertical: 70,
  // },
  // confirmButton: {
  //   borderWidth: 0.5,
  //   padding: 15,
  //   margin: 10,
  //   borderRadius: 5,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  addSleepButton: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
  },
  addSleepButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: COLORS.dustyOrange,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  textInput: {
    borderColor: COLORS.dustyOrange,
    borderRadius: 1,
    borderWidth: 1,
    textAlign: 'center',
    color: 'white'
  },
  popupContentContainer: {
    flex: -1,
    width: '100%',
    maxHeight: '100%',
    gap: 5,
    backgroundColor: COLORS.dustyOrange,
  }
});