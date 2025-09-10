import { AnimatedBox, Box, Pressable, Text, Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { FadeIn } from "react-native-reanimated";

interface TextInputProps {
  label?: string | undefined;
  left?: React.ReactNode | undefined;
  right?: React.ReactNode | undefined;
  nativeProps?: RNTextInputProps | undefined;
  error?: string | undefined;
}

function TextInput({ left, right, label, nativeProps, error }: TextInputProps) {
  const { sizes, textVariants, colors } = useTheme<Theme>();

  return (
    <Box gap="xs">
      {label && (
        <Text color="secondaryBodyText" variant="bodySecondary">
          {label}
        </Text>
      )}
      <Pressable
        backgroundColor={error ? "errorBg" : "inputBg"}
        height={sizes.inputHeight}
        borderRadius="input"
        borderWidth={2}
        borderColor={error ? "errorBorder" : "inputBorder"}
        paddingHorizontal="inputPadding"
        flexDirection="row"
        alignItems="center"
        gap="s"
      >
        {left && left}
        {/* @ts-ignore */}
        <RNTextInput
          placeholderTextColor={colors.secondaryBodyText}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: "100%",
            fontSize: textVariants.defaults.fontSize,
            color: colors.bodyText,
          }}
          {...nativeProps}
        />
        <Box marginLeft="auto" />
        {right && right}
      </Pressable>
      {error && (
        <AnimatedBox entering={FadeIn}>
          <Text
            textTransform="capitalize"
            color="errorText"
            variant="bodySecondary"
          >
            {error}
          </Text>
        </AnimatedBox>
      )}
    </Box>
  );
}

export default TextInput;
