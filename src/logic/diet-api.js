import { generateClient } from 'aws-amplify/api';
import { DataStore, Predicates } from 'aws-amplify/datastore';
import { NutritionLog, FoodItem, Meal, MealPeriod } from '../models';
// import {getCurrentUser} from 'aws-amplify/auth';
// import {Amplify} from 'aws-amplify';
// import { currentUserDetails } from './account';

///PIVOT DONT LINK NUTRITION LOG AND MEALS

let MEALS;
let NUTRITIONLOG;

const client = generateClient();
let initialised = false;
export const NUTLOG = async (userId, date) =>{
    let meals;
    let nutLog;
    let currentUserId;
    let currentDate;
    p = new Promise(async (resolve, reject) =>{
        console.log(`NUTLOG initialised: ${initialised}`);
        
        // if(userId && date && (userId != currentUserId || date != currentDate)){
        await getUsersNutritionLog(userId, date).then(async (log) => {
            nutLog = log;
            // NUTRITIONLOG = log;
            console.log(`Retreiving Nutrition Log id: ${log.id} userId: ${userId} date: ${date}`);
            await nutLog.Meals.toArray().then( async (m) => {
                meals = m;
                // MEALS = m;
                console.log(`NUTLOG meal: ${meals}`);
                console.log(`meals: ${meals.length}`);
                if (meals.length == 0){
                    console.log("Creating meals");
                    const breakfast = new Meal({
                        nutritionLogMealsId: nutLog.id,
                        mealPeriod: MealPeriod.BREAKFAST,
                        foodItems: []
                    });
                    await DataStore.save(breakfast).then(() => {console.log(`NUTLOG: Breakfast created`)});
                    const lunch = new Meal({
                        nutritionLogMealsId: nutLog.id,
                        mealPeriod: MealPeriod.LUNCH,
                        foodItems: []
                    })
                    await DataStore.save(lunch).then(() => {console.log(`NUTLOG: Lunch created`)});
                    const dinner = new Meal({
                        nutritionLogMealsId: nutLog.id,
                        mealPeriod: MealPeriod.DINNER,
                        foodItems: []
                    })
                    await DataStore.save(dinner).then(() => {console.log(`NUTLOG: Dinner created`)});
                    await DataStore.save(
                        NutritionLog.copyOf(nutLog, updated => {
                            updated= log;
                            updated.Meals = [breakfast, lunch, dinner];
                        })
                    ).then((m) => {console.log(`NUTLOG: Finished Creating meals`)});
                }
            
                initialised = true;
                currentUserId = userId;
                currentDate = date;
                console.log(`NUTLOG complete`);
                
                resolve({
                    nutLog,
                    meals,
                    userId: currentUserId,
                    date: currentDate
                });
            });
        });
        // } else if(initialised){
        //     resolve({
        //         nutLog,
        //         meals,
        //         userId: currentUserId,
        //         date: currentDate
        //     });
        // } else {
        //     reject("Could not initialise Nutrition Log");
        // }
    });
    return p;
}

//TODO: verify inputs for createMeal
export async function getMeal(userId, date, mealType) {
    p = new Promise(async (resolve, reject) => {
        try {
            console.log(`getMeal UserId: ${userId} Date: ${date} MealType: ${mealType}`);
            // const nutritionlog =  await getUsersNutritionLog(userId, date).then(async (log) => {
            //     const meal = await nutritionlog.Meals.toArray().then(async (meals) => {
            //     console.log(`Meals: ${meals} MealsId: ${meals.id} meal period: ${meals.mealPeriod}`)
            //     });

            // console.log(`meal foodItems: ${await meal.foodItems.toArray()}`);
            // });

            await DataStore.query(Meal, (c) => c.and(c => [
                c.nutritionLogID.eq(nutritionlog[0].id),
                c.mealType.eq(mealType)
            ])).then((foundMeal) => {
                console.log(foundMeal.length)
                if(foundMeal.length == 0){
                    let newMeal = new Meal({
                        "nutritionLogID": nutritionlog[0].id,
                        "mealType": mealType,
                        "foodItems": []
                    });
                    DataStore.save(newMeal).then(() => {
                        console.log(`Meal created: ${newMeal}`);
                        resolve(newMeal)});
                }
                console.log(`Meal found: ${foundMeal}`);
                resolve(foundMeal);
            });
        } catch (err){
            console.log(err);
            reject(err);
        }
    });
    return p;
}


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
                "Meals": []
            });
            DataStore.save(log).then(() => {resolve(log)});
        } catch (err){
            console.log(err);
            reject(err);
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
                        console.log(`Created nutrition log: ${newLog}`);
                        // parseLog(newLog);
                        resolve(newLog);
                    });
                }
                // parseLog(oldLog[0]);
                console.log(`Found Nutrition Log: ${oldLog[0].id}`);
                resolve(oldLog[0]);
            });
        } catch (err){
            console.log(err);
            reject(err);
        }
    });
    return p;
}

