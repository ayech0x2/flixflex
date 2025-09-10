import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { HomeNavigatorParamList } from "../types";

function HomeNavigator() {
  const Stack = createNativeStackNavigator<HomeNavigatorParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
