import { DataStore } from 'aws-amplify/datastore';
import { ExerciseLog, ExerciseRoutine, ExerciseType } from '../models';

// user creates an exercise routine
// a routine is made up of a list of exerciseSets
// an exerciseSet contains an exerciseType and a number of reps/weight/time
// an exercise routine is tracked in an exercise

const DEBUG = false;

export async function getExerciseTypes(searchTerm) {
    // Display exercise list if exercise doesn't exist
    if (!searchTerm) {
        const exercises = await DataStore.query(ExerciseType);
        return exercises;
    }
    // Exercise was found in the list
    const exercises = await DataStore.query(ExerciseType, (c) => c.name.contains(searchTerm));
    return exercises;
}

// called one time to create the exercise types in the database
// TODO: give users option for creating custom workouts
export async function createExerciseType(name_, target_) {
    if (!exerciseType) {
        return;
    }
    try {
        await DataStore.save(
            new ExerciseType({
                "name": name_,
                "target": target_
            })
        );
        DEBUG && console.log('Successfully added exerciseType: ', exerciseType);
    } catch (err) {
        console.log(err);
    }
}

// called during the creation of a new exercise routine
export async function createExerciseSets(exerciseType, reps = 1, weight = 0, time = 0) {
    try {
        await DataStore.save(
            new ExerciseSet({
                "exerciseType": exerciseType,
                "reps": reps,
                "weight": weight,
                "time": time
            })
        );
        DEBUG && console.log('Successfully added exercieSet: ', exerciseType);
    } catch (err) {
        console.log(err);
    }
}

// creates a new routine for the user
// the input is a list of exerciseSets
export async function createExerciseRoutine(userID_, exercises_) {
    DEBUG && console.log("Making a new exercise routine ");
    if (await getSleepEntry(userID_, date_) === null) {
        try {
            const sleeplog = await DataStore.save(
                new ExerciseRoutine({
                    userId: userID_, //int
                    exercises: exercises_, //list of exerciseSets
                })
            );
            DEBUG && console.log('sleep log saved successfully!', sleeplog);
        } catch (error) {
            console.log('Error saving sleep log', error);
        }
    } else {
        DEBUG && console.log("Entry already exists for this date and user");
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
    } catch (err) {
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