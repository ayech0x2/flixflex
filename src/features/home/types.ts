import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeNavigatorParamList = {
  Home: undefined;
  Movie: { id: number };
  Serie: { id: number };
};

type HomeScreenProps<ScreenName extends keyof HomeNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "BottomTabNavigator">
  >;

export { HomeNavigatorParamList, HomeScreenProps };
