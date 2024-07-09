// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "Breakfast",
  "LUNCH": "Lunch",
  "DINNER": "Dinner",
  "SNACK": "Snack"
};

const { ExerciseSet, User, NutritionLog, Meal, MealToFood, FoodItem, FoodItemServing, ExerciseLog, ExerciseRoutine, ExerciseType, SleepLog, HealthScore, GoalLog, ExerciseSetExerciseType, ExerciseSetExerciseRoutine, ExerciseLogExerciseRoutine, ExerciseRoutineExerciseType } = initSchema(schema);

export {
  ExerciseSet,
  User,
  NutritionLog,
  Meal,
  MealToFood,
  FoodItem,
  FoodItemServing,
  ExerciseLog,
  ExerciseRoutine,
  ExerciseType,
  SleepLog,
  HealthScore,
  GoalLog,
  ExerciseSetExerciseType,
  ExerciseSetExerciseRoutine,
  ExerciseLogExerciseRoutine,
  ExerciseRoutineExerciseType,
  MealPeriod
};