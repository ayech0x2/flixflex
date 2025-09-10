import HomeNavigator from "@/features/home/navigators/HomeNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigatorParamList } from "./types";
import SeriesNavigator from "@/features/series/navigators/SeriesNavigator";
import ProfileNavigator from "@/features/profile/navigators/ProfileNavigator";
import MoviesNavigator from "@/features/movies/navigators/MoviesNavigator";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Movies" component={MoviesNavigator} />
      <Tab.Screen name="Series" component={SeriesNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
