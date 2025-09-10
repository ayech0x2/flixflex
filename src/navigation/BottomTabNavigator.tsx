import HomeNavigator from "@/features/home/navigators/HomeNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigatorParamList } from "./types";
import SeriesNavigator from "@/features/series/navigators/SeriesNavigator";
import ProfileNavigator from "@/features/profile/navigators/ProfileNavigator";
import MoviesNavigator from "@/features/movies/navigators/MoviesNavigator";
import BottomTab from "@/shared/components/BottomTab";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTab {...props} />}
    >
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="MoviesNavigator" component={MoviesNavigator} />
      <Tab.Screen name="SeriesNavigator" component={SeriesNavigator} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
