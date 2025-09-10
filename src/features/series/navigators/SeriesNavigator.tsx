import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeriesScreen from "../screens/SeriesScreen";
import { SeriesNavigatorParamList } from "../types";

function SeriesNavigator() {
  const Stack = createNativeStackNavigator<SeriesNavigatorParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Series" component={SeriesScreen} />
    </Stack.Navigator>
  );
}

export default SeriesNavigator;
