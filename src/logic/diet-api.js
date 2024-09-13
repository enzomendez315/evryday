import { DataStore } from 'aws-amplify/datastore';
import { currentUserDetails } from '../logic/account'
import { NutritionLog, Meal, MealPeriod, FoodItem, FoodItemServing, MealToFood, Recipe, RecipeToFood } from '../models';
import { getUserGoals } from './user-goals'

const DEBUG = false;

// this is the format logData should be in
// calcMealMacros returns this format
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

// called when user presses add meal in main diet screen
// if a nutrition log doesn't exist for the user and date, it creates one
export async function createMeal(userId, date, mealType = MealPeriod.BREAKFAST) {
    DEBUG && console.log(`createMeal userId: ${userId} Date: ${date}`);
    // gets the nutrition log for the user and date
    let userLog = await DataStore.query(NutritionLog, (u) => u.and(c => [
        u.userId.eq(userId),
        u.date.eq(date)
    ]));
    
    // if no log is found, create a new one
    DEBUG && console.log(`createMeal userLog length: ${userLog.length}`);
    if (userLog.length === 0) {
        DEBUG && console.log("No log found in create meal, creating one now");
        // replace empty query with the new created log
        userLog = await createNewLog(userId, date);
        DEBUG && console.log(`created new log: ${userLog[0].id}`);
    }

    // create a new meal
    DEBUG && console.log(`creating a new meal for logId: ${userLog[0].id}`);
    const meal = new Meal({
        nutritionLogMealsId: userLog[0].id,
        mealPeriod: mealType,
        foodItems: []
    });
    await DataStore.save(meal);
    return meal;
}

// called when user adds the first meal of the day
// called in createMeal if no nutrition log is found
async function createNewLog(userId, date) {
    DEBUG && console.log(`createNewLog userId: ${userId} Date: ${date}`);
    const log = new NutritionLog({
        userId: userId,
        date: date,
        Meals: []
    });
    await DataStore.save(log);
    return [log]; // this is in array because queries return arrays
}

// called when user presses delete meal in edit meal screen
// Deletes all meal to food relationships then deletes the meal
export async function deleteMeal(mealId) {
    DEBUG && console.log(`deleteMeal mealId: ${mealId}`);
    const mealFoodRelationships = await DataStore.query(MealToFood, (mfi) => mfi.mealId.eq(mealId));
    for (let mealFoodRelationship of mealFoodRelationships) {
        await DataStore.delete(MealToFood, (mfi) => mfi.id.eq(mealFoodRelationship.id));
    }
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
            ])).then((logs) => {
                if (logs.length === 0) {
                    DEBUG && console.log(`No nutrition log found for UserId: ${userId} Date: ${date}`);
                    resolve(null);
                } else {
                    DEBUG && console.log(`Nutrition log found logID: ${logs[0].id} UserId: ${userId} Date: ${date}`);
                    resolve(logs[0]);
                }

            });
        } catch (err) {
            console.log(`Failed to find a nutrition log for UserId: ${userId} Date: ${date} error: ${err}`);
            reject(err);
        }
    });
    return p;
}

// called by dashboard to populate the diet tab
// TODO: make the charts bigger and more user-friendly
export async function syncDietDashboardData(userId, date, setCalorieData) {
    DEBUG && console.log(`syncDietDashboardData userId: ${userId} Date: ${date}`);
    const userLog = await getUsersNutritionLog(userId, date);

    if (userLog === null) {
        DEBUG && console.log("No log found in syncDietDashboardData");
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
    }

    else {
        const meals = await userLog.Meals.toArray();
        DEBUG && console.log(`syncDietDashboardData Meals: ${meals}`);

        const macros = await getAllMealsMacros(meals);
        DEBUG && console.log(`syncDietDashboardData Macros: ${macros}`);

        // if a log is found but no macro
        if (meals.length === 0) {
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
        }
        else {
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
        }
    }

}

// called by main diet screen to update the nutrition log data
// used to update hooks with all the meal data
// TODO: adjust macros goals based on user's original goals and physical attributes
export async function syncDailyLogData(userId, date, setCalorieData, setLogData, setWaterIntakeAmount, setIsLoading = () => { }) {
    DEBUG && console.log(`syncDailyLogData userId: ${userId} Date: ${date}`);
    // get the nutrition log for the user and date
    const userLog = await getUsersNutritionLog(userId, date);

    // if no log is found set the calorie and meal data to 0
    if (userLog === null) {
        DEBUG && console.log("No log found in syncDailyLogData");
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
        setLogData([]);
        setWaterIntakeAmount(0);
        return;
    }

    // get the meals for the log
    const meals = await userLog.Meals.toArray();
    DEBUG && console.log(`syncDailyLogs Meals:`);
    DEBUG && console.log(meals);

    // get the macros for each meal
    const macros = await getAllMealsMacros(meals);
    DEBUG && console.log(`syncDailyLogs Macros:`);
    DEBUG && console.log(macros);

    const goals = await getUserGoals(userId)

    // set the calorie data by summing up the values in each array
    setCalorieData({
        proteinCurrent: macros.reduce((acc, meal) => acc + meal.protein, 0),
        proteinGoal: 150,
        carbsCurrent: macros.reduce((acc, meal) => acc + meal.carbs, 0),
        carbsGoal: 250,
        fatCurrent: macros.reduce((acc, meal) => acc + meal.fat, 0),
        fatGoal: 75,
        caloriesCurrent: macros.reduce((acc, meal) => acc + meal.calories, 0),
        caloriesGoal: goals.maxCalories ?? 2000,
    });

    // set the meal data
    // TODO: specify what macros are being displayed for readability
    setLogData(macros);

    if(userLog.waterIntake !== null || userLog.waterIntake !== undefined){
        setWaterIntakeAmount(userLog.waterIntake);
    } else {
        setWaterIntakeAmount(0);
    }
}

// Combines a FoodItem, it serving information, and the amount of servings into a singular item
function formatFoodItem(foodItem, serving, mealFoodRelationship) {
    let multiplier = mealFoodRelationship.servingAmount / serving.servingSize;

    const tempFoodItem = {
        id: foodItem.id,
        name: foodItem.name,
        servingId: serving.id,
        servingAmount: mealFoodRelationship.servingAmount,
        mealToFoodId: mealFoodRelationship?.id ?? null,
        calories: Math.round(serving.calories * multiplier),
        protein: Math.round(serving.protein * multiplier),
        carbs: Math.round(serving.carbs * multiplier),
        fat: Math.round(serving.fat * multiplier),
    };

    return tempFoodItem;
}

// creates a list of formatted food items for a given meal using the relationships in the MealToFood table
async function getFoodListForMeal(meal) {
    p = new Promise(async (resolve, reject) => {
        let foodsList = [];

        if (meal?.id === undefined) {
            resolve(foodsList);
        }

        const mealFoodRelationships = await DataStore.query(MealToFood, (mfr) => mfr.mealId.eq(meal.id));

        for (let mealFoodRelationship of mealFoodRelationships) {
            let food = await mealFoodRelationship.foodItem;
            DEBUG && console.log(`getFoodListForMeal food: ${food.name}`);
            let serving = await DataStore.query(FoodItemServing, (s) => s.id.eq(mealFoodRelationship.servingId));
            let formattedFood = formatFoodItem(food, serving[0], mealFoodRelationship);
            foodsList.push(formattedFood);
        }
        resolve(foodsList);
    });
    return p;
}

export async function getFoodItemFromId(foodItemId) {
    const foodItems = await DataStore.query(FoodItem, (c) => c.id.eq(foodItemId));
    return foodItems[0];
}

// updates the UI in the edit meal screen
export async function syncMealFoodsList(meal, setFoodList) {
    DEBUG && console.log(`syncMealFoodList mealId: ${meal.id}`);
    let foodsList = await getFoodListForMeal(meal);
    setFoodList(foodsList);
}

// Removes a food item from a meal and returns the meals updated macros
export async function removeFoodFromMeal(mealToFoodId) {
    DEBUG && console.log(`removeFoodFromMeal mealToFoodId: ${mealToFoodId}`);
    const mealToFood = await DataStore.query(MealToFood, mealToFoodId);
    const mealId = mealToFood.mealId;
    await DataStore.delete(MealToFood, mealToFood);
    const meal = await DataStore.query(Meal, mealId);
    let tempMeal;
    await calcMealMacros(meal).then((updatedMeal) => {
        tempMeal = updatedMeal;
    });
    return tempMeal;
}

// gets the total macros for all meals
// calls calcMealMacros for each meal
// helper for syncDailyMealData
async function getAllMealsMacros(meals) {
    p = new Promise(async (resolve, reject) => {
        DEBUG && console.log("Started GetAllMealsMacros");
        let macros = [];

        for (let meal of meals) {
            await calcMealMacros(meal).then((macro) => {
                DEBUG && console.log(`getAllMealsMacros calling calcMealMacros: ${macro.calories} ${macro.protein} ${macro.carbs} ${macro.fat}`);
                macros.push(macro);
            });
        }
        resolve(macros);
    });
    return p;
}

