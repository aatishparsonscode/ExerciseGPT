/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../desktopApp/myofficetrainerdeskop/src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExerciseLog = /* GraphQL */ `query GetExerciseLog($UserID: String!, $timestamp: Float!) {
  getExerciseLog(UserID: $UserID, timestamp: $timestamp) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExerciseLogQueryVariables,
  APITypes.GetExerciseLogQuery
>;
export const listExerciseLogs = /* GraphQL */ `query ListExerciseLogs(
  $UserID: String!
  $filter: TableExerciseLogFilterInput
  $limit: Int!
  $nextToken: String
) {
  listExerciseLogs(
    UserID: $UserID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      UserID
      timestamp
      exerciseName
      bodyPart
      completed
      timestampCompleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseLogsQueryVariables,
  APITypes.ListExerciseLogsQuery
>;
export const getExercisesGPT = /* GraphQL */ `query GetExercisesGPT($exerciseName: String!) {
  getExercisesGPT(exerciseName: $exerciseName) {
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
` as GeneratedQuery<
  APITypes.GetExercisesGPTQueryVariables,
  APITypes.GetExercisesGPTQuery
>;
export const listExercisesGPTS = /* GraphQL */ `query ListExercisesGPTS(
  $filter: TableExercisesGPTFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercisesGPTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      exerciseName
      BodyPart
      BodyPosition
      Difficulty
      GPTDirections
      Location
      TutorialLink
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisesGPTSQueryVariables,
  APITypes.ListExercisesGPTSQuery
>;
export const getUsersExercise = /* GraphQL */ `query GetUsersExercise($UserID: String!) {
  getUsersExercise(UserID: $UserID) {
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
` as GeneratedQuery<
  APITypes.GetUsersExerciseQueryVariables,
  APITypes.GetUsersExerciseQuery
>;
export const listUsersExercises = /* GraphQL */ `query ListUsersExercises(
  $filter: TableUsersExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersExercisesQueryVariables,
  APITypes.ListUsersExercisesQuery
>;
