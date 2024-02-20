/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExerciseLogInput = {
  UserID: string,
  timestamp: number,
  exerciseName: string,
};

export type ExerciseLog = {
  __typename: "ExerciseLog",
  UserID: string,
  timestamp: number,
  exerciseName: string,
  bodyPart?: string | null,
  completed?: boolean | null,
  timestampCompleted?: number | null,
};

export type UpdateExerciseLogInput = {
  UserID: string,
  timestamp: number,
  bodyPart?: string | null,
  completed?: boolean | null,
  timestampCompleted?: number | null,
};

export type DeleteExerciseLogInput = {
  UserID: string,
  timestamp: number,
};

export type CreateExercisesGPTInput = {
  exerciseName: string,
  BodyPart: string,
  BodyPosition: string,
  Difficulty: string,
  GPTDirections: string,
  Location: string,
  TutorialLink: string,
};

export type ExercisesGPT = {
  __typename: "ExercisesGPT",
  exerciseName: string,
  BodyPart: string,
  BodyPosition: string,
  Difficulty: string,
  GPTDirections: string,
  Location: string,
  TutorialLink: string,
};

export type UpdateExercisesGPTInput = {
  exerciseName: string,
};

export type DeleteExercisesGPTInput = {
  exerciseName: string,
};

export type CreateUsersExerciseInput = {
  UserID: string,
  BodyPosition: string,
  Difficulty: string,
  Email: string,
  ExerciseInterval: number,
  IgnoreExercises?: Array< string > | null,
  LastExerciseTime: number,
  Location: string,
  PrevExercise: string,
  SkippedExercises?: Array< string > | null,
  DeliveryMethod: string,
  WindowStartHour: number,
  WindowEndHour: number,
  WindowDays: Array< boolean >,
  RequestedExercise: boolean,
  Movement?: string | null,
};

export type UsersExercise = {
  __typename: "UsersExercise",
  UserID: string,
  BodyPosition: string,
  Difficulty: string,
  Email: string,
  ExerciseInterval: number,
  IgnoreExercises?: Array< string > | null,
  LastExerciseTime: number,
  Location: string,
  PrevExercise: string,
  SkippedExercises?: Array< string > | null,
  DeliveryMethod?: string | null,
  WindowStartHour: number,
  WindowEndHour: number,
  WindowDays: Array< boolean >,
  RequestedExercise: boolean,
  GoogleCalendarEnabled?: boolean | null,
  GoogleCalendarRefreshToken?: string | null,
  SlackAccessToken?: string | null,
  SlackUserID?: string | null,
  Movement?: string | null,
};

export type UpdateUsersExerciseInput = {
  UserID: string,
  BodyPosition?: string | null,
  Difficulty?: string | null,
  Email?: string | null,
  ExerciseInterval?: number | null,
  IgnoreExercises?: Array< string > | null,
  LastExerciseTime?: number | null,
  Location?: string | null,
  PrevExercise?: string | null,
  SkippedExercises?: Array< string > | null,
  DeliveryMethod?: string | null,
  WindowStartHour?: number | null,
  WindowEndHour?: number | null,
  WindowDays?: Array< boolean > | null,
  RequestedExercise?: boolean | null,
  GoogleCalendarEnabled?: boolean | null,
  GoogleCalendarRefreshToken?: string | null,
  SlackAccessToken?: string | null,
  SlackUserID?: string | null,
  Movement?: string | null,
};

export type DeleteUsersExerciseInput = {
  UserID: string,
};