// gets macros for a meal
// helper function for getAllMealsMacros and addFoodToMeal
// TODO:: Some meals passed in are datastore meals and some are macro meals
export async function calcMealMacros(meal) {
    p = new Promise(async (resolve, reject) => {
        DEBUG && console.log(`calcMealMacros mealId: ${meal?.id} mealPeriod: ${meal?.mealPeriod} mealName: ${meal?.name}`);
        let foodsList = await getFoodListForMeal(meal);
        let mealData = {
            id: meal.id,
            name: meal.mealPeriod ?? meal.name,
            calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
            protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
            carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
            fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
        };
        DEBUG && console.log(`calcMealMacros name: ${mealData.name} calories: ${mealData.calories} protein: ${mealData.protein} carbs: ${mealData.carbs} fat: ${mealData.fat}`);
        resolve(mealData);
    });
    return p;
}

// Finds all serving options for a food item
// sets the serving options and drop down items for the Add-Food-Screen
export async function getServingOptions(foodItem, setServingOptions, setDropDownItems) {
    const servingOptions = await foodItem.servingOptions.toArray();
    setServingOptions(servingOptions);
    let options = [];
    let i = 0;
    for (let option of servingOptions) {
        options.push({ label: option.servingUnit, value: i });
        i++
    }
    if (options.length === 0) {
        options.push({ label: 'Grams', value: 0 });
    }
    setDropDownItems(options);
}

// Helper function for the Search-Food-Screen
export function searchFoodItems(searchTerm, setFoodItems) {
    DEBUG && console.log(`searchFoodItems searchTerm: ${searchTerm}`);
    getFoodItems(searchTerm).then(async (foods) => {
        setFoodItems(foods);
    });
}

// queries all food items from the datastore
// takes in a search term to filter the results
// if no search term is provided, returns all food items
async function getFoodItems(searchTerm) {
    DEBUG && console.log(`getFoodItems searchTerm: ${searchTerm}`);
    if (!searchTerm || searchTerm == "") {
        DEBUG && console.log(`getFoodItems blank term`);
        const foodItems = await DataStore.query(FoodItem);
        DEBUG && console.log(`getFoodItems foodItems: ${foodItems.length}`);
        return foodItems;
    }
    let upperSearch = "";
    let lowerSearch = "";
    if(searchTerm.length > 1){
        lowerSearch = searchTerm.charAt(0).toLowerCase() + searchTerm.slice(1);
        upperSearch = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    }
    else {
        lowerSearch = searchTerm.toLowerCase();
        upperSearch = searchTerm.toUpperCase();
    }
    const foodItems = await DataStore.query(FoodItem, (u) => u.or((c) => [
        c.name.contains(lowerSearch),
        c.name.contains(upperSearch)
    ]));
    return foodItems;
}

// adds a food item to a meal
// called in Add-Food-Screen.js
export async function addOrUpdateFoodToMeal(meal, food, servingId, servingAmount, mealToFoodId) {
    DEBUG && console.log('addOrUpdateFoodToMeal');
    p = new Promise(async (resolve,reject) => {
        if(mealToFoodId !== undefined){
        DEBUG && console.log('update');
            await DataStore.delete(MealToFood, (mfi) => mfi.id.eq(mealToFoodId)).then(async () => {
                const newMeal = await addFoodToMeal(meal, food, servingId, servingAmount);
                resolve(newMeal);
            });
        } else {
            DEBUG && console.log('add');
            await addFoodToMeal(meal, food, servingId, servingAmount).then((newMeal) => {
                resolve(newMeal);
            });
        }
    });
    return p;
}

// adds a food item to a meal
// called in Add-Food-Screen.js
export async function addFoodToMeal(meal, food, servingId, servingAmount) {
    DEBUG && console.log(`addFoodToMeal servingId: ${servingId} servingAmount: ${servingAmount}`);
    const mealFoodItem = await DataStore.save(
        new MealToFood({
            meal: meal,
            foodItem: food,
            servingId: servingId,
            servingAmount: servingAmount,
        })
    );

    let tempMeal;
    await calcMealMacros(meal).then((updatedMeal) => {
        tempMeal = updatedMeal;
    });
    return tempMeal;
}

// Modify-Food-obj
// Updates a food item and/or a serving option if they exist and the user owns the items, else creates new items
export async function modifyFoodObject(name, servingSize, servingUnit, calories, carbs, fat, protein, foodId, servingId, userId) {
    // TODO:: Return foodItem as promise
    let foodItem = null;

    if(foodId !== null || foodId !== undefined) {
        const foundFoodItem = await DataStore.query(FoodItem, foodId);
        if(foundFoodItem === null || foundFoodItem === undefined || foundFoodItem.owner !== userId){
            const newFoodItem = await DataStore.save(
                new FoodItem({
                    name: name,
                    owner: userId
                })
            );
            foodItem = newFoodItem;
        } else {
            if (foundFoodItem.name !== name) {
                const foodCopy = await DataStore.save(
                    FoodItem.copyOf(foundFoodItem, updated => {
                        updated.name = name;
                        updated.owner = userId;
                    })
                );
                foodItem = foodCopy;
            } else {
                foodItem = foundFoodItem;
            }
        }
    }

    if(servingId !== null || servingId !== undefined) {
        const foundFoodServing = await DataStore.query(FoodItemServing, servingId);
        if(foundFoodServing === null || foundFoodServing === undefined || foundFoodServing.owner !== userId){
            const foodItemServing = await DataStore.save(
                new FoodItemServing ({
                    foodItem: foodItem,
                    servingSize: servingSize,
                    servingUnit: servingUnit,
                    calories: calories,
                    protein: protein,
                    carbs: carbs,
                    fat: fat
                })
            );
        } else {
            if(foundFoodServing.calories !== calories
                || foundFoodServing.servingSize !== servingSize
                || foundFoodServing.servingUnit !== servingUnit
                || foundFoodServing.protein !== protein
                || foundFoodServing.fat !== fat
                || foundFoodServing.carbs !== carbs) {
                    const servingCopy = await DataStore.save(
                        FoodItemServing.copyOf(foundFoodServing, updated => {
                            updated.servingSize = servingSize,
                            updated.servingUnit = servingUnit,
                            updated.calories = calories,
                            updated.carbs = carbs,
                            updated.fat = fat,
                            updated.protein = protein
                        })
                    )
            }
        }
    }
    return foodItem;

}

// Saves a meal as a recipe called recipeName
export async function saveAsRecipe(mealId, recipeName) {
    const recipe = await DataStore.save(
        new Recipe({
            name: recipeName
        })
    )

    const mealFoodRelationships = await DataStore.query(MealToFood, (mfr) => mfr.mealId.eq(mealId));

    for (let mealFoodRelationship of mealFoodRelationships) {
        console.log("mealToFood: ", mealFoodRelationship)
        const food = await mealFoodRelationship.foodItem;
        await DataStore.save(
            new RecipeToFood({
                recipe: recipe,
                foodItem: food,
                servingId: mealFoodRelationship.servingId,
                servingAmount: mealFoodRelationship.servingAmount
            })
        )
    }
}

// Add a recipe to a meal
export async function addRecipeToMeal(mealId, recipeId) {

    const recipeFoodRelationships = await DataStore.query(RecipeToFood, (rtf) => rtf.recipeId.eq(recipeId));
    const meal = await DataStore.query(Meal, mealId);

    for (let recipeFoodRelationship of recipeFoodRelationships) {
        const food = await recipeFoodRelationship.foodItem;
        await DataStore.save(
            new MealToFood({
                meal: meal,
                foodItem: food,
                servingId: recipeFoodRelationship.servingId,
                servingAmount: recipeFoodRelationship.servingAmount
            })
        )
    }
}


// Populates a list of all recipes
export async function getAllRecipes(setRecipes) {
    const recipes = await DataStore.query(Recipe);
    let recipeData = [];
    for await (let recipe of recipes) {
        recipeData.push(await calcRecipeMacros(recipe))
    }
    setRecipes(recipeData);
}

export async function getRecipe(recipeId) {
    console.log('getRecipe: ', recipeId);
    const recipe = await DataStore.query(Recipe, recipeId);
    const recipeMacros = await calcRecipeMacros(recipe);
    console.log(recipeMacros);
    return recipeMacros;
}


