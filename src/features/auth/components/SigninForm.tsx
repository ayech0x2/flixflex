import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import Button from "@/shared/components/Button";
import TextInput from "@/shared/components/TextInput";
import useAlert from "@/shared/hooks/useAlert";
import useExtractValidationMessages from "@/shared/hooks/useExtractValidationMessages";
import useFormError from "@/shared/hooks/useFormError";
import EyeIcon from "@/shared/svg/EyeIcon";
import EyeSlashIcon from "@/shared/svg/EyeSlashIcon";
import LockIcon from "@/shared/svg/LockIcon";
import MailIcon from "@/shared/svg/MailIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { signinSchema } from "../schemas";
import { useSignin } from "../services/useSignin";
import { SigninInput } from "../types";

function SigninForm({ navigateToSignup }: { navigateToSignup: () => void }) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const { show } = useAlert();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SigninInput>({
    resolver: yupResolver(signinSchema),
  });

  const validation = useExtractValidationMessages<SigninInput>(errors);

  const { mutate: signin, isPending, error } = useSignin();

  const { validationError } = useFormError(validation, error);

  React.useEffect(() => {
    if (validationError) {
      show({
        type: "DANGER",
        title: "Validation error",
        message: "Please check your information",
      });
      return;
    }
  }, [show, validationError]);

  const onSubmit = (d: SigninInput) => {
    signin(d, {
      onSuccess: () => {
        show({
          type: "SUCCESS",
          title: "Congratulations",
          message: "Account signed in successfully",
        });
      },
      onError: () => {
        show({
          type: "DANGER",
          title: "Submission error",
          message: "Invalid email or password",
        });
      },
    });
  };

  return (
    <Box paddingHorizontal="screenPadding" gap="m">
      <Text variant="title">Sign-in to your {"\n"}Account</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange: onChangeText } }) => (
          <TextInput
            left={<MailIcon color="inputIcon" />}
            label="Address email"
            error={validation.email}
            nativeProps={{
              onChangeText,
              placeholder: "Ex: 4yech.hamza@gmail.com",
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
            error={validation.password}
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
