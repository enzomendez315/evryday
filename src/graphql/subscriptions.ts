/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExerciseSet = /* GraphQL */ `subscription OnCreateExerciseSet(
  $filter: ModelSubscriptionExerciseSetFilterInput
) {
  onCreateExerciseSet(filter: $filter) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSetSubscriptionVariables,
  APITypes.OnDeleteExerciseSetSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    userId
    name
    age
    height
    weight
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
    servingOptions {
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
    servingOptions {
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
    servingOptions {
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
export const onCreateExerciseLog = /* GraphQL */ `subscription OnCreateExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
) {
  onCreateExerciseLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseTypeSubscriptionVariables,
  APITypes.OnDeleteExerciseTypeSubscription
>;
export const onCreateSleepLog = /* GraphQL */ `subscription OnCreateSleepLog($filter: ModelSubscriptionSleepLogFilterInput) {
  onCreateSleepLog(filter: $filter) {
    id
    userId
    date
    hoursSlept
    sleepQuality
    dreamJournal
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
export const onCreateExerciseSetExerciseType = /* GraphQL */ `subscription OnCreateExerciseSetExerciseType(
  $filter: ModelSubscriptionExerciseSetExerciseTypeFilterInput
) {
  onCreateExerciseSetExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSetExerciseTypeSubscriptionVariables,
  APITypes.OnCreateExerciseSetExerciseTypeSubscription
>;
export const onUpdateExerciseSetExerciseType = /* GraphQL */ `subscription OnUpdateExerciseSetExerciseType(
  $filter: ModelSubscriptionExerciseSetExerciseTypeFilterInput
) {
  onUpdateExerciseSetExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSetExerciseTypeSubscriptionVariables,
  APITypes.OnUpdateExerciseSetExerciseTypeSubscription
>;
export const onDeleteExerciseSetExerciseType = /* GraphQL */ `subscription OnDeleteExerciseSetExerciseType(
  $filter: ModelSubscriptionExerciseSetExerciseTypeFilterInput
) {
  onDeleteExerciseSetExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSetExerciseTypeSubscriptionVariables,
  APITypes.OnDeleteExerciseSetExerciseTypeSubscription
>;
export const onCreateExerciseSetExerciseRoutine = /* GraphQL */ `subscription OnCreateExerciseSetExerciseRoutine(
  $filter: ModelSubscriptionExerciseSetExerciseRoutineFilterInput
) {
  onCreateExerciseSetExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSetExerciseRoutineSubscriptionVariables,
  APITypes.OnCreateExerciseSetExerciseRoutineSubscription
>;
export const onUpdateExerciseSetExerciseRoutine = /* GraphQL */ `subscription OnUpdateExerciseSetExerciseRoutine(
  $filter: ModelSubscriptionExerciseSetExerciseRoutineFilterInput
) {
  onUpdateExerciseSetExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSetExerciseRoutineSubscriptionVariables,
  APITypes.OnUpdateExerciseSetExerciseRoutineSubscription
>;
export const onDeleteExerciseSetExerciseRoutine = /* GraphQL */ `subscription OnDeleteExerciseSetExerciseRoutine(
  $filter: ModelSubscriptionExerciseSetExerciseRoutineFilterInput
) {
  onDeleteExerciseSetExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSetExerciseRoutineSubscriptionVariables,
  APITypes.OnDeleteExerciseSetExerciseRoutineSubscription
>;
export const onCreateExerciseLogExerciseRoutine = /* GraphQL */ `subscription OnCreateExerciseLogExerciseRoutine(
  $filter: ModelSubscriptionExerciseLogExerciseRoutineFilterInput
) {
  onCreateExerciseLogExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseLogExerciseRoutineSubscriptionVariables,
  APITypes.OnCreateExerciseLogExerciseRoutineSubscription
>;
export const onUpdateExerciseLogExerciseRoutine = /* GraphQL */ `subscription OnUpdateExerciseLogExerciseRoutine(
  $filter: ModelSubscriptionExerciseLogExerciseRoutineFilterInput
) {
  onUpdateExerciseLogExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseLogExerciseRoutineSubscriptionVariables,
  APITypes.OnUpdateExerciseLogExerciseRoutineSubscription
>;
export const onDeleteExerciseLogExerciseRoutine = /* GraphQL */ `subscription OnDeleteExerciseLogExerciseRoutine(
  $filter: ModelSubscriptionExerciseLogExerciseRoutineFilterInput
) {
  onDeleteExerciseLogExerciseRoutine(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseLogExerciseRoutineSubscriptionVariables,
  APITypes.OnDeleteExerciseLogExerciseRoutineSubscription
>;
export const onCreateExerciseRoutineExerciseType = /* GraphQL */ `subscription OnCreateExerciseRoutineExerciseType(
  $filter: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput
) {
  onCreateExerciseRoutineExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseRoutineExerciseTypeSubscriptionVariables,
  APITypes.OnCreateExerciseRoutineExerciseTypeSubscription
>;
export const onUpdateExerciseRoutineExerciseType = /* GraphQL */ `subscription OnUpdateExerciseRoutineExerciseType(
  $filter: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput
) {
  onUpdateExerciseRoutineExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseRoutineExerciseTypeSubscriptionVariables,
  APITypes.OnUpdateExerciseRoutineExerciseTypeSubscription
>;
export const onDeleteExerciseRoutineExerciseType = /* GraphQL */ `subscription OnDeleteExerciseRoutineExerciseType(
  $filter: ModelSubscriptionExerciseRoutineExerciseTypeFilterInput
) {
  onDeleteExerciseRoutineExerciseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseRoutineExerciseTypeSubscriptionVariables,
  APITypes.OnDeleteExerciseRoutineExerciseTypeSubscription
>;
