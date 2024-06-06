import { DataStore } from 'aws-amplify/datastore';
import { ExerciseRoutine, ExerciseType, ExerciseSet, ExerciseRoutineExerciseType, ExerciseSetExerciseType } from '../models';

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
    // creates a new routine object
    let routine = new ExerciseRoutine({
        userId: userId,
        name: routineName,
    });
    let exerciseTypes = [];
    // loops through all exercise types in a routine
    exerciseData_.forEach(async (exercise) => {
        let exerciseType = new ExerciseType({
            name: exercise.name,
            target: exercise.muscleGroup,
            exerciseroutine: routine,
        });
        // saves the type of exercise if it is new?
        // TODO: make sure there aren't repeat saves to database
        await DataStore.save(exerciseType);
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
        }

        // saves the relationship between the exercise type and the routine
        let routineExerciseType = new ExerciseRoutineExerciseType({
            exerciseRoutine: routine,
            exerciseType: exerciseType,
        });
        await DataStore.save(routineExerciseType);
    });
    // puts the list of exercise types into the routine object
    routine.ExerciseTypes = exerciseTypes;
    // saves routine to database
    try {
        const successVar = await DataStore.save(routine);
        console.log("saved routine: ");
        console.log(successVar);
    }
    catch (err) {
        console.log(err);
    }
    console.log("we are done with 0 bugs congratulashions!");
    return routine;
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
    let tempRoutineData = [];
    // for each routine, get the exercise types and their sets
    for (let routine of routines) {
        const routineExerciseTypes = await DataStore.query(ExerciseRoutineExerciseType, (r) => r.exerciseRoutineId.eq(routine.id));
        let exercises = [];
        for (let routineExerciseType of routineExerciseTypes) {
            const exerciseType = await DataStore.query(ExerciseType, (e) => e.id.eq(routineExerciseType.exerciseTypeId));

            const linkExerciseSets = await DataStore.query(ExerciseSetExerciseType, (s) => s.exerciseTypeId.eq(exerciseType[0].id));

            let tempSets = [];
            for (let set of linkExerciseSets) {
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