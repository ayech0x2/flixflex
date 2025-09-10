import { Theme } from "@/lib/restyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import AuthScreen from "../screens/AuthScreen";
import SyncScreen from "../screens/SyncScreen";
import { AuthNavigatorParamList } from "../types";
import { userAtom } from "@/shared/atoms";
import { useAtomValue } from "jotai";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

function AuthNavigator() {
  const {
    colors: { appBg },
  } = useTheme<Theme>();
  const user = useAtomValue(userAtom);

  const renderScreen = () => {
    if (user === undefined) {
      return <Stack.Screen name="Sync" component={SyncScreen} />;
    } else {
      return <Stack.Screen name="Auth" component={AuthScreen} />;
    }
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg },
      }}
    >
      {renderScreen()}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
