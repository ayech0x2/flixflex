import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import { AuthNavigatorParamList } from "../types";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
