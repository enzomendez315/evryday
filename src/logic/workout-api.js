import { DataStore } from 'aws-amplify/datastore';
import { ExerciseLog, ExerciseRoutine, ExerciseType } from '../models';

export async function getExerciseTypes(searchTerm) {
    // Display exercise list if exercise doesn't exist
    if(!searchTerm){
        const exercises = await DataStore.query(ExerciseType);
        return exercises;
    }
    // Exercise was found in the list
    const exercises = await DataStore.query(ExerciseType, (c) => c.name.contains(searchTerm));
    return exercises;
}

async function createExerciseType(exerciseType) {
    if (!exerciseType){
        return;
    }
    try {
        await DataStore.save(
            new ExerciseType({
                "name": exerciseType
            })
        );
        console.log('Successfully added: ', exerciseType);
    } catch (err) {
        console.log(err);
    }
}

export async function addExerciseLogEntry(logDetails) {
    try {
        await DataStore.save(
            new ExerciseLog({
                "userId": "45c8ce94-ae73-4f6e-a2c8-dd5a87707c4d",
                "date": "Lorem ipsum dolor sit amet",
                "exerciseRoutine": "Lorem ipsum dolor sit amet",
                "exerciseType": "1020",
                "durationMinutes": 123.45,
                "caloriesBurned": 12
            })
        );
    } catch (err){
        console.log(err);
    }
}

export async function getAllExerciseLogEntries() {
    try {
        const models = await DataStore.query(ExerciseLog);
        return models;
    } catch (err) {
        console.log(err);
    }
}