import { generateClient } from 'aws-amplify/api';
import { DataStore } from 'aws-amplify/datastore';
import { NutritionLog, FoodItem, Meal } from '../models';
// import {getCurrentUser} from 'aws-amplify/auth';
// import {Amplify} from 'aws-amplify';
// import { currentUserDetails } from './account';

const client = generateClient();

export async function getFoodItems(searchTerm){
    if(!searchTerm || searchTerm == ""){
        const foodItems = await DataStore.query(FoodItem);
        return foodItems;
    }
    const foodItems = await DataStore.query(FoodItem, (c) => c.name.contains(searchTerm));
    return foodItems;
}

async function createFoodItem(foodItem){
    if (!foodItem){
        return;
    }
    try {
        await DataStore.save(foodItem);
        console.log('Successfully added: ', foodItem);
    } catch (err){
        console.log(err);
    }
}

export async function addNutritionLog(userId, date) {
    p = new Promise((resolve, reject) => { 
        console.log(`Date add UserId: ${userId} Date: ${date}`);
        try {
            let log = new NutritionLog({
                "userId": userId,
                "date": date,
            });
            DataStore.save(log).then(() => {return log});
        } catch (err){
            console.log(err);
        }
    });
    return p;
}

export async function getUsersNutritionLog(userId, date) {
    p = new Promise((resolve, reject) => {    
        try {
            console.log(`get nutritionlog UserId: ${userId} Date: ${date}`);
            DataStore.query(NutritionLog, (u) => u.and(c => [
                u.userId.eq(userId),
                u.date.eq(date)
            ])).then((oldLog) => {
                // console.log(oldLog.length)
                if(oldLog.length == 0){
                    addNutritionLog(userId, date).then((newLog) => {
                        console.log(`initialised nutrition log: ${newLog}`);
                        parseLog(newLog);
                        resolve(newLog);
                    });
                }
                parseLog(oldLog);
                resolve(oldLog);
            });
        } catch (err){
            console.log(err);
            reject(err);
        }
    });
    return p;
}

function parseLog(log) {
    console.log(`${log.Meals.length} meals in log`);
    log.Meals.forEach((meal) => {

        meal.FoodItems.forEach((food) => {
            name = 'New Meal',
            calories = meal.FoodsItems.reduce((acc, food) => acc + food.calories, 0),
            protein = meal.FoodsItems.reduce((acc, food) => acc + food.protein, 0),
            carbs = meal.FoodsItems.reduce((acc, food) => acc + food.carbs, 0),
            fat = meal.FoodsItems.reduce((acc, food) => acc + food.fat, 0)
            console.log(food);
            console.log(`Name: ${name} Calories: ${calories} Protein: ${protein} Carbs: ${carbs} Fat: ${fat}`);
        });
    });
}

function calcMealMacros(meal){
    let mealData = {
        name: 'New Meal',
        calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
        protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
        carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
        fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
    };
    return mealData;

}

