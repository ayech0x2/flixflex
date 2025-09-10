import { Theme } from "@/lib/restyle";
import MovieScreen from "@/shared/screens/MovieScreen";
import SerieScreen from "@/shared/screens/SerieScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import HomeScreen from "../screens/HomeScreen";
import { HomeNavigatorParamList } from "../types";

function HomeNavigator() {
  const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

  const {
    colors: { appBg },
  } = useTheme<Theme>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Serie" component={SerieScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
