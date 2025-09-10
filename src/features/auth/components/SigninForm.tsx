import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import Button from "@/shared/components/Button";
import TextInput from "@/shared/components/TextInput";
import EyeIcon from "@/shared/svg/EyeIcon";
import EyeSlashIcon from "@/shared/svg/EyeSlashIcon";
import LockIcon from "@/shared/svg/LockIcon";
import UserIcon from "@/shared/svg/UserIcon";
import * as React from "react";
import { useSignin } from "../services/useSignin";
import { Controller, useForm } from "react-hook-form";
import { SigninInput } from "../types";

function SigninForm({ navigateToSignup }: { navigateToSignup: () => void }) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const { handleSubmit, control } = useForm<SigninInput>();

  const { mutate: signin, isPending, error } = useSignin();
  console.log(error);
  const onSubmit = (d: SigninInput) => {
    signin(d);
  };

  return (
    <Box paddingHorizontal="screenPadding" gap="m">
      <Text variant="title">Sign-in to your {"\n"}Account</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange: onChangeText } }) => (
          <TextInput
            left={<UserIcon color="inputIcon" />}
            label="Username"
            nativeProps={{
              onChangeText,
              placeholder: "Ex: ayech0x2",
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange: onChangeText } }) => (
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
              onChangeText,
              placeholder: "********",
              secureTextEntry: !isPasswordVisible,
            }}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)} loading={isPending}>
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
