import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type AuthNavigatorParamList = {
  Auth: undefined;
};

export type AuthScreenProps<ScreenName extends keyof AuthNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "AuthNavigator">
  >;

export { AuthNavigatorParamList };
