import { DataStore } from 'aws-amplify/datastore';
import { ExerciseRoutine, ExerciseType, ExerciseSet, ExerciseRoutineExerciseType, ExerciseSetExerciseType, ExerciseSetExerciseRoutine } from '../models';

// user creates an exercise routine
// a routine is made up of a list of exerciseSets
// an exerciseSet contains an exerciseType and a number of reps/weight/time
// an exercise routine is tracked in an exercise

const exampleRoutineData = [
    {
        name: 'Hypertrophy 1',
        exercises: [
            {
                name: 'Squat',
                sets: [
                    { setNumber: 1, weight: '185lb', reps: '10' },
                    { setNumber: 2, weight: '185lb', reps: '10' },
                    { setNumber: 3, weight: '185lb', reps: '10' },
                ],
                muscleGroup: 'Leg',
            },
            {
                name: 'Chest Press',
                sets: [
                    { setNumber: 1, weight: '100lb', reps: '12' },
                    { setNumber: 2, weight: '100lb', reps: '12' },
                    { setNumber: 3, weight: '100lb', reps: '12' },
                ],
                muscleGroup: 'Chest',
            },
            {
                name: 'Seated Row',
                sets: [
                    { setNumber: 1, weight: '110lb', reps: '12' },
                    { setNumber: 2, weight: '110lb', reps: '12' },
                    { setNumber: 3, weight: '110lb', reps: '12' },
                ],
                muscleGroup: 'Back',
            },
            {
                name: 'Leg Extension',
                sets: [
                    { setNumber: 1, weight: '80lb', reps: '15' },
                    { setNumber: 2, weight: '80lb', reps: '15' },
                    { setNumber: 3, weight: '80lb', reps: '15' },
                ],
                muscleGroup: 'Leg',
            },
            {
                name: 'Incline Chest Press',
                sets: [
                    { setNumber: 1, weight: '30lb', reps: '12' },
                    { setNumber: 2, weight: '30lb', reps: '12' },
                    { setNumber: 3, weight: '30lb', reps: '12' },
                ],
                muscleGroup: 'Chest',
            },
        ],
        lastPerformed: '1 day ago',
    },
];

const DEBUG = false;

// create a flow of data that is able to save data in the database
// in this order when given data in the form of exampleRoutineData
// 1. creates exercise sets and saves them in the relationship to exercise types
// 2. connects that exercise type with its list of sets to the routine
// 3. saves the routine in the database with a list of exercise types and their sets
// 4. returns the routine
export async function createExerciseRoutine(userId, routineName, exerciseData_) {
    // check that the routine has a unique name
    const routines = await DataStore.query(ExerciseRoutine, (r) => r.userId.eq(userId));
    for (let routine of routines) {
        if (routine.name === routineName) {
            console.log("routine name already exists");
            return;
        }
    }
    // creates a new routine object
    let routine = new ExerciseRoutine({
        userId: userId,
        name: routineName,
    });
    // saves the routine object
    await DataStore.save(routine);

    let exerciseTypes = [];
    // loops through all exercise types in a routine

    for (let exercise of exerciseData_) {
        // checks if exercise Type already exists
        const exerciseTypeCheck = await DataStore.query(ExerciseType, (e) => e.name.eq(exercise.name));
        let exerciseType;
        // if it doesn't exist, create a new exercise type
        if (exerciseTypeCheck.length === 0) {
            exerciseType = new ExerciseType({
                name: exercise.name,
                target: exercise.muscleGroup,
            });
            await DataStore.save(exerciseType);
        } else {
            exerciseType = exerciseTypeCheck[0];
        }
        exerciseTypes.push(exerciseType);

        // goes through each set for the exercise type
        for (let set of exercise.sets) {
            let exerciseSet = new ExerciseSet({
                weight: set.weight,
                reps: set.reps,
                time: '0',
                exerciseType: exerciseType,
            });
            // saves each set
            await DataStore.save(exerciseSet);
            console.log("saved routineExerciseType: ");

            let setExerciseType = new ExerciseSetExerciseType({
                exerciseSet: exerciseSet,
                exerciseType: exerciseType,
            });
            // saves the relationship between the exercise set and the exercise type
            await DataStore.save(setExerciseType);

            // save the relationship between the set and the routine
            let routineExerciseSet = new ExerciseSetExerciseRoutine({
                exerciseSet: exerciseSet,
                exerciseRoutine: routine,
            });
            await DataStore.save(routineExerciseSet);
        }

        // saves the relationship between the exercise type and the routine
        let routineExerciseType = new ExerciseRoutineExerciseType({
            exerciseRoutine: routine,
            exerciseType: exerciseType,
        });
        await DataStore.save(routineExerciseType);
    }
    // puts the list of exercise types into the routine object
    routine.ExerciseTypes = exerciseTypes;
    // saves routine to database
    try {
        await DataStore.save(routine);
    }
    catch (err) {
        console.log(err);
    }
    console.log("we are done with 0 bugs congratulashions!");
}

