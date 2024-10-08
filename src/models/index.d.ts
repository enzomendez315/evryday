import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum MealPeriod {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack"
}



type EagerDailyGoals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyGoals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly minSleep?: number | null;
  readonly dailyWorkout?: boolean | null;
  readonly proteinGoal?: number | null;
  readonly carbGoal?: number | null;
  readonly fatGoal?: number | null;
  readonly calorieGoal?: number | null;
  readonly nutritionBuffer?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDailyGoals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyGoals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly minSleep?: number | null;
  readonly dailyWorkout?: boolean | null;
  readonly proteinGoal?: number | null;
  readonly carbGoal?: number | null;
  readonly fatGoal?: number | null;
  readonly calorieGoal?: number | null;
  readonly nutritionBuffer?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DailyGoals = LazyLoading extends LazyLoadingDisabled ? EagerDailyGoals : LazyDailyGoals

export declare const DailyGoals: (new (init: ModelInit<DailyGoals>) => DailyGoals) & {
  copyOf(source: DailyGoals, mutator: (draft: MutableModel<DailyGoals>) => MutableModel<DailyGoals> | void): DailyGoals;
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
  readonly gender?: string | null;
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
  readonly gender?: string | null;
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
  readonly waterIntake?: number | null;
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
  readonly waterIntake?: number | null;
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
  readonly foodItems?: (MealToFood | null)[] | null;
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
  readonly foodItems: AsyncCollection<MealToFood>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly nutritionLogMealsId?: string | null;
}

export declare type Meal = LazyLoading extends LazyLoadingDisabled ? EagerMeal : LazyMeal

export declare const Meal: (new (init: ModelInit<Meal>) => Meal) & {
  copyOf(source: Meal, mutator: (draft: MutableModel<Meal>) => MutableModel<Meal> | void): Meal;
}

type EagerMealToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealId: string;
  readonly foodId: string;
  readonly servingId: string;
  readonly servingAmount: number;
  readonly meal?: Meal | null;
  readonly foodItem?: FoodItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMealToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mealId: string;
  readonly foodId: string;
  readonly servingId: string;
  readonly servingAmount: number;
  readonly meal: AsyncItem<Meal | undefined>;
  readonly foodItem: AsyncItem<FoodItem | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MealToFood = LazyLoading extends LazyLoadingDisabled ? EagerMealToFood : LazyMealToFood

export declare const MealToFood: (new (init: ModelInit<MealToFood>) => MealToFood) & {
  copyOf(source: MealToFood, mutator: (draft: MutableModel<MealToFood>) => MutableModel<MealToFood> | void): MealToFood;
}

type EagerFoodBarcode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodBarcode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly barcode: string;
  readonly foodItem?: FoodItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemBarcodesId?: string | null;
}

type LazyFoodBarcode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodBarcode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly barcode: string;
  readonly foodItem: AsyncItem<FoodItem | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemBarcodesId?: string | null;
}

export declare type FoodBarcode = LazyLoading extends LazyLoadingDisabled ? EagerFoodBarcode : LazyFoodBarcode

export declare const FoodBarcode: (new (init: ModelInit<FoodBarcode>) => FoodBarcode) & {
  copyOf(source: FoodBarcode, mutator: (draft: MutableModel<FoodBarcode>) => MutableModel<FoodBarcode> | void): FoodBarcode;
}

type EagerFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly name: string;
  readonly meals?: (MealToFood | null)[] | null;
  readonly recipes?: (RecipeToFood | null)[] | null;
  readonly favoritedBy?: (UserFavoriteFood | null)[] | null;
  readonly servingOptions?: (FoodItemServing | null)[] | null;
  readonly barcodes?: (FoodBarcode | null)[] | null;
  readonly brand?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly name: string;
  readonly meals: AsyncCollection<MealToFood>;
  readonly recipes: AsyncCollection<RecipeToFood>;
  readonly favoritedBy: AsyncCollection<UserFavoriteFood>;
  readonly servingOptions: AsyncCollection<FoodItemServing>;
  readonly barcodes: AsyncCollection<FoodBarcode>;
  readonly brand?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodItem = LazyLoading extends LazyLoadingDisabled ? EagerFoodItem : LazyFoodItem

export declare const FoodItem: (new (init: ModelInit<FoodItem>) => FoodItem) & {
  copyOf(source: FoodItem, mutator: (draft: MutableModel<FoodItem>) => MutableModel<FoodItem> | void): FoodItem;
}

