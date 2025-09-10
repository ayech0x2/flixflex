import { RootNavigatorParamList } from "@/navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ProfileNavigatorParamList = {
  Profile: undefined;
};

type ProfileScreenProps<ScreenName extends keyof ProfileNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileNavigatorParamList, ScreenName>,
    NativeStackScreenProps<RootNavigatorParamList, "BottomTabNavigator">
  >;

export { ProfileNavigatorParamList, ProfileScreenProps };
