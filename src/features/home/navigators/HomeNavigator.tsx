import { Theme } from "@/lib/restyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
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
    </Stack.Navigator>
  );
}

export default HomeNavigator;
