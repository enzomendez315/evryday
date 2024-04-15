/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  name: string,
  age?: number | null,
  height?: number | null,
  weight?: number | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  name: string,
  age?: number | null,
  height?: number | null,
  weight?: number | null,
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
  foodName: string,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  _version?: number | null,
};

export type ModelNutritionLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  foodName?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
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
  foodName: string,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateNutritionLogInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  foodName?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  _version?: number | null,
};

export type DeleteNutritionLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateMealInput = {
  id?: string | null,
  userID: string,
  date: string,
  mealPeriod: MealPeriod,
  _version?: number | null,
};

export enum MealPeriod {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
  custom = "custom",
}


export type ModelMealConditionInput = {
  userID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  mealPeriod?: ModelMealPeriodInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMealPeriodInput = {
  eq?: MealPeriod | null,
  ne?: MealPeriod | null,
};

export type Meal = {
  __typename: "Meal",
  id: string,
  userID: string,
  date: string,
  mealPeriod: MealPeriod,
  foodItems?: ModelFoodItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelFoodItemConnection = {
  __typename: "ModelFoodItemConnection",
  items:  Array<FoodItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FoodItem = {
  __typename: "FoodItem",
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  serving?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  mealFoodItemsId?: string | null,
};

export type UpdateMealInput = {
  id: string,
  userID?: string | null,
  date?: string | null,
  mealPeriod?: MealPeriod | null,
  _version?: number | null,
};

export type DeleteMealInput = {
  id: string,
  _version?: number | null,
};

export type CreateFoodItemInput = {
  id?: string | null,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  serving?: string | null,
  _version?: number | null,
  mealFoodItemsId?: string | null,
};

export type ModelFoodItemConditionInput = {
  name?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  serving?: ModelStringInput | null,
  and?: Array< ModelFoodItemConditionInput | null > | null,
  or?: Array< ModelFoodItemConditionInput | null > | null,
  not?: ModelFoodItemConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  mealFoodItemsId?: ModelIDInput | null,
};

export type UpdateFoodItemInput = {
  id: string,
  name?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fat?: number | null,
  serving?: string | null,
  _version?: number | null,
  mealFoodItemsId?: string | null,
};

export type DeleteFoodItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  exerciseType: string,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
  _version?: number | null,
};

export type ModelExerciseLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  exerciseType?: ModelStringInput | null,
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
  exerciseType: string,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
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
  exerciseType?: string | null,
  durationMinutes?: number | null,
  caloriesBurned?: number | null,
  _version?: number | null,
};

export type DeleteExerciseLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateSleepLogInput = {
  id?: string | null,
  userId: string,
  date: string,
  hoursSlept: number,
  sleepQuality?: number | null,
  restfulnessScore?: number | null,
  dreamJournal?: string | null,
  _version?: number | null,
};

export type ModelSleepLogConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  hoursSlept?: ModelFloatInput | null,
  sleepQuality?: ModelIntInput | null,
  restfulnessScore?: ModelIntInput | null,
  dreamJournal?: ModelStringInput | null,
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
  sleepQuality?: number | null,
  restfulnessScore?: number | null,
  dreamJournal?: string | null,
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
  restfulnessScore?: number | null,
  dreamJournal?: string | null,
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

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
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
  foodName?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
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
  userID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  mealPeriod?: ModelMealPeriodInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMealConnection = {
  __typename: "ModelMealConnection",
  items:  Array<Meal | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFoodItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  protein?: ModelFloatInput | null,
  carbs?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  serving?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoodItemFilterInput | null > | null,
  or?: Array< ModelFoodItemFilterInput | null > | null,
  not?: ModelFoodItemFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  mealFoodItemsId?: ModelIDInput | null,
};

export type ModelExerciseLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  exerciseType?: ModelStringInput | null,
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

export type ModelSleepLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  hoursSlept?: ModelFloatInput | null,
  sleepQuality?: ModelIntInput | null,
  restfulnessScore?: ModelIntInput | null,
  dreamJournal?: ModelStringInput | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionFloatInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type ModelSubscriptionNutritionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  foodName?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbs?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNutritionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionNutritionLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMealFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  mealPeriod?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  mealFoodItemsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFoodItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbs?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  serving?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoodItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodItemFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionExerciseLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  exerciseType?: ModelSubscriptionStringInput | null,
  durationMinutes?: ModelSubscriptionIntInput | null,
  caloriesBurned?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSleepLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  hoursSlept?: ModelSubscriptionFloatInput | null,
  sleepQuality?: ModelSubscriptionIntInput | null,
  restfulnessScore?: ModelSubscriptionIntInput | null,
  dreamJournal?: ModelSubscriptionStringInput | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type UpdateMealMutationVariables = {
  input: UpdateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type UpdateMealMutation = {
  updateMeal?:  {
    __typename: "Meal",
    id: string,
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type DeleteMealMutationVariables = {
  input: DeleteMealInput,
  condition?: ModelMealConditionInput | null,
};

export type DeleteMealMutation = {
  deleteMeal?:  {
    __typename: "Meal",
    id: string,
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type CreateFoodItemMutationVariables = {
  input: CreateFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type CreateFoodItemMutation = {
  createFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
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
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
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
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
      foodName: string,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
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
      foodName: string,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
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
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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
      userID: string,
      date: string,
      mealPeriod: MealPeriod,
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
      userID: string,
      date: string,
      mealPeriod: MealPeriod,
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

export type GetFoodItemQueryVariables = {
  id: string,
};

export type GetFoodItemQuery = {
  getFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
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
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
      serving?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      mealFoodItemsId?: string | null,
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
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbs?: number | null,
      fat?: number | null,
      serving?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      mealFoodItemsId?: string | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
      exerciseType: string,
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
      exerciseType: string,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
      sleepQuality?: number | null,
      restfulnessScore?: number | null,
      dreamJournal?: string | null,
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
      sleepQuality?: number | null,
      restfulnessScore?: number | null,
      dreamJournal?: string | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    foodName: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
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
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type OnUpdateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnUpdateMealSubscription = {
  onUpdateMeal?:  {
    __typename: "Meal",
    id: string,
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type OnDeleteMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnDeleteMealSubscription = {
  onDeleteMeal?:  {
    __typename: "Meal",
    id: string,
    userID: string,
    date: string,
    mealPeriod: MealPeriod,
    foodItems?:  {
      __typename: "ModelFoodItemConnection",
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

export type OnCreateFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnCreateFoodItemSubscription = {
  onCreateFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
  } | null,
};

export type OnUpdateFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnUpdateFoodItemSubscription = {
  onUpdateFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
  } | null,
};

export type OnDeleteFoodItemSubscriptionVariables = {
  filter?: ModelSubscriptionFoodItemFilterInput | null,
};

export type OnDeleteFoodItemSubscription = {
  onDeleteFoodItem?:  {
    __typename: "FoodItem",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbs?: number | null,
    fat?: number | null,
    serving?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    mealFoodItemsId?: string | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    exerciseType: string,
    durationMinutes?: number | null,
    caloriesBurned?: number | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
    sleepQuality?: number | null,
    restfulnessScore?: number | null,
    dreamJournal?: string | null,
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
