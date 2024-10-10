/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDailyGoals = /* GraphQL */ `query GetDailyGoals($id: ID!) {
  getDailyGoals(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDailyGoalsQueryVariables,
  APITypes.GetDailyGoalsQuery
>;
export const listDailyGoals = /* GraphQL */ `query ListDailyGoals(
  $filter: ModelDailyGoalsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDailyGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDailyGoalsQueryVariables,
  APITypes.ListDailyGoalsQuery
>;
export const syncDailyGoals = /* GraphQL */ `query SyncDailyGoals(
  $filter: ModelDailyGoalsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDailyGoals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDailyGoalsQueryVariables,
  APITypes.SyncDailyGoalsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getNutritionLog = /* GraphQL */ `query GetNutritionLog($id: ID!) {
  getNutritionLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNutritionLogQueryVariables,
  APITypes.GetNutritionLogQuery
>;
export const listNutritionLogs = /* GraphQL */ `query ListNutritionLogs(
  $filter: ModelNutritionLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listNutritionLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      date
      waterIntake
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNutritionLogsQueryVariables,
  APITypes.ListNutritionLogsQuery
>;
export const syncNutritionLogs = /* GraphQL */ `query SyncNutritionLogs(
  $filter: ModelNutritionLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNutritionLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userId
      date
      waterIntake
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNutritionLogsQueryVariables,
  APITypes.SyncNutritionLogsQuery
>;
export const getMeal = /* GraphQL */ `query GetMeal($id: ID!) {
  getMeal(id: $id) {
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
` as GeneratedQuery<APITypes.GetMealQueryVariables, APITypes.GetMealQuery>;
export const listMeals = /* GraphQL */ `query ListMeals(
  $filter: ModelMealFilterInput
  $limit: Int
  $nextToken: String
) {
  listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMealsQueryVariables, APITypes.ListMealsQuery>;
export const syncMeals = /* GraphQL */ `query SyncMeals(
  $filter: ModelMealFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMeals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncMealsQueryVariables, APITypes.SyncMealsQuery>;
export const getMealToFood = /* GraphQL */ `query GetMealToFood($id: ID!) {
  getMealToFood(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMealToFoodQueryVariables,
  APITypes.GetMealToFoodQuery
>;
export const listMealToFoods = /* GraphQL */ `query ListMealToFoods(
  $filter: ModelMealToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  listMealToFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      mealId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMealToFoodsQueryVariables,
  APITypes.ListMealToFoodsQuery
>;
export const syncMealToFoods = /* GraphQL */ `query SyncMealToFoods(
  $filter: ModelMealToFoodFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMealToFoods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      mealId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMealToFoodsQueryVariables,
  APITypes.SyncMealToFoodsQuery
>;
export const mealToFoodsByMealIdAndFoodId = /* GraphQL */ `query MealToFoodsByMealIdAndFoodId(
  $mealId: ID!
  $foodId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMealToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  mealToFoodsByMealIdAndFoodId(
    mealId: $mealId
    foodId: $foodId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mealId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MealToFoodsByMealIdAndFoodIdQueryVariables,
  APITypes.MealToFoodsByMealIdAndFoodIdQuery
>;
export const mealToFoodsByFoodIdAndMealId = /* GraphQL */ `query MealToFoodsByFoodIdAndMealId(
  $foodId: ID!
  $mealId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMealToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  mealToFoodsByFoodIdAndMealId(
    foodId: $foodId
    mealId: $mealId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mealId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MealToFoodsByFoodIdAndMealIdQueryVariables,
  APITypes.MealToFoodsByFoodIdAndMealIdQuery
>;
export const getFoodBarcode = /* GraphQL */ `query GetFoodBarcode($id: ID!) {
  getFoodBarcode(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFoodBarcodeQueryVariables,
  APITypes.GetFoodBarcodeQuery
>;
export const listFoodBarcodes = /* GraphQL */ `query ListFoodBarcodes(
  $filter: ModelFoodBarcodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoodBarcodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      barcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      foodItemBarcodesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoodBarcodesQueryVariables,
  APITypes.ListFoodBarcodesQuery
>;
export const syncFoodBarcodes = /* GraphQL */ `query SyncFoodBarcodes(
  $filter: ModelFoodBarcodeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFoodBarcodes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      barcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      foodItemBarcodesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFoodBarcodesQueryVariables,
  APITypes.SyncFoodBarcodesQuery
>;
export const getFoodItem = /* GraphQL */ `query GetFoodItem($id: ID!) {
  getFoodItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFoodItemQueryVariables,
  APITypes.GetFoodItemQuery
>;
export const listFoodItems = /* GraphQL */ `query ListFoodItems(
  $filter: ModelFoodItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoodItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoodItemsQueryVariables,
  APITypes.ListFoodItemsQuery
>;
export const syncFoodItems = /* GraphQL */ `query SyncFoodItems(
  $filter: ModelFoodItemFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFoodItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFoodItemsQueryVariables,
  APITypes.SyncFoodItemsQuery
>;
export const getFoodItemServing = /* GraphQL */ `query GetFoodItemServing($id: ID!) {
  getFoodItemServing(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFoodItemServingQueryVariables,
  APITypes.GetFoodItemServingQuery
>;
export const listFoodItemServings = /* GraphQL */ `query ListFoodItemServings(
  $filter: ModelFoodItemServingFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoodItemServings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoodItemServingsQueryVariables,
  APITypes.ListFoodItemServingsQuery
>;
export const syncFoodItemServings = /* GraphQL */ `query SyncFoodItemServings(
  $filter: ModelFoodItemServingFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFoodItemServings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFoodItemServingsQueryVariables,
  APITypes.SyncFoodItemServingsQuery
>;
export const getUserFavoriteFood = /* GraphQL */ `query GetUserFavoriteFood($id: ID!) {
  getUserFavoriteFood(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserFavoriteFoodQueryVariables,
  APITypes.GetUserFavoriteFoodQuery
>;
export const listUserFavoriteFoods = /* GraphQL */ `query ListUserFavoriteFoods(
  $filter: ModelUserFavoriteFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFavoriteFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      foodItemFavoritedById
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFavoriteFoodsQueryVariables,
  APITypes.ListUserFavoriteFoodsQuery
>;
export const syncUserFavoriteFoods = /* GraphQL */ `query SyncUserFavoriteFoods(
  $filter: ModelUserFavoriteFoodFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserFavoriteFoods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      foodItemFavoritedById
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserFavoriteFoodsQueryVariables,
  APITypes.SyncUserFavoriteFoodsQuery
>;
export const getRecipe = /* GraphQL */ `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
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
` as GeneratedQuery<APITypes.GetRecipeQueryVariables, APITypes.GetRecipeQuery>;
export const listRecipes = /* GraphQL */ `query ListRecipes(
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipesQueryVariables,
  APITypes.ListRecipesQuery
>;
export const syncRecipes = /* GraphQL */ `query SyncRecipes(
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRecipes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRecipesQueryVariables,
  APITypes.SyncRecipesQuery
>;
export const getRecipeToFood = /* GraphQL */ `query GetRecipeToFood($id: ID!) {
  getRecipeToFood(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecipeToFoodQueryVariables,
  APITypes.GetRecipeToFoodQuery
>;
export const listRecipeToFoods = /* GraphQL */ `query ListRecipeToFoods(
  $filter: ModelRecipeToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipeToFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      recipeId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipeToFoodsQueryVariables,
  APITypes.ListRecipeToFoodsQuery
>;
export const syncRecipeToFoods = /* GraphQL */ `query SyncRecipeToFoods(
  $filter: ModelRecipeToFoodFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRecipeToFoods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      recipeId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRecipeToFoodsQueryVariables,
  APITypes.SyncRecipeToFoodsQuery
>;
export const recipeToFoodsByRecipeIdAndFoodId = /* GraphQL */ `query RecipeToFoodsByRecipeIdAndFoodId(
  $recipeId: ID!
  $foodId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecipeToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  recipeToFoodsByRecipeIdAndFoodId(
    recipeId: $recipeId
    foodId: $foodId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      recipeId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RecipeToFoodsByRecipeIdAndFoodIdQueryVariables,
  APITypes.RecipeToFoodsByRecipeIdAndFoodIdQuery
>;
export const recipeToFoodsByFoodIdAndRecipeId = /* GraphQL */ `query RecipeToFoodsByFoodIdAndRecipeId(
  $foodId: ID!
  $recipeId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecipeToFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  recipeToFoodsByFoodIdAndRecipeId(
    foodId: $foodId
    recipeId: $recipeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      recipeId
      foodId
      servingId
      servingAmount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RecipeToFoodsByFoodIdAndRecipeIdQueryVariables,
  APITypes.RecipeToFoodsByFoodIdAndRecipeIdQuery
>;
export const getExerciseLog = /* GraphQL */ `query GetExerciseLog($id: ID!) {
  getExerciseLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseLogQueryVariables,
  APITypes.GetExerciseLogQuery
>;
export const listExerciseLogs = /* GraphQL */ `query ListExerciseLogs(
  $filter: ModelExerciseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseLogsQueryVariables,
  APITypes.ListExerciseLogsQuery
>;
export const syncExerciseLogs = /* GraphQL */ `query SyncExerciseLogs(
  $filter: ModelExerciseLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExerciseLogsQueryVariables,
  APITypes.SyncExerciseLogsQuery
>;
export const getExerciseRoutine = /* GraphQL */ `query GetExerciseRoutine($id: ID!) {
  getExerciseRoutine(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseRoutineQueryVariables,
  APITypes.GetExerciseRoutineQuery
>;
export const listExerciseRoutines = /* GraphQL */ `query ListExerciseRoutines(
  $filter: ModelExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseLogExerciseRoutineId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseRoutinesQueryVariables,
  APITypes.ListExerciseRoutinesQuery
>;
export const syncExerciseRoutines = /* GraphQL */ `query SyncExerciseRoutines(
  $filter: ModelExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseRoutines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userId
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseLogExerciseRoutineId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExerciseRoutinesQueryVariables,
  APITypes.SyncExerciseRoutinesQuery
>;
export const getExerciseType = /* GraphQL */ `query GetExerciseType($id: ID!) {
  getExerciseType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseTypeQueryVariables,
  APITypes.GetExerciseTypeQuery
>;
export const listExerciseTypes = /* GraphQL */ `query ListExerciseTypes(
  $filter: ModelExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      target
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseRoutineExerciseTypeId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseTypesQueryVariables,
  APITypes.ListExerciseTypesQuery
>;
export const syncExerciseTypes = /* GraphQL */ `query SyncExerciseTypes(
  $filter: ModelExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      target
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseRoutineExerciseTypeId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExerciseTypesQueryVariables,
  APITypes.SyncExerciseTypesQuery
>;
export const getExerciseSet = /* GraphQL */ `query GetExerciseSet($id: ID!) {
  getExerciseSet(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseSetQueryVariables,
  APITypes.GetExerciseSetQuery
>;
export const listExerciseSets = /* GraphQL */ `query ListExerciseSets(
  $filter: ModelExerciseSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseSetsQueryVariables,
  APITypes.ListExerciseSetsQuery
>;
export const syncExerciseSets = /* GraphQL */ `query SyncExerciseSets(
  $filter: ModelExerciseSetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseSets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExerciseSetsQueryVariables,
  APITypes.SyncExerciseSetsQuery
>;
export const getSleepLog = /* GraphQL */ `query GetSleepLog($id: ID!) {
  getSleepLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSleepLogQueryVariables,
  APITypes.GetSleepLogQuery
>;
export const listSleepLogs = /* GraphQL */ `query ListSleepLogs(
  $filter: ModelSleepLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listSleepLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSleepLogsQueryVariables,
  APITypes.ListSleepLogsQuery
>;
export const syncSleepLogs = /* GraphQL */ `query SyncSleepLogs(
  $filter: ModelSleepLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSleepLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSleepLogsQueryVariables,
  APITypes.SyncSleepLogsQuery
>;
export const getHealthScore = /* GraphQL */ `query GetHealthScore($id: ID!) {
  getHealthScore(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetHealthScoreQueryVariables,
  APITypes.GetHealthScoreQuery
>;
export const listHealthScores = /* GraphQL */ `query ListHealthScores(
  $filter: ModelHealthScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listHealthScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHealthScoresQueryVariables,
  APITypes.ListHealthScoresQuery
>;
export const syncHealthScores = /* GraphQL */ `query SyncHealthScores(
  $filter: ModelHealthScoreFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncHealthScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncHealthScoresQueryVariables,
  APITypes.SyncHealthScoresQuery
>;
export const getGoalLog = /* GraphQL */ `query GetGoalLog($id: ID!) {
  getGoalLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGoalLogQueryVariables,
  APITypes.GetGoalLogQuery
>;
export const listGoalLogs = /* GraphQL */ `query ListGoalLogs(
  $filter: ModelGoalLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoalLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGoalLogsQueryVariables,
  APITypes.ListGoalLogsQuery
>;
export const syncGoalLogs = /* GraphQL */ `query SyncGoalLogs(
  $filter: ModelGoalLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncGoalLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncGoalLogsQueryVariables,
  APITypes.SyncGoalLogsQuery
>;
