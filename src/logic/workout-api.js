import { DataStore } from 'aws-amplify/datastore';
import { ExerciseLog, ExerciseRoutine, ExerciseType, ExerciseSet, ExerciseRoutineExerciseType, ExerciseSetExerciseType, ExerciseSetExerciseRoutine, DailyGoals } from '../models';
import { getActiveDate } from '../logic/date-time';

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
export async function createExerciseRoutine(userId, date, routineName, exerciseData_) {
    DEBUG && console.log(`createExerciseRoutine userId: ${userId} Date: ${date}`);
    // gets the exercise log for the user and date
    let userLog = await DataStore.query(ExerciseLog, (u) => u.and(c => [
        u.userId.eq(userId),
        u.date.eq(date)
    ]));

    // if no log is found, create a new one
    DEBUG && console.log(`createExerciseRoutine userLog length: ${userLog.length}`);
    if (userLog.length === 0) {
        DEBUG && console.log("No log found in createExerciseRoutine, creating one now");
        // replace empty query with the new created log
        userLog = await createNewLog(userId, date);
        DEBUG && console.log(`created new log: ${userLog[0].id}`);
    }

    // check that the routine has a unique name
    const routines = await DataStore.query(ExerciseRoutine, (r) => r.userId.eq(userId));
    for (let routine of routines) {
        if (routine.name === routineName) {
            console.log("routine name already exists");
            return;
        }
    }

    // create and save a new routine object
    let routine = new ExerciseRoutine({
        userId: userId,
        name: routineName,
    });
    
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

// called when user adds the first exercise routine of the day
// called in createExerciseRoutine if no exercise log is found
async function createNewLog(userId, date) {
    DEBUG && console.log(`createNewLog userId: ${userId} Date: ${date}`);

    // Create a new ExerciseLog entry
    const log = new ExerciseLog({
        userId: userId, // Current user's ID
        date: getActiveDate(),
        durationMinutes: 0,
        caloriesBurned: 0, 
        exerciseRoutineID: routineId || null,
    });

    // Save the ExerciseLog in the DataStore
    await DataStore.save(log);

    return [log]; // this is in array because queries return arrays
}

// deletes the routine then adds it again
// TODO: make this more efficient by updating the routine instead of deleting it
// deleting it will probably mess with tracking exercise logs in the future
// TODO: figure out how a past routine will be saved
// (e.g. if a routine is updated, will the past exercise logs for that routine also be updated?)
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

    // get the sets for the routine
    const linkExerciseSetsRoutine = await DataStore.query(ExerciseSetExerciseRoutine, (s) => s.exerciseRoutineId.eq(routine.id));

    // delete the sets
    for (let routineSet of linkExerciseSetsRoutine) {
        const exerciseSet = await DataStore.query(ExerciseSet, (s) => s.id.eq(routineSet.exerciseSetId));
        // delete the exercise set
        await DataStore.delete(exerciseSet[0]);
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
export async function syncExerciseRoutines(userId, setRoutineData, setIsDataLoading) {
    // get all the routines for the user
    const routines = await DataStore.query(ExerciseRoutine, (r) => r.userId.eq(userId));
    let tempRoutineData = [];
    // for each routine, get the exercise types and their sets
    for (let routine of routines) {
        const routineExerciseTypes = await DataStore.query(ExerciseRoutineExerciseType, (r) => r.exerciseRoutineId.eq(routine.id));
        let exercises = [];

        // loops through all exercise types in a routine
        for (let routineExerciseType of routineExerciseTypes) {
            // gets the type from exercise
            const exerciseType = await DataStore.query(ExerciseType, (e) => e.id.eq(routineExerciseType.exerciseTypeId));

            // gets the sets associated with the routine
            const linkExerciseSetsRoutine = await DataStore.query(ExerciseSetExerciseRoutine, (s) => s.and(c =>
                [s.exerciseRoutineId.eq(routine.id),]
            ));

            // gets the sets for the exercise type
            const linkExerciseSetsType = await DataStore.query(ExerciseSetExerciseType, (s) => s.and(c =>
                [s.exerciseTypeId.eq(exerciseType[0].id),]
            ));

            let tempSets = [];
            // queries the sets for the routine and exercise type
            for (let set of linkExerciseSetsRoutine) {
                for (let setType of linkExerciseSetsType) {
                    if (set.exerciseSetId === setType.exerciseSetId) {
                        const exerciseSet = await DataStore.query(ExerciseSet, (s) => s.id.eq(set.exerciseSetId));
                        tempSets.push(exerciseSet[0]);
                    }
                }

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
    setIsDataLoading(false);
}

// Save the exercise log and sets in the database
export async function saveWorkoutLog(userId, routineId, routineName, workoutData, secondsElapsed) {
    try {
        if (!userId) {
            throw new Error("User ID is missing");
        }
        
        // Create a new ExerciseLog entry
        const newExerciseLog = new ExerciseLog({
            userId: userId, // Current user's ID
            date: new Date().toISOString().split('T')[0], // Current date
            durationMinutes: Math.floor(secondsElapsed / 60),
            caloriesBurned: 0, 
            exerciseRoutineID: routineId || null,
        });

        // Save the ExerciseLog in the DataStore
        const savedLog = await DataStore.save(newExerciseLog);

        // Loop through the workoutData to save each exercise set
        for (let exercise of workoutData) {
            for (let set of exercise.sets) {
                const newExerciseSet = new ExerciseSet({
                    reps: set.reps,
                    time: '0', // Placeholder, replace with your time logic
                    weight: set.weight,
                    exerciseLogID: savedLog.id, // Relating the set to the saved log
                });
                await DataStore.save(newExerciseSet);
            }
        }

        return savedLog;

    } catch (error) {
        console.error("Error saving workout data:", error);
        throw error;
    }
}

// Fetch workout history
export const fetchWorkoutHistory = async () => {
    try {
        // Fetch all ExerciseLog entries
        const logs = await DataStore.query(ExerciseLog);
        
        // Map the logs to the desired format
        const formattedLogs = logs.map(log => ({
            id: log.id,
            date: log.date, // Assuming date is already formatted as string in your schema
            durationMinutes: log.durationMinutes,
        }));
        console.log("Formatted ExerciseLogs:", formattedLogs); // Log the formatted data

        return formattedLogs;

    } catch (error) {
        console.error('Error fetching workout history:', error);
        throw error;
    }
};

// calculates the exercise score based on the user's activity
export async function getExerciseScore(userId, date) {
    try {
        // check if there is a dailyGoals object
        const dailyGoals = await DataStore.query(DailyGoals, (d) => d.userId.eq(userId));
        let score = 0;

        if (dailyGoals.length > 0 && dailyGoals[0].dailyWorkout) {
            try {
                // intentionally throw an error to trigger the catch block
                // this is until we add date field to exercise routines
                throw new Error("Skipping routine query and going to the catch block");
                
                // check if there is activity for the current day
                const routines = await DataStore.query(ExerciseRoutine, (r) => 
                    r.userId.eq(userId).ExerciseRoutine.date.eq(date)
                );

                // all or nothing score
                if (routines.length > 0) {
                    score = 100;
                }
            } catch (error) {
                console.log(`Error querying routines for user ${userId} on ${today}:`, error);
            }
            
            return score;
        } else {
            // don't count exercise for health score
            return null;
        }
    } catch (error) {
        console.log(`Error querying daily goals for user ${userId}:`, error);
        return null;
    }
}

export async function syncMostRecentWorkoutLogForDate(date = new Date()) {
    try {
      // Convert the provided date to YYYY-MM-DD format
      const formattedDate = date.toISOString().split('T')[0];
  
      // Fetch workout logs for that day sorted by descending order of time
      const [mostRecentWorkoutLog] = await DataStore.query(ExerciseLog, (c) =>
        c.date.eq(formattedDate), { sort: s => s.createdAt('DESCENDING'), limit: 1 }
      );
  
      return mostRecentWorkoutLog;
    } catch (error) {
      console.error("Error fetching workout log for the day:", error);
      throw error;
    }
  }
