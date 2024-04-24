import React, { useState, createContext, useContext, useEffect } from 'react';
import { ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { dietHomeStyles } from '../../styles/dietStyles/dietHomeStyles';
import PieChart from 'react-native-pie-chart';
import { getUsersNutritionLog, getMeal, NUTLOG, getMealMacros } from '../../logic/diet-api'
import { NutritionLog, Meal} from '../../models';
import { currentUserDetails } from '../../logic/account';
import { DataStore } from 'aws-amplify/datastore';

let userId

async function getUsersLog(setMealData, setCalorieData) {
  currentUserDetails().then(async (user) => {
    userId = user
    console.log(`userid diet:${userId}`)
    date = new Date(Date.now()).toISOString().substring(0,10);
    await NUTLOG(userId, date).then(async ({nutLog, meals, userId, date}) => {
      console.log(`Got nutLog: ${nutLog.id} ${meals} ${userId} ${date}`);
      await getMealMacros(meals).then((macro) => {
        console.log(`Got meals: ${macro[0].calories} ${macro[0].carbs} ${macro[0].fat} ${macro[0].protein}`);
        setMealData(macro);
        setCalorieData({
          proteinCurrent: macro.reduce((acc, meal) => acc + meal.protein, 0),
          proteinGoal: 150,
          carbsCurrent: macro.reduce((acc, meal) => acc + meal.carbs, 0),
          carbsGoal: 250,
          fatCurrent: macro.reduce((acc, meal) => acc + meal.fat, 0),
          fatGoal: 75,
          caloriesCurrent: macro.reduce((acc, meal) => acc + meal.calories, 0),
          caloriesGoal: 3000,
        });
      });
    });
  });
}

const DietScreen = ({ navigation }) => {
  const [mealData, setMealData] = useState();
  const [calorieData, setCalorieData] = useState({
    proteinCurrent: 0,
    proteinGoal: 150,
    carbsCurrent: 0,
    carbsGoal: 250,
    fatCurrent: 0,
    fatGoal: 75,
    caloriesCurrent: 0,
    caloriesGoal: 3000,
  });
  let changed = false;
  
  useEffect(() => {
    let logUpdatedAt = null;
    const sub = DataStore.observeQuery(NutritionLog, (u) => u.id.eq(currentUserDetails()))
    .subscribe(({ items }) => {
      if(items != undefined && items.length > 0){
        if(logUpdatedAt != items[0].updatedAt){
          console.log(`Nutrition Log updated`);
          logUpdatedAt = items[0].updatedAt;
          getUsersLog(setMealData, setCalorieData);
        }
      }
    });

    
    getUsersLog(setMealData, setCalorieData);
    
  
  return () => {sub.unsubscribe();}
  }, []);
  
  let mealButtons = <></>
  
  if (mealData != undefined) {
    mealButtons = (
      <>
        { mealData?.map((meal, index) => (
          <TouchableOpacity style={{ padding: 5 }}
            key={index} margin={5}
            onPress={() => navigation.navigate('Add Meal', { meal })}>
            <Text style={dietHomeStyles.mealNameText}>{meal.name}</Text>
            <Text style={dietHomeStyles.mealText}>
              {meal.calories}
            </Text>
          </TouchableOpacity>
        ))}  
      </>
    );
  }

  // const [nutritionLog, setNutritionLog] = useState();
  // useEffect(() => {
  //   currentUserDetails().then(async (user) => {
  //     userId = user
  //     date = new Date(Date.now()).toISOString().substring(0,10);
  //     const sub = DataStore.observeQuery(
  //       NutritionLog, 
  //       c => c.and( c => [
  //         c.userId.eq(userId), 
  //         c.date.eq(date)
  //       ]), ).subscribe(snapshot => {
  //         const {items, isSynced} = snapshot;
  //         console.log(items);
  //         console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
  //       // setNutritionLog(items[0]);
  //     });
  //   });
    
  // }, []);


  let pieSeries = [calorieData.caloriesGoal - calorieData.caloriesCurrent,
    calorieData.caloriesCurrent]

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={dietHomeStyles.title}>March 30, 2024</Text>

        <View>
          <Text style={dietHomeStyles.calorieHeader}>Calories</Text>
          <Text style={dietHomeStyles.calorieText}>
            {calorieData.caloriesCurrent}/{calorieData.caloriesGoal}
          </Text>
        </View>

        <PieChart
          style={dietHomeStyles.pieChart}
          widthAndHeight={200}
          series={pieSeries}
          sliceColor={['#808080', '#7CFC00']}
          coverFill={'#FFF'}
          doughnut={true}
        />

        <View style={dietHomeStyles.macroContainer}>
          <Text style={dietHomeStyles.macroText}>
            Protein: {calorieData.proteinCurrent}g/{calorieData.proteinGoal}g</Text>
          <Text style={dietHomeStyles.macroText}>
            Carbs: {calorieData.carbsCurrent}g/{calorieData.carbsGoal}g</Text>
          <Text style={dietHomeStyles.macroText}>
            Fat: {calorieData.fatCurrent}g/{calorieData.fatGoal}g</Text>
        </View>

        <View style={dietHomeStyles.mealsContainer}>
          <ScrollView contentContainerStyle={{ padding: 10 }} horizontal={true}>
            {mealButtons}
          </ScrollView>
          
          <TouchableOpacity style={dietHomeStyles.addMealButton} disabled={true}
            onPress={() => navigation.navigate('Add Meal', {})}>
            <Text style={dietHomeStyles.addMealButtonText}>Add Meal</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    </>
  );
};



export default DietScreen;