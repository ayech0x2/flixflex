import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaView } from "react-native";
import { lightTheme, Text } from "./lib/restyle";

function Root() {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView>
        <Text>FlixFlex</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default Root;
