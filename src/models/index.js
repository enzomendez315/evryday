// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "Breakfast",
  "LUNCH": "Lunch",
  "DINNER": "Dinner",
  "SNACK": "Snack"
};

const { User, NutritionLog, Meal, MealToFood, FoodItem, FoodItemServing, ExerciseLog, ExerciseSet, ExerciseRoutine, ExerciseType, SleepLog, HealthScore, GoalLog, ExerciseLogExerciseRoutine, ExerciseSetExerciseType, ExerciseSetExerciseRoutine, ExerciseRoutineExerciseType } = initSchema(schema);

export {
  User,
  NutritionLog,
  Meal,
  MealToFood,
  FoodItem,
  FoodItemServing,
  ExerciseLog,
  ExerciseSet,
  ExerciseRoutine,
  ExerciseType,
  SleepLog,
  HealthScore,
  GoalLog,
  ExerciseLogExerciseRoutine,
  ExerciseSetExerciseType,
  ExerciseSetExerciseRoutine,
  ExerciseRoutineExerciseType,
  MealPeriod
};