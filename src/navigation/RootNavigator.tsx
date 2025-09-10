import AuthNavigator from "@/features/auth/navigators/AuthNavigator";
import HomeNavigator from "@/features/home/navigators/HomeNavigator";
import { Theme } from "@/lib/restyle";
import { userAtom } from "@/shared/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import { useAtomValue } from "jotai";
import { RootNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
  const {
    colors: { appBg },
  } = useTheme<Theme>();

  const user = useAtomValue(userAtom);

  const renderNavigator = () => {
    if (user) {
      return <Stack.Screen name="HomeNavigator" component={HomeNavigator} />;
    } else {
      return <Stack.Screen name="AuthNavigator" component={AuthNavigator} />;
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg },
      }}
    >
      {renderNavigator()}
    </Stack.Navigator>
  );
}

export default RootNavigator;