const foodsList = [
    { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
    { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
    { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
    { name: 'Salmon', calories: 250, protein: 20, carbs: 0, fat: 15, serving: '150g' },
    { name: 'Banana', calories: 100, protein: 1, carbs: 25, fat: 0, serving: '1 medium' },
    { name: 'Eggs', calories: 70, protein: 6, carbs: 0, fat: 5, serving: '1 large' },
    { name: 'Spinach', calories: 10, protein: 1, carbs: 2, fat: 0, serving: '100g' },
    { name: 'Milk', calories: 150, protein: 8, carbs: 12, fat: 8, serving: '1 cup' },
    { name: 'Pasta', calories: 250, protein: 10, carbs: 50, fat: 5, serving: '200g' },
    { name: 'Apple', calories: 50, protein: 0, carbs: 15, fat: 0, serving: '1 medium' },
    { name: 'Bread', calories: 100, protein: 5, carbs: 15, fat: 2, serving: '2 slices' },
    { name: 'Yogurt', calories: 150, protein: 10, carbs: 15, fat: 5, serving: '1 cup' },
    { name: 'Orange', calories: 50, protein: 1, carbs: 12, fat: 0, serving: '1 medium' },
    { name: 'Beef', calories: 200, protein: 20, carbs: 0, fat: 15, serving: '100g' },
    { name: 'Cheese', calories: 100, protein: 5, carbs: 0, fat: 10, serving: '1 slice' },
    { name: 'Carrots', calories: 25, protein: 1, carbs: 5, fat: 0, serving: '100g' },
    { name: 'Peanuts', calories: 200, protein: 10, carbs: 5, fat: 15, serving: '50g' },
    { name: 'Turkey', calories: 150, protein: 15, carbs: 0, fat: 10, serving: '100g' },
    { name: 'Potatoes', calories: 150, protein: 2, carbs: 30, fat: 0, serving: '150g' },
    { name: 'Tomatoes', calories: 20, protein: 1, carbs: 5, fat: 0, serving: '100g' },
    { name: 'Avocado', calories: 200, protein: 2, carbs: 10, fat: 15, serving: '1 medium' },
    { name: 'Grapes', calories: 50, protein: 1, carbs: 10, fat: 0, serving: '100g' },
  ];

function bulkCreateFood(foodArr){
    foodArr.forEach(item => {
        let foodItem = new FoodItem({
            name: item.name,
            calories: item.calories,
            protein: item.protein,
            carbs: item.carbs,
            fat: item.fat,
            serving: item.serving
        })
        createFoodItem(foodItem);
    });
}



export async function initFoodItems(){
    console.log("Started initFoodItems");
    getFoodItems().then((foods) => {
        console.log(`Food Items: ${foods.length}`);
        if(foods.length == 0){
            console.log("Adding food items");
            bulkCreateFood(foodsList);
        }
        console.log("Finished initFoodItems");
    });
}

export function initNutritionLog(userId){
    console.log("Started initNutritionLog");
    date = new Date(Date.now()).toISOString().substring(0,10);
    console.log(`Date init: ${date}`);
    getUsersNutritionLog(userId, date).then((logs) => {
        if(logs.length == 0){
            console.log("could not initialise nutrition log");
        }
        console.log(`Nutrition Log: ${logs}`);
        console.log("Finished initNutritionLog");
    });
}
 
//TODO: verify inputs for createMeal
export async function getMeal(userId, date, mealType) {
    try {
        const nutritionlog =  await getUsersNutritionLog(userId, date);
        console.log(`getMeal UserId: ${userId} Date: ${date} MealType: ${mealType}`);

        DataStore.query(Meal, (u) => u.and(c => [
            u.nutritionLogID.eq(nutritionlog[0].id),
            u.mealType.eq(mealType)
        ])).then((foundMeal) => {
            console.log(foundMeal.length)
            if(foundMeal.length == 0){
                let newMeal = new Meal({
                    "nutritionLogID": nutritionlog[0].id,
                    "mealType": mealType,
                });
                DataStore.save(newMeal).then(() => {
                    console.log(`Meal created: ${newMeal}`);
                    return newMeal});
            }
            console.log(`Meal found: ${foundMeal}`);
            return foundMeal;
        });
    } catch (err){
        console.log(err);
    }
}

export async function addFoodToMeal(userId, date, mealType, foodItem){
    console.log(`addFoodToMeal UserId: ${userId} Date: ${date} MealType: ${mealType} FoodItem: ${foodItem}`);
    try {
        let meal = await getMeal(userId, date, mealType);
        meal.foodItems.push(foodItem);
        DataStore.save(meal).then(() => {return meal});
    } catch (err){
        console.log(err);
    }
}










// notes on GraphQL implementation: TODO:Delete
// import { createNutritionLog } from '../graphql/mutations';
// import { listNutritionLogs } from '../graphql/queries';
// graphql creation
// const log = await client.graphql({
//     query: createNutritionLog,
//     variables: {input: foodItemDetails}
// });
// console.log('Successfully added: ', logDetails);
// graphql query
// const listAllFoodLogs = await client.graphql({ query: listNutritionLogs });
// console.log(listAllFoodLogs.data);  
// return listAllFoodLogs; 