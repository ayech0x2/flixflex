import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import Button from "@/shared/components/Button";
import TextInput from "@/shared/components/TextInput";
import EyeIcon from "@/shared/svg/EyeIcon";
import EyeSlashIcon from "@/shared/svg/EyeSlashIcon";
import LockIcon from "@/shared/svg/LockIcon";
import UserIcon from "@/shared/svg/UserIcon";
import * as React from "react";

function SignupForm({ navigateToSignin }: { navigateToSignin: () => void }) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <Box paddingHorizontal="screenPadding" gap="m">
      <Text variant="title">Create your{"\n"}Account</Text>
      <TextInput
        left={<UserIcon color="inputIcon" />}
        label="Email address"
        nativeProps={{
          placeholder: "Ex: 4yech.hamza@gmail.com",
        }}
      />
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
      <TextInput
        left={<LockIcon color="inputIcon" />}
        label="Password confirmation"
        nativeProps={{
          placeholder: "********",
          secureTextEntry: !isPasswordVisible,
        }}
      />
      <Button>
        <Text variant="button" textTransform="uppercase">
          Create my account
        </Text>
      </Button>
      <Text color="secondaryBodyText" textAlign="center">
        You already have an account?{" "}
        <Text color="accent" fontWeight="bold" onPress={navigateToSignin}>
          Sign-in Now!
        </Text>
      </Text>
    </Box>
  );
}

export default SignupForm;
