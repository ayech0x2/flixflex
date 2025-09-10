import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SeriesNavigatorParamList = {
  Series: undefined;
  Serie: { id: number };
  SearchSeries: undefined;
};

type SeriesScreenProps<ScreenName extends keyof SeriesNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SeriesNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "BottomTabNavigator">
  >;

export { SeriesNavigatorParamList, SeriesScreenProps };
