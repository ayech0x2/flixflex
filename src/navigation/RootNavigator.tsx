import AuthNavigator from "@/features/auth/navigators/AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
