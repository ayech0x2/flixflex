import { Box, Text, TouchableOpacity } from "@/lib/restyle";
import Button from "@/shared/components/Button";
import TextInput from "@/shared/components/TextInput";
import useAlert from "@/shared/hooks/useAlert";
import useExtractValidationMessages from "@/shared/hooks/useExtractValidationMessages";
import useFormError from "@/shared/hooks/useFormError";
import EyeIcon from "@/shared/svg/EyeIcon";
import EyeSlashIcon from "@/shared/svg/EyeSlashIcon";
import LockIcon from "@/shared/svg/LockIcon";
import UserIcon from "@/shared/svg/UserIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { signupSchema } from "../schemas";
import { useSignup } from "../services/useSignup";
import { SignupInput } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { USE_AUTH_QUERY_KEY } from "@/shared/services/keys";

function SignupForm({ navigateToSignin }: { navigateToSignin: () => void }) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const client = useQueryClient();

  const { show } = useAlert();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: yupResolver(signupSchema),
  });

  const validation = useExtractValidationMessages<SignupInput>(errors);

  const { mutate: signup, isPending, error } = useSignup();

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

  const onSubmit = (d: SignupInput) => {
    signup(d, {
      onSuccess: () => {
        show({
          type: "SUCCESS",
          title: "Congratulations",
          message: "Account created successfully",
        });
        client.invalidateQueries({ queryKey: [USE_AUTH_QUERY_KEY] });
      },
      onError: () => {
        show({
          type: "DANGER",
          title: "Submission error",
          message: "Something went wrong",
        });
      },
    });
  };

  return (
    <Box paddingHorizontal="screenPadding" gap="m">
      <Text variant="title">Create your {"\n"}Account</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange: onChangeText } }) => (
          <TextInput
            left={<UserIcon color="inputIcon" />}
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
            error={validation["password"]}
            nativeProps={{
              onChangeText,
              placeholder: "********",
              secureTextEntry: !isPasswordVisible,
            }}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange: onChangeText } }) => (
          <TextInput
            left={<LockIcon color="inputIcon" />}
            label="Confirm Password"
            error={validation.confirmPassword}
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
        You already have an account?{" "}
        <Text color="accent" fontWeight="bold" onPress={navigateToSignin}>
          Sign-in Now!
        </Text>
      </Text>
    </Box>
  );
}

export default SignupForm;