export async function getMealMacros(meals){
    p = new Promise(async (resolve, reject) => {
        console.log("Started GetMealMacros");
        let macros = [];
        await meals.forEach(m => {
            macros.push(calcMealMacros(m));
        }).then(() => {
            resolve(macros);
        });
    });
    return p;
}

async function calcMealMacros(meal){
    let foodsList = await meal.foodItems.toArray();
    let mealData = {
        name: meal.mealPeriod,
        calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
        protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
        carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
        fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
    };
    console.log(`name: ${mealData.name} calories: ${mealData.calories} protein: ${mealData.protein} carbs: ${mealData.carbs} fat: ${mealData.fat}`);
    return mealData;
}

export function initNutritionLog(userId){
    console.log("Started initNutritionLog");
    date = new Date(Date.now()).toISOString().substring(0,10);
    console.log(`Date init: ${date}`);
    NUTLOG(userId, date).then(async ({nutLog, meals, userId, date}) => {
        if(nutLog.length == 0){
            console.log("could not initialise nutrition log");
        }
        console.log(`Nutrition Log: ${nutLog.id}`);
        console.log("Finished initNutritionLog");

        // meals.forEach(m => {
        //     calcMealMacros(m);
        // });
        // getMealMacros();

        // await getMeal(userId, date, "Breakfast").then((meal) => {
        //     console.log(meal);
        // });

        // await getMeal(userId, date, "Lunch").then((meal) => { 
        //     console.log(meal);
        // });

        // await getMeal(userId, date, "Dinner").then((meal) => {
        //     console.log(meal);
        // });
    });
    // getUsersNutritionLog(userId, date).then(async (logs) => {
        // if(logs.length == 0){
        //     console.log("could not initialise nutrition log");
        // }
        // console.log(`Nutrition Log: ${logs}`);
        // console.log("Finished initNutritionLog");
        // await getMeal(userId, date, "Breakfast").then((meal) => {
        //     console.log(meal);
        // });

        // await getMeal(userId, date, "Lunch").then((meal) => { 
        //     console.log(meal);
        // });

        // await getMeal(userId, date, "Dinner").then((meal) => {
        //     console.log(meal);
        // });
    // });
}
 


export async function addFoodToMeal(userId, date, mealType, foodItem){
    p = new Promise(async (resolve, reject) => {
        console.log(`addFoodToMeal UserId: ${userId} Date: ${date} MealType: ${mealType} FoodItem: ${foodItem}`);
        try {
            let meal = await getMeal(userId, date, mealType).then((meal) => {
                DataStore.save(
                    Meal.copyOf(meal, updated => {
                        updated.foodItems.push(foodItem);
                    })
                );
            });
            resolve(meal);
        } catch (err){
            console.log(err);
            reject(err);
        }
    });
    return p;
}



export async function initFoodItems(){
    console.log("Started initFoodItems");
    getFoodItems().then((foods) => {
        console.log(`Food Items: ${foods.length}`);
        if(foods.length == 0){
            console.log("Adding food items");
            bulkCreateFood(bulkFoodsList);
        }
        console.log("Finished initFoodItems");
    });
}

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

const bulkFoodsList = [
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