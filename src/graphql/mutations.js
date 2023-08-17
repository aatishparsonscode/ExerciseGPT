/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExerciseLog = /* GraphQL */ `
  mutation CreateExerciseLog($input: CreateExerciseLogInput!) {
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
`;
export const updateExerciseLog = /* GraphQL */ `
  mutation UpdateExerciseLog($input: UpdateExerciseLogInput!) {
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
`;
export const deleteExerciseLog = /* GraphQL */ `
  mutation DeleteExerciseLog($input: DeleteExerciseLogInput!) {
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
`;
export const createExercisesGPT = /* GraphQL */ `
  mutation CreateExercisesGPT($input: CreateExercisesGPTInput!) {
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
`;
export const updateExercisesGPT = /* GraphQL */ `
  mutation UpdateExercisesGPT($input: UpdateExercisesGPTInput!) {
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
`;
export const deleteExercisesGPT = /* GraphQL */ `
  mutation DeleteExercisesGPT($input: DeleteExercisesGPTInput!) {
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
`;
export const createUsersExercise = /* GraphQL */ `
  mutation CreateUsersExercise($input: CreateUsersExerciseInput!) {
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
      __typename
    }
  }
`;
export const updateUsersExercise = /* GraphQL */ `
  mutation UpdateUsersExercise($input: UpdateUsersExerciseInput!) {
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
      __typename
    }
  }
`;
export const deleteUsersExercise = /* GraphQL */ `
  mutation DeleteUsersExercise($input: DeleteUsersExerciseInput!) {
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
      __typename
    }
  }
`;
