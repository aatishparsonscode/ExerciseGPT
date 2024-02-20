/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../desktopApp/myofficetrainerdeskop/src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExerciseLog = /* GraphQL */ `subscription OnCreateExerciseLog($UserID: String, $timestamp: Float) {
  onCreateExerciseLog(UserID: $UserID, timestamp: $timestamp) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseLogSubscriptionVariables,
  APITypes.OnCreateExerciseLogSubscription
>;
export const onUpdateExerciseLog = /* GraphQL */ `subscription OnUpdateExerciseLog($UserID: String, $timestamp: Float) {
  onUpdateExerciseLog(UserID: $UserID, timestamp: $timestamp) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseLogSubscriptionVariables,
  APITypes.OnUpdateExerciseLogSubscription
>;
export const onDeleteExerciseLog = /* GraphQL */ `subscription OnDeleteExerciseLog($UserID: String, $timestamp: Float) {
  onDeleteExerciseLog(UserID: $UserID, timestamp: $timestamp) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseLogSubscriptionVariables,
  APITypes.OnDeleteExerciseLogSubscription
>;
export const onCreateExercisesGPT = /* GraphQL */ `subscription OnCreateExercisesGPT($exerciseName: String) {
  onCreateExercisesGPT(exerciseName: $exerciseName) {
    exerciseName
    BodyPart
    BodyPosition
    Difficulty
    GPTDirections
    Location
    TutorialLink
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExercisesGPTSubscriptionVariables,
  APITypes.OnCreateExercisesGPTSubscription
>;
export const onUpdateExercisesGPT = /* GraphQL */ `subscription OnUpdateExercisesGPT($exerciseName: String) {
  onUpdateExercisesGPT(exerciseName: $exerciseName) {
    exerciseName
    BodyPart
    BodyPosition
    Difficulty
    GPTDirections
    Location
    TutorialLink
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExercisesGPTSubscriptionVariables,
  APITypes.OnUpdateExercisesGPTSubscription
>;
export const onDeleteExercisesGPT = /* GraphQL */ `subscription OnDeleteExercisesGPT($exerciseName: String) {
  onDeleteExercisesGPT(exerciseName: $exerciseName) {
    exerciseName
    BodyPart
    BodyPosition
    Difficulty
    GPTDirections
    Location
    TutorialLink
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExercisesGPTSubscriptionVariables,
  APITypes.OnDeleteExercisesGPTSubscription
>;
export const onCreateUsersExercise = /* GraphQL */ `subscription OnCreateUsersExercise($UserID: String) {
  onCreateUsersExercise(UserID: $UserID) {
    UserID
    BodyPosition
    Difficulty
    Email
    ExerciseInterval
    IgnoreExercises
    LastExerciseTime
    Location
    PrevExercise
    SkippedExercises
    DeliveryMethod
    WindowStartHour
    WindowEndHour
    WindowDays
    RequestedExercise
    GoogleCalendarEnabled
    GoogleCalendarRefreshToken
    SlackAccessToken
    SlackUserID
    Movement
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersExerciseSubscriptionVariables,
  APITypes.OnCreateUsersExerciseSubscription
>;
export const onUpdateUsersExercise = /* GraphQL */ `subscription OnUpdateUsersExercise($UserID: String) {
  onUpdateUsersExercise(UserID: $UserID) {
    UserID
    BodyPosition
    Difficulty
    Email
    ExerciseInterval
    IgnoreExercises
    LastExerciseTime
    Location
    PrevExercise
    SkippedExercises
    DeliveryMethod
    WindowStartHour
    WindowEndHour
    WindowDays
    RequestedExercise
    GoogleCalendarEnabled
    GoogleCalendarRefreshToken
    SlackAccessToken
    SlackUserID
    Movement
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersExerciseSubscriptionVariables,
  APITypes.OnUpdateUsersExerciseSubscription
>;
export const onDeleteUsersExercise = /* GraphQL */ `subscription OnDeleteUsersExercise($UserID: String) {
  onDeleteUsersExercise(UserID: $UserID) {
    UserID
    BodyPosition
    Difficulty
    Email
    ExerciseInterval
    IgnoreExercises
    LastExerciseTime
    Location
    PrevExercise
    SkippedExercises
    DeliveryMethod
    WindowStartHour
    WindowEndHour
    WindowDays
    RequestedExercise
    GoogleCalendarEnabled
    GoogleCalendarRefreshToken
    SlackAccessToken
    SlackUserID
    Movement
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersExerciseSubscriptionVariables,
  APITypes.OnDeleteUsersExerciseSubscription
>;
