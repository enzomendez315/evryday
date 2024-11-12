/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDailyGoals = /* GraphQL */ `mutation CreateDailyGoals(
  $input: CreateDailyGoalsInput!
  $condition: ModelDailyGoalsConditionInput
) {
  createDailyGoals(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDailyGoalsMutationVariables,
  APITypes.CreateDailyGoalsMutation
>;
export const updateDailyGoals = /* GraphQL */ `mutation UpdateDailyGoals(
  $input: UpdateDailyGoalsInput!
  $condition: ModelDailyGoalsConditionInput
) {
  updateDailyGoals(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDailyGoalsMutationVariables,
  APITypes.UpdateDailyGoalsMutation
>;
export const deleteDailyGoals = /* GraphQL */ `mutation DeleteDailyGoals(
  $input: DeleteDailyGoalsInput!
  $condition: ModelDailyGoalsConditionInput
) {
  deleteDailyGoals(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDailyGoalsMutationVariables,
  APITypes.DeleteDailyGoalsMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    userId
    name
    name_searchable
    age
    height
    weight
    gender
    friends {
      nextToken
      startedAt
      __typename
    }
    privacySettings {
      id
      isSearchable
      showDiet
      showWorkout
      showSleep
      showAccountDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      privacySettingsUserId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userPrivacySettingsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    userId
    name
    name_searchable
    age
    height
    weight
    gender
    friends {
      nextToken
      startedAt
      __typename
    }
    privacySettings {
      id
      isSearchable
      showDiet
      showWorkout
      showSleep
      showAccountDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      privacySettingsUserId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userPrivacySettingsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    userId
    name
    name_searchable
    age
    height
    weight
    gender
    friends {
      nextToken
      startedAt
      __typename
    }
    privacySettings {
      id
      isSearchable
      showDiet
      showWorkout
      showSleep
      showAccountDetails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      privacySettingsUserId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userPrivacySettingsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPrivacySettings = /* GraphQL */ `mutation CreatePrivacySettings(
  $input: CreatePrivacySettingsInput!
  $condition: ModelPrivacySettingsConditionInput
) {
  createPrivacySettings(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    isSearchable
    showDiet
    showWorkout
    showSleep
    showAccountDetails
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    privacySettingsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrivacySettingsMutationVariables,
  APITypes.CreatePrivacySettingsMutation
>;
export const updatePrivacySettings = /* GraphQL */ `mutation UpdatePrivacySettings(
  $input: UpdatePrivacySettingsInput!
  $condition: ModelPrivacySettingsConditionInput
) {
  updatePrivacySettings(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    isSearchable
    showDiet
    showWorkout
    showSleep
    showAccountDetails
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    privacySettingsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrivacySettingsMutationVariables,
  APITypes.UpdatePrivacySettingsMutation
>;
export const deletePrivacySettings = /* GraphQL */ `mutation DeletePrivacySettings(
  $input: DeletePrivacySettingsInput!
  $condition: ModelPrivacySettingsConditionInput
) {
  deletePrivacySettings(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    isSearchable
    showDiet
    showWorkout
    showSleep
    showAccountDetails
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    privacySettingsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrivacySettingsMutationVariables,
  APITypes.DeletePrivacySettingsMutation
>;
export const createFriends = /* GraphQL */ `mutation CreateFriends(
  $input: CreateFriendsInput!
  $condition: ModelFriendsConditionInput
) {
  createFriends(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    friendsUserId
    state
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userFriendsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFriendsMutationVariables,
  APITypes.CreateFriendsMutation
>;
export const updateFriends = /* GraphQL */ `mutation UpdateFriends(
  $input: UpdateFriendsInput!
  $condition: ModelFriendsConditionInput
) {
  updateFriends(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    friendsUserId
    state
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userFriendsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFriendsMutationVariables,
  APITypes.UpdateFriendsMutation
>;
export const deleteFriends = /* GraphQL */ `mutation DeleteFriends(
  $input: DeleteFriendsInput!
  $condition: ModelFriendsConditionInput
) {
  deleteFriends(input: $input, condition: $condition) {
    id
    user {
      id
      userId
      name
      name_searchable
      age
      height
      weight
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPrivacySettingsId
      __typename
    }
    friendsUserId
    state
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userFriendsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFriendsMutationVariables,
  APITypes.DeleteFriendsMutation
>;
export const createNutritionLog = /* GraphQL */ `mutation CreateNutritionLog(
  $input: CreateNutritionLogInput!
  $condition: ModelNutritionLogConditionInput
) {
  createNutritionLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNutritionLogMutationVariables,
  APITypes.CreateNutritionLogMutation
>;
export const updateNutritionLog = /* GraphQL */ `mutation UpdateNutritionLog(
  $input: UpdateNutritionLogInput!
  $condition: ModelNutritionLogConditionInput
) {
  updateNutritionLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNutritionLogMutationVariables,
  APITypes.UpdateNutritionLogMutation
>;
export const deleteNutritionLog = /* GraphQL */ `mutation DeleteNutritionLog(
  $input: DeleteNutritionLogInput!
  $condition: ModelNutritionLogConditionInput
) {
  deleteNutritionLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNutritionLogMutationVariables,
  APITypes.DeleteNutritionLogMutation
>;
export const createMeal = /* GraphQL */ `mutation CreateMeal(
  $input: CreateMealInput!
  $condition: ModelMealConditionInput
) {
  createMeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMealMutationVariables,
  APITypes.CreateMealMutation
>;
export const updateMeal = /* GraphQL */ `mutation UpdateMeal(
  $input: UpdateMealInput!
  $condition: ModelMealConditionInput
) {
  updateMeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMealMutationVariables,
  APITypes.UpdateMealMutation
>;
export const deleteMeal = /* GraphQL */ `mutation DeleteMeal(
  $input: DeleteMealInput!
  $condition: ModelMealConditionInput
) {
  deleteMeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMealMutationVariables,
  APITypes.DeleteMealMutation
>;
export const createMealToFood = /* GraphQL */ `mutation CreateMealToFood(
  $input: CreateMealToFoodInput!
  $condition: ModelMealToFoodConditionInput
) {
  createMealToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMealToFoodMutationVariables,
  APITypes.CreateMealToFoodMutation
>;
export const updateMealToFood = /* GraphQL */ `mutation UpdateMealToFood(
  $input: UpdateMealToFoodInput!
  $condition: ModelMealToFoodConditionInput
) {
  updateMealToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMealToFoodMutationVariables,
  APITypes.UpdateMealToFoodMutation
>;
export const deleteMealToFood = /* GraphQL */ `mutation DeleteMealToFood(
  $input: DeleteMealToFoodInput!
  $condition: ModelMealToFoodConditionInput
) {
  deleteMealToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMealToFoodMutationVariables,
  APITypes.DeleteMealToFoodMutation
>;
export const createFoodBarcode = /* GraphQL */ `mutation CreateFoodBarcode(
  $input: CreateFoodBarcodeInput!
  $condition: ModelFoodBarcodeConditionInput
) {
  createFoodBarcode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFoodBarcodeMutationVariables,
  APITypes.CreateFoodBarcodeMutation
>;
export const updateFoodBarcode = /* GraphQL */ `mutation UpdateFoodBarcode(
  $input: UpdateFoodBarcodeInput!
  $condition: ModelFoodBarcodeConditionInput
) {
  updateFoodBarcode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFoodBarcodeMutationVariables,
  APITypes.UpdateFoodBarcodeMutation
>;
export const deleteFoodBarcode = /* GraphQL */ `mutation DeleteFoodBarcode(
  $input: DeleteFoodBarcodeInput!
  $condition: ModelFoodBarcodeConditionInput
) {
  deleteFoodBarcode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFoodBarcodeMutationVariables,
  APITypes.DeleteFoodBarcodeMutation
>;
export const createFoodItem = /* GraphQL */ `mutation CreateFoodItem(
  $input: CreateFoodItemInput!
  $condition: ModelFoodItemConditionInput
) {
  createFoodItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFoodItemMutationVariables,
  APITypes.CreateFoodItemMutation
>;
export const updateFoodItem = /* GraphQL */ `mutation UpdateFoodItem(
  $input: UpdateFoodItemInput!
  $condition: ModelFoodItemConditionInput
) {
  updateFoodItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFoodItemMutationVariables,
  APITypes.UpdateFoodItemMutation
>;
export const deleteFoodItem = /* GraphQL */ `mutation DeleteFoodItem(
  $input: DeleteFoodItemInput!
  $condition: ModelFoodItemConditionInput
) {
  deleteFoodItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFoodItemMutationVariables,
  APITypes.DeleteFoodItemMutation
>;
export const createFoodItemServing = /* GraphQL */ `mutation CreateFoodItemServing(
  $input: CreateFoodItemServingInput!
  $condition: ModelFoodItemServingConditionInput
) {
  createFoodItemServing(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFoodItemServingMutationVariables,
  APITypes.CreateFoodItemServingMutation
>;
export const updateFoodItemServing = /* GraphQL */ `mutation UpdateFoodItemServing(
  $input: UpdateFoodItemServingInput!
  $condition: ModelFoodItemServingConditionInput
) {
  updateFoodItemServing(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFoodItemServingMutationVariables,
  APITypes.UpdateFoodItemServingMutation
>;
export const deleteFoodItemServing = /* GraphQL */ `mutation DeleteFoodItemServing(
  $input: DeleteFoodItemServingInput!
  $condition: ModelFoodItemServingConditionInput
) {
  deleteFoodItemServing(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFoodItemServingMutationVariables,
  APITypes.DeleteFoodItemServingMutation
>;
export const createUserFavoriteFood = /* GraphQL */ `mutation CreateUserFavoriteFood(
  $input: CreateUserFavoriteFoodInput!
  $condition: ModelUserFavoriteFoodConditionInput
) {
  createUserFavoriteFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserFavoriteFoodMutationVariables,
  APITypes.CreateUserFavoriteFoodMutation
>;
export const updateUserFavoriteFood = /* GraphQL */ `mutation UpdateUserFavoriteFood(
  $input: UpdateUserFavoriteFoodInput!
  $condition: ModelUserFavoriteFoodConditionInput
) {
  updateUserFavoriteFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserFavoriteFoodMutationVariables,
  APITypes.UpdateUserFavoriteFoodMutation
>;
export const deleteUserFavoriteFood = /* GraphQL */ `mutation DeleteUserFavoriteFood(
  $input: DeleteUserFavoriteFoodInput!
  $condition: ModelUserFavoriteFoodConditionInput
) {
  deleteUserFavoriteFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserFavoriteFoodMutationVariables,
  APITypes.DeleteUserFavoriteFoodMutation
>;
export const createRecipe = /* GraphQL */ `mutation CreateRecipe(
  $input: CreateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  createRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRecipeMutationVariables,
  APITypes.CreateRecipeMutation
>;
export const updateRecipe = /* GraphQL */ `mutation UpdateRecipe(
  $input: UpdateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  updateRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRecipeMutationVariables,
  APITypes.UpdateRecipeMutation
>;
export const deleteRecipe = /* GraphQL */ `mutation DeleteRecipe(
  $input: DeleteRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  deleteRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRecipeMutationVariables,
  APITypes.DeleteRecipeMutation
>;
export const createRecipeToFood = /* GraphQL */ `mutation CreateRecipeToFood(
  $input: CreateRecipeToFoodInput!
  $condition: ModelRecipeToFoodConditionInput
) {
  createRecipeToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRecipeToFoodMutationVariables,
  APITypes.CreateRecipeToFoodMutation
>;
export const updateRecipeToFood = /* GraphQL */ `mutation UpdateRecipeToFood(
  $input: UpdateRecipeToFoodInput!
  $condition: ModelRecipeToFoodConditionInput
) {
  updateRecipeToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRecipeToFoodMutationVariables,
  APITypes.UpdateRecipeToFoodMutation
>;
export const deleteRecipeToFood = /* GraphQL */ `mutation DeleteRecipeToFood(
  $input: DeleteRecipeToFoodInput!
  $condition: ModelRecipeToFoodConditionInput
) {
  deleteRecipeToFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRecipeToFoodMutationVariables,
  APITypes.DeleteRecipeToFoodMutation
>;
export const createExerciseLog = /* GraphQL */ `mutation CreateExerciseLog(
  $input: CreateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  createExerciseLog(input: $input, condition: $condition) {
    id
    userId
    date
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    ExerciseSets {
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
` as GeneratedMutation<
  APITypes.CreateExerciseLogMutationVariables,
  APITypes.CreateExerciseLogMutation
>;
export const updateExerciseLog = /* GraphQL */ `mutation UpdateExerciseLog(
  $input: UpdateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  updateExerciseLog(input: $input, condition: $condition) {
    id
    userId
    date
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    ExerciseSets {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseLogMutationVariables,
  APITypes.UpdateExerciseLogMutation
>;
export const deleteExerciseLog = /* GraphQL */ `mutation DeleteExerciseLog(
  $input: DeleteExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  deleteExerciseLog(input: $input, condition: $condition) {
    id
    userId
    date
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    durationMinutes
    caloriesBurned
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    ExerciseSets {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseLogMutationVariables,
  APITypes.DeleteExerciseLogMutation
>;
export const createExerciseSet = /* GraphQL */ `mutation CreateExerciseSet(
  $input: CreateExerciseSetInput!
  $condition: ModelExerciseSetConditionInput
) {
  createExerciseSet(input: $input, condition: $condition) {
    id
    reps
    time
    weight
    ExerciseType {
      nextToken
      startedAt
      __typename
    }
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    exerciselogs {
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
` as GeneratedMutation<
  APITypes.CreateExerciseSetMutationVariables,
  APITypes.CreateExerciseSetMutation
>;
export const updateExerciseSet = /* GraphQL */ `mutation UpdateExerciseSet(
  $input: UpdateExerciseSetInput!
  $condition: ModelExerciseSetConditionInput
) {
  updateExerciseSet(input: $input, condition: $condition) {
    id
    reps
    time
    weight
    ExerciseType {
      nextToken
      startedAt
      __typename
    }
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    exerciselogs {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseSetMutationVariables,
  APITypes.UpdateExerciseSetMutation
>;
export const deleteExerciseSet = /* GraphQL */ `mutation DeleteExerciseSet(
  $input: DeleteExerciseSetInput!
  $condition: ModelExerciseSetConditionInput
) {
  deleteExerciseSet(input: $input, condition: $condition) {
    id
    reps
    time
    weight
    ExerciseType {
      nextToken
      startedAt
      __typename
    }
    ExerciseRoutines {
      nextToken
      startedAt
      __typename
    }
    exerciselogs {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseSetMutationVariables,
  APITypes.DeleteExerciseSetMutation
>;
export const createExerciseRoutine = /* GraphQL */ `mutation CreateExerciseRoutine(
  $input: CreateExerciseRoutineInput!
  $condition: ModelExerciseRoutineConditionInput
) {
  createExerciseRoutine(input: $input, condition: $condition) {
    id
    userId
    name
    exerciselogs {
      nextToken
      startedAt
      __typename
    }
    ExerciseTypes {
      nextToken
      startedAt
      __typename
    }
    exercisesets {
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
` as GeneratedMutation<
  APITypes.CreateExerciseRoutineMutationVariables,
  APITypes.CreateExerciseRoutineMutation
>;
export const updateExerciseRoutine = /* GraphQL */ `mutation UpdateExerciseRoutine(
  $input: UpdateExerciseRoutineInput!
  $condition: ModelExerciseRoutineConditionInput
) {
  updateExerciseRoutine(input: $input, condition: $condition) {
    id
    userId
    name
    exerciselogs {
      nextToken
      startedAt
      __typename
    }
    ExerciseTypes {
      nextToken
      startedAt
      __typename
    }
    exercisesets {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseRoutineMutationVariables,
  APITypes.UpdateExerciseRoutineMutation
>;
export const deleteExerciseRoutine = /* GraphQL */ `mutation DeleteExerciseRoutine(
  $input: DeleteExerciseRoutineInput!
  $condition: ModelExerciseRoutineConditionInput
) {
  deleteExerciseRoutine(input: $input, condition: $condition) {
    id
    userId
    name
    exerciselogs {
      nextToken
      startedAt
      __typename
    }
    ExerciseTypes {
      nextToken
      startedAt
      __typename
    }
    exercisesets {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseRoutineMutationVariables,
  APITypes.DeleteExerciseRoutineMutation
>;
export const createExerciseType = /* GraphQL */ `mutation CreateExerciseType(
  $input: CreateExerciseTypeInput!
  $condition: ModelExerciseTypeConditionInput
) {
  createExerciseType(input: $input, condition: $condition) {
    id
    name
    target
    exercisesets {
      nextToken
      startedAt
      __typename
    }
    exerciseroutines {
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
` as GeneratedMutation<
  APITypes.CreateExerciseTypeMutationVariables,
  APITypes.CreateExerciseTypeMutation
>;
export const updateExerciseType = /* GraphQL */ `mutation UpdateExerciseType(
  $input: UpdateExerciseTypeInput!
  $condition: ModelExerciseTypeConditionInput
) {
  updateExerciseType(input: $input, condition: $condition) {
    id
    name
    target
    exercisesets {
      nextToken
      startedAt
      __typename
    }
    exerciseroutines {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseTypeMutationVariables,
  APITypes.UpdateExerciseTypeMutation
>;
export const deleteExerciseType = /* GraphQL */ `mutation DeleteExerciseType(
  $input: DeleteExerciseTypeInput!
  $condition: ModelExerciseTypeConditionInput
) {
  deleteExerciseType(input: $input, condition: $condition) {
    id
    name
    target
    exercisesets {
      nextToken
      startedAt
      __typename
    }
    exerciseroutines {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseTypeMutationVariables,
  APITypes.DeleteExerciseTypeMutation
>;
export const createSleepLog = /* GraphQL */ `mutation CreateSleepLog(
  $input: CreateSleepLogInput!
  $condition: ModelSleepLogConditionInput
) {
  createSleepLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSleepLogMutationVariables,
  APITypes.CreateSleepLogMutation
>;
export const updateSleepLog = /* GraphQL */ `mutation UpdateSleepLog(
  $input: UpdateSleepLogInput!
  $condition: ModelSleepLogConditionInput
) {
  updateSleepLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSleepLogMutationVariables,
  APITypes.UpdateSleepLogMutation
>;
export const deleteSleepLog = /* GraphQL */ `mutation DeleteSleepLog(
  $input: DeleteSleepLogInput!
  $condition: ModelSleepLogConditionInput
) {
  deleteSleepLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSleepLogMutationVariables,
  APITypes.DeleteSleepLogMutation
>;
export const createHealthScore = /* GraphQL */ `mutation CreateHealthScore(
  $input: CreateHealthScoreInput!
  $condition: ModelHealthScoreConditionInput
) {
  createHealthScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHealthScoreMutationVariables,
  APITypes.CreateHealthScoreMutation
>;
export const updateHealthScore = /* GraphQL */ `mutation UpdateHealthScore(
  $input: UpdateHealthScoreInput!
  $condition: ModelHealthScoreConditionInput
) {
  updateHealthScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHealthScoreMutationVariables,
  APITypes.UpdateHealthScoreMutation
>;
export const deleteHealthScore = /* GraphQL */ `mutation DeleteHealthScore(
  $input: DeleteHealthScoreInput!
  $condition: ModelHealthScoreConditionInput
) {
  deleteHealthScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHealthScoreMutationVariables,
  APITypes.DeleteHealthScoreMutation
>;
export const createGoalLog = /* GraphQL */ `mutation CreateGoalLog(
  $input: CreateGoalLogInput!
  $condition: ModelGoalLogConditionInput
) {
  createGoalLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGoalLogMutationVariables,
  APITypes.CreateGoalLogMutation
>;
export const updateGoalLog = /* GraphQL */ `mutation UpdateGoalLog(
  $input: UpdateGoalLogInput!
  $condition: ModelGoalLogConditionInput
) {
  updateGoalLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGoalLogMutationVariables,
  APITypes.UpdateGoalLogMutation
>;
export const deleteGoalLog = /* GraphQL */ `mutation DeleteGoalLog(
  $input: DeleteGoalLogInput!
  $condition: ModelGoalLogConditionInput
) {
  deleteGoalLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGoalLogMutationVariables,
  APITypes.DeleteGoalLogMutation
>;
export const createWeightLog = /* GraphQL */ `mutation CreateWeightLog(
  $input: CreateWeightLogInput!
  $condition: ModelWeightLogConditionInput
) {
  createWeightLog(input: $input, condition: $condition) {
    id
    userId
    date
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWeightLogMutationVariables,
  APITypes.CreateWeightLogMutation
>;
export const updateWeightLog = /* GraphQL */ `mutation UpdateWeightLog(
  $input: UpdateWeightLogInput!
  $condition: ModelWeightLogConditionInput
) {
  updateWeightLog(input: $input, condition: $condition) {
    id
    userId
    date
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWeightLogMutationVariables,
  APITypes.UpdateWeightLogMutation
>;
export const deleteWeightLog = /* GraphQL */ `mutation DeleteWeightLog(
  $input: DeleteWeightLogInput!
  $condition: ModelWeightLogConditionInput
) {
  deleteWeightLog(input: $input, condition: $condition) {
    id
    userId
    date
    weight
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWeightLogMutationVariables,
  APITypes.DeleteWeightLogMutation
>;
export const createOuraToken = /* GraphQL */ `mutation CreateOuraToken(
  $input: CreateOuraTokenInput!
  $condition: ModelOuraTokenConditionInput
) {
  createOuraToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOuraTokenMutationVariables,
  APITypes.CreateOuraTokenMutation
>;
export const updateOuraToken = /* GraphQL */ `mutation UpdateOuraToken(
  $input: UpdateOuraTokenInput!
  $condition: ModelOuraTokenConditionInput
) {
  updateOuraToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOuraTokenMutationVariables,
  APITypes.UpdateOuraTokenMutation
>;
export const deleteOuraToken = /* GraphQL */ `mutation DeleteOuraToken(
  $input: DeleteOuraTokenInput!
  $condition: ModelOuraTokenConditionInput
) {
  deleteOuraToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOuraTokenMutationVariables,
  APITypes.DeleteOuraTokenMutation
>;
export const createFitbitToken = /* GraphQL */ `mutation CreateFitbitToken(
  $input: CreateFitbitTokenInput!
  $condition: ModelFitbitTokenConditionInput
) {
  createFitbitToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFitbitTokenMutationVariables,
  APITypes.CreateFitbitTokenMutation
>;
export const updateFitbitToken = /* GraphQL */ `mutation UpdateFitbitToken(
  $input: UpdateFitbitTokenInput!
  $condition: ModelFitbitTokenConditionInput
) {
  updateFitbitToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFitbitTokenMutationVariables,
  APITypes.UpdateFitbitTokenMutation
>;
export const deleteFitbitToken = /* GraphQL */ `mutation DeleteFitbitToken(
  $input: DeleteFitbitTokenInput!
  $condition: ModelFitbitTokenConditionInput
) {
  deleteFitbitToken(input: $input, condition: $condition) {
    id
    userId
    accessToken
    refreshToken
    expiresIn
    lastRefresh
    scopes
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFitbitTokenMutationVariables,
  APITypes.DeleteFitbitTokenMutation
>;
export const createExerciseLogExerciseRoutine = /* GraphQL */ `mutation CreateExerciseLogExerciseRoutine(
  $input: CreateExerciseLogExerciseRoutineInput!
  $condition: ModelExerciseLogExerciseRoutineConditionInput
) {
  createExerciseLogExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseRoutineId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.CreateExerciseLogExerciseRoutineMutationVariables,
  APITypes.CreateExerciseLogExerciseRoutineMutation
>;
export const updateExerciseLogExerciseRoutine = /* GraphQL */ `mutation UpdateExerciseLogExerciseRoutine(
  $input: UpdateExerciseLogExerciseRoutineInput!
  $condition: ModelExerciseLogExerciseRoutineConditionInput
) {
  updateExerciseLogExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseRoutineId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.UpdateExerciseLogExerciseRoutineMutationVariables,
  APITypes.UpdateExerciseLogExerciseRoutineMutation
>;
export const deleteExerciseLogExerciseRoutine = /* GraphQL */ `mutation DeleteExerciseLogExerciseRoutine(
  $input: DeleteExerciseLogExerciseRoutineInput!
  $condition: ModelExerciseLogExerciseRoutineConditionInput
) {
  deleteExerciseLogExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseRoutineId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.DeleteExerciseLogExerciseRoutineMutationVariables,
  APITypes.DeleteExerciseLogExerciseRoutineMutation
>;
export const createExerciseLogExerciseSet = /* GraphQL */ `mutation CreateExerciseLogExerciseSet(
  $input: CreateExerciseLogExerciseSetInput!
  $condition: ModelExerciseLogExerciseSetConditionInput
) {
  createExerciseLogExerciseSet(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseSetId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseSet {
      id
      reps
      time
      weight
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
` as GeneratedMutation<
  APITypes.CreateExerciseLogExerciseSetMutationVariables,
  APITypes.CreateExerciseLogExerciseSetMutation
>;
export const updateExerciseLogExerciseSet = /* GraphQL */ `mutation UpdateExerciseLogExerciseSet(
  $input: UpdateExerciseLogExerciseSetInput!
  $condition: ModelExerciseLogExerciseSetConditionInput
) {
  updateExerciseLogExerciseSet(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseSetId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseSet {
      id
      reps
      time
      weight
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
` as GeneratedMutation<
  APITypes.UpdateExerciseLogExerciseSetMutationVariables,
  APITypes.UpdateExerciseLogExerciseSetMutation
>;
export const deleteExerciseLogExerciseSet = /* GraphQL */ `mutation DeleteExerciseLogExerciseSet(
  $input: DeleteExerciseLogExerciseSetInput!
  $condition: ModelExerciseLogExerciseSetConditionInput
) {
  deleteExerciseLogExerciseSet(input: $input, condition: $condition) {
    id
    exerciseLogId
    exerciseSetId
    exerciseLog {
      id
      userId
      date
      durationMinutes
      caloriesBurned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseSet {
      id
      reps
      time
      weight
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
` as GeneratedMutation<
  APITypes.DeleteExerciseLogExerciseSetMutationVariables,
  APITypes.DeleteExerciseLogExerciseSetMutation
>;
export const createExerciseSetExerciseType = /* GraphQL */ `mutation CreateExerciseSetExerciseType(
  $input: CreateExerciseSetExerciseTypeInput!
  $condition: ModelExerciseSetExerciseTypeConditionInput
) {
  createExerciseSetExerciseType(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseTypeId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.CreateExerciseSetExerciseTypeMutationVariables,
  APITypes.CreateExerciseSetExerciseTypeMutation
>;
export const updateExerciseSetExerciseType = /* GraphQL */ `mutation UpdateExerciseSetExerciseType(
  $input: UpdateExerciseSetExerciseTypeInput!
  $condition: ModelExerciseSetExerciseTypeConditionInput
) {
  updateExerciseSetExerciseType(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseTypeId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.UpdateExerciseSetExerciseTypeMutationVariables,
  APITypes.UpdateExerciseSetExerciseTypeMutation
>;
export const deleteExerciseSetExerciseType = /* GraphQL */ `mutation DeleteExerciseSetExerciseType(
  $input: DeleteExerciseSetExerciseTypeInput!
  $condition: ModelExerciseSetExerciseTypeConditionInput
) {
  deleteExerciseSetExerciseType(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseTypeId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.DeleteExerciseSetExerciseTypeMutationVariables,
  APITypes.DeleteExerciseSetExerciseTypeMutation
>;
export const createExerciseSetExerciseRoutine = /* GraphQL */ `mutation CreateExerciseSetExerciseRoutine(
  $input: CreateExerciseSetExerciseRoutineInput!
  $condition: ModelExerciseSetExerciseRoutineConditionInput
) {
  createExerciseSetExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseRoutineId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.CreateExerciseSetExerciseRoutineMutationVariables,
  APITypes.CreateExerciseSetExerciseRoutineMutation
>;
export const updateExerciseSetExerciseRoutine = /* GraphQL */ `mutation UpdateExerciseSetExerciseRoutine(
  $input: UpdateExerciseSetExerciseRoutineInput!
  $condition: ModelExerciseSetExerciseRoutineConditionInput
) {
  updateExerciseSetExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseRoutineId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.UpdateExerciseSetExerciseRoutineMutationVariables,
  APITypes.UpdateExerciseSetExerciseRoutineMutation
>;
export const deleteExerciseSetExerciseRoutine = /* GraphQL */ `mutation DeleteExerciseSetExerciseRoutine(
  $input: DeleteExerciseSetExerciseRoutineInput!
  $condition: ModelExerciseSetExerciseRoutineConditionInput
) {
  deleteExerciseSetExerciseRoutine(input: $input, condition: $condition) {
    id
    exerciseSetId
    exerciseRoutineId
    exerciseSet {
      id
      reps
      time
      weight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseRoutine {
      id
      userId
      name
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
` as GeneratedMutation<
  APITypes.DeleteExerciseSetExerciseRoutineMutationVariables,
  APITypes.DeleteExerciseSetExerciseRoutineMutation
>;
export const createExerciseRoutineExerciseType = /* GraphQL */ `mutation CreateExerciseRoutineExerciseType(
  $input: CreateExerciseRoutineExerciseTypeInput!
  $condition: ModelExerciseRoutineExerciseTypeConditionInput
) {
  createExerciseRoutineExerciseType(input: $input, condition: $condition) {
    id
    exerciseRoutineId
    exerciseTypeId
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.CreateExerciseRoutineExerciseTypeMutationVariables,
  APITypes.CreateExerciseRoutineExerciseTypeMutation
>;
export const updateExerciseRoutineExerciseType = /* GraphQL */ `mutation UpdateExerciseRoutineExerciseType(
  $input: UpdateExerciseRoutineExerciseTypeInput!
  $condition: ModelExerciseRoutineExerciseTypeConditionInput
) {
  updateExerciseRoutineExerciseType(input: $input, condition: $condition) {
    id
    exerciseRoutineId
    exerciseTypeId
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.UpdateExerciseRoutineExerciseTypeMutationVariables,
  APITypes.UpdateExerciseRoutineExerciseTypeMutation
>;
export const deleteExerciseRoutineExerciseType = /* GraphQL */ `mutation DeleteExerciseRoutineExerciseType(
  $input: DeleteExerciseRoutineExerciseTypeInput!
  $condition: ModelExerciseRoutineExerciseTypeConditionInput
) {
  deleteExerciseRoutineExerciseType(input: $input, condition: $condition) {
    id
    exerciseRoutineId
    exerciseTypeId
    exerciseRoutine {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exerciseType {
      id
      name
      target
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
` as GeneratedMutation<
  APITypes.DeleteExerciseRoutineExerciseTypeMutationVariables,
  APITypes.DeleteExerciseRoutineExerciseTypeMutation
>;
