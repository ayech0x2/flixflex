import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import Button from "@/shared/components/Button";
import TextInput from "@/shared/components/TextInput";
import EyeIcon from "@/shared/svg/EyeIcon";
import EyeSlashIcon from "@/shared/svg/EyeSlashIcon";
import LockIcon from "@/shared/svg/LockIcon";
import UserIcon from "@/shared/svg/UserIcon";
import * as React from "react";

function SigninForm({ navigateToSignup }: { navigateToSignup: () => void }) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <Box paddingHorizontal="screenPadding" gap="m">
      <Text variant="title">Sign-in to your {"\n"}Account</Text>
      <TextInput
        left={<UserIcon color="inputIcon" />}
        label="Username"
        nativeProps={{
          placeholder: "Ex: ayech0x2",
        }}
      />
      <TextInput
        left={<LockIcon color="inputIcon" />}
        right={
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeSlashIcon color="inputIcon" />
            ) : (
              <EyeIcon color="inputIcon" />
            )}
          </TouchableOpacity>
        }
        label="Password"
        nativeProps={{
          placeholder: "********",
          secureTextEntry: !isPasswordVisible,
        }}
      />
      <Button>
        <Text textTransform="uppercase" variant="button">
          Connect
        </Text>
      </Button>
      <Text color="secondaryBodyText" textAlign="center">
        You dont have an account?{" "}
        <Text color="accent" fontWeight="bold" onPress={navigateToSignup}>
          Sign-up Now!
        </Text>
      </Text>
    </Box>
  );
}

export default SigninForm;
