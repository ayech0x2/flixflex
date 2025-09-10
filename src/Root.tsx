import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useAtomValue } from "jotai";
import * as React from "react";
import { darkTheme, lightTheme } from "./lib/restyle";
import RootNavigator from "./navigation/RootNavigator";
import { themeAtom } from "./shared/atoms";

function Root() {
  const theme = useAtomValue(themeAtom);

  const client = new QueryClient();
  return (
    <ThemeProvider theme={theme === "DARK" ? darkTheme : lightTheme}>
      <StatusBar style={theme === "DARK" ? "light" : "dark"} />
      <NavigationContainer>
        <QueryClientProvider client={client}>
          <RootNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Root;
