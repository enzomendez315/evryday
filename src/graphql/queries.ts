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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getPrivacySettings = /* GraphQL */ `query GetPrivacySettings($id: ID!) {
  getPrivacySettings(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPrivacySettingsQueryVariables,
  APITypes.GetPrivacySettingsQuery
>;
export const listPrivacySettings = /* GraphQL */ `query ListPrivacySettings(
  $filter: ModelPrivacySettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivacySettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPrivacySettingsQueryVariables,
  APITypes.ListPrivacySettingsQuery
>;
export const syncPrivacySettings = /* GraphQL */ `query SyncPrivacySettings(
  $filter: ModelPrivacySettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPrivacySettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPrivacySettingsQueryVariables,
  APITypes.SyncPrivacySettingsQuery
>;
export const getFriends = /* GraphQL */ `query GetFriends($id: ID!) {
  getFriends(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFriendsQueryVariables,
  APITypes.GetFriendsQuery
>;
export const listFriends = /* GraphQL */ `query ListFriends(
  $filter: ModelFriendsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFriendsQueryVariables,
  APITypes.ListFriendsQuery
>;
export const syncFriends = /* GraphQL */ `query SyncFriends(
  $filter: ModelFriendsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFriends(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFriendsQueryVariables,
  APITypes.SyncFriendsQuery
>;
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
export const getExerciseSet = /* GraphQL */ `query GetExerciseSet($id: ID!) {
  getExerciseSet(id: $id) {
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
export const getExerciseRoutine = /* GraphQL */ `query GetExerciseRoutine($id: ID!) {
  getExerciseRoutine(id: $id) {
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
export const getWeightLog = /* GraphQL */ `query GetWeightLog($id: ID!) {
  getWeightLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWeightLogQueryVariables,
  APITypes.GetWeightLogQuery
>;
export const listWeightLogs = /* GraphQL */ `query ListWeightLogs(
  $filter: ModelWeightLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listWeightLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWeightLogsQueryVariables,
  APITypes.ListWeightLogsQuery
>;
export const syncWeightLogs = /* GraphQL */ `query SyncWeightLogs(
  $filter: ModelWeightLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncWeightLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncWeightLogsQueryVariables,
  APITypes.SyncWeightLogsQuery
>;
export const getOuraToken = /* GraphQL */ `query GetOuraToken($id: ID!) {
  getOuraToken(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOuraTokenQueryVariables,
  APITypes.GetOuraTokenQuery
>;
export const listOuraTokens = /* GraphQL */ `query ListOuraTokens(
  $filter: ModelOuraTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listOuraTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOuraTokensQueryVariables,
  APITypes.ListOuraTokensQuery
>;
export const syncOuraTokens = /* GraphQL */ `query SyncOuraTokens(
  $filter: ModelOuraTokenFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOuraTokens(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOuraTokensQueryVariables,
  APITypes.SyncOuraTokensQuery
>;
export const getFitbitToken = /* GraphQL */ `query GetFitbitToken($id: ID!) {
  getFitbitToken(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFitbitTokenQueryVariables,
  APITypes.GetFitbitTokenQuery
>;
export const listFitbitTokens = /* GraphQL */ `query ListFitbitTokens(
  $filter: ModelFitbitTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listFitbitTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFitbitTokensQueryVariables,
  APITypes.ListFitbitTokensQuery
>;
export const syncFitbitTokens = /* GraphQL */ `query SyncFitbitTokens(
  $filter: ModelFitbitTokenFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFitbitTokens(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFitbitTokensQueryVariables,
  APITypes.SyncFitbitTokensQuery
>;
export const getExerciseLogExerciseRoutine = /* GraphQL */ `query GetExerciseLogExerciseRoutine($id: ID!) {
  getExerciseLogExerciseRoutine(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseLogExerciseRoutineQueryVariables,
  APITypes.GetExerciseLogExerciseRoutineQuery
>;
export const listExerciseLogExerciseRoutines = /* GraphQL */ `query ListExerciseLogExerciseRoutines(
  $filter: ModelExerciseLogExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseLogExerciseRoutines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseRoutineId
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
  APITypes.ListExerciseLogExerciseRoutinesQueryVariables,
  APITypes.ListExerciseLogExerciseRoutinesQuery
>;
export const syncExerciseLogExerciseRoutines = /* GraphQL */ `query SyncExerciseLogExerciseRoutines(
  $filter: ModelExerciseLogExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseLogExerciseRoutines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      exerciseLogId
      exerciseRoutineId
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
  APITypes.SyncExerciseLogExerciseRoutinesQueryVariables,
  APITypes.SyncExerciseLogExerciseRoutinesQuery
>;
export const exerciseLogExerciseRoutinesByExerciseLogId = /* GraphQL */ `query ExerciseLogExerciseRoutinesByExerciseLogId(
  $exerciseLogId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseLogExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseLogExerciseRoutinesByExerciseLogId(
    exerciseLogId: $exerciseLogId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseRoutineId
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
  APITypes.ExerciseLogExerciseRoutinesByExerciseLogIdQueryVariables,
  APITypes.ExerciseLogExerciseRoutinesByExerciseLogIdQuery
>;
export const exerciseLogExerciseRoutinesByExerciseRoutineId = /* GraphQL */ `query ExerciseLogExerciseRoutinesByExerciseRoutineId(
  $exerciseRoutineId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseLogExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseLogExerciseRoutinesByExerciseRoutineId(
    exerciseRoutineId: $exerciseRoutineId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseRoutineId
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
  APITypes.ExerciseLogExerciseRoutinesByExerciseRoutineIdQueryVariables,
  APITypes.ExerciseLogExerciseRoutinesByExerciseRoutineIdQuery
>;
export const getExerciseLogExerciseSet = /* GraphQL */ `query GetExerciseLogExerciseSet($id: ID!) {
  getExerciseLogExerciseSet(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseLogExerciseSetQueryVariables,
  APITypes.GetExerciseLogExerciseSetQuery
>;
export const listExerciseLogExerciseSets = /* GraphQL */ `query ListExerciseLogExerciseSets(
  $filter: ModelExerciseLogExerciseSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseLogExerciseSets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseSetId
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
  APITypes.ListExerciseLogExerciseSetsQueryVariables,
  APITypes.ListExerciseLogExerciseSetsQuery
>;
export const syncExerciseLogExerciseSets = /* GraphQL */ `query SyncExerciseLogExerciseSets(
  $filter: ModelExerciseLogExerciseSetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseLogExerciseSets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      exerciseLogId
      exerciseSetId
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
  APITypes.SyncExerciseLogExerciseSetsQueryVariables,
  APITypes.SyncExerciseLogExerciseSetsQuery
>;
export const exerciseLogExerciseSetsByExerciseLogId = /* GraphQL */ `query ExerciseLogExerciseSetsByExerciseLogId(
  $exerciseLogId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseLogExerciseSetFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseLogExerciseSetsByExerciseLogId(
    exerciseLogId: $exerciseLogId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseSetId
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
  APITypes.ExerciseLogExerciseSetsByExerciseLogIdQueryVariables,
  APITypes.ExerciseLogExerciseSetsByExerciseLogIdQuery
>;
export const exerciseLogExerciseSetsByExerciseSetId = /* GraphQL */ `query ExerciseLogExerciseSetsByExerciseSetId(
  $exerciseSetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseLogExerciseSetFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseLogExerciseSetsByExerciseSetId(
    exerciseSetId: $exerciseSetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseLogId
      exerciseSetId
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
  APITypes.ExerciseLogExerciseSetsByExerciseSetIdQueryVariables,
  APITypes.ExerciseLogExerciseSetsByExerciseSetIdQuery
>;
export const getExerciseSetExerciseType = /* GraphQL */ `query GetExerciseSetExerciseType($id: ID!) {
  getExerciseSetExerciseType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseSetExerciseTypeQueryVariables,
  APITypes.GetExerciseSetExerciseTypeQuery
>;
export const listExerciseSetExerciseTypes = /* GraphQL */ `query ListExerciseSetExerciseTypes(
  $filter: ModelExerciseSetExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseSetExerciseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseTypeId
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
  APITypes.ListExerciseSetExerciseTypesQueryVariables,
  APITypes.ListExerciseSetExerciseTypesQuery
>;
export const syncExerciseSetExerciseTypes = /* GraphQL */ `query SyncExerciseSetExerciseTypes(
  $filter: ModelExerciseSetExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseSetExerciseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      exerciseSetId
      exerciseTypeId
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
  APITypes.SyncExerciseSetExerciseTypesQueryVariables,
  APITypes.SyncExerciseSetExerciseTypesQuery
>;
export const exerciseSetExerciseTypesByExerciseSetId = /* GraphQL */ `query ExerciseSetExerciseTypesByExerciseSetId(
  $exerciseSetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseSetExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseSetExerciseTypesByExerciseSetId(
    exerciseSetId: $exerciseSetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseTypeId
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
  APITypes.ExerciseSetExerciseTypesByExerciseSetIdQueryVariables,
  APITypes.ExerciseSetExerciseTypesByExerciseSetIdQuery
>;
export const exerciseSetExerciseTypesByExerciseTypeId = /* GraphQL */ `query ExerciseSetExerciseTypesByExerciseTypeId(
  $exerciseTypeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseSetExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseSetExerciseTypesByExerciseTypeId(
    exerciseTypeId: $exerciseTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseTypeId
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
  APITypes.ExerciseSetExerciseTypesByExerciseTypeIdQueryVariables,
  APITypes.ExerciseSetExerciseTypesByExerciseTypeIdQuery
>;
export const getExerciseSetExerciseRoutine = /* GraphQL */ `query GetExerciseSetExerciseRoutine($id: ID!) {
  getExerciseSetExerciseRoutine(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseSetExerciseRoutineQueryVariables,
  APITypes.GetExerciseSetExerciseRoutineQuery
>;
export const listExerciseSetExerciseRoutines = /* GraphQL */ `query ListExerciseSetExerciseRoutines(
  $filter: ModelExerciseSetExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseSetExerciseRoutines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseRoutineId
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
  APITypes.ListExerciseSetExerciseRoutinesQueryVariables,
  APITypes.ListExerciseSetExerciseRoutinesQuery
>;
export const syncExerciseSetExerciseRoutines = /* GraphQL */ `query SyncExerciseSetExerciseRoutines(
  $filter: ModelExerciseSetExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseSetExerciseRoutines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      exerciseSetId
      exerciseRoutineId
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
  APITypes.SyncExerciseSetExerciseRoutinesQueryVariables,
  APITypes.SyncExerciseSetExerciseRoutinesQuery
>;
export const exerciseSetExerciseRoutinesByExerciseSetId = /* GraphQL */ `query ExerciseSetExerciseRoutinesByExerciseSetId(
  $exerciseSetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseSetExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseSetExerciseRoutinesByExerciseSetId(
    exerciseSetId: $exerciseSetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseRoutineId
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
  APITypes.ExerciseSetExerciseRoutinesByExerciseSetIdQueryVariables,
  APITypes.ExerciseSetExerciseRoutinesByExerciseSetIdQuery
>;
export const exerciseSetExerciseRoutinesByExerciseRoutineId = /* GraphQL */ `query ExerciseSetExerciseRoutinesByExerciseRoutineId(
  $exerciseRoutineId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseSetExerciseRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseSetExerciseRoutinesByExerciseRoutineId(
    exerciseRoutineId: $exerciseRoutineId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseSetId
      exerciseRoutineId
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
  APITypes.ExerciseSetExerciseRoutinesByExerciseRoutineIdQueryVariables,
  APITypes.ExerciseSetExerciseRoutinesByExerciseRoutineIdQuery
>;
export const getExerciseRoutineExerciseType = /* GraphQL */ `query GetExerciseRoutineExerciseType($id: ID!) {
  getExerciseRoutineExerciseType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExerciseRoutineExerciseTypeQueryVariables,
  APITypes.GetExerciseRoutineExerciseTypeQuery
>;
export const listExerciseRoutineExerciseTypes = /* GraphQL */ `query ListExerciseRoutineExerciseTypes(
  $filter: ModelExerciseRoutineExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseRoutineExerciseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseRoutineId
      exerciseTypeId
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
  APITypes.ListExerciseRoutineExerciseTypesQueryVariables,
  APITypes.ListExerciseRoutineExerciseTypesQuery
>;
export const syncExerciseRoutineExerciseTypes = /* GraphQL */ `query SyncExerciseRoutineExerciseTypes(
  $filter: ModelExerciseRoutineExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExerciseRoutineExerciseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      exerciseRoutineId
      exerciseTypeId
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
  APITypes.SyncExerciseRoutineExerciseTypesQueryVariables,
  APITypes.SyncExerciseRoutineExerciseTypesQuery
>;
export const exerciseRoutineExerciseTypesByExerciseRoutineId = /* GraphQL */ `query ExerciseRoutineExerciseTypesByExerciseRoutineId(
  $exerciseRoutineId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseRoutineExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseRoutineExerciseTypesByExerciseRoutineId(
    exerciseRoutineId: $exerciseRoutineId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseRoutineId
      exerciseTypeId
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
  APITypes.ExerciseRoutineExerciseTypesByExerciseRoutineIdQueryVariables,
  APITypes.ExerciseRoutineExerciseTypesByExerciseRoutineIdQuery
>;
export const exerciseRoutineExerciseTypesByExerciseTypeId = /* GraphQL */ `query ExerciseRoutineExerciseTypesByExerciseTypeId(
  $exerciseTypeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseRoutineExerciseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseRoutineExerciseTypesByExerciseTypeId(
    exerciseTypeId: $exerciseTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      exerciseRoutineId
      exerciseTypeId
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
  APITypes.ExerciseRoutineExerciseTypesByExerciseTypeIdQueryVariables,
  APITypes.ExerciseRoutineExerciseTypesByExerciseTypeIdQuery
>;
