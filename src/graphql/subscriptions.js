/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExerciseLog = /* GraphQL */ `
  subscription OnCreateExerciseLog($UserID: String, $timestamp: Float) {
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
`;
export const onUpdateExerciseLog = /* GraphQL */ `
  subscription OnUpdateExerciseLog($UserID: String, $timestamp: Float) {
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
`;
export const onDeleteExerciseLog = /* GraphQL */ `
  subscription OnDeleteExerciseLog($UserID: String, $timestamp: Float) {
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
`;
export const onCreateExercisesGPT = /* GraphQL */ `
  subscription OnCreateExercisesGPT($exerciseName: String) {
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
`;
export const onUpdateExercisesGPT = /* GraphQL */ `
  subscription OnUpdateExercisesGPT($exerciseName: String) {
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
`;
export const onDeleteExercisesGPT = /* GraphQL */ `
  subscription OnDeleteExercisesGPT($exerciseName: String) {
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
`;
export const onCreateUsersExercise = /* GraphQL */ `
  subscription OnCreateUsersExercise($UserID: String) {
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
      __typename
    }
  }
`;
export const onUpdateUsersExercise = /* GraphQL */ `
  subscription OnUpdateUsersExercise($UserID: String) {
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
      __typename
    }
  }
`;
export const onDeleteUsersExercise = /* GraphQL */ `
  subscription OnDeleteUsersExercise($UserID: String) {
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
      __typename
    }
  }
`;
