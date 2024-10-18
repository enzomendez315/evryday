/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDailyGoalsInput = {
  id?: string | null,
  userId?: string | null,
  minSleep?: number | null,
  dailyWorkout?: boolean | null,
  proteinGoal?: number | null,
  carbGoal?: number | null,
  fatGoal?: number | null,
  calorieGoal?: number | null,
  nutritionBuffer?: number | null,
  _version?: number | null,
};

export type ModelDailyGoalsConditionInput = {
  userId?: ModelIDInput | null,
  minSleep?: ModelFloatInput | null,
  dailyWorkout?: ModelBooleanInput | null,
  proteinGoal?: ModelIntInput | null,
  carbGoal?: ModelIntInput | null,
  fatGoal?: ModelIntInput | null,
  calorieGoal?: ModelIntInput | null,
  nutritionBuffer?: ModelIntInput | null,
  and?: Array< ModelDailyGoalsConditionInput | null > | null,
  or?: Array< ModelDailyGoalsConditionInput | null > | null,
  not?: ModelDailyGoalsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DailyGoals = {
  __typename: "DailyGoals",
  id: string,
  userId?: string | null,
  minSleep?: number | null,
  dailyWorkout?: boolean | null,
  proteinGoal?: number | null,
  carbGoal?: number | null,
  fatGoal?: number | null,
  calorieGoal?: number | null,
  nutritionBuffer?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDailyGoalsInput = {
  id: string,
  userId?: string | null,
  minSleep?: number | null,
  dailyWorkout?: boolean | null,
  proteinGoal?: number | null,
  carbGoal?: number | null,
  fatGoal?: number | null,
  calorieGoal?: number | null,
  nutritionBuffer?: number | null,
  _version?: number | null,
};

export type DeleteDailyGoalsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  name: string,
  age?: number | null,
  height?: number | null,
  weight?: number | null,
  gender?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  name: string,
  age?: number | null,
  height?: number | null,
  weight?: number | null,
  gender?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  age?: number | null,
  height?: number | null,
  weight?: number | null,
  gender?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateNutritionLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  waterIntake?: number | null,
  _version?: number | null,
};

export type ModelNutritionLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  waterIntake?: ModelIntInput | null,
  and?: Array< ModelNutritionLogConditionInput | null > | null,
  or?: Array< ModelNutritionLogConditionInput | null > | null,
  not?: ModelNutritionLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type NutritionLog = {
  __typename: "NutritionLog",
  id: string,
  userId: string,
  date: string,
  Meals?: ModelMealConnection | null,
  waterIntake?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMealConnection = {
  __typename: "ModelMealConnection",
  items:  Array<Meal | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Meal = {
  __typename: "Meal",
  id: string,
  mealPeriod: MealPeriod,
  foodItems?: ModelMealToFoodConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  nutritionLogMealsId?: string | null,
};

export enum MealPeriod {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
  Snack = "Snack",
}


export type ModelMealToFoodConnection = {
  __typename: "ModelMealToFoodConnection",
  items:  Array<MealToFood | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MealToFood = {
  __typename: "MealToFood",
  id: string,
  mealId: string,
  foodId: string,
  servingId: string,
  servingAmount: number,
  meal?: Meal | null,
  foodItem?: FoodItem | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type FoodItem = {
  __typename: "FoodItem",
  id: string,
  owner: string,
  name: string,
  meals?: ModelMealToFoodConnection | null,
  recipes?: ModelRecipeToFoodConnection | null,
  favoritedBy?: ModelUserFavoriteFoodConnection | null,
  servingOptions?: ModelFoodItemServingConnection | null,
  barcodes?: ModelFoodBarcodeConnection | null,
  brand?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelRecipeToFoodConnection = {
  __typename: "ModelRecipeToFoodConnection",
  items:  Array<RecipeToFood | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type RecipeToFood = {
  __typename: "RecipeToFood",
  id: string,
  recipeId: string,
  foodId: string,
  servingId: string,
  servingAmount: number,
  recipe?: Recipe | null,
  foodItem?: FoodItem | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  name: string,
  foodItems?: ModelRecipeToFoodConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserFavoriteFoodConnection = {
  __typename: "ModelUserFavoriteFoodConnection",
  items:  Array<UserFavoriteFood | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserFavoriteFood = {
  __typename: "UserFavoriteFood",
  id: string,
  userId: string,
  foodItem?: FoodItem | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  foodItemFavoritedById?: string | null,
};

export type ModelFoodItemServingConnection = {
  __typename: "ModelFoodItemServingConnection",
  items:  Array<FoodItemServing | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FoodItemServing = {
  __typename: "FoodItemServing",
  id: string,
  foodItem?: FoodItem | null,
  servingSize: number,
  servingUnit?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  foodItemServingOptionsId?: string | null,
};

export type ModelFoodBarcodeConnection = {
  __typename: "ModelFoodBarcodeConnection",
  items:  Array<FoodBarcode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FoodBarcode = {
  __typename: "FoodBarcode",
  id: string,
  barcode: string,
  foodItem?: FoodItem | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  foodItemBarcodesId?: string | null,
};

export type UpdateNutritionLogInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  waterIntake?: number | null,
  _version?: number | null,
};

export type DeleteNutritionLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateMealInput = {
  id?: string | null,
  mealPeriod: MealPeriod,
  _version?: number | null,
  nutritionLogMealsId?: string | null,
};

export type ModelMealConditionInput = {
  mealPeriod?: ModelMealPeriodInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nutritionLogMealsId?: ModelIDInput | null,
};

export type ModelMealPeriodInput = {
  eq?: MealPeriod | null,
  ne?: MealPeriod | null,
};

export type UpdateMealInput = {
  id: string,
  mealPeriod?: MealPeriod | null,
  _version?: number | null,
  nutritionLogMealsId?: string | null,
};

export type DeleteMealInput = {
  id: string,
  _version?: number | null,
};

export type CreateMealToFoodInput = {
  id?: string | null,
  mealId: string,
  foodId: string,
  servingId: string,
  servingAmount: number,
  _version?: number | null,
};

export type ModelMealToFoodConditionInput = {
  mealId?: ModelIDInput | null,
  foodId?: ModelIDInput | null,
  servingId?: ModelIDInput | null,
  servingAmount?: ModelFloatInput | null,
  and?: Array< ModelMealToFoodConditionInput | null > | null,
  or?: Array< ModelMealToFoodConditionInput | null > | null,
  not?: ModelMealToFoodConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateMealToFoodInput = {
  id: string,
  mealId?: string | null,
  foodId?: string | null,
  servingId?: string | null,
  servingAmount?: number | null,
  _version?: number | null,
};

export type DeleteMealToFoodInput = {
  id: string,
  _version?: number | null,
};

export type CreateFoodBarcodeInput = {
  id?: string | null,
  barcode: string,
  _version?: number | null,
  foodItemBarcodesId?: string | null,
};

export type ModelFoodBarcodeConditionInput = {
  barcode?: ModelStringInput | null,
  and?: Array< ModelFoodBarcodeConditionInput | null > | null,
  or?: Array< ModelFoodBarcodeConditionInput | null > | null,
  not?: ModelFoodBarcodeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  foodItemBarcodesId?: ModelIDInput | null,
};

export type UpdateFoodBarcodeInput = {
  id: string,
  barcode?: string | null,
  _version?: number | null,
  foodItemBarcodesId?: string | null,
};

export type DeleteFoodBarcodeInput = {
  id: string,
  _version?: number | null,
};

export type CreateFoodItemInput = {
  id?: string | null,
  owner: string,
  name: string,
  brand?: string | null,
  _version?: number | null,
};

export type ModelFoodItemConditionInput = {
  owner?: ModelIDInput | null,
  name?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelFoodItemConditionInput | null > | null,
  or?: Array< ModelFoodItemConditionInput | null > | null,
  not?: ModelFoodItemConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFoodItemInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  brand?: string | null,
  _version?: number | null,
};

export type DeleteFoodItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateFoodItemServingInput = {
  id?: string | null,
  servingSize: number,
  servingUnit?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  _version?: number | null,
  foodItemServingOptionsId?: string | null,
};

export type ModelFoodItemServingConditionInput = {
  servingSize?: ModelFloatInput | null,
  servingUnit?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  and?: Array< ModelFoodItemServingConditionInput | null > | null,
  or?: Array< ModelFoodItemServingConditionInput | null > | null,
  not?: ModelFoodItemServingConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  foodItemServingOptionsId?: ModelIDInput | null,
};

export type UpdateFoodItemServingInput = {
  id: string,
  servingSize?: number | null,
  servingUnit?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  _version?: number | null,
  foodItemServingOptionsId?: string | null,
};

export type DeleteFoodItemServingInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserFavoriteFoodInput = {
  id?: string | null,
  userId: string,
  _version?: number | null,
  foodItemFavoritedById?: string | null,
};

export type ModelUserFavoriteFoodConditionInput = {
  userId?: ModelIDInput | null,
  and?: Array< ModelUserFavoriteFoodConditionInput | null > | null,
  or?: Array< ModelUserFavoriteFoodConditionInput | null > | null,
  not?: ModelUserFavoriteFoodConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  foodItemFavoritedById?: ModelIDInput | null,
};

export type UpdateUserFavoriteFoodInput = {
  id: string,
  userId?: string | null,
  _version?: number | null,
  foodItemFavoritedById?: string | null,
};

export type DeleteUserFavoriteFoodInput = {
  id: string,
  _version?: number | null,
};

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteRecipeInput = {
  id: string,
  _version?: number | null,
};

export type CreateRecipeToFoodInput = {
  id?: string | null,
  recipeId: string,
  foodId: string,
  servingId: string,
  servingAmount: number,
  _version?: number | null,
};

export type ModelRecipeToFoodConditionInput = {
  recipeId?: ModelIDInput | null,
  foodId?: ModelIDInput | null,
  servingId?: ModelIDInput | null,
  servingAmount?: ModelFloatInput | null,
  and?: Array< ModelRecipeToFoodConditionInput | null > | null,
  or?: Array< ModelRecipeToFoodConditionInput | null > | null,
  not?: ModelRecipeToFoodConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRecipeToFoodInput = {
  id: string,
  recipeId?: string | null,
  foodId?: string | null,
  servingId?: string | null,
  servingAmount?: number | null,
  _version?: number | null,
};

export type DeleteRecipeToFoodInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
  _version?: number | null,
};

export type ModelExerciseLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  durationMinutes?: ModelIntInput | null,
  caloriesBurned?: ModelIntInput | null,
  and?: Array< ModelExerciseLogConditionInput | null > | null,
  or?: Array< ModelExerciseLogConditionInput | null > | null,
  not?: ModelExerciseLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ExerciseLog = {
  __typename: "ExerciseLog",
  id: string,
  userId: string,
  date: string,
  exerciseRoutine?: ExerciseRoutine | null,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
  ExerciseRoutines?: ModelExerciseLogExerciseRoutineConnection | null,
  ExerciseSets?: ModelExerciseLogExerciseSetConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ExerciseRoutine = {
  __typename: "ExerciseRoutine",
  id: string,
  userId: string,
  name?: string | null,
  exerciselogs?: ModelExerciseLogExerciseRoutineConnection | null,
  ExerciseTypes?: ModelExerciseRoutineExerciseTypeConnection | null,
  exercisesets?: ModelExerciseSetExerciseRoutineConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExerciseLogExerciseRoutineConnection = {
  __typename: "ModelExerciseLogExerciseRoutineConnection",
  items:  Array<ExerciseLogExerciseRoutine | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseLogExerciseRoutine = {
  __typename: "ExerciseLogExerciseRoutine",
  id: string,
  exerciseLogId: string,
  exerciseRoutineId: string,
  exerciseLog: ExerciseLog,
  exerciseRoutine: ExerciseRoutine,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExerciseRoutineExerciseTypeConnection = {
  __typename: "ModelExerciseRoutineExerciseTypeConnection",
  items:  Array<ExerciseRoutineExerciseType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseRoutineExerciseType = {
  __typename: "ExerciseRoutineExerciseType",
  id: string,
  exerciseRoutineId: string,
  exerciseTypeId: string,
  exerciseRoutine: ExerciseRoutine,
  exerciseType: ExerciseType,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ExerciseType = {
  __typename: "ExerciseType",
  id: string,
  name: string,
  target?: string | null,
  exercisesets?: ModelExerciseSetExerciseTypeConnection | null,
  exerciseroutines?: ModelExerciseRoutineExerciseTypeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExerciseSetExerciseTypeConnection = {
  __typename: "ModelExerciseSetExerciseTypeConnection",
  items:  Array<ExerciseSetExerciseType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseSetExerciseType = {
  __typename: "ExerciseSetExerciseType",
  id: string,
  exerciseSetId: string,
  exerciseTypeId: string,
  exerciseSet: ExerciseSet,
  exerciseType: ExerciseType,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ExerciseSet = {
  __typename: "ExerciseSet",
  id: string,
  reps?: string | null,
  time?: string | null,
  weight?: string | null,
  ExerciseType?: ModelExerciseSetExerciseTypeConnection | null,
  ExerciseRoutines?: ModelExerciseSetExerciseRoutineConnection | null,
  exerciselogs?: ModelExerciseLogExerciseSetConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExerciseSetExerciseRoutineConnection = {
  __typename: "ModelExerciseSetExerciseRoutineConnection",
  items:  Array<ExerciseSetExerciseRoutine | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseSetExerciseRoutine = {
  __typename: "ExerciseSetExerciseRoutine",
  id: string,
  exerciseSetId: string,
  exerciseRoutineId: string,
  exerciseSet: ExerciseSet,
  exerciseRoutine: ExerciseRoutine,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExerciseLogExerciseSetConnection = {
  __typename: "ModelExerciseLogExerciseSetConnection",
  items:  Array<ExerciseLogExerciseSet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseLogExerciseSet = {
  __typename: "ExerciseLogExerciseSet",
  id: string,
  exerciseLogId: string,
  exerciseSetId: string,
  exerciseLog: ExerciseLog,
  exerciseSet: ExerciseSet,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateExerciseLogInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
  _version?: number | null,
};

export type DeleteExerciseLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseSetInput = {
  id?: string | null,
  reps?: string | null,
  time?: string | null,
  weight?: string | null,
  _version?: number | null,
};

export type ModelExerciseSetConditionInput = {
  reps?: ModelStringInput | null,
  time?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  and?: Array< ModelExerciseSetConditionInput | null > | null,
  or?: Array< ModelExerciseSetConditionInput | null > | null,
  not?: ModelExerciseSetConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseSetInput = {
  id: string,
  reps?: string | null,
  time?: string | null,
  weight?: string | null,
  _version?: number | null,
};

export type DeleteExerciseSetInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseRoutineInput = {
  id?: string | null,
  userId: string,
  name?: string | null,
  _version?: number | null,
};

export type ModelExerciseRoutineConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelExerciseRoutineConditionInput | null > | null,
  or?: Array< ModelExerciseRoutineConditionInput | null > | null,
  not?: ModelExerciseRoutineConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseRoutineInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteExerciseRoutineInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseTypeInput = {
  id?: string | null,
  name: string,
  target?: string | null,
  _version?: number | null,
};

export type ModelExerciseTypeConditionInput = {
  name?: ModelStringInput | null,
  target?: ModelStringInput | null,
  and?: Array< ModelExerciseTypeConditionInput | null > | null,
  or?: Array< ModelExerciseTypeConditionInput | null > | null,
  not?: ModelExerciseTypeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseTypeInput = {
  id: string,
  name?: string | null,
  target?: string | null,
  _version?: number | null,
};

export type DeleteExerciseTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateSleepLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  hoursSlept: number,
  sleepQuality: number,
  dreamJournal?: string | null,
  restfulnessScore: number,
  _version?: number | null,
};

export type ModelSleepLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  hoursSlept?: ModelFloatInput | null,
  sleepQuality?: ModelIntInput | null,
  dreamJournal?: ModelStringInput | null,
  restfulnessScore?: ModelIntInput | null,
  and?: Array< ModelSleepLogConditionInput | null > | null,
  or?: Array< ModelSleepLogConditionInput | null > | null,
  not?: ModelSleepLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SleepLog = {
  __typename: "SleepLog",
  id: string,
  userId: string,
  date: string,
  hoursSlept: number,
  sleepQuality: number,
  dreamJournal?: string | null,
  restfulnessScore: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSleepLogInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  hoursSlept?: number | null,
  sleepQuality?: number | null,
  dreamJournal?: string | null,
  restfulnessScore?: number | null,
  _version?: number | null,
};

export type DeleteSleepLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateHealthScoreInput = {
  id?: string | null,
  userId: string,
  date: string,
  score: number,
  _version?: number | null,
};

export type ModelHealthScoreConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelHealthScoreConditionInput | null > | null,
  or?: Array< ModelHealthScoreConditionInput | null > | null,
  not?: ModelHealthScoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type HealthScore = {
  __typename: "HealthScore",
  id: string,
  userId: string,
  date: string,
  score: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateHealthScoreInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  score?: number | null,
  _version?: number | null,
};

export type DeleteHealthScoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateGoalLogInput = {
  id?: string | null,
  userId: string,
  weight: number,
  hoursSlept: number,
  dailyCalories: number,
  dailyExercise: number,
  _version?: number | null,
};

export type ModelGoalLogConditionInput = {
  userId?: ModelIDInput | null,
  weight?: ModelFloatInput | null,
  hoursSlept?: ModelFloatInput | null,
  dailyCalories?: ModelIntInput | null,
  dailyExercise?: ModelIntInput | null,
  and?: Array< ModelGoalLogConditionInput | null > | null,
  or?: Array< ModelGoalLogConditionInput | null > | null,
  not?: ModelGoalLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type GoalLog = {
  __typename: "GoalLog",
  id: string,
  userId: string,
  weight: number,
  hoursSlept: number,
  dailyCalories: number,
  dailyExercise: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateGoalLogInput = {
  id: string,
  userId?: string | null,
  weight?: number | null,
  hoursSlept?: number | null,
  dailyCalories?: number | null,
  dailyExercise?: number | null,
  _version?: number | null,
};

export type DeleteGoalLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateWeightLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  weight: number,
  _version?: number | null,
};

export type ModelWeightLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  and?: Array< ModelWeightLogConditionInput | null > | null,
  or?: Array< ModelWeightLogConditionInput | null > | null,
  not?: ModelWeightLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type WeightLog = {
  __typename: "WeightLog",
  id: string,
  userId: string,
  date: string,
  weight: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateWeightLogInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  weight?: number | null,
  _version?: number | null,
};

export type DeleteWeightLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseLogExerciseRoutineInput = {
  id?: string | null,
  exerciseLogId: string,
  exerciseRoutineId: string,
  _version?: number | null,
};

export type ModelExerciseLogExerciseRoutineConditionInput = {
  exerciseLogId?: ModelIDInput | null,
  exerciseRoutineId?: ModelIDInput | null,
  and?: Array< ModelExerciseLogExerciseRoutineConditionInput | null > | null,
  or?: Array< ModelExerciseLogExerciseRoutineConditionInput | null > | null,
  not?: ModelExerciseLogExerciseRoutineConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseLogExerciseRoutineInput = {
  id: string,
  exerciseLogId?: string | null,
  exerciseRoutineId?: string | null,
  _version?: number | null,
};

export type DeleteExerciseLogExerciseRoutineInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseLogExerciseSetInput = {
  id?: string | null,
  exerciseLogId: string,
  exerciseSetId: string,
  _version?: number | null,
};

export type ModelExerciseLogExerciseSetConditionInput = {
  exerciseLogId?: ModelIDInput | null,
  exerciseSetId?: ModelIDInput | null,
  and?: Array< ModelExerciseLogExerciseSetConditionInput | null > | null,
  or?: Array< ModelExerciseLogExerciseSetConditionInput | null > | null,
  not?: ModelExerciseLogExerciseSetConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseLogExerciseSetInput = {
  id: string,
  exerciseLogId?: string | null,
  exerciseSetId?: string | null,
  _version?: number | null,
};

export type DeleteExerciseLogExerciseSetInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseSetExerciseTypeInput = {
  id?: string | null,
  exerciseSetId: string,
  exerciseTypeId: string,
  _version?: number | null,
};

export type ModelExerciseSetExerciseTypeConditionInput = {
  exerciseSetId?: ModelIDInput | null,
  exerciseTypeId?: ModelIDInput | null,
  and?: Array< ModelExerciseSetExerciseTypeConditionInput | null > | null,
  or?: Array< ModelExerciseSetExerciseTypeConditionInput | null > | null,
  not?: ModelExerciseSetExerciseTypeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseSetExerciseTypeInput = {
  id: string,
  exerciseSetId?: string | null,
  exerciseTypeId?: string | null,
  _version?: number | null,
};

export type DeleteExerciseSetExerciseTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseSetExerciseRoutineInput = {
  id?: string | null,
  exerciseSetId: string,
  exerciseRoutineId: string,
  _version?: number | null,
};

export type ModelExerciseSetExerciseRoutineConditionInput = {
  exerciseSetId?: ModelIDInput | null,
  exerciseRoutineId?: ModelIDInput | null,
  and?: Array< ModelExerciseSetExerciseRoutineConditionInput | null > | null,
  or?: Array< ModelExerciseSetExerciseRoutineConditionInput | null > | null,
  not?: ModelExerciseSetExerciseRoutineConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseSetExerciseRoutineInput = {
  id: string,
  exerciseSetId?: string | null,
  exerciseRoutineId?: string | null,
  _version?: number | null,
};

export type DeleteExerciseSetExerciseRoutineInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseRoutineExerciseTypeInput = {
  id?: string | null,
  exerciseRoutineId: string,
  exerciseTypeId: string,
  _version?: number | null,
};

export type ModelExerciseRoutineExerciseTypeConditionInput = {
  exerciseRoutineId?: ModelIDInput | null,
  exerciseTypeId?: ModelIDInput | null,
  and?: Array< ModelExerciseRoutineExerciseTypeConditionInput | null > | null,
  or?: Array< ModelExerciseRoutineExerciseTypeConditionInput | null > | null,
  not?: ModelExerciseRoutineExerciseTypeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateExerciseRoutineExerciseTypeInput = {
  id: string,
  exerciseRoutineId?: string | null,
  exerciseTypeId?: string | null,
  _version?: number | null,
};

export type DeleteExerciseRoutineExerciseTypeInput = {
  id: string,
  _version?: number | null,
};

export type ModelDailyGoalsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  minSleep?: ModelFloatInput | null,
  dailyWorkout?: ModelBooleanInput | null,
  proteinGoal?: ModelIntInput | null,
  carbGoal?: ModelIntInput | null,
  fatGoal?: ModelIntInput | null,
  calorieGoal?: ModelIntInput | null,
  nutritionBuffer?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDailyGoalsFilterInput | null > | null,
  or?: Array< ModelDailyGoalsFilterInput | null > | null,
  not?: ModelDailyGoalsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDailyGoalsConnection = {
  __typename: "ModelDailyGoalsConnection",
  items:  Array<DailyGoals | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  gender?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNutritionLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  waterIntake?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNutritionLogFilterInput | null > | null,
  or?: Array< ModelNutritionLogFilterInput | null > | null,
  not?: ModelNutritionLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelNutritionLogConnection = {
  __typename: "ModelNutritionLogConnection",
  items:  Array<NutritionLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMealFilterInput = {
  id?: ModelIDInput | null,
  mealPeriod?: ModelMealPeriodInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  nutritionLogMealsId?: ModelIDInput | null,
};

export type ModelMealToFoodFilterInput = {
  id?: ModelIDInput | null,
  mealId?: ModelIDInput | null,
  foodId?: ModelIDInput | null,
  servingId?: ModelIDInput | null,
  servingAmount?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMealToFoodFilterInput | null > | null,
  or?: Array< ModelMealToFoodFilterInput | null > | null,
  not?: ModelMealToFoodFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFoodBarcodeFilterInput = {
  id?: ModelIDInput | null,
  barcode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoodBarcodeFilterInput | null > | null,
  or?: Array< ModelFoodBarcodeFilterInput | null > | null,
  not?: ModelFoodBarcodeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  foodItemBarcodesId?: ModelIDInput | null,
};

export type ModelFoodItemFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  name?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoodItemFilterInput | null > | null,
  or?: Array< ModelFoodItemFilterInput | null > | null,
  not?: ModelFoodItemFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFoodItemConnection = {
  __typename: "ModelFoodItemConnection",
  items:  Array<FoodItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFoodItemServingFilterInput = {
  id?: ModelIDInput | null,
  servingSize?: ModelFloatInput | null,
  servingUnit?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoodItemServingFilterInput | null > | null,
  or?: Array< ModelFoodItemServingFilterInput | null > | null,
  not?: ModelFoodItemServingFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  foodItemServingOptionsId?: ModelIDInput | null,
};

export type ModelUserFavoriteFoodFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFavoriteFoodFilterInput | null > | null,
  or?: Array< ModelUserFavoriteFoodFilterInput | null > | null,
  not?: ModelUserFavoriteFoodFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  foodItemFavoritedById?: ModelIDInput | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items:  Array<Recipe | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRecipeToFoodFilterInput = {
  id?: ModelIDInput | null,
  recipeId?: ModelIDInput | null,
  foodId?: ModelIDInput | null,
  servingId?: ModelIDInput | null,
  servingAmount?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRecipeToFoodFilterInput | null > | null,
  or?: Array< ModelRecipeToFoodFilterInput | null > | null,
  not?: ModelRecipeToFoodFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  durationMinutes?: ModelIntInput | null,
  caloriesBurned?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseLogFilterInput | null > | null,
  or?: Array< ModelExerciseLogFilterInput | null > | null,
  not?: ModelExerciseLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseLogConnection = {
  __typename: "ModelExerciseLogConnection",
  items:  Array<ExerciseLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseSetFilterInput = {
  id?: ModelIDInput | null,
  reps?: ModelStringInput | null,
  time?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseSetFilterInput | null > | null,
  or?: Array< ModelExerciseSetFilterInput | null > | null,
  not?: ModelExerciseSetFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseSetConnection = {
  __typename: "ModelExerciseSetConnection",
  items:  Array<ExerciseSet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseRoutineFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelExerciseRoutineFilterInput | null > | null,
  not?: ModelExerciseRoutineFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseRoutineConnection = {
  __typename: "ModelExerciseRoutineConnection",
  items:  Array<ExerciseRoutine | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  target?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseTypeFilterInput | null > | null,
  or?: Array< ModelExerciseTypeFilterInput | null > | null,
  not?: ModelExerciseTypeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseTypeConnection = {
  __typename: "ModelExerciseTypeConnection",
  items:  Array<ExerciseType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSleepLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  hoursSlept?: ModelFloatInput | null,
  sleepQuality?: ModelIntInput | null,
  dreamJournal?: ModelStringInput | null,
  restfulnessScore?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSleepLogFilterInput | null > | null,
  or?: Array< ModelSleepLogFilterInput | null > | null,
  not?: ModelSleepLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSleepLogConnection = {
  __typename: "ModelSleepLogConnection",
  items:  Array<SleepLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHealthScoreFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHealthScoreFilterInput | null > | null,
  or?: Array< ModelHealthScoreFilterInput | null > | null,
  not?: ModelHealthScoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelHealthScoreConnection = {
  __typename: "ModelHealthScoreConnection",
  items:  Array<HealthScore | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGoalLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  weight?: ModelFloatInput | null,
  hoursSlept?: ModelFloatInput | null,
  dailyCalories?: ModelIntInput | null,
  dailyExercise?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGoalLogFilterInput | null > | null,
  or?: Array< ModelGoalLogFilterInput | null > | null,
  not?: ModelGoalLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelGoalLogConnection = {
  __typename: "ModelGoalLogConnection",
  items:  Array<GoalLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWeightLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWeightLogFilterInput | null > | null,
  or?: Array< ModelWeightLogFilterInput | null > | null,
  not?: ModelWeightLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelWeightLogConnection = {
  __typename: "ModelWeightLogConnection",
  items:  Array<WeightLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseLogExerciseRoutineFilterInput = {
  id?: ModelIDInput | null,
  exerciseLogId?: ModelIDInput | null,
  exerciseRoutineId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseLogExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelExerciseLogExerciseRoutineFilterInput | null > | null,
  not?: ModelExerciseLogExerciseRoutineFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseLogExerciseSetFilterInput = {
  id?: ModelIDInput | null,
  exerciseLogId?: ModelIDInput | null,
  exerciseSetId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseLogExerciseSetFilterInput | null > | null,
  or?: Array< ModelExerciseLogExerciseSetFilterInput | null > | null,
  not?: ModelExerciseLogExerciseSetFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseSetExerciseTypeFilterInput = {
  id?: ModelIDInput | null,
  exerciseSetId?: ModelIDInput | null,
  exerciseTypeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseSetExerciseTypeFilterInput | null > | null,
  or?: Array< ModelExerciseSetExerciseTypeFilterInput | null > | null,
  not?: ModelExerciseSetExerciseTypeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseSetExerciseRoutineFilterInput = {
  id?: ModelIDInput | null,
  exerciseSetId?: ModelIDInput | null,
  exerciseRoutineId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseSetExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelExerciseSetExerciseRoutineFilterInput | null > | null,
  not?: ModelExerciseSetExerciseRoutineFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseRoutineExerciseTypeFilterInput = {
  id?: ModelIDInput | null,
  exerciseRoutineId?: ModelIDInput | null,
  exerciseTypeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseRoutineExerciseTypeFilterInput | null > | null,
  or?: Array< ModelExerciseRoutineExerciseTypeFilterInput | null > | null,
  not?: ModelExerciseRoutineExerciseTypeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionDailyGoalsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  minSleep?: ModelSubscriptionFloatInput | null,
  dailyWorkout?: ModelSubscriptionBooleanInput | null,
  proteinGoal?: ModelSubscriptionIntInput | null,
  carbGoal?: ModelSubscriptionIntInput | null,
  fatGoal?: ModelSubscriptionIntInput | null,
  calorieGoal?: ModelSubscriptionIntInput | null,
  nutritionBuffer?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDailyGoalsFilterInput | null > | null,
  or?: Array< ModelSubscriptionDailyGoalsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionFloatInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  gender?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionNutritionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  waterIntake?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNutritionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionNutritionLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  nutritionLogMealsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMealFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mealPeriod?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMealToFoodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mealId?: ModelSubscriptionIDInput | null,
  foodId?: ModelSubscriptionIDInput | null,
  servingId?: ModelSubscriptionIDInput | null,
  servingAmount?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealToFoodFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealToFoodFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFoodBarcodeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  barcode?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoodBarcodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodBarcodeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFoodItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  owner?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoodItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodItemFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  foodItemFavoritedById?: ModelSubscriptionIDInput | null,
  foodItemServingOptionsId?: ModelSubscriptionIDInput | null,
  foodItemBarcodesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFoodItemServingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  servingSize?: ModelSubscriptionFloatInput | null,
  servingUnit?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbs?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoodItemServingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodItemServingFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFavoriteFoodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFavoriteFoodFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFavoriteFoodFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRecipeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRecipeToFoodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  recipeId?: ModelSubscriptionIDInput | null,
  foodId?: ModelSubscriptionIDInput | null,
  servingId?: ModelSubscriptionIDInput | null,
  servingAmount?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecipeToFoodFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecipeToFoodFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  durationMinutes?: ModelSubscriptionIntInput | null,
  caloriesBurned?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  reps?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseSetFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseRoutineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseRoutineFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  target?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseTypeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSleepLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  hoursSlept?: ModelSubscriptionFloatInput | null,
  sleepQuality?: ModelSubscriptionIntInput | null,
  dreamJournal?: ModelSubscriptionStringInput | null,
  restfulnessScore?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSleepLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionSleepLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionHealthScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHealthScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionHealthScoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionGoalLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  hoursSlept?: ModelSubscriptionFloatInput | null,
  dailyCalories?: ModelSubscriptionIntInput | null,
  dailyExercise?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGoalLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionGoalLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionWeightLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWeightLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionWeightLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseLogExerciseRoutineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  exerciseLogId?: ModelSubscriptionIDInput | null,
  exerciseRoutineId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseLogExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseLogExerciseRoutineFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseLogExerciseSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  exerciseLogId?: ModelSubscriptionIDInput | null,
  exerciseSetId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseLogExerciseSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseLogExerciseSetFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseSetExerciseTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  exerciseSetId?: ModelSubscriptionIDInput | null,
  exerciseTypeId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseSetExerciseTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseSetExerciseTypeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseSetExerciseRoutineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  exerciseSetId?: ModelSubscriptionIDInput | null,
  exerciseRoutineId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseSetExerciseRoutineFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseSetExerciseRoutineFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseRoutineExerciseTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  exerciseRoutineId?: ModelSubscriptionIDInput | null,
  exerciseTypeId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseRoutineExerciseTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseRoutineExerciseTypeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type DeleteUserDataMutationVariables = {
};

export type DeleteUserDataMutation = {
  deleteUserData: boolean,
};

export type CreateDailyGoalsMutationVariables = {
  input: CreateDailyGoalsInput,
  condition?: ModelDailyGoalsConditionInput | null,
};

export type CreateDailyGoalsMutation = {
  createDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDailyGoalsMutationVariables = {
  input: UpdateDailyGoalsInput,
  condition?: ModelDailyGoalsConditionInput | null,
};

export type UpdateDailyGoalsMutation = {
  updateDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDailyGoalsMutationVariables = {
  input: DeleteDailyGoalsInput,
  condition?: ModelDailyGoalsConditionInput | null,
};

export type DeleteDailyGoalsMutation = {
  deleteDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNutritionLogMutationVariables = {
  input: CreateNutritionLogInput,
  condition?: ModelNutritionLogConditionInput | null,
};

export type CreateNutritionLogMutation = {
  createNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNutritionLogMutationVariables = {
  input: UpdateNutritionLogInput,
  condition?: ModelNutritionLogConditionInput | null,
};

export type UpdateNutritionLogMutation = {
  updateNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNutritionLogMutationVariables = {
  input: DeleteNutritionLogInput,
  condition?: ModelNutritionLogConditionInput | null,
};

export type DeleteNutritionLogMutation = {
  deleteNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMealMutationVariables = {
  input: CreateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type CreateMealMutation = {
  createMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type UpdateMealMutationVariables = {
  input: UpdateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type UpdateMealMutation = {
  updateMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type DeleteMealMutationVariables = {
  input: DeleteMealInput,
  condition?: ModelMealConditionInput | null,
};

export type DeleteMealMutation = {
  deleteMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type CreateMealToFoodMutationVariables = {
  input: CreateMealToFoodInput,
  condition?: ModelMealToFoodConditionInput | null,
};

export type CreateMealToFoodMutation = {
  createMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMealToFoodMutationVariables = {
  input: UpdateMealToFoodInput,
  condition?: ModelMealToFoodConditionInput | null,
};

export type UpdateMealToFoodMutation = {
  updateMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMealToFoodMutationVariables = {
  input: DeleteMealToFoodInput,
  condition?: ModelMealToFoodConditionInput | null,
};

export type DeleteMealToFoodMutation = {
  deleteMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFoodBarcodeMutationVariables = {
  input: CreateFoodBarcodeInput,
  condition?: ModelFoodBarcodeConditionInput | null,
};

export type CreateFoodBarcodeMutation = {
  createFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type UpdateFoodBarcodeMutationVariables = {
  input: UpdateFoodBarcodeInput,
  condition?: ModelFoodBarcodeConditionInput | null,
};

export type UpdateFoodBarcodeMutation = {
  updateFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type DeleteFoodBarcodeMutationVariables = {
  input: DeleteFoodBarcodeInput,
  condition?: ModelFoodBarcodeConditionInput | null,
};

export type DeleteFoodBarcodeMutation = {
  deleteFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type CreateFoodItemMutationVariables = {
  input: CreateFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type CreateFoodItemMutation = {
  createFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFoodItemMutationVariables = {
  input: UpdateFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type UpdateFoodItemMutation = {
  updateFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFoodItemMutationVariables = {
  input: DeleteFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type DeleteFoodItemMutation = {
  deleteFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFoodItemServingMutationVariables = {
  input: CreateFoodItemServingInput,
  condition?: ModelFoodItemServingConditionInput | null,
};

export type CreateFoodItemServingMutation = {
  createFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type UpdateFoodItemServingMutationVariables = {
  input: UpdateFoodItemServingInput,
  condition?: ModelFoodItemServingConditionInput | null,
};

export type UpdateFoodItemServingMutation = {
  updateFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type DeleteFoodItemServingMutationVariables = {
  input: DeleteFoodItemServingInput,
  condition?: ModelFoodItemServingConditionInput | null,
};

export type DeleteFoodItemServingMutation = {
  deleteFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type CreateUserFavoriteFoodMutationVariables = {
  input: CreateUserFavoriteFoodInput,
  condition?: ModelUserFavoriteFoodConditionInput | null,
};

export type CreateUserFavoriteFoodMutation = {
  createUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type UpdateUserFavoriteFoodMutationVariables = {
  input: UpdateUserFavoriteFoodInput,
  condition?: ModelUserFavoriteFoodConditionInput | null,
};

export type UpdateUserFavoriteFoodMutation = {
  updateUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type DeleteUserFavoriteFoodMutationVariables = {
  input: DeleteUserFavoriteFoodInput,
  condition?: ModelUserFavoriteFoodConditionInput | null,
};

export type DeleteUserFavoriteFoodMutation = {
  deleteUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRecipeToFoodMutationVariables = {
  input: CreateRecipeToFoodInput,
  condition?: ModelRecipeToFoodConditionInput | null,
};

export type CreateRecipeToFoodMutation = {
  createRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRecipeToFoodMutationVariables = {
  input: UpdateRecipeToFoodInput,
  condition?: ModelRecipeToFoodConditionInput | null,
};

export type UpdateRecipeToFoodMutation = {
  updateRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRecipeToFoodMutationVariables = {
  input: DeleteRecipeToFoodInput,
  condition?: ModelRecipeToFoodConditionInput | null,
};

export type DeleteRecipeToFoodMutation = {
  deleteRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseLogMutationVariables = {
  input: CreateExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type CreateExerciseLogMutation = {
  createExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseLogMutationVariables = {
  input: UpdateExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type UpdateExerciseLogMutation = {
  updateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseLogMutationVariables = {
  input: DeleteExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type DeleteExerciseLogMutation = {
  deleteExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseSetMutationVariables = {
  input: CreateExerciseSetInput,
  condition?: ModelExerciseSetConditionInput | null,
};

export type CreateExerciseSetMutation = {
  createExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseSetMutationVariables = {
  input: UpdateExerciseSetInput,
  condition?: ModelExerciseSetConditionInput | null,
};

export type UpdateExerciseSetMutation = {
  updateExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseSetMutationVariables = {
  input: DeleteExerciseSetInput,
  condition?: ModelExerciseSetConditionInput | null,
};

export type DeleteExerciseSetMutation = {
  deleteExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseRoutineMutationVariables = {
  input: CreateExerciseRoutineInput,
  condition?: ModelExerciseRoutineConditionInput | null,
};

export type CreateExerciseRoutineMutation = {
  createExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseRoutineMutationVariables = {
  input: UpdateExerciseRoutineInput,
  condition?: ModelExerciseRoutineConditionInput | null,
};

export type UpdateExerciseRoutineMutation = {
  updateExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseRoutineMutationVariables = {
  input: DeleteExerciseRoutineInput,
  condition?: ModelExerciseRoutineConditionInput | null,
};

export type DeleteExerciseRoutineMutation = {
  deleteExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseTypeMutationVariables = {
  input: CreateExerciseTypeInput,
  condition?: ModelExerciseTypeConditionInput | null,
};

export type CreateExerciseTypeMutation = {
  createExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseTypeMutationVariables = {
  input: UpdateExerciseTypeInput,
  condition?: ModelExerciseTypeConditionInput | null,
};

export type UpdateExerciseTypeMutation = {
  updateExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseTypeMutationVariables = {
  input: DeleteExerciseTypeInput,
  condition?: ModelExerciseTypeConditionInput | null,
};

export type DeleteExerciseTypeMutation = {
  deleteExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSleepLogMutationVariables = {
  input: CreateSleepLogInput,
  condition?: ModelSleepLogConditionInput | null,
};

export type CreateSleepLogMutation = {
  createSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSleepLogMutationVariables = {
  input: UpdateSleepLogInput,
  condition?: ModelSleepLogConditionInput | null,
};

export type UpdateSleepLogMutation = {
  updateSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSleepLogMutationVariables = {
  input: DeleteSleepLogInput,
  condition?: ModelSleepLogConditionInput | null,
};

export type DeleteSleepLogMutation = {
  deleteSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateHealthScoreMutationVariables = {
  input: CreateHealthScoreInput,
  condition?: ModelHealthScoreConditionInput | null,
};

export type CreateHealthScoreMutation = {
  createHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHealthScoreMutationVariables = {
  input: UpdateHealthScoreInput,
  condition?: ModelHealthScoreConditionInput | null,
};

export type UpdateHealthScoreMutation = {
  updateHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHealthScoreMutationVariables = {
  input: DeleteHealthScoreInput,
  condition?: ModelHealthScoreConditionInput | null,
};

export type DeleteHealthScoreMutation = {
  deleteHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGoalLogMutationVariables = {
  input: CreateGoalLogInput,
  condition?: ModelGoalLogConditionInput | null,
};

export type CreateGoalLogMutation = {
  createGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGoalLogMutationVariables = {
  input: UpdateGoalLogInput,
  condition?: ModelGoalLogConditionInput | null,
};

export type UpdateGoalLogMutation = {
  updateGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGoalLogMutationVariables = {
  input: DeleteGoalLogInput,
  condition?: ModelGoalLogConditionInput | null,
};

export type DeleteGoalLogMutation = {
  deleteGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWeightLogMutationVariables = {
  input: CreateWeightLogInput,
  condition?: ModelWeightLogConditionInput | null,
};

export type CreateWeightLogMutation = {
  createWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWeightLogMutationVariables = {
  input: UpdateWeightLogInput,
  condition?: ModelWeightLogConditionInput | null,
};

export type UpdateWeightLogMutation = {
  updateWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWeightLogMutationVariables = {
  input: DeleteWeightLogInput,
  condition?: ModelWeightLogConditionInput | null,
};

export type DeleteWeightLogMutation = {
  deleteWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseLogExerciseRoutineMutationVariables = {
  input: CreateExerciseLogExerciseRoutineInput,
  condition?: ModelExerciseLogExerciseRoutineConditionInput | null,
};

export type CreateExerciseLogExerciseRoutineMutation = {
  createExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseLogExerciseRoutineMutationVariables = {
  input: UpdateExerciseLogExerciseRoutineInput,
  condition?: ModelExerciseLogExerciseRoutineConditionInput | null,
};

export type UpdateExerciseLogExerciseRoutineMutation = {
  updateExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseLogExerciseRoutineMutationVariables = {
  input: DeleteExerciseLogExerciseRoutineInput,
  condition?: ModelExerciseLogExerciseRoutineConditionInput | null,
};

export type DeleteExerciseLogExerciseRoutineMutation = {
  deleteExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseLogExerciseSetMutationVariables = {
  input: CreateExerciseLogExerciseSetInput,
  condition?: ModelExerciseLogExerciseSetConditionInput | null,
};

export type CreateExerciseLogExerciseSetMutation = {
  createExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseLogExerciseSetMutationVariables = {
  input: UpdateExerciseLogExerciseSetInput,
  condition?: ModelExerciseLogExerciseSetConditionInput | null,
};

export type UpdateExerciseLogExerciseSetMutation = {
  updateExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseLogExerciseSetMutationVariables = {
  input: DeleteExerciseLogExerciseSetInput,
  condition?: ModelExerciseLogExerciseSetConditionInput | null,
};

export type DeleteExerciseLogExerciseSetMutation = {
  deleteExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseSetExerciseTypeMutationVariables = {
  input: CreateExerciseSetExerciseTypeInput,
  condition?: ModelExerciseSetExerciseTypeConditionInput | null,
};

export type CreateExerciseSetExerciseTypeMutation = {
  createExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseSetExerciseTypeMutationVariables = {
  input: UpdateExerciseSetExerciseTypeInput,
  condition?: ModelExerciseSetExerciseTypeConditionInput | null,
};

export type UpdateExerciseSetExerciseTypeMutation = {
  updateExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseSetExerciseTypeMutationVariables = {
  input: DeleteExerciseSetExerciseTypeInput,
  condition?: ModelExerciseSetExerciseTypeConditionInput | null,
};

export type DeleteExerciseSetExerciseTypeMutation = {
  deleteExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseSetExerciseRoutineMutationVariables = {
  input: CreateExerciseSetExerciseRoutineInput,
  condition?: ModelExerciseSetExerciseRoutineConditionInput | null,
};

export type CreateExerciseSetExerciseRoutineMutation = {
  createExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseSetExerciseRoutineMutationVariables = {
  input: UpdateExerciseSetExerciseRoutineInput,
  condition?: ModelExerciseSetExerciseRoutineConditionInput | null,
};

export type UpdateExerciseSetExerciseRoutineMutation = {
  updateExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseSetExerciseRoutineMutationVariables = {
  input: DeleteExerciseSetExerciseRoutineInput,
  condition?: ModelExerciseSetExerciseRoutineConditionInput | null,
};

export type DeleteExerciseSetExerciseRoutineMutation = {
  deleteExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseRoutineExerciseTypeMutationVariables = {
  input: CreateExerciseRoutineExerciseTypeInput,
  condition?: ModelExerciseRoutineExerciseTypeConditionInput | null,
};

export type CreateExerciseRoutineExerciseTypeMutation = {
  createExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseRoutineExerciseTypeMutationVariables = {
  input: UpdateExerciseRoutineExerciseTypeInput,
  condition?: ModelExerciseRoutineExerciseTypeConditionInput | null,
};

export type UpdateExerciseRoutineExerciseTypeMutation = {
  updateExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseRoutineExerciseTypeMutationVariables = {
  input: DeleteExerciseRoutineExerciseTypeInput,
  condition?: ModelExerciseRoutineExerciseTypeConditionInput | null,
};

export type DeleteExerciseRoutineExerciseTypeMutation = {
  deleteExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetDailyGoalsQueryVariables = {
  id: string,
};

export type GetDailyGoalsQuery = {
  getDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDailyGoalsQueryVariables = {
  filter?: ModelDailyGoalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDailyGoalsQuery = {
  listDailyGoals?:  {
    __typename: "ModelDailyGoalsConnection",
    items:  Array< {
      __typename: "DailyGoals",
      id: string,
      userId?: string | null,
      minSleep?: number | null,
      dailyWorkout?: boolean | null,
      proteinGoal?: number | null,
      carbGoal?: number | null,
      fatGoal?: number | null,
      calorieGoal?: number | null,
      nutritionBuffer?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDailyGoalsQueryVariables = {
  filter?: ModelDailyGoalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDailyGoalsQuery = {
  syncDailyGoals?:  {
    __typename: "ModelDailyGoalsConnection",
    items:  Array< {
      __typename: "DailyGoals",
      id: string,
      userId?: string | null,
      minSleep?: number | null,
      dailyWorkout?: boolean | null,
      proteinGoal?: number | null,
      carbGoal?: number | null,
      fatGoal?: number | null,
      calorieGoal?: number | null,
      nutritionBuffer?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      name: string,
      age?: number | null,
      height?: number | null,
      weight?: number | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      name: string,
      age?: number | null,
      height?: number | null,
      weight?: number | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNutritionLogQueryVariables = {
  id: string,
};

export type GetNutritionLogQuery = {
  getNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNutritionLogsQueryVariables = {
  filter?: ModelNutritionLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutritionLogsQuery = {
  listNutritionLogs?:  {
    __typename: "ModelNutritionLogConnection",
    items:  Array< {
      __typename: "NutritionLog",
      id: string,
      userId: string,
      date: string,
      waterIntake?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNutritionLogsQueryVariables = {
  filter?: ModelNutritionLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNutritionLogsQuery = {
  syncNutritionLogs?:  {
    __typename: "ModelNutritionLogConnection",
    items:  Array< {
      __typename: "NutritionLog",
      id: string,
      userId: string,
      date: string,
      waterIntake?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMealQueryVariables = {
  id: string,
};

export type GetMealQuery = {
  getMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type ListMealsQueryVariables = {
  filter?: ModelMealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealsQuery = {
  listMeals?:  {
    __typename: "ModelMealConnection",
    items:  Array< {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMealsQueryVariables = {
  filter?: ModelMealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMealsQuery = {
  syncMeals?:  {
    __typename: "ModelMealConnection",
    items:  Array< {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMealToFoodQueryVariables = {
  id: string,
};

export type GetMealToFoodQuery = {
  getMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMealToFoodsQueryVariables = {
  filter?: ModelMealToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealToFoodsQuery = {
  listMealToFoods?:  {
    __typename: "ModelMealToFoodConnection",
    items:  Array< {
      __typename: "MealToFood",
      id: string,
      mealId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMealToFoodsQueryVariables = {
  filter?: ModelMealToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMealToFoodsQuery = {
  syncMealToFoods?:  {
    __typename: "ModelMealToFoodConnection",
    items:  Array< {
      __typename: "MealToFood",
      id: string,
      mealId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFoodBarcodeQueryVariables = {
  id: string,
};

export type GetFoodBarcodeQuery = {
  getFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type ListFoodBarcodesQueryVariables = {
  filter?: ModelFoodBarcodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodBarcodesQuery = {
  listFoodBarcodes?:  {
    __typename: "ModelFoodBarcodeConnection",
    items:  Array< {
      __typename: "FoodBarcode",
      id: string,
      barcode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemBarcodesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFoodBarcodesQueryVariables = {
  filter?: ModelFoodBarcodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFoodBarcodesQuery = {
  syncFoodBarcodes?:  {
    __typename: "ModelFoodBarcodeConnection",
    items:  Array< {
      __typename: "FoodBarcode",
      id: string,
      barcode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemBarcodesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFoodItemQueryVariables = {
  id: string,
};

export type GetFoodItemQuery = {
  getFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFoodItemsQueryVariables = {
  filter?: ModelFoodItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodItemsQuery = {
  listFoodItems?:  {
    __typename: "ModelFoodItemConnection",
    items:  Array< {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFoodItemsQueryVariables = {
  filter?: ModelFoodItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFoodItemsQuery = {
  syncFoodItems?:  {
    __typename: "ModelFoodItemConnection",
    items:  Array< {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFoodItemServingQueryVariables = {
  id: string,
};

export type GetFoodItemServingQuery = {
  getFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type ListFoodItemServingsQueryVariables = {
  filter?: ModelFoodItemServingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodItemServingsQuery = {
  listFoodItemServings?:  {
    __typename: "ModelFoodItemServingConnection",
    items:  Array< {
      __typename: "FoodItemServing",
      id: string,
      servingSize: number,
      servingUnit?: string | null,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemServingOptionsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFoodItemServingsQueryVariables = {
  filter?: ModelFoodItemServingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFoodItemServingsQuery = {
  syncFoodItemServings?:  {
    __typename: "ModelFoodItemServingConnection",
    items:  Array< {
      __typename: "FoodItemServing",
      id: string,
      servingSize: number,
      servingUnit?: string | null,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemServingOptionsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserFavoriteFoodQueryVariables = {
  id: string,
};

export type GetUserFavoriteFoodQuery = {
  getUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type ListUserFavoriteFoodsQueryVariables = {
  filter?: ModelUserFavoriteFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFavoriteFoodsQuery = {
  listUserFavoriteFoods?:  {
    __typename: "ModelUserFavoriteFoodConnection",
    items:  Array< {
      __typename: "UserFavoriteFood",
      id: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemFavoritedById?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserFavoriteFoodsQueryVariables = {
  filter?: ModelUserFavoriteFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserFavoriteFoodsQuery = {
  syncUserFavoriteFoods?:  {
    __typename: "ModelUserFavoriteFoodConnection",
    items:  Array< {
      __typename: "UserFavoriteFood",
      id: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      foodItemFavoritedById?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRecipesQuery = {
  syncRecipes?:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRecipeToFoodQueryVariables = {
  id: string,
};

export type GetRecipeToFoodQuery = {
  getRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRecipeToFoodsQueryVariables = {
  filter?: ModelRecipeToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeToFoodsQuery = {
  listRecipeToFoods?:  {
    __typename: "ModelRecipeToFoodConnection",
    items:  Array< {
      __typename: "RecipeToFood",
      id: string,
      recipeId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRecipeToFoodsQueryVariables = {
  filter?: ModelRecipeToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRecipeToFoodsQuery = {
  syncRecipeToFoods?:  {
    __typename: "ModelRecipeToFoodConnection",
    items:  Array< {
      __typename: "RecipeToFood",
      id: string,
      recipeId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseLogQueryVariables = {
  id: string,
};

export type GetExerciseLogQuery = {
  getExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseLogsQueryVariables = {
  filter?: ModelExerciseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseLogsQuery = {
  listExerciseLogs?:  {
    __typename: "ModelExerciseLogConnection",
    items:  Array< {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseLogsQueryVariables = {
  filter?: ModelExerciseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseLogsQuery = {
  syncExerciseLogs?:  {
    __typename: "ModelExerciseLogConnection",
    items:  Array< {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseSetQueryVariables = {
  id: string,
};

export type GetExerciseSetQuery = {
  getExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseSetsQueryVariables = {
  filter?: ModelExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseSetsQuery = {
  listExerciseSets?:  {
    __typename: "ModelExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseSetsQueryVariables = {
  filter?: ModelExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseSetsQuery = {
  syncExerciseSets?:  {
    __typename: "ModelExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseRoutineQueryVariables = {
  id: string,
};

export type GetExerciseRoutineQuery = {
  getExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseRoutinesQuery = {
  listExerciseRoutines?:  {
    __typename: "ModelExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseRoutinesQuery = {
  syncExerciseRoutines?:  {
    __typename: "ModelExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseTypeQueryVariables = {
  id: string,
};

export type GetExerciseTypeQuery = {
  getExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseTypesQueryVariables = {
  filter?: ModelExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseTypesQuery = {
  listExerciseTypes?:  {
    __typename: "ModelExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseTypesQueryVariables = {
  filter?: ModelExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseTypesQuery = {
  syncExerciseTypes?:  {
    __typename: "ModelExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSleepLogQueryVariables = {
  id: string,
};

export type GetSleepLogQuery = {
  getSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSleepLogsQueryVariables = {
  filter?: ModelSleepLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSleepLogsQuery = {
  listSleepLogs?:  {
    __typename: "ModelSleepLogConnection",
    items:  Array< {
      __typename: "SleepLog",
      id: string,
      userId: string,
      date: string,
      hoursSlept: number,
      sleepQuality: number,
      dreamJournal?: string | null,
      restfulnessScore: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSleepLogsQueryVariables = {
  filter?: ModelSleepLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSleepLogsQuery = {
  syncSleepLogs?:  {
    __typename: "ModelSleepLogConnection",
    items:  Array< {
      __typename: "SleepLog",
      id: string,
      userId: string,
      date: string,
      hoursSlept: number,
      sleepQuality: number,
      dreamJournal?: string | null,
      restfulnessScore: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHealthScoreQueryVariables = {
  id: string,
};

export type GetHealthScoreQuery = {
  getHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHealthScoresQueryVariables = {
  filter?: ModelHealthScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHealthScoresQuery = {
  listHealthScores?:  {
    __typename: "ModelHealthScoreConnection",
    items:  Array< {
      __typename: "HealthScore",
      id: string,
      userId: string,
      date: string,
      score: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHealthScoresQueryVariables = {
  filter?: ModelHealthScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHealthScoresQuery = {
  syncHealthScores?:  {
    __typename: "ModelHealthScoreConnection",
    items:  Array< {
      __typename: "HealthScore",
      id: string,
      userId: string,
      date: string,
      score: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGoalLogQueryVariables = {
  id: string,
};

export type GetGoalLogQuery = {
  getGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGoalLogsQueryVariables = {
  filter?: ModelGoalLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalLogsQuery = {
  listGoalLogs?:  {
    __typename: "ModelGoalLogConnection",
    items:  Array< {
      __typename: "GoalLog",
      id: string,
      userId: string,
      weight: number,
      hoursSlept: number,
      dailyCalories: number,
      dailyExercise: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGoalLogsQueryVariables = {
  filter?: ModelGoalLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGoalLogsQuery = {
  syncGoalLogs?:  {
    __typename: "ModelGoalLogConnection",
    items:  Array< {
      __typename: "GoalLog",
      id: string,
      userId: string,
      weight: number,
      hoursSlept: number,
      dailyCalories: number,
      dailyExercise: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWeightLogQueryVariables = {
  id: string,
};

export type GetWeightLogQuery = {
  getWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWeightLogsQueryVariables = {
  filter?: ModelWeightLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeightLogsQuery = {
  listWeightLogs?:  {
    __typename: "ModelWeightLogConnection",
    items:  Array< {
      __typename: "WeightLog",
      id: string,
      userId: string,
      date: string,
      weight: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWeightLogsQueryVariables = {
  filter?: ModelWeightLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWeightLogsQuery = {
  syncWeightLogs?:  {
    __typename: "ModelWeightLogConnection",
    items:  Array< {
      __typename: "WeightLog",
      id: string,
      userId: string,
      date: string,
      weight: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseLogExerciseRoutineQueryVariables = {
  id: string,
};

export type GetExerciseLogExerciseRoutineQuery = {
  getExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseLogExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseLogExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseLogExerciseRoutinesQuery = {
  listExerciseLogExerciseRoutines?:  {
    __typename: "ModelExerciseLogExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseRoutine",
      id: string,
      exerciseLogId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseLogExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseLogExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseLogExerciseRoutinesQuery = {
  syncExerciseLogExerciseRoutines?:  {
    __typename: "ModelExerciseLogExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseRoutine",
      id: string,
      exerciseLogId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseLogExerciseSetQueryVariables = {
  id: string,
};

export type GetExerciseLogExerciseSetQuery = {
  getExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseLogExerciseSetsQueryVariables = {
  filter?: ModelExerciseLogExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseLogExerciseSetsQuery = {
  listExerciseLogExerciseSets?:  {
    __typename: "ModelExerciseLogExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseSet",
      id: string,
      exerciseLogId: string,
      exerciseSetId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseLogExerciseSetsQueryVariables = {
  filter?: ModelExerciseLogExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseLogExerciseSetsQuery = {
  syncExerciseLogExerciseSets?:  {
    __typename: "ModelExerciseLogExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseSet",
      id: string,
      exerciseLogId: string,
      exerciseSetId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseSetExerciseTypeQueryVariables = {
  id: string,
};

export type GetExerciseSetExerciseTypeQuery = {
  getExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseSetExerciseTypesQueryVariables = {
  filter?: ModelExerciseSetExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseSetExerciseTypesQuery = {
  listExerciseSetExerciseTypes?:  {
    __typename: "ModelExerciseSetExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseType",
      id: string,
      exerciseSetId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseSetExerciseTypesQueryVariables = {
  filter?: ModelExerciseSetExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseSetExerciseTypesQuery = {
  syncExerciseSetExerciseTypes?:  {
    __typename: "ModelExerciseSetExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseType",
      id: string,
      exerciseSetId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseSetExerciseRoutineQueryVariables = {
  id: string,
};

export type GetExerciseSetExerciseRoutineQuery = {
  getExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseSetExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseSetExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseSetExerciseRoutinesQuery = {
  listExerciseSetExerciseRoutines?:  {
    __typename: "ModelExerciseSetExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseRoutine",
      id: string,
      exerciseSetId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseSetExerciseRoutinesQueryVariables = {
  filter?: ModelExerciseSetExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseSetExerciseRoutinesQuery = {
  syncExerciseSetExerciseRoutines?:  {
    __typename: "ModelExerciseSetExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseRoutine",
      id: string,
      exerciseSetId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseRoutineExerciseTypeQueryVariables = {
  id: string,
};

export type GetExerciseRoutineExerciseTypeQuery = {
  getExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExerciseRoutineExerciseTypesQueryVariables = {
  filter?: ModelExerciseRoutineExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseRoutineExerciseTypesQuery = {
  listExerciseRoutineExerciseTypes?:  {
    __typename: "ModelExerciseRoutineExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseRoutineExerciseType",
      id: string,
      exerciseRoutineId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseRoutineExerciseTypesQueryVariables = {
  filter?: ModelExerciseRoutineExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseRoutineExerciseTypesQuery = {
  syncExerciseRoutineExerciseTypes?:  {
    __typename: "ModelExerciseRoutineExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseRoutineExerciseType",
      id: string,
      exerciseRoutineId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MealToFoodsByMealIdAndFoodIdQueryVariables = {
  mealId: string,
  foodId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMealToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MealToFoodsByMealIdAndFoodIdQuery = {
  mealToFoodsByMealIdAndFoodId?:  {
    __typename: "ModelMealToFoodConnection",
    items:  Array< {
      __typename: "MealToFood",
      id: string,
      mealId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MealToFoodsByFoodIdAndMealIdQueryVariables = {
  foodId: string,
  mealId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMealToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MealToFoodsByFoodIdAndMealIdQuery = {
  mealToFoodsByFoodIdAndMealId?:  {
    __typename: "ModelMealToFoodConnection",
    items:  Array< {
      __typename: "MealToFood",
      id: string,
      mealId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RecipeToFoodsByRecipeIdAndFoodIdQueryVariables = {
  recipeId: string,
  foodId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecipeToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecipeToFoodsByRecipeIdAndFoodIdQuery = {
  recipeToFoodsByRecipeIdAndFoodId?:  {
    __typename: "ModelRecipeToFoodConnection",
    items:  Array< {
      __typename: "RecipeToFood",
      id: string,
      recipeId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RecipeToFoodsByFoodIdAndRecipeIdQueryVariables = {
  foodId: string,
  recipeId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecipeToFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecipeToFoodsByFoodIdAndRecipeIdQuery = {
  recipeToFoodsByFoodIdAndRecipeId?:  {
    __typename: "ModelRecipeToFoodConnection",
    items:  Array< {
      __typename: "RecipeToFood",
      id: string,
      recipeId: string,
      foodId: string,
      servingId: string,
      servingAmount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseLogExerciseRoutinesByExerciseLogIdQueryVariables = {
  exerciseLogId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseLogExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseLogExerciseRoutinesByExerciseLogIdQuery = {
  exerciseLogExerciseRoutinesByExerciseLogId?:  {
    __typename: "ModelExerciseLogExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseRoutine",
      id: string,
      exerciseLogId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseLogExerciseRoutinesByExerciseRoutineIdQueryVariables = {
  exerciseRoutineId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseLogExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseLogExerciseRoutinesByExerciseRoutineIdQuery = {
  exerciseLogExerciseRoutinesByExerciseRoutineId?:  {
    __typename: "ModelExerciseLogExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseRoutine",
      id: string,
      exerciseLogId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseLogExerciseSetsByExerciseLogIdQueryVariables = {
  exerciseLogId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseLogExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseLogExerciseSetsByExerciseLogIdQuery = {
  exerciseLogExerciseSetsByExerciseLogId?:  {
    __typename: "ModelExerciseLogExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseSet",
      id: string,
      exerciseLogId: string,
      exerciseSetId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseLogExerciseSetsByExerciseSetIdQueryVariables = {
  exerciseSetId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseLogExerciseSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseLogExerciseSetsByExerciseSetIdQuery = {
  exerciseLogExerciseSetsByExerciseSetId?:  {
    __typename: "ModelExerciseLogExerciseSetConnection",
    items:  Array< {
      __typename: "ExerciseLogExerciseSet",
      id: string,
      exerciseLogId: string,
      exerciseSetId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseSetExerciseTypesByExerciseSetIdQueryVariables = {
  exerciseSetId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseSetExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseSetExerciseTypesByExerciseSetIdQuery = {
  exerciseSetExerciseTypesByExerciseSetId?:  {
    __typename: "ModelExerciseSetExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseType",
      id: string,
      exerciseSetId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseSetExerciseTypesByExerciseTypeIdQueryVariables = {
  exerciseTypeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseSetExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseSetExerciseTypesByExerciseTypeIdQuery = {
  exerciseSetExerciseTypesByExerciseTypeId?:  {
    __typename: "ModelExerciseSetExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseType",
      id: string,
      exerciseSetId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseSetExerciseRoutinesByExerciseSetIdQueryVariables = {
  exerciseSetId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseSetExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseSetExerciseRoutinesByExerciseSetIdQuery = {
  exerciseSetExerciseRoutinesByExerciseSetId?:  {
    __typename: "ModelExerciseSetExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseRoutine",
      id: string,
      exerciseSetId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseSetExerciseRoutinesByExerciseRoutineIdQueryVariables = {
  exerciseRoutineId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseSetExerciseRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseSetExerciseRoutinesByExerciseRoutineIdQuery = {
  exerciseSetExerciseRoutinesByExerciseRoutineId?:  {
    __typename: "ModelExerciseSetExerciseRoutineConnection",
    items:  Array< {
      __typename: "ExerciseSetExerciseRoutine",
      id: string,
      exerciseSetId: string,
      exerciseRoutineId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseRoutineExerciseTypesByExerciseRoutineIdQueryVariables = {
  exerciseRoutineId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseRoutineExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseRoutineExerciseTypesByExerciseRoutineIdQuery = {
  exerciseRoutineExerciseTypesByExerciseRoutineId?:  {
    __typename: "ModelExerciseRoutineExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseRoutineExerciseType",
      id: string,
      exerciseRoutineId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExerciseRoutineExerciseTypesByExerciseTypeIdQueryVariables = {
  exerciseTypeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseRoutineExerciseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseRoutineExerciseTypesByExerciseTypeIdQuery = {
  exerciseRoutineExerciseTypesByExerciseTypeId?:  {
    __typename: "ModelExerciseRoutineExerciseTypeConnection",
    items:  Array< {
      __typename: "ExerciseRoutineExerciseType",
      id: string,
      exerciseRoutineId: string,
      exerciseTypeId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDailyGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalsFilterInput | null,
};

export type OnCreateDailyGoalsSubscription = {
  onCreateDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDailyGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalsFilterInput | null,
};

export type OnUpdateDailyGoalsSubscription = {
  onUpdateDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDailyGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalsFilterInput | null,
};

export type OnDeleteDailyGoalsSubscription = {
  onDeleteDailyGoals?:  {
    __typename: "DailyGoals",
    id: string,
    userId?: string | null,
    minSleep?: number | null,
    dailyWorkout?: boolean | null,
    proteinGoal?: number | null,
    carbGoal?: number | null,
    fatGoal?: number | null,
    calorieGoal?: number | null,
    nutritionBuffer?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    age?: number | null,
    height?: number | null,
    weight?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNutritionLogSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionLogFilterInput | null,
};

export type OnCreateNutritionLogSubscription = {
  onCreateNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNutritionLogSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionLogFilterInput | null,
};

export type OnUpdateNutritionLogSubscription = {
  onUpdateNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNutritionLogSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionLogFilterInput | null,
};

export type OnDeleteNutritionLogSubscription = {
  onDeleteNutritionLog?:  {
    __typename: "NutritionLog",
    id: string,
    userId: string,
    date: string,
    Meals?:  {
      __typename: "ModelMealConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    waterIntake?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnCreateMealSubscription = {
  onCreateMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type OnUpdateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnUpdateMealSubscription = {
  onUpdateMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type OnDeleteMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnDeleteMealSubscription = {
  onDeleteMeal?:  {
    __typename: "Meal",
    id: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    nutritionLogMealsId?: string | null,
  } | null,
};

export type OnCreateMealToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionMealToFoodFilterInput | null,
};

export type OnCreateMealToFoodSubscription = {
  onCreateMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMealToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionMealToFoodFilterInput | null,
};

export type OnUpdateMealToFoodSubscription = {
  onUpdateMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMealToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionMealToFoodFilterInput | null,
};

export type OnDeleteMealToFoodSubscription = {
  onDeleteMealToFood?:  {
    __typename: "MealToFood",
    id: string,
    mealId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    meal?:  {
      __typename: "Meal",
      id: string,
      mealPeriod: MealPeriod,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      nutritionLogMealsId?: string | null,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFoodBarcodeSubscriptionVariables = {
  filter?: ModelSubscriptionFoodBarcodeFilterInput | null,
};

export type OnCreateFoodBarcodeSubscription = {
  onCreateFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type OnUpdateFoodBarcodeSubscriptionVariables = {
  filter?: ModelSubscriptionFoodBarcodeFilterInput | null,
};

export type OnUpdateFoodBarcodeSubscription = {
  onUpdateFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type OnDeleteFoodBarcodeSubscriptionVariables = {
  filter?: ModelSubscriptionFoodBarcodeFilterInput | null,
};

export type OnDeleteFoodBarcodeSubscription = {
  onDeleteFoodBarcode?:  {
    __typename: "FoodBarcode",
    id: string,
    barcode: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemBarcodesId?: string | null,
  } | null,
};

export type OnCreateFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnCreateFoodItemSubscription = {
  onCreateFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnUpdateFoodItemSubscription = {
  onUpdateFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnDeleteFoodItemSubscription = {
  onDeleteFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    owner: string,
    name: string,
    meals?:  {
      __typename: "ModelMealToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    recipes?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    favoritedBy?:  {
      __typename: "ModelUserFavoriteFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    servingOptions?:  {
      __typename: "ModelFoodItemServingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    barcodes?:  {
      __typename: "ModelFoodBarcodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFoodItemServingSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemServingFilterInput | null,
};

export type OnCreateFoodItemServingSubscription = {
  onCreateFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type OnUpdateFoodItemServingSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemServingFilterInput | null,
};

export type OnUpdateFoodItemServingSubscription = {
  onUpdateFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type OnDeleteFoodItemServingSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemServingFilterInput | null,
};

export type OnDeleteFoodItemServingSubscription = {
  onDeleteFoodItemServing?:  {
    __typename: "FoodItemServing",
    id: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    servingSize: number,
    servingUnit?: string | null,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemServingOptionsId?: string | null,
  } | null,
};

export type OnCreateUserFavoriteFoodSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFoodFilterInput | null,
};

export type OnCreateUserFavoriteFoodSubscription = {
  onCreateUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type OnUpdateUserFavoriteFoodSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFoodFilterInput | null,
};

export type OnUpdateUserFavoriteFoodSubscription = {
  onUpdateUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type OnDeleteUserFavoriteFoodSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFoodFilterInput | null,
};

export type OnDeleteUserFavoriteFoodSubscription = {
  onDeleteUserFavoriteFood?:  {
    __typename: "UserFavoriteFood",
    id: string,
    userId: string,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    foodItemFavoritedById?: string | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    foodItems?:  {
      __typename: "ModelRecipeToFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRecipeToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeToFoodFilterInput | null,
};

export type OnCreateRecipeToFoodSubscription = {
  onCreateRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRecipeToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeToFoodFilterInput | null,
};

export type OnUpdateRecipeToFoodSubscription = {
  onUpdateRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRecipeToFoodSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeToFoodFilterInput | null,
};

export type OnDeleteRecipeToFoodSubscription = {
  onDeleteRecipeToFood?:  {
    __typename: "RecipeToFood",
    id: string,
    recipeId: string,
    foodId: string,
    servingId: string,
    servingAmount: number,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    foodItem?:  {
      __typename: "FoodItem",
      id: string,
      owner: string,
      name: string,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
};

export type OnCreateExerciseLogSubscription = {
  onCreateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
};

export type OnUpdateExerciseLogSubscription = {
  onUpdateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
};

export type OnDeleteExerciseLogSubscription = {
  onDeleteExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    userId: string,
    date: string,
    exerciseRoutine?:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseSets?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetFilterInput | null,
};

export type OnCreateExerciseSetSubscription = {
  onCreateExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetFilterInput | null,
};

export type OnUpdateExerciseSetSubscription = {
  onUpdateExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetFilterInput | null,
};

export type OnDeleteExerciseSetSubscription = {
  onDeleteExerciseSet?:  {
    __typename: "ExerciseSet",
    id: string,
    reps?: string | null,
    time?: string | null,
    weight?: string | null,
    ExerciseType?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseRoutines?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseSetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineFilterInput | null,
};

export type OnCreateExerciseRoutineSubscription = {
  onCreateExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineFilterInput | null,
};

export type OnUpdateExerciseRoutineSubscription = {
  onUpdateExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineFilterInput | null,
};

export type OnDeleteExerciseRoutineSubscription = {
  onDeleteExerciseRoutine?:  {
    __typename: "ExerciseRoutine",
    id: string,
    userId: string,
    name?: string | null,
    exerciselogs?:  {
      __typename: "ModelExerciseLogExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ExerciseTypes?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseRoutineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseTypeFilterInput | null,
};

export type OnCreateExerciseTypeSubscription = {
  onCreateExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseTypeFilterInput | null,
};

export type OnUpdateExerciseTypeSubscription = {
  onUpdateExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseTypeFilterInput | null,
};

export type OnDeleteExerciseTypeSubscription = {
  onDeleteExerciseType?:  {
    __typename: "ExerciseType",
    id: string,
    name: string,
    target?: string | null,
    exercisesets?:  {
      __typename: "ModelExerciseSetExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    exerciseroutines?:  {
      __typename: "ModelExerciseRoutineExerciseTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSleepLogSubscriptionVariables = {
  filter?: ModelSubscriptionSleepLogFilterInput | null,
};

export type OnCreateSleepLogSubscription = {
  onCreateSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSleepLogSubscriptionVariables = {
  filter?: ModelSubscriptionSleepLogFilterInput | null,
};

export type OnUpdateSleepLogSubscription = {
  onUpdateSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSleepLogSubscriptionVariables = {
  filter?: ModelSubscriptionSleepLogFilterInput | null,
};

export type OnDeleteSleepLogSubscription = {
  onDeleteSleepLog?:  {
    __typename: "SleepLog",
    id: string,
    userId: string,
    date: string,
    hoursSlept: number,
    sleepQuality: number,
    dreamJournal?: string | null,
    restfulnessScore: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateHealthScoreSubscriptionVariables = {
  filter?: ModelSubscriptionHealthScoreFilterInput | null,
};

export type OnCreateHealthScoreSubscription = {
  onCreateHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHealthScoreSubscriptionVariables = {
  filter?: ModelSubscriptionHealthScoreFilterInput | null,
};

export type OnUpdateHealthScoreSubscription = {
  onUpdateHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHealthScoreSubscriptionVariables = {
  filter?: ModelSubscriptionHealthScoreFilterInput | null,
};

export type OnDeleteHealthScoreSubscription = {
  onDeleteHealthScore?:  {
    __typename: "HealthScore",
    id: string,
    userId: string,
    date: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGoalLogSubscriptionVariables = {
  filter?: ModelSubscriptionGoalLogFilterInput | null,
};

export type OnCreateGoalLogSubscription = {
  onCreateGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGoalLogSubscriptionVariables = {
  filter?: ModelSubscriptionGoalLogFilterInput | null,
};

export type OnUpdateGoalLogSubscription = {
  onUpdateGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGoalLogSubscriptionVariables = {
  filter?: ModelSubscriptionGoalLogFilterInput | null,
};

export type OnDeleteGoalLogSubscription = {
  onDeleteGoalLog?:  {
    __typename: "GoalLog",
    id: string,
    userId: string,
    weight: number,
    hoursSlept: number,
    dailyCalories: number,
    dailyExercise: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWeightLogSubscriptionVariables = {
  filter?: ModelSubscriptionWeightLogFilterInput | null,
};

export type OnCreateWeightLogSubscription = {
  onCreateWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWeightLogSubscriptionVariables = {
  filter?: ModelSubscriptionWeightLogFilterInput | null,
};

export type OnUpdateWeightLogSubscription = {
  onUpdateWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWeightLogSubscriptionVariables = {
  filter?: ModelSubscriptionWeightLogFilterInput | null,
};

export type OnDeleteWeightLogSubscription = {
  onDeleteWeightLog?:  {
    __typename: "WeightLog",
    id: string,
    userId: string,
    date: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseLogExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseRoutineFilterInput | null,
};

export type OnCreateExerciseLogExerciseRoutineSubscription = {
  onCreateExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseLogExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseRoutineFilterInput | null,
};

export type OnUpdateExerciseLogExerciseRoutineSubscription = {
  onUpdateExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseLogExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseRoutineFilterInput | null,
};

export type OnDeleteExerciseLogExerciseRoutineSubscription = {
  onDeleteExerciseLogExerciseRoutine?:  {
    __typename: "ExerciseLogExerciseRoutine",
    id: string,
    exerciseLogId: string,
    exerciseRoutineId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseLogExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseSetFilterInput | null,
};

export type OnCreateExerciseLogExerciseSetSubscription = {
  onCreateExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseLogExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseSetFilterInput | null,
};

export type OnUpdateExerciseLogExerciseSetSubscription = {
  onUpdateExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseLogExerciseSetSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogExerciseSetFilterInput | null,
};

export type OnDeleteExerciseLogExerciseSetSubscription = {
  onDeleteExerciseLogExerciseSet?:  {
    __typename: "ExerciseLogExerciseSet",
    id: string,
    exerciseLogId: string,
    exerciseSetId: string,
    exerciseLog:  {
      __typename: "ExerciseLog",
      id: string,
      userId: string,
      date: string,
      durationMinutes?: number | null,
      caloriesBurned?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseSetExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseTypeFilterInput | null,
};

export type OnCreateExerciseSetExerciseTypeSubscription = {
  onCreateExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseSetExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseTypeFilterInput | null,
};

export type OnUpdateExerciseSetExerciseTypeSubscription = {
  onUpdateExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseSetExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseTypeFilterInput | null,
};

export type OnDeleteExerciseSetExerciseTypeSubscription = {
  onDeleteExerciseSetExerciseType?:  {
    __typename: "ExerciseSetExerciseType",
    id: string,
    exerciseSetId: string,
    exerciseTypeId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseSetExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseRoutineFilterInput | null,
};

export type OnCreateExerciseSetExerciseRoutineSubscription = {
  onCreateExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseSetExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseRoutineFilterInput | null,
};

export type OnUpdateExerciseSetExerciseRoutineSubscription = {
  onUpdateExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseSetExerciseRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseSetExerciseRoutineFilterInput | null,
};

export type OnDeleteExerciseSetExerciseRoutineSubscription = {
  onDeleteExerciseSetExerciseRoutine?:  {
    __typename: "ExerciseSetExerciseRoutine",
    id: string,
    exerciseSetId: string,
    exerciseRoutineId: string,
    exerciseSet:  {
      __typename: "ExerciseSet",
      id: string,
      reps?: string | null,
      time?: string | null,
      weight?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseRoutineExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput | null,
};

export type OnCreateExerciseRoutineExerciseTypeSubscription = {
  onCreateExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseRoutineExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput | null,
};

export type OnUpdateExerciseRoutineExerciseTypeSubscription = {
  onUpdateExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseRoutineExerciseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput | null,
};

export type OnDeleteExerciseRoutineExerciseTypeSubscription = {
  onDeleteExerciseRoutineExerciseType?:  {
    __typename: "ExerciseRoutineExerciseType",
    id: string,
    exerciseRoutineId: string,
    exerciseTypeId: string,
    exerciseRoutine:  {
      __typename: "ExerciseRoutine",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      target?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
