import { DataStore } from 'aws-amplify/datastore';
import { NutritionLog, FoodItem, Meal, MealPeriod } from '../models';

const DEBUG = false;

// called when user presses add meal in main diet screen
// if a nutrition log doesn't exist for the user and date, it creates one
export async function createMeal(userId, date) {
    // gets the nutrition log for the user and date
    let userLog = await DataStore.query(NutritionLog, (u) => u.and(c => [
        u.userId.eq(userId),
        u.date.eq(date)
    ]));
    // if no log is found, create a new one
    if (userLog.length == 0) {
        // replace empty query with the new created log
        userLog = await createNewLog(userId, date);
    }

    // create a new meal
    const meal = new Meal({
        nutritionLogMealsId: userLog[0].id,
        mealPeriod: MealPeriod.BREAKFAST,
        foodItems: []
    });
    await DataStore.save(meal);
    return meal;
}

// called when user adds the first meal of the day
// called in createMeal if no nutrition log is found
async function createNewLog(userId, date) {
    const log = new NutritionLog({
        userId: userId,
        date: date,
        Meals: []
    });
    await DataStore.save(log);
    return log;
}

// called when user presses delete meal in edit meal screen
export async function deleteMeal(mealId) {
    await DataStore.delete(Meal, (m) => m.id.eq(mealId));
}

// gets nutrition log for a user and date
// helper for syncDailyLogData
async function getUsersNutritionLog(userId, date) {
    p = new Promise((resolve, reject) => {
        try {
            DataStore.query(NutritionLog, (u) => u.and(c => [
                u.userId.eq(userId),
                u.date.eq(date)
            ])).then((oldLog) => {
                DEBUG && console.log(`Nutrition log found logID: ${oldLog.id} UserId: ${userId} Date: ${date}`);
                resolve(oldLog[0]);
            });
        } catch (err) {
            console.log(`Failed to find a nutrition log for UserId: ${userId} Date: ${date} error: ${err}`);
            reject(err);
        }
    });
    return p;
}

// called by main diet screen to update the nutrition log data
export async function syncDailyLogData(userId, date, setCalorieData, setMealData, setIsLoading = () => { }) {
    // get the nutrition log for the user and date
    const userLog = await getUsersNutritionLog(userId, date);

    // if no log is found set the calorie and meal data to 0
    if (!userLog) {
        setCalorieData({
            proteinCurrent: 0,
            proteinGoal: 150,
            carbsCurrent: 0,
            carbsGoal: 250,
            fatCurrent: 0,
            fatGoal: 75,
            caloriesCurrent: 0,
            caloriesGoal: 2000,
        });
        setMealData([]);
        return;
    }
    // get the meals for the log
    const meals = await userLog.Meals.toArray();
    // get the macros for each meal
    const macros = await getMealMacros(meals);
    // set the calorie data
    setCalorieData({
        proteinCurrent: macros.reduce((acc, meal) => acc + meal.protein, 0),
        proteinGoal: 150,
        carbsCurrent: macros.reduce((acc, meal) => acc + meal.carbs, 0),
        carbsGoal: 250,
        fatCurrent: macros.reduce((acc, meal) => acc + meal.fat, 0),
        fatGoal: 75,
        caloriesCurrent: macros.reduce((acc, meal) => acc + meal.calories, 0),
        caloriesGoal: 2000,
    });

    // set the meal data
    setMealData(macros);
}

