/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDailyGoals = /* GraphQL */ `subscription OnCreateDailyGoals(
  $filter: ModelSubscriptionDailyGoalsFilterInput
) {
  onCreateDailyGoals(filter: $filter) {
    id
    userId
    minSleep
    dailyWorkout
    proteinGoal
    carbGoal
    fatGoal
    calorieGoal
    nutritionBuffer
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDailyGoalsSubscriptionVariables,
  APITypes.OnCreateDailyGoalsSubscription
>;
export const onUpdateDailyGoals = /* GraphQL */ `subscription OnUpdateDailyGoals(
  $filter: ModelSubscriptionDailyGoalsFilterInput
) {
  onUpdateDailyGoals(filter: $filter) {
    id
    userId
    minSleep
    dailyWorkout
    proteinGoal
    carbGoal
    fatGoal
    calorieGoal
    nutritionBuffer
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDailyGoalsSubscriptionVariables,
  APITypes.OnUpdateDailyGoalsSubscription
>;
export const onDeleteDailyGoals = /* GraphQL */ `subscription OnDeleteDailyGoals(
  $filter: ModelSubscriptionDailyGoalsFilterInput
) {
  onDeleteDailyGoals(filter: $filter) {
    id
    userId
    minSleep
    dailyWorkout
    proteinGoal
    carbGoal
    fatGoal
    calorieGoal
    nutritionBuffer
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDailyGoalsSubscriptionVariables,
  APITypes.OnDeleteDailyGoalsSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    userId
    name
    age
    height
    weight
    gender
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    userId
    name
    age
    height
    weight
    gender
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    userId
    name
    age
    height
    weight
    gender
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateNutritionLog = /* GraphQL */ `subscription OnCreateNutritionLog(
  $filter: ModelSubscriptionNutritionLogFilterInput
) {
  onCreateNutritionLog(filter: $filter) {
    id
    userId
    date
    Meals {
      nextToken
      startedAt
      __typename
    }
    waterIntake
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNutritionLogSubscriptionVariables,
  APITypes.OnCreateNutritionLogSubscription
>;
export const onUpdateNutritionLog = /* GraphQL */ `subscription OnUpdateNutritionLog(
  $filter: ModelSubscriptionNutritionLogFilterInput
) {
  onUpdateNutritionLog(filter: $filter) {
    id
    userId
    date
    Meals {
      nextToken
      startedAt
      __typename
    }
    waterIntake
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNutritionLogSubscriptionVariables,
  APITypes.OnUpdateNutritionLogSubscription
>;
export const onDeleteNutritionLog = /* GraphQL */ `subscription OnDeleteNutritionLog(
  $filter: ModelSubscriptionNutritionLogFilterInput
) {
  onDeleteNutritionLog(filter: $filter) {
    id
    userId
    date
    Meals {
      nextToken
      startedAt
      __typename
    }
    waterIntake
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNutritionLogSubscriptionVariables,
  APITypes.OnDeleteNutritionLogSubscription
>;
export const onCreateMeal = /* GraphQL */ `subscription OnCreateMeal($filter: ModelSubscriptionMealFilterInput) {
  onCreateMeal(filter: $filter) {
    id
    mealPeriod
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    nutritionLogMealsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMealSubscriptionVariables,
  APITypes.OnCreateMealSubscription
>;
export const onUpdateMeal = /* GraphQL */ `subscription OnUpdateMeal($filter: ModelSubscriptionMealFilterInput) {
  onUpdateMeal(filter: $filter) {
    id
    mealPeriod
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    nutritionLogMealsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMealSubscriptionVariables,
  APITypes.OnUpdateMealSubscription
>;
export const onDeleteMeal = /* GraphQL */ `subscription OnDeleteMeal($filter: ModelSubscriptionMealFilterInput) {
  onDeleteMeal(filter: $filter) {
    id
    mealPeriod
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    nutritionLogMealsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMealSubscriptionVariables,
  APITypes.OnDeleteMealSubscription
>;
export const onCreateMealToFood = /* GraphQL */ `subscription OnCreateMealToFood(
  $filter: ModelSubscriptionMealToFoodFilterInput
) {
  onCreateMealToFood(filter: $filter) {
    id
    mealId
    foodId
    servingId
    servingAmount
    meal {
      id
      mealPeriod
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nutritionLogMealsId
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMealToFoodSubscriptionVariables,
  APITypes.OnCreateMealToFoodSubscription
>;
export const onUpdateMealToFood = /* GraphQL */ `subscription OnUpdateMealToFood(
  $filter: ModelSubscriptionMealToFoodFilterInput
) {
  onUpdateMealToFood(filter: $filter) {
    id
    mealId
    foodId
    servingId
    servingAmount
    meal {
      id
      mealPeriod
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nutritionLogMealsId
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMealToFoodSubscriptionVariables,
  APITypes.OnUpdateMealToFoodSubscription
>;
export const onDeleteMealToFood = /* GraphQL */ `subscription OnDeleteMealToFood(
  $filter: ModelSubscriptionMealToFoodFilterInput
) {
  onDeleteMealToFood(filter: $filter) {
    id
    mealId
    foodId
    servingId
    servingAmount
    meal {
      id
      mealPeriod
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nutritionLogMealsId
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMealToFoodSubscriptionVariables,
  APITypes.OnDeleteMealToFoodSubscription
>;
export const onCreateFoodBarcode = /* GraphQL */ `subscription OnCreateFoodBarcode(
  $filter: ModelSubscriptionFoodBarcodeFilterInput
) {
  onCreateFoodBarcode(filter: $filter) {
    id
    barcode
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemBarcodesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFoodBarcodeSubscriptionVariables,
  APITypes.OnCreateFoodBarcodeSubscription
>;
export const onUpdateFoodBarcode = /* GraphQL */ `subscription OnUpdateFoodBarcode(
  $filter: ModelSubscriptionFoodBarcodeFilterInput
) {
  onUpdateFoodBarcode(filter: $filter) {
    id
    barcode
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemBarcodesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFoodBarcodeSubscriptionVariables,
  APITypes.OnUpdateFoodBarcodeSubscription
>;
export const onDeleteFoodBarcode = /* GraphQL */ `subscription OnDeleteFoodBarcode(
  $filter: ModelSubscriptionFoodBarcodeFilterInput
) {
  onDeleteFoodBarcode(filter: $filter) {
    id
    barcode
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemBarcodesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFoodBarcodeSubscriptionVariables,
  APITypes.OnDeleteFoodBarcodeSubscription
>;
export const onCreateFoodItem = /* GraphQL */ `subscription OnCreateFoodItem($filter: ModelSubscriptionFoodItemFilterInput) {
  onCreateFoodItem(filter: $filter) {
    id
    owner
    name
    meals {
      nextToken
      startedAt
      __typename
    }
    recipes {
      nextToken
      startedAt
      __typename
    }
    favoritedBy {
      nextToken
      startedAt
      __typename
    }
    servingOptions {
      nextToken
      startedAt
      __typename
    }
    barcodes {
      nextToken
      startedAt
      __typename
    }
    brand
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFoodItemSubscriptionVariables,
  APITypes.OnCreateFoodItemSubscription
>;
export const onUpdateFoodItem = /* GraphQL */ `subscription OnUpdateFoodItem($filter: ModelSubscriptionFoodItemFilterInput) {
  onUpdateFoodItem(filter: $filter) {
    id
    owner
    name
    meals {
      nextToken
      startedAt
      __typename
    }
    recipes {
      nextToken
      startedAt
      __typename
    }
    favoritedBy {
      nextToken
      startedAt
      __typename
    }
    servingOptions {
      nextToken
      startedAt
      __typename
    }
    barcodes {
      nextToken
      startedAt
      __typename
    }
    brand
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFoodItemSubscriptionVariables,
  APITypes.OnUpdateFoodItemSubscription
>;
export const onDeleteFoodItem = /* GraphQL */ `subscription OnDeleteFoodItem($filter: ModelSubscriptionFoodItemFilterInput) {
  onDeleteFoodItem(filter: $filter) {
    id
    owner
    name
    meals {
      nextToken
      startedAt
      __typename
    }
    recipes {
      nextToken
      startedAt
      __typename
    }
    favoritedBy {
      nextToken
      startedAt
      __typename
    }
    servingOptions {
      nextToken
      startedAt
      __typename
    }
    barcodes {
      nextToken
      startedAt
      __typename
    }
    brand
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFoodItemSubscriptionVariables,
  APITypes.OnDeleteFoodItemSubscription
>;
export const onCreateFoodItemServing = /* GraphQL */ `subscription OnCreateFoodItemServing(
  $filter: ModelSubscriptionFoodItemServingFilterInput
) {
  onCreateFoodItemServing(filter: $filter) {
    id
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    servingSize
    servingUnit
    calories
    protein
    carbs
    fat
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemServingOptionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFoodItemServingSubscriptionVariables,
  APITypes.OnCreateFoodItemServingSubscription
>;
export const onUpdateFoodItemServing = /* GraphQL */ `subscription OnUpdateFoodItemServing(
  $filter: ModelSubscriptionFoodItemServingFilterInput
) {
  onUpdateFoodItemServing(filter: $filter) {
    id
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    servingSize
    servingUnit
    calories
    protein
    carbs
    fat
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemServingOptionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFoodItemServingSubscriptionVariables,
  APITypes.OnUpdateFoodItemServingSubscription
>;
export const onDeleteFoodItemServing = /* GraphQL */ `subscription OnDeleteFoodItemServing(
  $filter: ModelSubscriptionFoodItemServingFilterInput
) {
  onDeleteFoodItemServing(filter: $filter) {
    id
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    servingSize
    servingUnit
    calories
    protein
    carbs
    fat
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemServingOptionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFoodItemServingSubscriptionVariables,
  APITypes.OnDeleteFoodItemServingSubscription
>;
export const onCreateUserFavoriteFood = /* GraphQL */ `subscription OnCreateUserFavoriteFood(
  $filter: ModelSubscriptionUserFavoriteFoodFilterInput
) {
  onCreateUserFavoriteFood(filter: $filter) {
    id
    userId
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemFavoritedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserFavoriteFoodSubscriptionVariables,
  APITypes.OnCreateUserFavoriteFoodSubscription
>;
export const onUpdateUserFavoriteFood = /* GraphQL */ `subscription OnUpdateUserFavoriteFood(
  $filter: ModelSubscriptionUserFavoriteFoodFilterInput
) {
  onUpdateUserFavoriteFood(filter: $filter) {
    id
    userId
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemFavoritedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserFavoriteFoodSubscriptionVariables,
  APITypes.OnUpdateUserFavoriteFoodSubscription
>;
export const onDeleteUserFavoriteFood = /* GraphQL */ `subscription OnDeleteUserFavoriteFood(
  $filter: ModelSubscriptionUserFavoriteFoodFilterInput
) {
  onDeleteUserFavoriteFood(filter: $filter) {
    id
    userId
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    foodItemFavoritedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserFavoriteFoodSubscriptionVariables,
  APITypes.OnDeleteUserFavoriteFoodSubscription
>;
export const onCreateRecipe = /* GraphQL */ `subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onCreateRecipe(filter: $filter) {
    id
    name
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRecipeSubscriptionVariables,
  APITypes.OnCreateRecipeSubscription
>;
export const onUpdateRecipe = /* GraphQL */ `subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onUpdateRecipe(filter: $filter) {
    id
    name
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeSubscriptionVariables,
  APITypes.OnUpdateRecipeSubscription
>;
export const onDeleteRecipe = /* GraphQL */ `subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onDeleteRecipe(filter: $filter) {
    id
    name
    foodItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeSubscriptionVariables,
  APITypes.OnDeleteRecipeSubscription
>;
export const onCreateRecipeToFood = /* GraphQL */ `subscription OnCreateRecipeToFood(
  $filter: ModelSubscriptionRecipeToFoodFilterInput
) {
  onCreateRecipeToFood(filter: $filter) {
    id
    recipeId
    foodId
    servingId
    servingAmount
    recipe {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRecipeToFoodSubscriptionVariables,
  APITypes.OnCreateRecipeToFoodSubscription
>;
export const onUpdateRecipeToFood = /* GraphQL */ `subscription OnUpdateRecipeToFood(
  $filter: ModelSubscriptionRecipeToFoodFilterInput
) {
  onUpdateRecipeToFood(filter: $filter) {
    id
    recipeId
    foodId
    servingId
    servingAmount
    recipe {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeToFoodSubscriptionVariables,
  APITypes.OnUpdateRecipeToFoodSubscription
>;
export const onDeleteRecipeToFood = /* GraphQL */ `subscription OnDeleteRecipeToFood(
  $filter: ModelSubscriptionRecipeToFoodFilterInput
) {
  onDeleteRecipeToFood(filter: $filter) {
    id
    recipeId
    foodId
    servingId
    servingAmount
    recipe {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    foodItem {
      id
      owner
      name
      brand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeToFoodSubscriptionVariables,
  APITypes.OnDeleteRecipeToFoodSubscription
>;
export const onCreateExerciseLog = /* GraphQL */ `subscription OnCreateExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
) {
  onCreateExerciseLog(filter: $filter) {
    id
    userId
    date
    exerciseRoutine {
      nextToken
      startedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseLogSubscriptionVariables,
  APITypes.OnCreateExerciseLogSubscription
>;
export const onUpdateExerciseLog = /* GraphQL */ `subscription OnUpdateExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
) {
  onUpdateExerciseLog(filter: $filter) {
    id
    userId
    date
    exerciseRoutine {
      nextToken
      startedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseLogSubscriptionVariables,
  APITypes.OnUpdateExerciseLogSubscription
>;
export const onDeleteExerciseLog = /* GraphQL */ `subscription OnDeleteExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
) {
  onDeleteExerciseLog(filter: $filter) {
    id
    userId
    date
    exerciseRoutine {
      nextToken
      startedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseLogSubscriptionVariables,
  APITypes.OnDeleteExerciseLogSubscription
>;
export const onCreateExerciseRoutine = /* GraphQL */ `subscription OnCreateExerciseRoutine(
  $filter: ModelSubscriptionExerciseRoutineFilterInput
) {
  onCreateExerciseRoutine(filter: $filter) {
    id
    userId
    name
    exerciseType {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseLogExerciseRoutineId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseRoutineSubscriptionVariables,
  APITypes.OnCreateExerciseRoutineSubscription
>;
export const onUpdateExerciseRoutine = /* GraphQL */ `subscription OnUpdateExerciseRoutine(
  $filter: ModelSubscriptionExerciseRoutineFilterInput
) {
  onUpdateExerciseRoutine(filter: $filter) {
    id
    userId
    name
    exerciseType {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseLogExerciseRoutineId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseRoutineSubscriptionVariables,
  APITypes.OnUpdateExerciseRoutineSubscription
>;
export const onDeleteExerciseRoutine = /* GraphQL */ `subscription OnDeleteExerciseRoutine(
  $filter: ModelSubscriptionExerciseRoutineFilterInput
) {
  onDeleteExerciseRoutine(filter: $filter) {
    id
    userId
    name
    exerciseType {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseLogExerciseRoutineId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseRoutineSubscriptionVariables,
  APITypes.OnDeleteExerciseRoutineSubscription
>;
export const onCreateExerciseType = /* GraphQL */ `subscription OnCreateExerciseType(
  $filter: ModelSubscriptionExerciseTypeFilterInput
) {
  onCreateExerciseType(filter: $filter) {
    id
    name
    target
    exerciseSet {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseRoutineExerciseTypeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseTypeSubscriptionVariables,
  APITypes.OnCreateExerciseTypeSubscription
>;
export const onUpdateExerciseType = /* GraphQL */ `subscription OnUpdateExerciseType(
  $filter: ModelSubscriptionExerciseTypeFilterInput
) {
  onUpdateExerciseType(filter: $filter) {
    id
    name
    target
    exerciseSet {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseRoutineExerciseTypeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseTypeSubscriptionVariables,
  APITypes.OnUpdateExerciseTypeSubscription
>;
export const onDeleteExerciseType = /* GraphQL */ `subscription OnDeleteExerciseType(
  $filter: ModelSubscriptionExerciseTypeFilterInput
) {
  onDeleteExerciseType(filter: $filter) {
    id
    name
    target
    exerciseSet {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseRoutineExerciseTypeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseTypeSubscriptionVariables,
  APITypes.OnDeleteExerciseTypeSubscription
>;
export const onCreateExerciseSet = /* GraphQL */ `subscription OnCreateExerciseSet(
  $filter: ModelSubscriptionExerciseSetFilterInput
) {
  onCreateExerciseSet(filter: $filter) {
    id
    reps
    time
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseTypeExerciseSetId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSetSubscriptionVariables,
  APITypes.OnCreateExerciseSetSubscription
>;
export const onUpdateExerciseSet = /* GraphQL */ `subscription OnUpdateExerciseSet(
  $filter: ModelSubscriptionExerciseSetFilterInput
) {
  onUpdateExerciseSet(filter: $filter) {
    id
    reps
    time
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseTypeExerciseSetId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSetSubscriptionVariables,
  APITypes.OnUpdateExerciseSetSubscription
>;
export const onDeleteExerciseSet = /* GraphQL */ `subscription OnDeleteExerciseSet(
  $filter: ModelSubscriptionExerciseSetFilterInput
) {
  onDeleteExerciseSet(filter: $filter) {
    id
    reps
    time
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    exerciseTypeExerciseSetId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSetSubscriptionVariables,
  APITypes.OnDeleteExerciseSetSubscription
>;
export const onCreateSleepLog = /* GraphQL */ `subscription OnCreateSleepLog($filter: ModelSubscriptionSleepLogFilterInput) {
  onCreateSleepLog(filter: $filter) {
    id
    userId
    date
    hoursSlept
    sleepQuality
    dreamJournal
    restfulnessScore
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSleepLogSubscriptionVariables,
  APITypes.OnCreateSleepLogSubscription
>;
export const onUpdateSleepLog = /* GraphQL */ `subscription OnUpdateSleepLog($filter: ModelSubscriptionSleepLogFilterInput) {
  onUpdateSleepLog(filter: $filter) {
    id
    userId
    date
    hoursSlept
    sleepQuality
    dreamJournal
    restfulnessScore
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSleepLogSubscriptionVariables,
  APITypes.OnUpdateSleepLogSubscription
>;
export const onDeleteSleepLog = /* GraphQL */ `subscription OnDeleteSleepLog($filter: ModelSubscriptionSleepLogFilterInput) {
  onDeleteSleepLog(filter: $filter) {
    id
    userId
    date
    hoursSlept
    sleepQuality
    dreamJournal
    restfulnessScore
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSleepLogSubscriptionVariables,
  APITypes.OnDeleteSleepLogSubscription
>;
export const onCreateHealthScore = /* GraphQL */ `subscription OnCreateHealthScore(
  $filter: ModelSubscriptionHealthScoreFilterInput
) {
  onCreateHealthScore(filter: $filter) {
    id
    userId
    date
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHealthScoreSubscriptionVariables,
  APITypes.OnCreateHealthScoreSubscription
>;
export const onUpdateHealthScore = /* GraphQL */ `subscription OnUpdateHealthScore(
  $filter: ModelSubscriptionHealthScoreFilterInput
) {
  onUpdateHealthScore(filter: $filter) {
    id
    userId
    date
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHealthScoreSubscriptionVariables,
  APITypes.OnUpdateHealthScoreSubscription
>;
export const onDeleteHealthScore = /* GraphQL */ `subscription OnDeleteHealthScore(
  $filter: ModelSubscriptionHealthScoreFilterInput
) {
  onDeleteHealthScore(filter: $filter) {
    id
    userId
    date
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHealthScoreSubscriptionVariables,
  APITypes.OnDeleteHealthScoreSubscription
>;
export const onCreateGoalLog = /* GraphQL */ `subscription OnCreateGoalLog($filter: ModelSubscriptionGoalLogFilterInput) {
  onCreateGoalLog(filter: $filter) {
    id
    userId
    weight
    hoursSlept
    dailyCalories
    dailyExercise
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGoalLogSubscriptionVariables,
  APITypes.OnCreateGoalLogSubscription
>;
export const onUpdateGoalLog = /* GraphQL */ `subscription OnUpdateGoalLog($filter: ModelSubscriptionGoalLogFilterInput) {
  onUpdateGoalLog(filter: $filter) {
    id
    userId
    weight
    hoursSlept
    dailyCalories
    dailyExercise
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGoalLogSubscriptionVariables,
  APITypes.OnUpdateGoalLogSubscription
>;
export const onDeleteGoalLog = /* GraphQL */ `subscription OnDeleteGoalLog($filter: ModelSubscriptionGoalLogFilterInput) {
  onDeleteGoalLog(filter: $filter) {
    id
    userId
    weight
    hoursSlept
    dailyCalories
    dailyExercise
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGoalLogSubscriptionVariables,
  APITypes.OnDeleteGoalLogSubscription
>;
