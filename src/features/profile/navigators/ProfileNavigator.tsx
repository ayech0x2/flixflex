import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileNavigatorParamList } from "../types";
import ProfileScreen from "../screens/ProfileScreen";
import { Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";

function ProfileNavigator() {
  const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
