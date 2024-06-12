import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { getUsersLog } from '../../logic/diet-api'
import { useFocusEffect } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { AccountContext } from '../../../App';
import { COLORS } from '../../theme/theme';

let userId;

// gets date in format 'Weekday, Month DD'
function getFormattedDate() {
  let tempDate = new Date();
  const weekDay = tempDate.toLocaleString('default', { weekday: 'long' });
  const month = tempDate.toLocaleString('default', { month: 'long' });
  const day = tempDate.getDate();
  const formattedDate = `${weekDay}, ${month} ${day}`;
  return formattedDate;
}

const DietScreen = ({ navigation }) => {
  // meal data is the day's meals (id and name)
  const [mealData, setMealData] = useState();

  // calorie data is the data from the day's meals
  const [calorieData, setCalorieData] = useState({
    proteinCurrent: 0,
    proteinGoal: 150,
    carbsCurrent: 0,
    carbsGoal: 250,
    fatCurrent: 0,
    fatGoal: 75,
    caloriesCurrent: 0,
    caloriesGoal: 2000,
  });
  const [logChanged, setLogChanged] = useState(true);

  userId = React.useContext(AccountContext);

  useEffect(() => {
    //if (!logChanged) return;
    console.log('DIET SCREEN useEffect');
    setLogChanged(false);
    //getUsersLog(userId, new Date().toISOString().substring(0, 10), setCalorieData, setMealData);
  }, [logChanged]);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      //getUsersLog(userId, new Date().toISOString().substring(0, 10), setCalorieData, setMealData);
      return;
    }, [])
  );

  let mealButtons = <></>

  if (mealData) {
    mealButtons = (
      <>
        {mealData?.map((meal, index) => (
          <TouchableOpacity style={{ padding: 5 }}
            key={index} margin={5}
            onPress={() => navigation.navigate('Add Meal', { meal })}>
            <Text style={styles.mealNameText}>{meal.name}</Text>
            <Text style={styles.mealText}>
              {meal.calories}
            </Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  let pieSeries = [calorieData.caloriesGoal - calorieData.caloriesCurrent,
  calorieData.caloriesCurrent]

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView style={styles.container}>
        <Text style={[styles.mealText, { color: 'black' }]}>{getFormattedDate()}</Text>

        <ScrollView>
          <Text style={styles.tabHeaderText}>Calories</Text>
          <View style={styles.calorieContainer}>
            <Text style={styles.calorieText}>
              {calorieData.caloriesCurrent}/{calorieData.caloriesGoal}
            </Text>

            <PieChart
              style={styles.pieChart}
              widthAndHeight={150}
              series={pieSeries}
              sliceColor={['#86A184', '#7CFC00']}
              coverFill={'#FFF'}
              doughnut={true}
            />

          </View>

          <Text style={styles.tabHeaderText}>Macros</Text>
          <View style={styles.macroContainer}>
            <View style={styles.macroRectangleContainer}>
              <Text style={styles.macroText}>
                Protein: {calorieData.proteinCurrent}g/{calorieData.proteinGoal}g</Text>
              <Bar progress={calorieData.proteinCurrent / calorieData.proteinGoal}
                width={125}
                color={calorieData.proteinCurrent / calorieData.proteinGoal > 1 ? 'red' : 'blue'} />
            </View>
            <View style={styles.macroRectangleContainer}>
              <Text style={styles.macroText}>
                Carbs: {calorieData.carbsCurrent}g/{calorieData.carbsGoal}g</Text>
              <Bar progress={calorieData.carbsCurrent / calorieData.carbsGoal}
                width={125}
                color={calorieData.carbsCurrent / calorieData.carbGoal > 1 ? 'red' : 'blue'} />
            </View>
            <View style={styles.macroRectangleContainer}>
              <Text style={styles.macroText}>
                Fat: {calorieData.fatCurrent}g/{calorieData.fatGoal}g</Text>
              <Bar progress={calorieData.fatCurrent / calorieData.fatGoal}
                width={125}
                color={calorieData.fatCurrent / calorieData.fatGoal > 1 ? 'red' : 'blue'} />
            </View>
          </View>

          <Text style={styles.tabHeaderText}>Meals</Text>
          <View style={styles.mealsContainer}>
            <ScrollView contentContainerStyle={{ padding: 10 }} horizontal={true}>
              {mealButtons}
            </ScrollView>

            <TouchableOpacity style={styles.addMealButton} disabled={false}
              onPress={() => {
                //navigation.navigate('Add Meal', {});
                setLogChanged(true);
              }}>
              <Text style={styles.addMealButtonText}>Add Meal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  );
};

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  tabHeaderText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  calorieContainer: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  calorieHeader: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  calorieText: {
    margin: 5,
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
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
    backgroundColor: 'white',
    borderRadius: 8,
  },
  macroText: {
    textAlign: 'left',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  mealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
  },
  mealNameText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    color: 'black',
  },
  mealText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  addMealButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
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
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'black',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
  macroRectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});