import AuthNavigator from "@/features/auth/navigators/AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "./types";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/lib/restyle";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
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
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