export async function calcRecipeMacros(recipe) {
    p = new Promise(async (resolve, reject) => {
        let foodsList = [];
        const recipeToFoodRelationships = await DataStore.query(RecipeToFood, (rtf) => rtf.recipeId.eq(recipe.id));

        for (let recipeToFoodRelationship of recipeToFoodRelationships) {
            let food = await recipeToFoodRelationship.foodItem;
            let serving = await DataStore.query(FoodItemServing, (s) => s.id.eq(recipeToFoodRelationship.servingId));
            let multiplier = (parseFloat(recipeToFoodRelationship.servingAmount) / parseFloat(serving[0].servingSize));
            let formattedFood = {
                id: food.id,
                name: food.name,
                servingId: serving[0].id,
                servingAmount: recipeToFoodRelationship.servingAmount,
                serving: (recipeToFoodRelationship.servingAmount + " " + serving[0].servingUnit),
                recipeToFoodId: recipeToFoodRelationship?.id ?? null,
                calories: Math.round(serving[0].calories * multiplier),
                protein: Math.round(serving[0].protein * multiplier),
                carbs: Math.round(serving[0].carbs * multiplier),
                fat: Math.round(serving[0].fat * multiplier),
            }
            foodsList.push(formattedFood);
        }

        let recipeData = {
            id: recipe.id,
            name: recipe.name,
            ingredients: foodsList,
            calories: foodsList.reduce((acc, food) => acc + food.calories, 0),
            protein: foodsList.reduce((acc, food) => acc + food.protein, 0),
            carbs: foodsList.reduce((acc, food) => acc + food.carbs, 0),
            fat: foodsList.reduce((acc, food) => acc + food.fat, 0)
        };
        resolve(recipeData);
    });
    return p;
}


export async function updateWaterIntake(userId, date, amount, setWaterIntakeAmount) {
    const userLog = await getUsersNutritionLog(userId, date);
    if (userLog === null) {
        setWaterIntakeAmount(amount);
    } else {
        let updatedAmount = amount;
        if (userLog.waterIntake !== null || userLog.waterIntake !== undefined) {
            updatedAmount += userLog.waterIntake;
        }
        await DataStore.save(
            NutritionLog.copyOf(userLog, updated => {
                updated.waterIntake = updatedAmount;
            })
        );
        setWaterIntakeAmount(updatedAmount);
    }
}


// calls getFoodItems
// calls bulkCreateFood if no food items are found
// only called once to make items in database
export async function initFoodItems() {
    DEBUG && console.log("Started initFoodItems");
    getFoodItems("").then(async (foods) => {
        DEBUG && console.log(`Food Items: ${foods.length}`);
        if (foods.length == 0) {
            DEBUG && console.log("Adding food items");
            bulkCreateFood(FoodItemsList, FoodItemServingsList);
        }
        DEBUG && console.log("Finished initFoodItems");
    });
}

export async function deleteFoodItem(foodId) {
    DEBUG && console.log(`deleteFoodItem foodId: ${foodId}`);
    const foodItem = await DataStore.query(FoodItem, foodId);
    await DataStore.delete(FoodItem, foodItem);
    return foodItem;
}


// Creates food items and their servings
async function bulkCreateFood(foodItems, foodServings) {
    const userId = await currentUserDetails();
    DEBUG && console.log(`bulkCreateFood userId: ${userId}`);
    foodItems.forEach(async item => {
        let ref_id = item.ref_id;
        const foodItem = await DataStore.save(
            new FoodItem({
                name: item.name,
                owner: userId
            })
        );
        foodServings.forEach(async serving => {
            if (serving.ref_id == ref_id) {
                await DataStore.save(
                    new FoodItemServing ({
                        foodItem: foodItem,
                        servingSize: serving.servingSize,
                        servingUnit: serving.servingUnit,
                        calories: serving.calories,
                        protein: serving.protein,
                        carbs: serving.carbs,
                        fat: serving.fat
                    })
                );
            }
        });
    });
}

// calculates a score based on the number of calories the user has consumed
export function getNutritionScore() {
    // get total calories for the day
    // compare min and max
    // normalize inputs
    // compute a score based on 100
}

