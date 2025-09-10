import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type AuthNavigatorParamList = {
  Auth: undefined;
  Sync: undefined;
};

type AuthNavigatorScreenProps<ScreenName extends keyof AuthNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "AuthNavigator">
  >;

type SigninInput = {
  email: string;
  password: string;
};

type SignupInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

export {
  AuthNavigatorParamList,
  AuthNavigatorScreenProps,
  SigninInput,
  SignupInput,
};
