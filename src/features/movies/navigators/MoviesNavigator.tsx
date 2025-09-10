import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import { MoviesNavigatorParamList } from "../types";

function MoviesNavigator() {
  const Stack = createNativeStackNavigator<MoviesNavigatorParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
    </Stack.Navigator>
  );
}

export default MoviesNavigator;
