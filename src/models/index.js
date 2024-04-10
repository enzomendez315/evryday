// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, NutritionLog, ExerciseLog, SleepLog, HealthScore, GoalLog } = initSchema(schema);

export {
  User,
  NutritionLog,
  ExerciseLog,
  SleepLog,
  HealthScore,
  GoalLog
};