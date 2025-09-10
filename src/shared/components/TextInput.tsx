import { Box, Pressable, Text, Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

interface TextInputProps {
  label?: string | undefined;
  left?: React.ReactNode | undefined;
  right?: React.ReactNode | undefined;
  nativeProps?: RNTextInputProps | undefined;
}

function TextInput({ left, right, label, nativeProps }: TextInputProps) {
  const { sizes, textVariants, colors } = useTheme<Theme>();

  return (
    <Box gap="xs">
      {label && (
        <Text color="secondaryBodyText" variant="bodySecondary">
          {label}
        </Text>
      )}
      <Pressable
        backgroundColor="inputBg"
        height={sizes.inputHeight}
        borderRadius="input"
        borderWidth={2}
        borderColor="inputBorder"
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
    </Box>
  );
}

export default TextInput;
