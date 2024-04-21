// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "breakfast",
  "LUNCH": "lunch",
  "DINNER": "dinner",
  "CUSTOM": "custom"
};

const { User, NutritionLog, Meal, FoodItem, ExerciseLog, ExerciseRoutine, ExerciseType, SleepLog, HealthScore, GoalLog } = initSchema(schema);

export {
  User,
  NutritionLog,
  Meal,
  FoodItem,
  ExerciseLog,
  ExerciseRoutine,
  ExerciseType,
  SleepLog,
  HealthScore,
  GoalLog,
  MealPeriod
};