export type TableExerciseLogFilterInput = {
  UserID?: TableStringFilterInput | null,
  timestamp?: TableFloatFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ExerciseLogConnection = {
  __typename: "ExerciseLogConnection",
  items?:  Array<ExerciseLog | null > | null,
  nextToken?: string | null,
};

export type TableExercisesGPTFilterInput = {
  exerciseName?: TableStringFilterInput | null,
};

export type ExercisesGPTConnection = {
  __typename: "ExercisesGPTConnection",
  items?:  Array<ExercisesGPT | null > | null,
  nextToken?: string | null,
};

export type TableUsersExerciseFilterInput = {
  UserID?: TableStringFilterInput | null,
};

export type UsersExerciseConnection = {
  __typename: "UsersExerciseConnection",
  items?:  Array<UsersExercise | null > | null,
  nextToken?: string | null,
};

export type CreateExerciseLogMutationVariables = {
  input: CreateExerciseLogInput,
};

export type CreateExerciseLogMutation = {
  createExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type UpdateExerciseLogMutationVariables = {
  input: UpdateExerciseLogInput,
};

export type UpdateExerciseLogMutation = {
  updateExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type DeleteExerciseLogMutationVariables = {
  input: DeleteExerciseLogInput,
};

export type DeleteExerciseLogMutation = {
  deleteExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type CreateExercisesGPTMutationVariables = {
  input: CreateExercisesGPTInput,
};

export type CreateExercisesGPTMutation = {
  createExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type UpdateExercisesGPTMutationVariables = {
  input: UpdateExercisesGPTInput,
};

export type UpdateExercisesGPTMutation = {
  updateExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type DeleteExercisesGPTMutationVariables = {
  input: DeleteExercisesGPTInput,
};

export type DeleteExercisesGPTMutation = {
  deleteExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type CreateUsersExerciseMutationVariables = {
  input: CreateUsersExerciseInput,
};

export type CreateUsersExerciseMutation = {
  createUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type UpdateUsersExerciseMutationVariables = {
  input: UpdateUsersExerciseInput,
};

export type UpdateUsersExerciseMutation = {
  updateUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type DeleteUsersExerciseMutationVariables = {
  input: DeleteUsersExerciseInput,
};

export type DeleteUsersExerciseMutation = {
  deleteUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type GetExerciseLogQueryVariables = {
  UserID: string,
  timestamp: number,
};

export type GetExerciseLogQuery = {
  getExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type ListExerciseLogsQueryVariables = {
  UserID: string,
  filter?: TableExerciseLogFilterInput | null,
  limit: number,
  nextToken?: string | null,
};

export type ListExerciseLogsQuery = {
  listExerciseLogs?:  {
    __typename: "ExerciseLogConnection",
    items?:  Array< {
      __typename: "ExerciseLog",
      UserID: string,
      timestamp: number,
      exerciseName: string,
      bodyPart?: string | null,
      completed?: boolean | null,
      timestampCompleted?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetExercisesGPTQueryVariables = {
  exerciseName: string,
};

export type GetExercisesGPTQuery = {
  getExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type ListExercisesGPTSQueryVariables = {
  filter?: TableExercisesGPTFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesGPTSQuery = {
  listExercisesGPTS?:  {
    __typename: "ExercisesGPTConnection",
    items?:  Array< {
      __typename: "ExercisesGPT",
      exerciseName: string,
      BodyPart: string,
      BodyPosition: string,
      Difficulty: string,
      GPTDirections: string,
      Location: string,
      TutorialLink: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUsersExerciseQueryVariables = {
  UserID: string,
};

export type GetUsersExerciseQuery = {
  getUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type ListUsersExercisesQueryVariables = {
  filter?: TableUsersExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersExercisesQuery = {
  listUsersExercises?:  {
    __typename: "UsersExerciseConnection",
    items?:  Array< {
      __typename: "UsersExercise",
      UserID: string,
      BodyPosition: string,
      Difficulty: string,
      Email: string,
      ExerciseInterval: number,
      IgnoreExercises?: Array< string > | null,
      LastExerciseTime: number,
      Location: string,
      PrevExercise: string,
      SkippedExercises?: Array< string > | null,
      DeliveryMethod?: string | null,
      WindowStartHour: number,
      WindowEndHour: number,
      WindowDays: Array< boolean >,
      RequestedExercise: boolean,
      GoogleCalendarEnabled?: boolean | null,
      GoogleCalendarRefreshToken?: string | null,
      SlackAccessToken?: string | null,
      SlackUserID?: string | null,
      Movement?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateExerciseLogSubscriptionVariables = {
  UserID?: string | null,
  timestamp?: number | null,
};

export type OnCreateExerciseLogSubscription = {
  onCreateExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type OnUpdateExerciseLogSubscriptionVariables = {
  UserID?: string | null,
  timestamp?: number | null,
};

export type OnUpdateExerciseLogSubscription = {
  onUpdateExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type OnDeleteExerciseLogSubscriptionVariables = {
  UserID?: string | null,
  timestamp?: number | null,
};

export type OnDeleteExerciseLogSubscription = {
  onDeleteExerciseLog?:  {
    __typename: "ExerciseLog",
    UserID: string,
    timestamp: number,
    exerciseName: string,
    bodyPart?: string | null,
    completed?: boolean | null,
    timestampCompleted?: number | null,
  } | null,
};

export type OnCreateExercisesGPTSubscriptionVariables = {
  exerciseName?: string | null,
};

export type OnCreateExercisesGPTSubscription = {
  onCreateExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type OnUpdateExercisesGPTSubscriptionVariables = {
  exerciseName?: string | null,
};

export type OnUpdateExercisesGPTSubscription = {
  onUpdateExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type OnDeleteExercisesGPTSubscriptionVariables = {
  exerciseName?: string | null,
};

export type OnDeleteExercisesGPTSubscription = {
  onDeleteExercisesGPT?:  {
    __typename: "ExercisesGPT",
    exerciseName: string,
    BodyPart: string,
    BodyPosition: string,
    Difficulty: string,
    GPTDirections: string,
    Location: string,
    TutorialLink: string,
  } | null,
};

export type OnCreateUsersExerciseSubscriptionVariables = {
  UserID?: string | null,
};

export type OnCreateUsersExerciseSubscription = {
  onCreateUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type OnUpdateUsersExerciseSubscriptionVariables = {
  UserID?: string | null,
};

export type OnUpdateUsersExerciseSubscription = {
  onUpdateUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};

export type OnDeleteUsersExerciseSubscriptionVariables = {
  UserID?: string | null,
};

export type OnDeleteUsersExerciseSubscription = {
  onDeleteUsersExercise?:  {
    __typename: "UsersExercise",
    UserID: string,
    BodyPosition: string,
    Difficulty: string,
    Email: string,
    ExerciseInterval: number,
    IgnoreExercises?: Array< string > | null,
    LastExerciseTime: number,
    Location: string,
    PrevExercise: string,
    SkippedExercises?: Array< string > | null,
    DeliveryMethod?: string | null,
    WindowStartHour: number,
    WindowEndHour: number,
    WindowDays: Array< boolean >,
    RequestedExercise: boolean,
    GoogleCalendarEnabled?: boolean | null,
    GoogleCalendarRefreshToken?: string | null,
    SlackAccessToken?: string | null,
    SlackUserID?: string | null,
    Movement?: string | null,
  } | null,
};
