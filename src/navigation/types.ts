import { AuthNavigatorParamList } from "@/features/auth/types";
import { NavigatorScreenParams } from "@react-navigation/native";

type RootNavigatorParamList = {
  AuthNavigator: NavigatorScreenParams<AuthNavigatorParamList>;
};

export { RootNavigatorParamList };