// deletes the routine then adds it again
export async function updateExerciseRoutine(routineId, routineName, exerciseData_) {
    // get the routine
    const routine = await DataStore.query(ExerciseRoutine, routineId);
    await deleteExerciseRoutine(routineId);
    // create the routine again
    await createExerciseRoutine(routine.userId, routineName, exerciseData_);
    console.log("just updated the routine");
}

// deletes the routine, the sets, the links between the sets and types, and the links between the types and the routine
export async function deleteExerciseRoutine(routineId) {
    // get the routine
    const routine = await DataStore.query(ExerciseRoutine, routineId);
    // get the exercise types for the routine
    const routineExerciseTypes = await DataStore.query(ExerciseRoutineExerciseType, (r) => r.exerciseRoutineId.eq(routine.id));
    // for each exercise type, get the sets
    for (let routineExerciseType of routineExerciseTypes) {
        const linkExerciseSets = await DataStore.query(ExerciseSetExerciseType, (s) => s.exerciseTypeId.eq(routineExerciseType.exerciseTypeId));
        // delete the sets
        for (let set of linkExerciseSets) {
            await DataStore.delete(set);

            const exerciseSet = await DataStore.query(ExerciseSet, (s) => s.id.eq(set.exerciseSetId));
            // delete the exercise set
            await DataStore.delete(exerciseSet[0]);
        }
    }
    // delete the routine
    await DataStore.delete(routine);
    console.log("deleted routine: " + routineId);
}

// write a function that gets the routine data from the database
// the data it returns should be in the form of exampleRoutineData
// the parameters will be userId and setRoutineData
// it will get all routines for the user
// and then for each routine, get the exercise types and their sets
// and update the UI by calling setRoutineData with that data
export async function syncExerciseRoutines(userId, setRoutineData) {
    // get all the routines for the user
    const routines = await DataStore.query(ExerciseRoutine, (r) => r.userId.eq(userId));
    console.log("the routines are: ");
    console.log(routines.length);
    let tempRoutineData = [];
    // for each routine, get the exercise types and their sets
    for (let routine of routines) {
        const routineExerciseTypes = await DataStore.query(ExerciseRoutineExerciseType, (r) => r.exerciseRoutineId.eq(routine.id));
        let exercises = [];
        // loops through all exercise types in a routine
        for (let routineExerciseType of routineExerciseTypes) {
            // gets the type from exercise
            const exerciseType = await DataStore.query(ExerciseType, (e) => e.id.eq(routineExerciseType.exerciseTypeId));

            // gets the sets associated with the exercise type and routine
            const linkExerciseSetsRoutine = await DataStore.query(ExerciseSetExerciseRoutine, (s) => s.and(c =>
                [s.exerciseRoutineId.eq(routine.id),]
            ));

            let tempSets = [];
            for (let set of linkExerciseSetsRoutine) {
                const exerciseSet = await DataStore.query(ExerciseSet, (s) => s.id.eq(set.exerciseSetId));
                tempSets.push(exerciseSet[0]);
            }

            exercises.push({
                name: exerciseType[0].name,
                muscleGroup: exerciseType[0].target,
                sets: tempSets,
            });
        }
        tempRoutineData.push({
            name: routine.name,
            id: routine.id,
            exercises: exercises,
        });
    }
    setRoutineData(tempRoutineData);
}