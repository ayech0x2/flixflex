import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { HomeNavigatorParamList } from "../types";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/lib/restyle";

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
    </Stack.Navigator>
  );
}

export default HomeNavigator;
