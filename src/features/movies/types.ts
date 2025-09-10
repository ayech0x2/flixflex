import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MoviesNavigatorParamList = {
  Movies: undefined;
};

type MoviesScreenProps<ScreenName extends keyof MoviesNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MoviesNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "BottomTabNavigator">
  >;

export { MoviesNavigatorParamList, MoviesScreenProps };