// queries the datastore for a meal with mealId
// called in add meal screen UI
//TODO: verify inputs for createMeal
export async function getMeal(mealId) {
    p = new Promise(async (resolve, reject) => {
        try {
            DEBUG && console.log(`getMeal mealId: ${mealId}`);
            await DataStore.query(Meal, (m) => m.id.eq(mealId)).then((foundMeal) => {
                DEBUG && console.log(`Found Meal: ${foundMeal}`);
                resolve(foundMeal[0]);
            });

        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
    return p;
}

// queries all food items from the datastore
// takes in a search term to filter the results
// if no search term is provided, returns all food items
export async function getFoodItems(searchTerm) {
    if (!searchTerm || searchTerm == "") {
        const foodItems = await DataStore.query(FoodItem);
        return foodItems;
    }
    const foodItems = await DataStore.query(FoodItem, (c) => c.name.contains(searchTerm));
    return foodItems;
}

// gets the total macros for all meals
// loops through each meal and calls calcMealMacros
// helper for syncDailyMealData
async function getMealMacros(meals) {
    p = new Promise((resolve, reject) => {
        DEBUG && console.log("Started GetMealMacros");
        let macros = [];
        let count = 0;
        meals.forEach(m => {
            let macro = calcMealMacros(m).then((macro) => {
                DEBUG && console.log(`macro: ${macro.calories} ${macro.protein} ${macro.carbs} ${macro.fat}`);
                macros.push(macro);
                count++;
                if (count == meals.length) {
                    DEBUG && console.log("Finished GetMealMacros");
                    resolve(macros);
                }
            });
        });
    });
    return p;
}

// gets macros for a meal
// helper function for getMealMacros and
// called in add meal screen UI
export async function calcMealMacros(meal) {
    p = new Promise(async (resolve, reject) => {
        let foodsList = await meal.foodItems.toArray();
        let mealData = {
            id: meal.id,
            name: meal.mealPeriod,
            calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
            protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
            carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
            fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
        };
        DEBUG && console.log(`name: ${mealData.name} calories: ${mealData.calories} protein: ${mealData.protein} carbs: ${mealData.carbs} fat: ${mealData.fat}`);
        resolve(mealData);
    });
    return p;
}

// adds a food item to a meal
// called in Add-Food-Screen.js
export async function addFoodToMeal(mealId, foodId) {
    p = new Promise(async (resolve, reject) => {
        DEBUG && console.log(`addFoodToMeal mealId: ${mealId} Date: ${foodId}`);
        try {
            let meal0 = await getMeal(mealId).then(async (meal) => {
                DEBUG && console.log(`meal: ${meal.id}`);
                if (!meal) {
                    console.log("No meal");
                    reject("No meal");
                }
                await DataStore.query(FoodItem, (f) => f.id.eq(foodId)).then(async (foods) => {
                    if (foods.length == 0) {
                        console.log("No food items");
                        reject("No food items");
                    }
                    DEBUG && console.log(`food: ${foods[0].id} name: ${foods[0].name} calories: ${foods[0].calories} 
                    protein: ${foods[0].protein} carb:${foods[0].carbs} fat: ${foods[0].fat} 
                    serv: ${foods[0].serving}, mealId: ${foods[0].mealFoodItemsId}`);
                    await DataStore.save(
                        FoodItem.copyOf(foods[0], updated => {
                            updated.id = foods[0].id;
                            updated.name = foods[0].name;
                            updated.calories = foods[0].calories;
                            updated.protein = foods[0].protein;
                            updated.carbs = foods[0].carbs;
                            updated.fat = foods[0].fat;
                            updated.serving = foods[0].serving;
                            updated.mealFoodItemsId = meal.id;
                        })
                    ).then(async (m) => {
                        //DEBUG && console.log(m);
                        DEBUG && console.log(`Added mealid to food item: ${foods[0].id}`);
                        mealFoodArr = await meal.foodItems.toArray();
                        await DataStore.save(
                            Meal.copyOf(meal, updated => {
                                updated = meal;
                                updated.foodItems = [...mealFoodArr, foods[0]];
                            })
                        ).then((g) => {
                            DEBUG && console.log(`Added foodItemID: ${foods[0].id} to meal: ${meal.id}`);
                            resolve(g);
                        });
                    });
                });
            });
        } catch (err) {
            console.log(`Failed to add food to meal. Error: ${err}`);
            reject(err);
        }
    });
    return p;
}











// calls getFoodItems
// calls bulkCreateFood if no food items are found
// only called once to make items in database
async function initFoodItems() {
    DEBUG && console.log("Started initFoodItems");
    getFoodItems("").then((foods) => {
        DEBUG && console.log(`Food Items: ${foods.length}`);
        if (foods.length == 0) {
            DEBUG && console.log("Adding food items");
            bulkCreateFood(bulkFoodsList);
        }
        DEBUG && console.log("Finished initFoodItems");
    });
}

// takes a list of foods and turns them into FoodItems
// calls createFoodItem to save them to the database
// only called once to make items in database
function bulkCreateFood(foodArr) {
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

// adds foodItem to the datastore
// only called once to make items in database
async function createFoodItem(foodItem) {
    if (!foodItem) {
        return;
    }
    try {
        await DataStore.save(foodItem);
        DEBUG && console.log('Successfully added: ', foodItem);
    } catch (err) {
        console.log(err);
    }
}

// list of foods for the search page
// once the database is populated, this isn't needed
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