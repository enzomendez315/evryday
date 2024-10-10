// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "Breakfast",
  "LUNCH": "Lunch",
  "DINNER": "Dinner",
  "SNACK": "Snack"
};

const { DailyGoals, User, NutritionLog, Meal, MealToFood, FoodBarcode, FoodItem, FoodItemServing, UserFavoriteFood, Recipe, RecipeToFood, ExerciseLog, ExerciseRoutine, ExerciseType, ExerciseSet, SleepLog, HealthScore, GoalLog } = initSchema(schema);

export {
  DailyGoals,
  User,
  NutritionLog,
  Meal,
  MealToFood,
  FoodBarcode,
  FoodItem,
  FoodItemServing,
  UserFavoriteFood,
  Recipe,
  RecipeToFood,
  ExerciseLog,
  ExerciseRoutine,
  ExerciseType,
  ExerciseSet,
  SleepLog,
  HealthScore,
  GoalLog,
  MealPeriod
};