import { Theme } from "@/lib/restyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import AuthScreen from "../screens/AuthScreen";
import { AuthNavigatorParamList } from "../types";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

function AuthNavigator() {
  const {
    colors: { appBg },
  } = useTheme<Theme>();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg },
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
