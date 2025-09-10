import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./lib/jotai";
import { darkTheme, lightTheme } from "./lib/restyle";
import RootNavigator from "./navigation/RootNavigator";
import { themeAtom } from "./shared/atoms";
import Alert from "./shared/components/Alert";

function Root() {
  const theme = useAtomValue(themeAtom);

  const client = new QueryClient();
  return (
    <ThemeProvider theme={theme === "DARK" ? darkTheme : lightTheme}>
      <StatusBar style={theme === "DARK" ? "light" : "dark"} />
      <JotaiProvider store={store}>
        <NavigationContainer>
          <QueryClientProvider client={client}>
            <SafeAreaProvider>
              <Alert />
              <RootNavigator />
            </SafeAreaProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </JotaiProvider>
    </ThemeProvider>
  );
}

export default Root;
