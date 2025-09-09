import { createBox, createText, createTheme } from "@shopify/restyle";
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

export { Box, Text, Theme, darkTheme, lightTheme };
