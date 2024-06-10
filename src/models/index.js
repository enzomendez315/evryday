// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealPeriod = {
  "BREAKFAST": "breakfast",
  "LUNCH": "lunch",
  "DINNER": "dinner",
  "CUSTOM": "custom"
};

const { ExerciseSet, User, NutritionLog, Meal, FoodItem, ExerciseLog, ExerciseRoutine, ExerciseType, SleepLog, HealthScore, GoalLog, ExerciseSetExerciseType, ExerciseSetExerciseRoutine, MealFoodItem, ExerciseLogExerciseRoutine, ExerciseRoutineExerciseType } = initSchema(schema);

export {
  ExerciseSet,
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
  ExerciseSetExerciseType,
  ExerciseSetExerciseRoutine,
  MealFoodItem,
  ExerciseLogExerciseRoutine,
  ExerciseRoutineExerciseType,
  MealPeriod
};