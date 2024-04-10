/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNutritionLogsQueryVariables,
  APITypes.SyncNutritionLogsQuery
>;
export const getExerciseLog = /* GraphQL */ `query GetExerciseLog($id: ID!) {
  getExerciseLog(id: $id) {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExerciseLogsQueryVariables,
  APITypes.SyncExerciseLogsQuery
>;
export const getSleepLog = /* GraphQL */ `query GetSleepLog($id: ID!) {
  getSleepLog(id: $id) {
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
      restfulnessScore
      dreamJournal
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
      restfulnessScore
      dreamJournal
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