type EagerFoodItemServing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItemServing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly foodItem?: FoodItem | null;
  readonly servingSize: number;
  readonly servingUnit?: string | null;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemServingOptionsId?: string | null;
}

type LazyFoodItemServing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItemServing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly foodItem: AsyncItem<FoodItem | undefined>;
  readonly servingSize: number;
  readonly servingUnit?: string | null;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemServingOptionsId?: string | null;
}

export declare type FoodItemServing = LazyLoading extends LazyLoadingDisabled ? EagerFoodItemServing : LazyFoodItemServing

export declare const FoodItemServing: (new (init: ModelInit<FoodItemServing>) => FoodItemServing) & {
  copyOf(source: FoodItemServing, mutator: (draft: MutableModel<FoodItemServing>) => MutableModel<FoodItemServing> | void): FoodItemServing;
}

type EagerUserFavoriteFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFavoriteFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly foodItem?: FoodItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemFavoritedById?: string | null;
}

type LazyUserFavoriteFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFavoriteFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly foodItem: AsyncItem<FoodItem | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodItemFavoritedById?: string | null;
}

export declare type UserFavoriteFood = LazyLoading extends LazyLoadingDisabled ? EagerUserFavoriteFood : LazyUserFavoriteFood

export declare const UserFavoriteFood: (new (init: ModelInit<UserFavoriteFood>) => UserFavoriteFood) & {
  copyOf(source: UserFavoriteFood, mutator: (draft: MutableModel<UserFavoriteFood>) => MutableModel<UserFavoriteFood> | void): UserFavoriteFood;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly foodItems?: (RecipeToFood | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly foodItems: AsyncCollection<RecipeToFood>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

type EagerRecipeToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeId: string;
  readonly foodId: string;
  readonly servingId: string;
  readonly servingAmount: number;
  readonly recipe?: Recipe | null;
  readonly foodItem?: FoodItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipeToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeId: string;
  readonly foodId: string;
  readonly servingId: string;
  readonly servingAmount: number;
  readonly recipe: AsyncItem<Recipe | undefined>;
  readonly foodItem: AsyncItem<FoodItem | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecipeToFood = LazyLoading extends LazyLoadingDisabled ? EagerRecipeToFood : LazyRecipeToFood

export declare const RecipeToFood: (new (init: ModelInit<RecipeToFood>) => RecipeToFood) & {
  copyOf(source: RecipeToFood, mutator: (draft: MutableModel<RecipeToFood>) => MutableModel<RecipeToFood> | void): RecipeToFood;
}

type EagerExerciseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly exerciseRoutine?: (ExerciseRoutine | null)[] | null;
  readonly durationMinutes?: number | null;
  readonly caloriesBurned?: number | null;
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
  readonly exerciseRoutine: AsyncCollection<ExerciseRoutine>;
  readonly durationMinutes?: number | null;
  readonly caloriesBurned?: number | null;
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
  readonly exerciseType?: (ExerciseType | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseLogExerciseRoutineId?: string | null;
}

type LazyExerciseRoutine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseRoutine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name?: string | null;
  readonly exerciseType: AsyncCollection<ExerciseType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseLogExerciseRoutineId?: string | null;
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
  readonly exerciseSet?: (ExerciseSet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseRoutineExerciseTypeId?: string | null;
}

type LazyExerciseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly target?: string | null;
  readonly exerciseSet: AsyncCollection<ExerciseSet>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseRoutineExerciseTypeId?: string | null;
}

export declare type ExerciseType = LazyLoading extends LazyLoadingDisabled ? EagerExerciseType : LazyExerciseType

export declare const ExerciseType: (new (init: ModelInit<ExerciseType>) => ExerciseType) & {
  copyOf(source: ExerciseType, mutator: (draft: MutableModel<ExerciseType>) => MutableModel<ExerciseType> | void): ExerciseType;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseTypeExerciseSetId?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseTypeExerciseSetId?: string | null;
}

export declare type ExerciseSet = LazyLoading extends LazyLoadingDisabled ? EagerExerciseSet : LazyExerciseSet

export declare const ExerciseSet: (new (init: ModelInit<ExerciseSet>) => ExerciseSet) & {
  copyOf(source: ExerciseSet, mutator: (draft: MutableModel<ExerciseSet>) => MutableModel<ExerciseSet> | void): ExerciseSet;
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
  readonly sleepQuality: number;
  readonly dreamJournal?: string | null;
  readonly restfulnessScore: number;
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
  readonly sleepQuality: number;
  readonly dreamJournal?: string | null;
  readonly restfulnessScore: number;
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