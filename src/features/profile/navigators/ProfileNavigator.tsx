import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileNavigatorParamList } from "../types";
import ProfileScreen from "../screens/ProfileScreen";

function ProfileNavigator() {
  const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
