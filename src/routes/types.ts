import type { StackScreenProps } from "@react-navigation/stack";

import { RouteNames } from "../constants/routeNames";

export type RootStackParamList = {
  [RouteNames.PUBLIC.ROOT]: undefined;
  [RouteNames.PRIVATE.ROOT]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type PublicStackParamList = {
  [RouteNames.PUBLIC.ROOT]: undefined;
  [RouteNames.PUBLIC.LOGIN]: undefined;
  [RouteNames.PUBLIC.NEW_ACCOUNT]: undefined;
};
export type PrivateStackParamList = {
  [RouteNames.PRIVATE.ROOT]: undefined;
  [RouteNames.PRIVATE.HOME]: undefined;
  [RouteNames.PRIVATE.NEW_TASK_MODAL]: undefined;
  [RouteNames.PRIVATE.SETTINGS_MODAL]: undefined;
};

export type PublicStackScreenProps<T extends keyof PublicStackParamList> = StackScreenProps<
  PublicStackParamList,
  T
>;

export type PrivateStackScreenProps<T extends keyof PrivateStackParamList> = StackScreenProps<
  PrivateStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        PublicStackParamList,
        PrivateStackParamList {}
  }
}
