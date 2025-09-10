import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { useAtomValue } from "jotai";
import * as React from "react";
import { darkTheme, lightTheme } from "./lib/restyle";
import RootNavigator from "./navigation/RootNavigator";
import { themeAtom } from "./shared/atoms";
import { StatusBar } from "expo-status-bar";

function Root() {
  const theme = useAtomValue(themeAtom);
  return (
    <ThemeProvider theme={theme === "DARK" ? darkTheme : lightTheme}>
      <StatusBar style={theme === "DARK" ? "light" : "dark"} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Root;
