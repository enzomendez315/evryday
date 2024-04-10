/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createNutritionLog = /* GraphQL */ `mutation CreateNutritionLog(
  $input: CreateNutritionLogInput!
  $condition: ModelNutritionLogConditionInput
) {
  createNutritionLog(input: $input, condition: $condition) {
    id
    userId
    date
    foodName
    calories
    protein
    carbs
    fat
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
    foodName
    calories
    protein
    carbs
    fat
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
    foodName
    calories
    protein
    carbs
    fat
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
export const createExerciseLog = /* GraphQL */ `mutation CreateExerciseLog(
  $input: CreateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  createExerciseLog(input: $input, condition: $condition) {
    id
    userId
    date
    exerciseType
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
    exerciseType
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
    exerciseType
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
` as GeneratedMutation<
  APITypes.DeleteExerciseLogMutationVariables,
  APITypes.DeleteExerciseLogMutation
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
    restfulnessScore
    dreamJournal
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
    restfulnessScore
    dreamJournal
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
    restfulnessScore
    dreamJournal
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
