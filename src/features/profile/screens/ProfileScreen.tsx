import { useAuth } from "@/features/auth/services/useAuth";
import { moderateScale } from "@/lib/normalize";
import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import useAlert from "@/shared/hooks/useAlert";
import { useSignout } from "@/shared/services/useSignout";
import UserIcon from "@/shared/svg/UserIcon";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
  const { data: user } = useAuth();

  const { mutate: signout } = useSignout();

  const { show } = useAlert();

  const handleSignout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: () =>
          signout(undefined, {
            onSuccess: () => {
              show({
                type: "SUCCESS",
                title: "Logout",
                message: "You have been logged out",
              });
            },
          }),
      },
    ]);
  };

  return (
    <SafeAreaView>
      <Box paddingTop="xxl" justifyContent="center" alignItems="center" gap="m">
        <Box
          height={moderateScale(100)}
          width={moderateScale(100)}
          justifyContent="center"
          alignItems="center"
          backgroundColor="inputBg"
          style={{
            borderRadius: moderateScale(100) / 2,
          }}
        >
          <UserIcon size={moderateScale(40)} color="bodyText" />
        </Box>
        <Text color="secondaryBodyText">{user?.email}</Text>
        <TouchableOpacity
          paddingHorizontal="m"
          backgroundColor="danger"
          paddingVertical="s"
          borderRadius="button"
          onPress={handleSignout}
        >
          <Text color="buttonText" variant="button">
            Logout
          </Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
}

export default ProfileScreen;
