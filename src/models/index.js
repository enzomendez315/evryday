// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "Breakfast",
  "LUNCH": "Lunch",
  "DINNER": "Dinner",
  "SNACK": "Snack"
};

const { DailyGoals, User, NutritionLog, Meal, MealToFood, FoodItem, FoodItemServing, Recipe, RecipeToFood, ExerciseLog, ExerciseSet, ExerciseRoutine, ExerciseType, SleepLog, HealthScore, GoalLog, ExerciseLogExerciseRoutine, ExerciseLogExerciseSet, ExerciseSetExerciseType, ExerciseSetExerciseRoutine, ExerciseRoutineExerciseType } = initSchema(schema);

export {
  DailyGoals,
  User,
  NutritionLog,
  Meal,
  MealToFood,
  FoodItem,
  FoodItemServing,
  Recipe,
  RecipeToFood,
  ExerciseLog,
  ExerciseSet,
  ExerciseRoutine,
  ExerciseType,
  SleepLog,
  HealthScore,
  GoalLog,
  ExerciseLogExerciseRoutine,
  ExerciseLogExerciseSet,
  ExerciseSetExerciseType,
  ExerciseSetExerciseRoutine,
  ExerciseRoutineExerciseType,
  MealPeriod
};