import {
  backgroundColor,
  border,
  BoxProps,
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
  layout,
  shadow,
  spacing,
  typography,
  TypographyProps,
} from "@shopify/restyle";
import {
  SafeAreaView as RNSafeAreaView,
  TextInput as RNTextInput,
  TextInput as RNTextInputProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewProps,
} from "react-native";
import { moderateScale, normalizeFont } from "./normalize";

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#F3BD17",
  grey: "#BDBDBD",
};

const lightTheme = createTheme({
  colors: {
    appBg: palette.black,
    bodyText: palette.white,
    buttonText: palette.white,
    secondaryBodyText: palette.grey,
    accent: palette.yellow,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 48,
  },
  sizes: {
    buttonHeight: moderateScale(50),
  },
  textVariants: {
    bodySecondary: {
      fontWeight: "400",
      fontSize: normalizeFont(14),
      color: "secondaryBodyText",
    },
    button: {
      fontWeight: "500",
      fontSize: normalizeFont(18),
      color: "buttonText",
    },
    title: {
      fontWeight: "500",
      fontSize: normalizeFont(24),
      color: "bodyText",
    },
    defaults: {
      fontWeight: "400",
      fontSize: normalizeFont(16),
      color: "bodyText",
    },
  },
  borderRadii: {},
});

type Theme = typeof lightTheme;

const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
  },
};

const Box = createBox<Theme>();
const Text = createText<Theme>();

type TextInputProps = BoxProps<Theme> &
  RNTextInputProps &
  TypographyProps<Theme>;
export const TextInput = createRestyleComponent<TextInputProps, Theme>(
  [spacing, backgroundColor, spacing, shadow, border, layout, typography],
  RNTextInput,
);

type SafeAreaViewProps = BoxProps<Theme> & ViewProps;
export const SafeAreaView = createRestyleComponent<SafeAreaViewProps, Theme>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  RNSafeAreaView,
);

type TouchableOpacityProps = BoxProps<Theme> & RNTouchableOpacityProps;
export const TouchableOpacity = createRestyleComponent<
  TouchableOpacityProps,
  Theme
>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  RNTouchableOpacity,
);

export { Box, darkTheme, lightTheme, Text, Theme };
