import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum MealPeriod {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner",
  CUSTOM = "custom"
}



type EagerExerciseSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reps?: string | null;
  readonly time?: string | null;
  readonly weight?: string | null;
  readonly ExerciseType?: (ExerciseSetExerciseType | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reps?: string | null;
  readonly time?: string | null;
  readonly weight?: string | null;
  readonly ExerciseType: AsyncCollection<ExerciseSetExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseSet = LazyLoading extends LazyLoadingDisabled ? EagerExerciseSet : LazyExerciseSet

export declare const ExerciseSet: (new (init: ModelInit<ExerciseSet>) => ExerciseSet) & {
  copyOf(source: ExerciseSet, mutator: (draft: MutableModel<ExerciseSet>) => MutableModel<ExerciseSet> | void): ExerciseSet;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly age?: number | null;
  readonly height?: number | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly age?: number | null;
  readonly height?: number | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerNutritionLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NutritionLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly Meals?: (Meal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNutritionLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NutritionLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly Meals: AsyncCollection<Meal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NutritionLog = LazyLoading extends LazyLoadingDisabled ? EagerNutritionLog : LazyNutritionLog

export declare const NutritionLog: (new (init: ModelInit<NutritionLog>) => NutritionLog) & {
  copyOf(source: NutritionLog, mutator: (draft: MutableModel<NutritionLog>) => MutableModel<NutritionLog> | void): NutritionLog;
}

type EagerMeal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealPeriod: MealPeriod | keyof typeof MealPeriod;
  readonly foodItems?: (MealFoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly nutritionLogMealsId?: string | null;
}

type LazyMeal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealPeriod: MealPeriod | keyof typeof MealPeriod;
  readonly foodItems: AsyncCollection<MealFoodItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly nutritionLogMealsId?: string | null;
}

export declare type Meal = LazyLoading extends LazyLoadingDisabled ? EagerMeal : LazyMeal

export declare const Meal: (new (init: ModelInit<Meal>) => Meal) & {
  copyOf(source: Meal, mutator: (draft: MutableModel<Meal>) => MutableModel<Meal> | void): Meal;
}

type EagerFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
  readonly serving?: string | null;
  readonly meals?: (MealFoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
  readonly serving?: string | null;
  readonly meals: AsyncCollection<MealFoodItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodItem = LazyLoading extends LazyLoadingDisabled ? EagerFoodItem : LazyFoodItem

export declare const FoodItem: (new (init: ModelInit<FoodItem>) => FoodItem) & {
  copyOf(source: FoodItem, mutator: (draft: MutableModel<FoodItem>) => MutableModel<FoodItem> | void): FoodItem;
}

type EagerExerciseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly durationMinutes?: number | null;
  readonly caloriesBurned?: number | null;
  readonly ExerciseRoutines?: (ExerciseLogExerciseRoutine | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly durationMinutes?: number | null;
  readonly caloriesBurned?: number | null;
  readonly ExerciseRoutines: AsyncCollection<ExerciseLogExerciseRoutine>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseLog = LazyLoading extends LazyLoadingDisabled ? EagerExerciseLog : LazyExerciseLog

export declare const ExerciseLog: (new (init: ModelInit<ExerciseLog>) => ExerciseLog) & {
  copyOf(source: ExerciseLog, mutator: (draft: MutableModel<ExerciseLog>) => MutableModel<ExerciseLog> | void): ExerciseLog;
}

type EagerExerciseRoutine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseRoutine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name?: string | null;
  readonly exerciselogs?: (ExerciseLogExerciseRoutine | null)[] | null;
  readonly ExerciseTypes?: (ExerciseRoutineExerciseType | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseRoutine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseRoutine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name?: string | null;
  readonly exerciselogs: AsyncCollection<ExerciseLogExerciseRoutine>;
  readonly ExerciseTypes: AsyncCollection<ExerciseRoutineExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseRoutine = LazyLoading extends LazyLoadingDisabled ? EagerExerciseRoutine : LazyExerciseRoutine

export declare const ExerciseRoutine: (new (init: ModelInit<ExerciseRoutine>) => ExerciseRoutine) & {
  copyOf(source: ExerciseRoutine, mutator: (draft: MutableModel<ExerciseRoutine>) => MutableModel<ExerciseRoutine> | void): ExerciseRoutine;
}

type EagerExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly target?: string | null;
  readonly exercisesets?: (ExerciseSetExerciseType | null)[] | null;
  readonly exerciseroutines?: (ExerciseRoutineExerciseType | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly target?: string | null;
  readonly exercisesets: AsyncCollection<ExerciseSetExerciseType>;
  readonly exerciseroutines: AsyncCollection<ExerciseRoutineExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseType = LazyLoading extends LazyLoadingDisabled ? EagerExerciseType : LazyExerciseType

export declare const ExerciseType: (new (init: ModelInit<ExerciseType>) => ExerciseType) & {
  copyOf(source: ExerciseType, mutator: (draft: MutableModel<ExerciseType>) => MutableModel<ExerciseType> | void): ExerciseType;
}

type EagerSleepLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SleepLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly hoursSlept: number;
  readonly sleepQuality?: number | null;
  readonly dreamJournal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySleepLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SleepLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly hoursSlept: number;
  readonly sleepQuality?: number | null;
  readonly dreamJournal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SleepLog = LazyLoading extends LazyLoadingDisabled ? EagerSleepLog : LazySleepLog

export declare const SleepLog: (new (init: ModelInit<SleepLog>) => SleepLog) & {
  copyOf(source: SleepLog, mutator: (draft: MutableModel<SleepLog>) => MutableModel<SleepLog> | void): SleepLog;
}

type EagerHealthScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly score: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHealthScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly score: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HealthScore = LazyLoading extends LazyLoadingDisabled ? EagerHealthScore : LazyHealthScore

export declare const HealthScore: (new (init: ModelInit<HealthScore>) => HealthScore) & {
  copyOf(source: HealthScore, mutator: (draft: MutableModel<HealthScore>) => MutableModel<HealthScore> | void): HealthScore;
}

type EagerGoalLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly weight: number;
  readonly hoursSlept: number;
  readonly dailyCalories: number;
  readonly dailyExercise: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoalLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoalLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly weight: number;
  readonly hoursSlept: number;
  readonly dailyCalories: number;
  readonly dailyExercise: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GoalLog = LazyLoading extends LazyLoadingDisabled ? EagerGoalLog : LazyGoalLog

export declare const GoalLog: (new (init: ModelInit<GoalLog>) => GoalLog) & {
  copyOf(source: GoalLog, mutator: (draft: MutableModel<GoalLog>) => MutableModel<GoalLog> | void): GoalLog;
}

type EagerExerciseSetExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseSetExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseSetId?: string | null;
  readonly exerciseTypeId?: string | null;
  readonly exerciseSet: ExerciseSet;
  readonly exerciseType: ExerciseType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseSetExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseSetExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseSetId?: string | null;
  readonly exerciseTypeId?: string | null;
  readonly exerciseSet: AsyncItem<ExerciseSet>;
  readonly exerciseType: AsyncItem<ExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseSetExerciseType = LazyLoading extends LazyLoadingDisabled ? EagerExerciseSetExerciseType : LazyExerciseSetExerciseType

export declare const ExerciseSetExerciseType: (new (init: ModelInit<ExerciseSetExerciseType>) => ExerciseSetExerciseType) & {
  copyOf(source: ExerciseSetExerciseType, mutator: (draft: MutableModel<ExerciseSetExerciseType>) => MutableModel<ExerciseSetExerciseType> | void): ExerciseSetExerciseType;
}

type EagerMealFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealFoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealId?: string | null;
  readonly foodItemId?: string | null;
  readonly meal: Meal;
  readonly foodItem: FoodItem;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMealFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealFoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealId?: string | null;
  readonly foodItemId?: string | null;
  readonly meal: AsyncItem<Meal>;
  readonly foodItem: AsyncItem<FoodItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MealFoodItem = LazyLoading extends LazyLoadingDisabled ? EagerMealFoodItem : LazyMealFoodItem

export declare const MealFoodItem: (new (init: ModelInit<MealFoodItem>) => MealFoodItem) & {
  copyOf(source: MealFoodItem, mutator: (draft: MutableModel<MealFoodItem>) => MutableModel<MealFoodItem> | void): MealFoodItem;
}

type EagerExerciseLogExerciseRoutine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLogExerciseRoutine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseLogId?: string | null;
  readonly exerciseRoutineId?: string | null;
  readonly exerciseLog: ExerciseLog;
  readonly exerciseRoutine: ExerciseRoutine;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseLogExerciseRoutine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLogExerciseRoutine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseLogId?: string | null;
  readonly exerciseRoutineId?: string | null;
  readonly exerciseLog: AsyncItem<ExerciseLog>;
  readonly exerciseRoutine: AsyncItem<ExerciseRoutine>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseLogExerciseRoutine = LazyLoading extends LazyLoadingDisabled ? EagerExerciseLogExerciseRoutine : LazyExerciseLogExerciseRoutine

export declare const ExerciseLogExerciseRoutine: (new (init: ModelInit<ExerciseLogExerciseRoutine>) => ExerciseLogExerciseRoutine) & {
  copyOf(source: ExerciseLogExerciseRoutine, mutator: (draft: MutableModel<ExerciseLogExerciseRoutine>) => MutableModel<ExerciseLogExerciseRoutine> | void): ExerciseLogExerciseRoutine;
}

type EagerExerciseRoutineExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseRoutineExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseRoutineId?: string | null;
  readonly exerciseTypeId?: string | null;
  readonly exerciseRoutine: ExerciseRoutine;
  readonly exerciseType: ExerciseType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseRoutineExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseRoutineExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseRoutineId?: string | null;
  readonly exerciseTypeId?: string | null;
  readonly exerciseRoutine: AsyncItem<ExerciseRoutine>;
  readonly exerciseType: AsyncItem<ExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseRoutineExerciseType = LazyLoading extends LazyLoadingDisabled ? EagerExerciseRoutineExerciseType : LazyExerciseRoutineExerciseType

export declare const ExerciseRoutineExerciseType: (new (init: ModelInit<ExerciseRoutineExerciseType>) => ExerciseRoutineExerciseType) & {
  copyOf(source: ExerciseRoutineExerciseType, mutator: (draft: MutableModel<ExerciseRoutineExerciseType>) => MutableModel<ExerciseRoutineExerciseType> | void): ExerciseRoutineExerciseType;
}