//######################################## TESTING DATA #########################################
const FoodItemsList = [
    {'ref_id': 0, 'name': 'Hummus, commercial'},
    {'ref_id': 1, 'name': 'Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D'},
    {'ref_id': 2, 'name': 'Tomatoes, grape, raw'},
    {'ref_id': 3, 'name': 'Beans, snap, green, canned, regular pack, drained solids'},
    {'ref_id': 4, 'name': 'Broccoli, raw'},
    {'ref_id': 5, 'name': 'Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D'},
    {'ref_id': 6, 'name': 'Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)'},
    {'ref_id': 7, 'name': 'Milk, whole, 3.25% milkfat, with added vitamin D'},
    {'ref_id': 8, 'name': 'Frankfurter, beef, unheated'},
    {'ref_id': 9, 'name': 'Nuts, almonds, dry roasted, with salt added'},
    {'ref_id': 10, 'name': 'Cheese, ricotta, whole milk'},
    {'ref_id': 11, 'name': 'Kale, raw'},
    {'ref_id': 12, 'name': 'Egg, whole, raw, frozen, pasteurized'},
    {'ref_id': 13, 'name': 'Egg, white, raw, frozen, pasteurized'},
    {'ref_id': 14, 'name': 'Egg, white, dried'},
    {'ref_id': 15, 'name': 'Sauce, salsa, ready-to-serve'},
    {'ref_id': 16, 'name': 'Sausage, breakfast sausage, beef, pre-cooked, unprepared'},
    {'ref_id': 17, 'name': 'Onion rings, breaded, par fried, frozen, prepared, heated in oven'},
    {'ref_id': 18, 'name': 'Pickles, cucumber, dill or kosher dill'},
    {'ref_id': 19, 'name': 'Peanut butter, smooth style, with salt'},
    {'ref_id': 20, 'name': 'Cheese, parmesan, grated'},
    {'ref_id': 21, 'name': 'Cheese, pasteurized process, American, vitamin D fortified'},
    {'ref_id': 22, 'name': 'Grapefruit juice, white, canned or bottled, unsweetened'},
    {'ref_id': 23, 'name': 'Peaches, yellow, raw'},
    {'ref_id': 24, 'name': 'Seeds, sunflower seed kernels, dry roasted, with salt added'},
    {'ref_id': 25, 'name': 'Sausage, Italian, pork, mild, cooked, pan-fried'},
    {'ref_id': 26, 'name': 'Bread, white, commercially prepared'},
    {'ref_id': 27, 'name': 'Sausage, turkey, breakfast links, mild, raw'},
    {'ref_id': 28, 'name': 'Cheese, swiss'},
    {'ref_id': 29, 'name': 'Kale, frozen, cooked, boiled, drained, without salt'},
    {'ref_id': 30, 'name': "Carrots, frozen, unprepared (Includes foods for USDA's Food Distribution Program)"},
    {'ref_id': 31, 'name': 'Mustard, prepared, yellow'},
    {'ref_id': 32, 'name': 'Figs, dried, uncooked'},
    {'ref_id': 33, 'name': 'Kiwifruit, green, raw'},
    {'ref_id': 34, 'name': 'Melons, cantaloupe, raw'},
    {'ref_id': 35, 'name': 'Nectarines, raw'},
    {'ref_id': 36, 'name': "Oranges, raw, navels (Includes foods for USDA's Food Distribution Program)"},
    {'ref_id': 37, 'name': 'Strawberries, raw'},
    {'ref_id': 38, 'name': 'Lettuce, cos or romaine, raw'},
    {'ref_id': 39, 'name': 'Cheese, cheddar'},
    {'ref_id': 40, 'name': 'Cheese, cottage, lowfat, 2% milkfat'},
    {'ref_id': 41, 'name': 'Cheese, mozzarella, low moisture, part-skim'},
    {'ref_id': 42, 'name': 'Egg, whole, dried'},
    {'ref_id': 43, 'name': 'Egg, yolk, raw, frozen, pasteurized'},
    {'ref_id': 44, 'name': 'Egg, yolk, dried'},
    {'ref_id': 45, 'name': 'Cheese, dry white, queso seco'},
    {'ref_id': 46, 'name': 'Yogurt, Greek, plain, nonfat'},
    {'ref_id': 47, 'name': 'Yogurt, Greek, strawberry, nonfat'},
    {'ref_id': 48, 'name': 'Oil, coconut'},
    {'ref_id': 49, 'name': 'Turkey, ground, 93% lean, 7% fat, pan-broiled crumbles'},
    {'ref_id': 50, 'name': 'Chicken, broilers or fryers, drumstick, meat only, cooked, braised'},
    {'ref_id': 51, 'name': 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, braised'},
    {'ref_id': 52, 'name': 'Sauce, pasta, spaghetti/marinara, ready-to-serve'},
    {'ref_id': 53, 'name': 'Ham, sliced, pre-packaged, deli meat (96%fat free, water added)'},
    {'ref_id': 54, 'name': "Pears, raw, bartlett (Includes foods for USDA's Food Distribution Program)"},
    {'ref_id': 55, 'name': 'Olives, green, Manzanilla, stuffed with pimiento'},
    {'ref_id': 56, 'name': 'Sausage, pork, chorizo, link or ground, cooked, pan-fried'},
    {'ref_id': 57, 'name': 'Cookies, oatmeal, soft, with raisins'},
    {'ref_id': 58, 'name': 'Tomatoes, canned, red, ripe, diced'},
    {'ref_id': 59, 'name': 'Fish, haddock, raw'},
    {'ref_id': 60, 'name': 'Fish, pollock, raw'},
    {'ref_id': 61, 'name': 'Fish, tuna, light, canned in water, drained solids'},
    {'ref_id': 62, 'name': 'Sugars, granulated'},
    {'ref_id': 63, 'name': 'Sweet and sour pork, Restaurant, Chinese'},
    {'ref_id': 64, 'name': 'Fried rice, Restaurant, Chinese, without meat'},
    {'ref_id': 65, 'name': 'Tamale, pork Restaurant, Latino'},
    {'ref_id': 66, 'name': 'Pupusas con frijoles, Restaurant, Latino'},
    {'ref_id': 67, 'name': 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, raw'},
    {'ref_id': 68, 'name': 'Beef, loin, tenderloin roast, separable lean only, boneless, trimmed to 0" fat, select, cooked, roasted'},
    {'ref_id': 69, 'name': 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'},
    {'ref_id': 70, 'name': 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'},
    {'ref_id': 71, 'name': 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'},
    {'ref_id': 72, 'name': 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, select, raw'},
    {'ref_id': 73, 'name': 'Bread, whole-wheat, commercially prepared'},
    {'ref_id': 74, 'name': 'Beef, loin, tenderloin roast, separable lean only, boneless, trimmed to 0" fat, select, cooked, roasted'},
    {'ref_id': 75, 'name': 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, raw'},
    {'ref_id': 76, 'name': 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'},
    {'ref_id': 77, 'name': 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'},
    {'ref_id': 78, 'name': 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, select, raw'},
    {'ref_id': 79, 'name': 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'},
    {'ref_id': 80, 'name': 'Carrots, frozen, unprepared'},
    {'ref_id': 81, 'name': 'Cheese, dry white, queso seco'},
    {'ref_id': 82, 'name': 'Cheese, ricotta, whole milk'},
    {'ref_id': 83, 'name': 'Cheese, swiss'},
    {'ref_id': 84, 'name': 'Figs, dried, uncooked'},
    {'ref_id': 85, 'name': 'Lettuce, cos or romaine, raw'},
    {'ref_id': 86, 'name': 'Melons, cantaloupe, raw'},
    {'ref_id': 87, 'name': 'Oranges, raw, navels'},
    {'ref_id': 88, 'name': 'Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D'},
    {'ref_id': 89, 'name': 'Pears, raw, bartlett'},
    {'ref_id': 90, 'name': 'Restaurant, Chinese, sweet and sour pork'},
    {'ref_id': 91, 'name': 'Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)'},
    {'ref_id': 92, 'name': 'Sauce, salsa, ready-to-serve'},
    {'ref_id': 93, 'name': 'Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D'},
    {'ref_id': 94, 'name': 'Sausage, breakfast sausage, beef, pre-cooked, unprepared'},
    {'ref_id': 95, 'name': 'Sausage, Italian, pork, mild, cooked, pan-fried'},
    {'ref_id': 96, 'name': 'Sausage, pork, chorizo, link or ground, cooked, pan-fried'},
    {'ref_id': 97, 'name': 'Milk, whole, 3.25% milkfat, with added vitamin D'},
    {'ref_id': 98, 'name': 'Sausage, turkey, breakfast links, mild, raw'},
    {'ref_id': 99, 'name': 'Sugars, granulated'},
    {'ref_id': 100, 'name': 'Turkey, ground, 93% lean, 7% fat, pan-broiled crumbles'},
    {'ref_id': 101, 'name': 'Ham, sliced, restaurant'},
    {'ref_id': 102, 'name': 'Cheese, American, restaurant'},
    {'ref_id': 103, 'name': 'Broccoli, raw'},
    {'ref_id': 104, 'name': 'Strawberries, raw'},
    {'ref_id': 105, 'name': 'Ketchup, restaurant'},
    {'ref_id': 106, 'name': 'Eggs, Grade A, Large, egg white'},
    {'ref_id': 107, 'name': 'Eggs, Grade A, Large, egg yolk'},
    {'ref_id': 108, 'name': 'Eggs, Grade A, Large, egg whole'},
    {'ref_id': 109, 'name': 'Pork, cured, bacon, cooked, restaurant'},
    {'ref_id': 110, 'name': 'Flour, wheat, all-purpose, enriched, bleached'},
    {'ref_id': 111, 'name': 'Flour, wheat, all-purpose, enriched, unbleached'},
    {'ref_id': 112, 'name': 'Flour, wheat, all-purpose, unenriched, unbleached'},
    {'ref_id': 113, 'name': 'Flour, whole wheat, unenriched'},
    {'ref_id': 114, 'name': 'Flour, bread, white, enriched, unbleached'},
    {'ref_id': 115, 'name': 'Flour, rice, white, unenriched'},
    {'ref_id': 116, 'name': 'Flour, corn, yellow, fine meal, enriched'},
    {'ref_id': 117, 'name': 'Onions, red, raw'},
    {'ref_id': 118, 'name': 'Onions, yellow, raw'},
    {'ref_id': 119, 'name': 'Bananas, overripe, raw'},
    {'ref_id': 120, 'name': 'Bananas, ripe and slightly ripe, raw'},
    {'ref_id': 121, 'name': 'Garlic, raw'},
    {'ref_id': 122, 'name': 'Flour, soy, defatted'},
    {'ref_id': 123, 'name': 'Flour, soy, full-fat'},
    {'ref_id': 124, 'name': 'Flour, rice, brown'},
    {'ref_id': 125, 'name': 'Flour, rice, glutinous'},
    {'ref_id': 126, 'name': 'Flour, pastry, unenriched, unbleached'},
    {'ref_id': 127, 'name': 'Onions, white, raw'},
    {'ref_id': 128, 'name': 'Bananas, overripe, raw'},
    {'ref_id': 129, 'name': 'Bananas, ripe and slightly ripe, raw'},
    {'ref_id': 130, 'name': 'Apples, red delicious, with skin, raw'},
    {'ref_id': 131, 'name': 'Apples, honeycrisp, with skin, raw'},
    {'ref_id': 132, 'name': 'Apples, granny smith, with skin, raw'},
    {'ref_id': 133, 'name': 'Apples, gala, with skin, raw'},
    {'ref_id': 134, 'name': 'Apples, fuji, with skin, raw'}]


const FoodItemServingsList = [
    {'ref_id': 0, 'calories': 229, 'carbs': 14.9, 'fat': 17.1, 'protein': 7.35, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 0, 'calories': 78, 'carbs': 5.1, 'fat': 5.8, 'protein': 2.5, 'servingSize': 2.0, 'servingUnit': 'tablespoon'},
{'ref_id': 1, 'calories': 50, 'carbs': 4.91, 'fat': 1.9, 'protein': 3.35, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 1, 'calories': 114, 'carbs': 11.1, 'fat': 4.3, 'protein': 7.6, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 1, 'calories': 15, 'carbs': 1.5, 'fat': 0.6, 'protein': 1.0, 'servingSize': 1.0, 'servingUnit': 'fl oz'},
{'ref_id': 1, 'calories': 488, 'carbs': 47.9, 'fat': 18.5, 'protein': 32.7, 'servingSize': 1.0, 'servingUnit': 'quart'},
{'ref_id': 2, 'calories': 27, 'carbs': 5.51, 'fat': 0.63, 'protein': 0.83, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 2, 'calories': 41, 'carbs': 8.4, 'fat': 1.0, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 2, 'calories': 13, 'carbs': 2.7, 'fat': 0.3, 'protein': 0.4, 'servingSize': 5.0, 'servingUnit': 'tomatoes'},
{'ref_id': 3, 'calories': 21, 'carbs': 4.11, 'fat': 0.39, 'protein': 1.04, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 3, 'calories': 27, 'carbs': 5.3, 'fat': 0.5, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 4, 'calories': 32, 'carbs': 6.29, 'fat': 0.34, 'protein': 2.57, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 4, 'calories': 24, 'carbs': 4.8, 'fat': 0.3, 'protein': 2.0, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 5, 'calories': 43, 'carbs': 5.19, 'fat': 0.95, 'protein': 3.38, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 5, 'calories': 100, 'carbs': 12.1, 'fat': 2.2, 'protein': 7.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 5, 'calories': 13, 'carbs': 1.6, 'fat': 0.3, 'protein': 1.0, 'servingSize': 1.0, 'servingUnit': 'fl oz'},
{'ref_id': 5, 'calories': 420, 'carbs': 50.7, 'fat': 9.3, 'protein': 33.0, 'servingSize': 1.0, 'servingUnit': 'quart'},
{'ref_id': 6, 'calories': 34, 'carbs': 4.89, 'fat': 0.08, 'protein': 3.43, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 6, 'calories': 78, 'carbs': 11.2, 'fat': 0.2, 'protein': 7.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 6, 'calories': 10, 'carbs': 1.5, 'fat': 0.0, 'protein': 1.0, 'servingSize': 1.0, 'servingUnit': 'fl oz'},
{'ref_id': 6, 'calories': 333, 'carbs': 47.9, 'fat': 0.8, 'protein': 33.6, 'servingSize': 1.0, 'servingUnit': 'quart'},
{'ref_id': 7, 'calories': 60, 'carbs': 4.67, 'fat': 3.2, 'protein': 3.28, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 7, 'calories': 9, 'carbs': 0.7, 'fat': 0.5, 'protein': 0.5, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 7, 'calories': 137, 'carbs': 10.7, 'fat': 7.3, 'protein': 7.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 7, 'calories': 18, 'carbs': 1.4, 'fat': 1.0, 'protein': 1.0, 'servingSize': 1.0, 'servingUnit': 'fl oz'},
{'ref_id': 7, 'calories': 586, 'carbs': 45.6, 'fat': 31.2, 'protein': 32.0, 'servingSize': 1.0, 'servingUnit': 'quart'},
{'ref_id': 8, 'calories': 314, 'carbs': 2.89, 'fat': 28.0, 'protein': 11.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 8, 'calories': 153, 'carbs': 1.4, 'fat': 13.6, 'protein': 5.7, 'servingSize': 1.0, 'servingUnit': 'piece'},
{'ref_id': 9, 'calories': 620, 'carbs': 16.2, 'fat': 57.8, 'protein': 20.4, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 9, 'calories': 837, 'carbs': 21.9, 'fat': 78.0, 'protein': 27.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 10, 'calories': 157, 'carbs': 6.86, 'fat': 11.0, 'protein': 7.81, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 10, 'calories': 101, 'carbs': 4.4, 'fat': 7.1, 'protein': 5.0, 'servingSize': 0.2, 'servingUnit': 'cup'},
{'ref_id': 10, 'calories': 203, 'carbs': 8.8, 'fat': 14.2, 'protein': 10.1, 'servingSize': 0.5, 'servingUnit': 'cup'},
{'ref_id': 10, 'calories': 405, 'carbs': 17.7, 'fat': 28.4, 'protein': 20.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 11, 'calories': 35, 'carbs': 4.42, 'fat': 1.49, 'protein': 2.92, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 11, 'calories': 7, 'carbs': 0.9, 'fat': 0.3, 'protein': 0.6, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 12, 'calories': 150, 'carbs': 0.91, 'fat': 10.3, 'protein': 12.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 12, 'calories': 43, 'carbs': 0.3, 'fat': 2.9, 'protein': 3.5, 'servingSize': 1.0, 'servingUnit': 'oz'},
{'ref_id': 13, 'calories': 48, 'carbs': 0.74, 'fat': 0.16, 'protein': 10.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 13, 'calories': 14, 'carbs': 0.2, 'fat': 0.0, 'protein': 2.9, 'servingSize': 1.0, 'servingUnit': 'oz'},
{'ref_id': 14, 'calories': 376, 'carbs': 6.02, 'fat': 0.65, 'protein': 79.9, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 14, 'calories': 26, 'carbs': 0.4, 'fat': 0.0, 'protein': 5.6, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 14, 'calories': 402, 'carbs': 6.4, 'fat': 0.7, 'protein': 85.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 15, 'calories': 29, 'carbs': 6.74, 'fat': 0.19, 'protein': 1.44, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 15, 'calories': 10, 'carbs': 2.4, 'fat': 0.1, 'protein': 0.5, 'servingSize': 2.0, 'servingUnit': 'tablespoon'},
{'ref_id': 16, 'calories': 328, 'carbs': 3.37, 'fat': 28.7, 'protein': 13.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 16, 'calories': 61, 'carbs': 0.6, 'fat': 5.3, 'protein': 2.5, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 17, 'calories': 288, 'carbs': 36.3, 'fat': 14.4, 'protein': 4.52, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 17, 'calories': 58, 'carbs': 7.3, 'fat': 2.9, 'protein': 0.9, 'servingSize': 1.0, 'servingUnit': 'piece'},
{'ref_id': 18, 'calories': 12, 'carbs': 1.99, 'fat': 0.43, 'protein': 0.48, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 18, 'calories': 5, 'carbs': 0.8, 'fat': 0.2, 'protein': 0.2, 'servingSize': 1.0, 'servingUnit': 'spear'},
{'ref_id': 19, 'calories': 597, 'carbs': 22.3, 'fat': 51.1, 'protein': 22.5, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 19, 'calories': 191, 'carbs': 7.1, 'fat': 16.4, 'protein': 7.2, 'servingSize': 2.0, 'servingUnit': 'tablespoon'},
{'ref_id': 19, 'calories': 1540, 'carbs': 57.5, 'fat': 131.8, 'protein': 58.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 20, 'calories': 421, 'carbs': 12.4, 'fat': 28.0, 'protein': 29.6, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 20, 'calories': 32, 'carbs': 0.9, 'fat': 2.1, 'protein': 2.2, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 21, 'calories': 366, 'carbs': 5.27, 'fat': 30.6, 'protein': 18.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 21, 'calories': 75, 'carbs': 1.1, 'fat': 6.3, 'protein': 3.7, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 22, 'calories': 37, 'carbs': 7.59, 'fat': 0.7, 'protein': 0.55, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 22, 'calories': 95, 'carbs': 19.5, 'fat': 1.8, 'protein': 1.4, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 23, 'calories': 42, 'carbs': 10.1, 'fat': 0.27, 'protein': 0.91, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 23, 'calories': 65, 'carbs': 15.6, 'fat': 0.4, 'protein': 1.4, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 23, 'calories': 62, 'carbs': 14.8, 'fat': 0.4, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'fruit'},
{'ref_id': 23, 'calories': 68, 'carbs': 16.3, 'fat': 0.4, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'fruit'},
{'ref_id': 23, 'calories': 73, 'carbs': 17.5, 'fat': 0.5, 'protein': 1.6, 'servingSize': 1.0, 'servingUnit': 'fruit'},
{'ref_id': 23, 'calories': 94, 'carbs': 22.7, 'fat': 0.6, 'protein': 2.0, 'servingSize': 1.0, 'servingUnit': 'fruit'},
{'ref_id': 23, 'calories': 62, 'carbs': 14.8, 'fat': 0.4, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'serving'},
{'ref_id': 24, 'calories': 612, 'carbs': 17.1, 'fat': 56.1, 'protein': 21.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 24, 'calories': 777, 'carbs': 21.7, 'fat': 71.2, 'protein': 26.7, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 25, 'calories': 322, 'carbs': 2.15, 'fat': 26.2, 'protein': 18.2, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 25, 'calories': 279, 'carbs': 1.9, 'fat': 22.7, 'protein': 15.8, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 26, 'calories': 270, 'carbs': 49.2, 'fat': 3.59, 'protein': 9.43, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 26, 'calories': 74, 'carbs': 13.4, 'fat': 1.0, 'protein': 2.6, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 27, 'calories': 169, 'carbs': 0.93, 'fat': 10.4, 'protein': 16.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 27, 'calories': 47, 'carbs': 0.3, 'fat': 2.9, 'protein': 4.7, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 27, 'calories': 760, 'carbs': 4.2, 'fat': 46.8, 'protein': 75.1, 'servingSize': 1.0, 'servingUnit': 'package'},
{'ref_id': 28, 'calories': 393, 'carbs': 1.44, 'fat': 31.0, 'protein': 27.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 28, 'calories': 86, 'carbs': 0.3, 'fat': 6.8, 'protein': 5.9, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 28, 'calories': 43, 'carbs': 0.2, 'fat': 3.4, 'protein': 2.9, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 29, 'calories': 36, 'carbs': 5.3, 'fat': 1.21, 'protein': 2.94, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 29, 'calories': 42, 'carbs': 6.3, 'fat': 1.4, 'protein': 3.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 30, 'calories': 37, 'carbs': 7.92, 'fat': 0.47, 'protein': 0.81, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 31, 'calories': 61, 'carbs': 5.3, 'fat': 3.38, 'protein': 4.25, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 31, 'calories': 152, 'carbs': 13.2, 'fat': 8.4, 'protein': 10.6, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 31, 'calories': 4, 'carbs': 0.3, 'fat': 0.2, 'protein': 0.3, 'servingSize': 1.0, 'servingUnit': 'teaspoon'},
{'ref_id': 32, 'calories': 249, 'carbs': 63.9, 'fat': 0.92, 'protein': 3.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 32, 'calories': 371, 'carbs': 95.2, 'fat': 1.4, 'protein': 4.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 32, 'calories': 21, 'carbs': 5.4, 'fat': 0.1, 'protein': 0.3, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 33, 'calories': 58, 'carbs': 14.0, 'fat': 0.44, 'protein': 1.06, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 34, 'calories': 34, 'carbs': 8.16, 'fat': 0.18, 'protein': 0.82, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 34, 'calories': 54, 'carbs': 13.1, 'fat': 0.3, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 34, 'calories': 53, 'carbs': 12.7, 'fat': 0.3, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 34, 'calories': 277, 'carbs': 66.4, 'fat': 1.5, 'protein': 6.7, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 34, 'calories': 188, 'carbs': 45.0, 'fat': 1.0, 'protein': 4.5, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 34, 'calories': 150, 'carbs': 36.0, 'fat': 0.8, 'protein': 3.6, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 34, 'calories': 35, 'carbs': 8.3, 'fat': 0.2, 'protein': 0.8, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 34, 'calories': 23, 'carbs': 5.6, 'fat': 0.1, 'protein': 0.6, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 34, 'calories': 19, 'carbs': 4.5, 'fat': 0.1, 'protein': 0.5, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 34, 'calories': 47, 'carbs': 11.3, 'fat': 0.2, 'protein': 1.1, 'servingSize': 10.0, 'servingUnit': 'pieces'},
{'ref_id': 35, 'calories': 39, 'carbs': 9.18, 'fat': 0.28, 'protein': 1.06, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 35, 'calories': 56, 'carbs': 13.1, 'fat': 0.4, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 35, 'calories': 55, 'carbs': 12.9, 'fat': 0.4, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'serving'},
{'ref_id': 35, 'calories': 50, 'carbs': 11.8, 'fat': 0.4, 'protein': 1.4, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 35, 'calories': 55, 'carbs': 13.0, 'fat': 0.4, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 35, 'calories': 61, 'carbs': 14.3, 'fat': 0.4, 'protein': 1.7, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 36, 'calories': 47, 'carbs': 11.8, 'fat': 0.15, 'protein': 0.91, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 36, 'calories': 78, 'carbs': 19.5, 'fat': 0.2, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 36, 'calories': 66, 'carbs': 16.5, 'fat': 0.2, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 37, 'calories': 31, 'carbs': 7.63, 'fat': 0.22, 'protein': 0.64, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 38, 'calories': 17, 'carbs': 3.24, 'fat': 0.26, 'protein': 1.24, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 38, 'calories': 99, 'carbs': 18.8, 'fat': 1.5, 'protein': 7.2, 'servingSize': 1.0, 'servingUnit': 'bunch'},
{'ref_id': 39, 'calories': 408, 'carbs': 2.44, 'fat': 34.0, 'protein': 23.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 39, 'calories': 428, 'carbs': 2.6, 'fat': 35.7, 'protein': 24.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 39, 'calories': 69, 'carbs': 0.4, 'fat': 5.8, 'protein': 4.0, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 40, 'calories': 84, 'carbs': 4.31, 'fat': 2.3, 'protein': 11.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 40, 'calories': 185, 'carbs': 9.5, 'fat': 5.1, 'protein': 24.2, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 41, 'calories': 298, 'carbs': 4.44, 'fat': 20.4, 'protein': 23.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 41, 'calories': 257, 'carbs': 3.8, 'fat': 17.6, 'protein': 20.4, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 42, 'calories': 575, 'carbs': 1.87, 'fat': 39.8, 'protein': 48.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 42, 'calories': 29, 'carbs': 0.1, 'fat': 2.0, 'protein': 2.4, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 42, 'calories': 489, 'carbs': 1.6, 'fat': 33.8, 'protein': 40.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 42, 'calories': 163, 'carbs': 0.5, 'fat': 11.3, 'protein': 13.7, 'servingSize': 1.0, 'servingUnit': 'oz'},
{'ref_id': 43, 'calories': 296, 'carbs': 0.59, 'fat': 25.1, 'protein': 15.6, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 43, 'calories': 84, 'carbs': 0.2, 'fat': 7.1, 'protein': 4.4, 'servingSize': 1.0, 'servingUnit': 'oz'},
{'ref_id': 44, 'calories': 654, 'carbs': 1.07, 'fat': 55.5, 'protein': 34.2, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 44, 'calories': 26, 'carbs': 0.0, 'fat': 2.2, 'protein': 1.4, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 44, 'calories': 438, 'carbs': 0.7, 'fat': 37.2, 'protein': 22.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 44, 'calories': 186, 'carbs': 0.3, 'fat': 15.8, 'protein': 9.7, 'servingSize': 1.0, 'servingUnit': 'oz'},
{'ref_id': 45, 'calories': 326, 'carbs': 2.07, 'fat': 24.3, 'protein': 24.5, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 45, 'calories': 317, 'carbs': 2.0, 'fat': 23.6, 'protein': 23.8, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 46, 'calories': 61, 'carbs': 3.64, 'fat': 0.37, 'protein': 10.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 46, 'calories': 95, 'carbs': 5.7, 'fat': 0.6, 'protein': 16.1, 'servingSize': 1.0, 'servingUnit': 'container'},
{'ref_id': 47, 'calories': 83, 'carbs': 12.2, 'fat': 0.15, 'protein': 8.06, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 47, 'calories': 124, 'carbs': 18.3, 'fat': 0.2, 'protein': 12.1, 'servingSize': 1.0, 'servingUnit': 'container'},
{'ref_id': 48, 'calories': 833, 'carbs': 0.84, 'fat': 99.1, 'protein': 0.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 48, 'calories': 97, 'carbs': 0.1, 'fat': 11.5, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'tablespoon'},
{'ref_id': 49, 'calories': 220, 'carbs': 0.0, 'fat': 11.6, 'protein': 27.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 49, 'calories': 341, 'carbs': 0.0, 'fat': 18.0, 'protein': 42.0, 'servingSize': 1.0, 'servingUnit': 'paired cooked w'},
{'ref_id': 50, 'calories': 156, 'carbs': 0.0, 'fat': 5.95, 'protein': 23.9, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 50, 'calories': 148, 'carbs': 0.0, 'fat': 5.6, 'protein': 22.6, 'servingSize': 1.0, 'servingUnit': 'drumstick'},
{'ref_id': 50, 'calories': 162, 'carbs': 0.0, 'fat': 6.2, 'protein': 24.9, 'servingSize': 1.0, 'servingUnit': 'drumstick'},
{'ref_id': 51, 'calories': 166, 'carbs': 0.0, 'fat': 3.24, 'protein': 32.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 51, 'calories': 289, 'carbs': 0.0, 'fat': 5.6, 'protein': 55.9, 'servingSize': 1.0, 'servingUnit': 'piece'},
{'ref_id': 52, 'calories': 45, 'carbs': 8.05, 'fat': 1.48, 'protein': 1.41, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 52, 'calories': 61, 'carbs': 10.9, 'fat': 2.0, 'protein': 1.9, 'servingSize': 1.0, 'servingUnit': 'serving'},
{'ref_id': 53, 'calories': 106, 'carbs': 0.27, 'fat': 3.73, 'protein': 16.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 53, 'calories': 14, 'carbs': 0.0, 'fat': 0.5, 'protein': 2.3, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 54, 'calories': 57, 'carbs': 15.1, 'fat': 0.16, 'protein': 0.38, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 54, 'calories': 80, 'carbs': 21.1, 'fat': 0.2, 'protein': 0.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 54, 'calories': 84, 'carbs': 22.3, 'fat': 0.2, 'protein': 0.6, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 54, 'calories': 101, 'carbs': 26.9, 'fat': 0.3, 'protein': 0.7, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 54, 'calories': 131, 'carbs': 34.7, 'fat': 0.4, 'protein': 0.9, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 55, 'calories': 130, 'carbs': 4.96, 'fat': 12.9, 'protein': 1.15, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 55, 'calories': 4, 'carbs': 0.2, 'fat': 0.4, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'olive'},
{'ref_id': 56, 'calories': 346, 'carbs': 2.63, 'fat': 28.1, 'protein': 19.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 56, 'calories': 640, 'carbs': 4.9, 'fat': 52.0, 'protein': 35.7, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 56, 'calories': 278, 'carbs': 2.1, 'fat': 22.6, 'protein': 15.5, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 56, 'calories': 644, 'carbs': 4.9, 'fat': 52.3, 'protein': 35.9, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 57, 'calories': 430, 'carbs': 69.6, 'fat': 14.3, 'protein': 5.79, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 57, 'calories': 116, 'carbs': 18.8, 'fat': 3.9, 'protein': 1.6, 'servingSize': 1.0, 'servingUnit': 'cookie'},
{'ref_id': 58, 'calories': 18, 'carbs': 3.32, 'fat': 0.5, 'protein': 0.84, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 58, 'calories': 44, 'carbs': 8.1, 'fat': 1.2, 'protein': 2.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 59, 'calories': 74, 'carbs': 0.0, 'fat': 0.45, 'protein': 16.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 59, 'calories': 130, 'carbs': 0.0, 'fat': 0.8, 'protein': 28.7, 'servingSize': 1.0, 'servingUnit': 'fillet'},
{'ref_id': 60, 'calories': 56, 'carbs': 0.0, 'fat': 0.41, 'protein': 12.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 60, 'calories': 99, 'carbs': 0.0, 'fat': 0.7, 'protein': 21.8, 'servingSize': 1.0, 'servingUnit': 'fillet'},
{'ref_id': 61, 'calories': 90, 'carbs': 0.08, 'fat': 0.94, 'protein': 19.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 61, 'calories': 96, 'carbs': 0.1, 'fat': 1.0, 'protein': 20.3, 'servingSize': 1.0, 'servingUnit': 'can'},
{'ref_id': 61, 'calories': 128, 'carbs': 0.1, 'fat': 1.3, 'protein': 27.0, 'servingSize': 1.0, 'servingUnit': 'can'},
{'ref_id': 62, 'calories': 385, 'carbs': 99.6, 'fat': 0.32, 'protein': 0.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 62, 'calories': 724, 'carbs': 187.2, 'fat': 0.6, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 62, 'calories': 15, 'carbs': 4.0, 'fat': 0.0, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'teaspoon'},
{'ref_id': 63, 'calories': 260, 'carbs': 25.5, 'fat': 13.6, 'protein': 8.88, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 63, 'calories': 109, 'carbs': 10.7, 'fat': 5.7, 'protein': 3.7, 'servingSize': 3.0, 'servingUnit': 'pieces'},
{'ref_id': 63, 'calories': 1589, 'carbs': 155.8, 'fat': 83.1, 'protein': 54.3, 'servingSize': 1.0, 'servingUnit': 'order'},
{'ref_id': 64, 'calories': 174, 'carbs': 32.5, 'fat': 3.19, 'protein': 3.84, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 64, 'calories': 231, 'carbs': 43.2, 'fat': 4.2, 'protein': 5.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 65, 'calories': 174, 'carbs': 15.8, 'fat': 9.04, 'protein': 7.38, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 65, 'calories': 247, 'carbs': 22.4, 'fat': 12.8, 'protein': 10.5, 'servingSize': 1.0, 'servingUnit': 'piece'},
{'ref_id': 66, 'calories': 229, 'carbs': 31.5, 'fat': 9.01, 'protein': 5.59, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 66, 'calories': 289, 'carbs': 39.7, 'fat': 11.4, 'protein': 7.0, 'servingSize': 1.0, 'servingUnit': 'piece'},
{'ref_id': 67, 'calories': 155, 'carbs': 0.0, 'fat': 6.39, 'protein': 22.8, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 67, 'calories': 440, 'carbs': 0.0, 'fat': 18.1, 'protein': 64.8, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 68, 'calories': 176, 'carbs': 0.0, 'fat': 6.36, 'protein': 27.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 68, 'calories': 813, 'carbs': 0.0, 'fat': 29.4, 'protein': 128.0, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 69, 'calories': 122, 'carbs': 0.0, 'fat': 2.48, 'protein': 23.4, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 69, 'calories': 842, 'carbs': 0.0, 'fat': 17.1, 'protein': 161.5, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 70, 'calories': 123, 'carbs': 0.0, 'fat': 2.41, 'protein': 23.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 70, 'calories': 969, 'carbs': 0.0, 'fat': 19.0, 'protein': 186.8, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 71, 'calories': 219, 'carbs': 0.0, 'fat': 11.4, 'protein': 27.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 71, 'calories': 788, 'carbs': 0.0, 'fat': 41.0, 'protein': 98.3, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 72, 'calories': 145, 'carbs': 0.0, 'fat': 5.32, 'protein': 22.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 72, 'calories': 761, 'carbs': 0.0, 'fat': 27.9, 'protein': 119.2, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 73, 'calories': 254, 'carbs': 43.1, 'fat': 3.55, 'protein': 12.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 73, 'calories': 82, 'carbs': 13.8, 'fat': 1.1, 'protein': 3.9, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 74, 'calories': 176, 'carbs': 0.0, 'fat': 6.36, 'protein': 27.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 74, 'calories': 813, 'carbs': 0.0, 'fat': 29.4, 'protein': 128.0, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 75, 'calories': 155, 'carbs': 0.0, 'fat': 6.39, 'protein': 22.8, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 75, 'calories': 440, 'carbs': 0.0, 'fat': 18.1, 'protein': 64.8, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 76, 'calories': 122, 'carbs': 0.0, 'fat': 2.48, 'protein': 23.4, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 76, 'calories': 842, 'carbs': 0.0, 'fat': 17.1, 'protein': 161.5, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 77, 'calories': 123, 'carbs': 0.0, 'fat': 2.41, 'protein': 23.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 77, 'calories': 969, 'carbs': 0.0, 'fat': 19.0, 'protein': 186.8, 'servingSize': 1.0, 'servingUnit': 'roast'},
{'ref_id': 78, 'calories': 145, 'carbs': 0.0, 'fat': 5.32, 'protein': 22.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 78, 'calories': 761, 'carbs': 0.0, 'fat': 27.9, 'protein': 119.2, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 79, 'calories': 219, 'carbs': 0.0, 'fat': 11.4, 'protein': 27.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 79, 'calories': 788, 'carbs': 0.0, 'fat': 41.0, 'protein': 98.3, 'servingSize': 1.0, 'servingUnit': 'steak'},
{'ref_id': 80, 'calories': 37, 'carbs': 7.92, 'fat': 0.47, 'protein': 0.81, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 81, 'calories': 326, 'carbs': 2.07, 'fat': 24.3, 'protein': 24.5, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 81, 'calories': 317, 'carbs': 2.0, 'fat': 23.6, 'protein': 23.8, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 82, 'calories': 157, 'carbs': 6.86, 'fat': 11.0, 'protein': 7.81, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 82, 'calories': 101, 'carbs': 4.4, 'fat': 7.1, 'protein': 5.0, 'servingSize': 0.2, 'servingUnit': 'cup'},
{'ref_id': 82, 'calories': 203, 'carbs': 8.8, 'fat': 14.2, 'protein': 10.1, 'servingSize': 0.5, 'servingUnit': 'cup'},
{'ref_id': 82, 'calories': 405, 'carbs': 17.7, 'fat': 28.4, 'protein': 20.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 83, 'calories': 393, 'carbs': 1.44, 'fat': 31.0, 'protein': 27.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 83, 'calories': 86, 'carbs': 0.3, 'fat': 6.8, 'protein': 5.9, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 83, 'calories': 43, 'carbs': 0.2, 'fat': 3.4, 'protein': 2.9, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 84, 'calories': 249, 'carbs': 63.9, 'fat': 0.92, 'protein': 3.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 84, 'calories': 371, 'carbs': 95.2, 'fat': 1.4, 'protein': 4.9, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 84, 'calories': 21, 'carbs': 5.4, 'fat': 0.1, 'protein': 0.3, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 85, 'calories': 17, 'carbs': 3.24, 'fat': 0.26, 'protein': 1.24, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 85, 'calories': 99, 'carbs': 18.8, 'fat': 1.5, 'protein': 7.2, 'servingSize': 1.0, 'servingUnit': 'bunch'},
{'ref_id': 86, 'calories': 34, 'carbs': 8.16, 'fat': 0.18, 'protein': 0.82, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 86, 'calories': 54, 'carbs': 13.1, 'fat': 0.3, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 86, 'calories': 53, 'carbs': 12.7, 'fat': 0.3, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 86, 'calories': 277, 'carbs': 66.4, 'fat': 1.5, 'protein': 6.7, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 86, 'calories': 188, 'carbs': 45.0, 'fat': 1.0, 'protein': 4.5, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 86, 'calories': 150, 'carbs': 36.0, 'fat': 0.8, 'protein': 3.6, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 86, 'calories': 35, 'carbs': 8.3, 'fat': 0.2, 'protein': 0.8, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 86, 'calories': 23, 'carbs': 5.6, 'fat': 0.1, 'protein': 0.6, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 86, 'calories': 19, 'carbs': 4.5, 'fat': 0.1, 'protein': 0.5, 'servingSize': 1.0, 'servingUnit': 'wedge'},
{'ref_id': 86, 'calories': 47, 'carbs': 11.3, 'fat': 0.2, 'protein': 1.1, 'servingSize': 10.0, 'servingUnit': 'pieces'},
{'ref_id': 87, 'calories': 47, 'carbs': 11.8, 'fat': 0.15, 'protein': 0.91, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 87, 'calories': 78, 'carbs': 19.5, 'fat': 0.2, 'protein': 1.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 87, 'calories': 66, 'carbs': 16.5, 'fat': 0.2, 'protein': 1.3, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 88, 'calories': 43, 'carbs': 5.18, 'fat': 0.95, 'protein': 3.38, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 88, 'calories': 106, 'carbs': 12.7, 'fat': 2.3, 'protein': 8.3, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 89, 'calories': 57, 'carbs': 15.1, 'fat': 0.16, 'protein': 0.38, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 89, 'calories': 80, 'carbs': 21.1, 'fat': 0.2, 'protein': 0.5, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 89, 'calories': 84, 'carbs': 22.3, 'fat': 0.2, 'protein': 0.6, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 89, 'calories': 101, 'carbs': 26.9, 'fat': 0.3, 'protein': 0.7, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 89, 'calories': 131, 'carbs': 34.7, 'fat': 0.4, 'protein': 0.9, 'servingSize': 1.0, 'servingUnit': 'each'},
{'ref_id': 90, 'calories': 260, 'carbs': 25.5, 'fat': 13.6, 'protein': 8.88, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 90, 'calories': 109, 'carbs': 10.7, 'fat': 5.7, 'protein': 3.7, 'servingSize': 3.0, 'servingUnit': 'pieces'},
{'ref_id': 90, 'calories': 1589, 'carbs': 155.8, 'fat': 83.1, 'protein': 54.3, 'servingSize': 1.0, 'servingUnit': 'order'},
{'ref_id': 91, 'calories': 34, 'carbs': 4.92, 'fat': 0.08, 'protein': 3.43, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 91, 'calories': 84, 'carbs': 12.1, 'fat': 0.2, 'protein': 8.4, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 92, 'calories': 29, 'carbs': 6.74, 'fat': 0.19, 'protein': 1.44, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 92, 'calories': 10, 'carbs': 2.4, 'fat': 0.1, 'protein': 0.5, 'servingSize': 2.0, 'servingUnit': 'tablespoon'},
{'ref_id': 93, 'calories': 50, 'carbs': 4.9, 'fat': 1.9, 'protein': 3.36, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 93, 'calories': 122, 'carbs': 12.0, 'fat': 4.7, 'protein': 8.2, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 94, 'calories': 328, 'carbs': 3.37, 'fat': 28.7, 'protein': 13.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 94, 'calories': 61, 'carbs': 0.6, 'fat': 5.3, 'protein': 2.5, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 95, 'calories': 322, 'carbs': 2.15, 'fat': 26.2, 'protein': 18.2, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 95, 'calories': 279, 'carbs': 1.9, 'fat': 22.7, 'protein': 15.8, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 96, 'calories': 346, 'carbs': 2.63, 'fat': 28.1, 'protein': 19.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 96, 'calories': 640, 'carbs': 4.9, 'fat': 52.0, 'protein': 35.7, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 96, 'calories': 278, 'carbs': 2.1, 'fat': 22.6, 'protein': 15.5, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 96, 'calories': 644, 'carbs': 4.9, 'fat': 52.3, 'protein': 35.9, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 97, 'calories': 60, 'carbs': 4.63, 'fat': 3.2, 'protein': 3.27, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 97, 'calories': 149, 'carbs': 11.5, 'fat': 8.0, 'protein': 8.1, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 98, 'calories': 169, 'carbs': 0.93, 'fat': 10.4, 'protein': 16.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 98, 'calories': 47, 'carbs': 0.3, 'fat': 2.9, 'protein': 4.7, 'servingSize': 1.0, 'servingUnit': 'link'},
{'ref_id': 98, 'calories': 760, 'carbs': 4.2, 'fat': 46.8, 'protein': 75.1, 'servingSize': 1.0, 'servingUnit': 'package'},
{'ref_id': 99, 'calories': 385, 'carbs': 99.6, 'fat': 0.32, 'protein': 0.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 99, 'calories': 724, 'carbs': 187.2, 'fat': 0.6, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 99, 'calories': 15, 'carbs': 4.0, 'fat': 0.0, 'protein': 0.0, 'servingSize': 1.0, 'servingUnit': 'teaspoon'},
{'ref_id': 100, 'calories': 220, 'carbs': 0.0, 'fat': 11.6, 'protein': 27.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 100, 'calories': 341, 'carbs': 0.0, 'fat': 18.0, 'protein': 42.0, 'servingSize': 1.0, 'servingUnit': 'paired cooked w'},
{'ref_id': 101, 'calories': 121, 'carbs': 2.36, 'fat': 3.68, 'protein': 19.6, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 101, 'calories': 20, 'carbs': 0.4, 'fat': 0.6, 'protein': 3.2, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 102, 'calories': 375, 'carbs': 6.35, 'fat': 31.1, 'protein': 17.5, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 102, 'calories': 60, 'carbs': 1.0, 'fat': 5.0, 'protein': 2.8, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 103, 'calories': 31, 'carbs': 6.27, 'fat': 0.34, 'protein': 2.57, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 103, 'calories': 24, 'carbs': 4.8, 'fat': 0.3, 'protein': 2.0, 'servingSize': 1.0, 'servingUnit': 'cup'},
{'ref_id': 104, 'calories': 31, 'carbs': 7.63, 'fat': 0.22, 'protein': 0.64, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 105, 'calories': 117, 'carbs': 26.8, 'fat': 0.55, 'protein': 1.11, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 106, 'calories': 55, 'carbs': 2.36, 'fat': 0.0, 'protein': 10.7, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 106, 'calories': 19, 'carbs': 0.8, 'fat': 0.0, 'protein': 3.6, 'servingSize': 1.0, 'servingUnit': 'egg'},
{'ref_id': 107, 'calories': 334, 'carbs': 1.02, 'fat': 28.8, 'protein': 16.2, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 107, 'calories': 57, 'carbs': 0.2, 'fat': 4.9, 'protein': 2.8, 'servingSize': 1.0, 'servingUnit': 'egg'},
{'ref_id': 108, 'calories': 148, 'carbs': 0.96, 'fat': 9.96, 'protein': 12.4, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 108, 'calories': 74, 'carbs': 0.5, 'fat': 5.0, 'protein': 6.2, 'servingSize': 1.0, 'servingUnit': 'egg'},
{'ref_id': 109, 'calories': 500, 'carbs': 2.1, 'fat': 36.5, 'protein': 40.9, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 109, 'calories': 32, 'carbs': 0.1, 'fat': 2.3, 'protein': 2.6, 'servingSize': 1.0, 'servingUnit': 'slice'},
{'ref_id': 110, 'calories': 366, 'carbs': 77.3, 'fat': 1.48, 'protein': 10.9, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 111, 'calories': 358, 'carbs': 73.2, 'fat': 1.48, 'protein': 13.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 112, 'calories': 362, 'carbs': 74.6, 'fat': 1.7, 'protein': 12.0, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 113, 'calories': 370, 'carbs': 71.2, 'fat': 2.73, 'protein': 15.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 114, 'calories': 363, 'carbs': 72.8, 'fat': 1.65, 'protein': 14.3, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 115, 'calories': 359, 'carbs': 79.8, 'fat': 1.3, 'protein': 6.94, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 116, 'calories': 364, 'carbs': 80.8, 'fat': 1.74, 'protein': 6.2, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 117, 'calories': 44, 'carbs': 9.93, 'fat': 0.1, 'protein': 0.94, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 117, 'calories': 87, 'carbs': 19.6, 'fat': 0.2, 'protein': 1.9, 'servingSize': 1.0, 'servingUnit': 'Onion'},
{'ref_id': 118, 'calories': 38, 'carbs': 8.61, 'fat': 0.05, 'protein': 0.83, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 118, 'calories': 54, 'carbs': 12.3, 'fat': 0.1, 'protein': 1.2, 'servingSize': 1.0, 'servingUnit': 'Onion'},
{'ref_id': 119, 'calories': 85, 'carbs': 20.1, 'fat': 0.22, 'protein': 0.73, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 119, 'calories': 94, 'carbs': 22.1, 'fat': 0.2, 'protein': 0.8, 'servingSize': 1.0, 'servingUnit': 'Banana'},
{'ref_id': 120, 'calories': 97, 'carbs': 23.0, 'fat': 0.29, 'protein': 0.74, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 120, 'calories': 112, 'carbs': 26.5, 'fat': 0.3, 'protein': 0.9, 'servingSize': 1.0, 'servingUnit': 'Banana'},
{'ref_id': 121, 'calories': 143, 'carbs': 28.2, 'fat': 0.38, 'protein': 6.62, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 122, 'calories': 366, 'carbs': 32.9, 'fat': 3.33, 'protein': 51.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 123, 'calories': 452, 'carbs': 27.9, 'fat': 20.7, 'protein': 38.6, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 124, 'calories': 365, 'carbs': 75.5, 'fat': 3.85, 'protein': 7.19, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 125, 'calories': 358, 'carbs': 80.1, 'fat': 1.16, 'protein': 6.69, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 126, 'calories': 358, 'carbs': 77.2, 'fat': 1.64, 'protein': 8.75, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 127, 'calories': 35, 'carbs': 7.68, 'fat': 0.13, 'protein': 0.89, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 128, 'calories': 85, 'carbs': 20.1, 'fat': 0.22, 'protein': 0.73, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 128, 'calories': 94, 'carbs': 22.1, 'fat': 0.2, 'protein': 0.8, 'servingSize': 1.0, 'servingUnit': 'Banana'},
{'ref_id': 129, 'calories': 97, 'carbs': 23.0, 'fat': 0.29, 'protein': 0.74, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 129, 'calories': 112, 'carbs': 26.5, 'fat': 0.3, 'protein': 0.9, 'servingSize': 1.0, 'servingUnit': 'Banana'},
{'ref_id': 130, 'calories': 62, 'carbs': 14.8, 'fat': 0.21, 'protein': 0.19, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 131, 'calories': 60, 'carbs': 14.7, 'fat': 0.1, 'protein': 0.1, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 132, 'calories': 59, 'carbs': 14.2, 'fat': 0.14, 'protein': 0.27, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 133, 'calories': 61, 'carbs': 14.8, 'fat': 0.15, 'protein': 0.13, 'servingSize': 100, 'servingUnit': 'g'},
{'ref_id': 134, 'calories': 65, 'carbs': 15.7, 'fat': 0.16, 'protein': 0.15, 'servingSize': 100, 'servingUnit': 'g'}]
    