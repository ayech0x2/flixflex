import AuthNavigator from "@/features/auth/navigators/AuthNavigator";
import { Theme } from "@/lib/restyle";
import { userAtom } from "@/shared/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import { useAtomValue } from "jotai";
import BottomTabNavigator from "./BottomTabNavigator";
import { RootNavigatorParamList } from "./types";
import { moderateScale } from "@/lib/normalize";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
  const {
    colors: { appBg },
  } = useTheme<Theme>();

  const user = useAtomValue(userAtom);

  const renderNavigator = () => {
    if (user) {
      return (
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      );
    } else {
      return <Stack.Screen name="AuthNavigator" component={AuthNavigator} />;
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg, paddingTop: moderateScale(10) },
      }}
    >
      {renderNavigator()}
    </Stack.Navigator>
  );
}

export default RootNavigator;
