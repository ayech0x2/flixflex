import { AuthNavigatorParamList } from "@/features/auth/types";
import { HomeNavigatorParamList } from "@/features/home/types";
import { MoviesNavigatorParamList } from "@/features/movies/types";
import { ProfileNavigatorParamList } from "@/features/profile/types";
import { SeriesNavigatorParamList } from "@/features/series/types";
import { NavigatorScreenParams } from "@react-navigation/native";

type BottomTabNavigatorParamList = {
  Home: NavigatorScreenParams<HomeNavigatorParamList>;
  Movies: NavigatorScreenParams<MoviesNavigatorParamList>;
  Series: NavigatorScreenParams<SeriesNavigatorParamList>;
  Profile: NavigatorScreenParams<ProfileNavigatorParamList>;
};

type RootNavigatorParamList = {
  AuthNavigator: NavigatorScreenParams<AuthNavigatorParamList>;
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export { RootNavigatorParamList, BottomTabNavigatorParamList };
