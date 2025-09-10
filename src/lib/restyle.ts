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
} from "@shopify/restyle";
import {
  Dimensions,
  Image as RNImage,
  ImageProps as RNImageProps,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  SafeAreaView as RNSafeAreaView,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewProps,
} from "react-native";
import Animated, { AnimatedProps } from "react-native-reanimated";
import { moderateScale, normalizeFont } from "./normalize";

import {
  LinearGradient as RNLinearGradient,
  LinearGradientProps as RNLinearGradientProps,
} from "expo-linear-gradient";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#F3BD17",
  yellow1: "#E0AB08",
  grey: "#BDBDBD",
  grey1: "#626262",
  black1: "#1D1D1D",
  black2: "#2B2B2B",
};

const lightTheme = createTheme({
  colors: {
    appBg: palette.black,
    bodyText: palette.white,
    buttonText: palette.white,
    secondaryBodyText: palette.grey,
    inputIcon: palette.grey,
    accent: palette.yellow,
    inputBg: palette.black1,
    inputBorder: palette.black2,
    accentBorder: palette.yellow1,
    languageButton: "rgba(0, 0, 0, 0.5)",
    disabledButton: palette.grey1,
  },
  spacing: {
    auto: "auto",
    xs: moderateScale(4),
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(40),
    xxl: moderateScale(48),
    screenPadding: moderateScale(30),
    inputPadding: moderateScale(16),
  },
  sizes: {
    buttonHeight: moderateScale(50),
    inputHeight: moderateScale(50),
    screenHeight: SCREEN_HEIGHT,
    screenWidth: SCREEN_WIDTH,
    authHeaderHeight: moderateScale(100),
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
  borderRadii: {
    button: 8,
    input: 8,
  },
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

type PressableProps = BoxProps<Theme> & RNPressableProps;
export const Pressable = createRestyleComponent<PressableProps, Theme>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  RNPressable,
);

type ImageProps = BoxProps<Theme> & RNImageProps;
export const Image = createRestyleComponent<ImageProps, Theme>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  RNImage,
);

type LinearGradientProps = BoxProps<Theme> & RNLinearGradientProps;
export const LinearGradient = createRestyleComponent<
  LinearGradientProps,
  Theme
>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  RNLinearGradient,
);

type AnimatedViewProps = AnimatedProps<
  ViewProps & { children?: React.ReactNode }
>;
type AnimatedBoxProps = BoxProps<Theme> & AnimatedViewProps;
export const AnimatedBox = createRestyleComponent<AnimatedBoxProps, Theme>(
  [spacing, backgroundColor, spacing, border, shadow, layout],
  Animated.View,
);

export { Box, darkTheme, lightTheme, Text, Theme };
