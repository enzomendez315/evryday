import { generateClient } from 'aws-amplify/api';
import { createNutritionLog } from '../graphql/mutations';
import { listNutritionLogs } from '../graphql/queries';
// import { DataStore } from 'aws-amplify/datastore';
// import { NutritionLog } from './models';

const client = generateClient();

const foodItemDetails = {
    userId: '45c8ce94-ae73-4f6e-a2c8-dd5a87707c4d', //Will need to change to customer id
    date: 'today',
    foodName:'Rice', 
    calories: 200, 
    protein: 10, 
    carbs: 20, 
    fat: 5
}
export function nutritionLogTest(){
    addNutritionLogEntry(foodItemDetails);
    getAllNutritionLogEntries();
}

export async function addNutritionLogEntry(logDetails) {
    try {
        const log = await client.graphql({
            query: createNutritionLog,
            variables: {input: foodItemDetails}
        });
        // console.log('Successfully added: ', logDetails);
        // await DataStore.save(
        //     new NutritionLog({
        //         "userId": "45c8ce94-ae73-4f6e-a2c8-dd5a87707c4d",
        //         "date": "Lorem ipsum dolor sit amet",
        //         "foodName": "Lorem ipsum dolor sit amet",
        //         "calories": 1020,
        //         "protein": 123.45,
        //         "carbs": 123.45,
        //         "fat": 123.45
        //     })
        // );
    } catch (err){
        console.log(err);
    }
}

export async function getAllNutritionLogEntries() {
    try {
        // const models = await DataStore.query(NutritionLog);
        // console.log(models);
        // return models;
        const listAllFoodLogs = await client.graphql({ query: listNutritionLogs });
        console.log(listAllFoodLogs.data);  
        return listAllFoodLogs; 
    } catch (err){
        console.log(err);
    }
}
