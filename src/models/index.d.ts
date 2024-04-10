import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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
  readonly foodName: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
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
  readonly foodName: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly fat?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NutritionLog = LazyLoading extends LazyLoadingDisabled ? EagerNutritionLog : LazyNutritionLog

export declare const NutritionLog: (new (init: ModelInit<NutritionLog>) => NutritionLog) & {
  copyOf(source: NutritionLog, mutator: (draft: MutableModel<NutritionLog>) => MutableModel<NutritionLog> | void): NutritionLog;
}

type EagerExerciseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly exerciseType: string;
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
  readonly exerciseType: string;
  readonly durationMinutes?: number | null;
  readonly caloriesBurned?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseLog = LazyLoading extends LazyLoadingDisabled ? EagerExerciseLog : LazyExerciseLog

export declare const ExerciseLog: (new (init: ModelInit<ExerciseLog>) => ExerciseLog) & {
  copyOf(source: ExerciseLog, mutator: (draft: MutableModel<ExerciseLog>) => MutableModel<ExerciseLog> | void): ExerciseLog;
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
  readonly sleepQuality?: number | null;
  readonly restfulnessScore?: number | null;
  readonly dreamJournal?: string | null;
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
  readonly sleepQuality?: number | null;
  readonly restfulnessScore?: number | null;
  readonly dreamJournal?: string | null;
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