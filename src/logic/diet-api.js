import { generateClient } from 'aws-amplify/api';
// import { createNutritionLog } from '../graphql/mutations';
// import { listNutritionLogs } from '../graphql/queries';
import { DataStore } from 'aws-amplify/datastore';
import { NutritionLog, FoodItem, Meal } from '../models';

const client = generateClient();

export async function getFoodItems(searchTerm){
    if(!searchTerm){
        // console.log("NO Search term used");
        const foodItems = await DataStore.query(FoodItem);
        // console.log(JSON.stringify(foodItems));
        return foodItems;
    }
    // console.log(`Search term: ${searchTerm}`);
    const foodItems = await DataStore.query(FoodItem, (c) => c.name.contains(searchTerm));
    // console.log(JSON.stringify(foodItems));
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


export function nutritionLogTest(){
    // addNutritionLogEntry(foodItemDetails);
    // getAllNutritionLogEntries();
}

export async function addNutritionLogEntry(logDetails) {
    try {
        // const log = await client.graphql({
        //     query: createNutritionLog,
        //     variables: {input: foodItemDetails}
        // });
        // console.log('Successfully added: ', logDetails);
        await DataStore.save(
            new NutritionLog({
                "userId": "45c8ce94-ae73-4f6e-a2c8-dd5a87707c4d",
                "date": "Lorem ipsum dolor sit amet",
                "foodName": "Lorem ipsum dolor sit amet",
                "calories": 1020,
                "protein": 123.45,
                "carbs": 123.45,
                "fat": 123.45
            })
        );
    } catch (err){
        console.log(err);
    }
}

export async function getAllNutritionLogEntries() {
    try {
        const models = await DataStore.query(NutritionLog);
        // console.log(models);
        return models;
        // const listAllFoodLogs = await client.graphql({ query: listNutritionLogs });
        // console.log(listAllFoodLogs.data);  
        // return listAllFoodLogs; 
    } catch (err){
        console.log(err);
    }
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
    //Uncomment to clear the Food Items Table on app start
    // await DataStore.delete(FoodItem, Predicates.ALL);

    const foods = await getFoodItems();
    if(foods.length == 0){
        console.log("initialised food items");
        bulkCreateFood(foodsList);
    }
}
