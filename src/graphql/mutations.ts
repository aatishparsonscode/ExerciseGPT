/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../desktopApp/myofficetrainerdeskop/src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExerciseLog = /* GraphQL */ `mutation CreateExerciseLog($input: CreateExerciseLogInput!) {
  createExerciseLog(input: $input) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExerciseLogMutationVariables,
  APITypes.CreateExerciseLogMutation
>;
export const updateExerciseLog = /* GraphQL */ `mutation UpdateExerciseLog($input: UpdateExerciseLogInput!) {
  updateExerciseLog(input: $input) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExerciseLogMutationVariables,
  APITypes.UpdateExerciseLogMutation
>;
export const deleteExerciseLog = /* GraphQL */ `mutation DeleteExerciseLog($input: DeleteExerciseLogInput!) {
  deleteExerciseLog(input: $input) {
    UserID
    timestamp
    exerciseName
    bodyPart
    completed
    timestampCompleted
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExerciseLogMutationVariables,
  APITypes.DeleteExerciseLogMutation
>;
export const createExercisesGPT = /* GraphQL */ `mutation CreateExercisesGPT($input: CreateExercisesGPTInput!) {
  createExercisesGPT(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateExercisesGPTMutationVariables,
  APITypes.CreateExercisesGPTMutation
>;
export const updateExercisesGPT = /* GraphQL */ `mutation UpdateExercisesGPT($input: UpdateExercisesGPTInput!) {
  updateExercisesGPT(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateExercisesGPTMutationVariables,
  APITypes.UpdateExercisesGPTMutation
>;
export const deleteExercisesGPT = /* GraphQL */ `mutation DeleteExercisesGPT($input: DeleteExercisesGPTInput!) {
  deleteExercisesGPT(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteExercisesGPTMutationVariables,
  APITypes.DeleteExercisesGPTMutation
>;
export const createUsersExercise = /* GraphQL */ `mutation CreateUsersExercise($input: CreateUsersExerciseInput!) {
  createUsersExercise(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUsersExerciseMutationVariables,
  APITypes.CreateUsersExerciseMutation
>;
export const updateUsersExercise = /* GraphQL */ `mutation UpdateUsersExercise($input: UpdateUsersExerciseInput!) {
  updateUsersExercise(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUsersExerciseMutationVariables,
  APITypes.UpdateUsersExerciseMutation
>;
export const deleteUsersExercise = /* GraphQL */ `mutation DeleteUsersExercise($input: DeleteUsersExerciseInput!) {
  deleteUsersExercise(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUsersExerciseMutationVariables,
  APITypes.DeleteUsersExerciseMutation
>;
