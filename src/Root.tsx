import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaView } from "react-native";
import { lightTheme, Text } from "./lib/restyle";
import { NavigationContainer } from "@react-navigation/native";

function Root() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <SafeAreaView>
          <Text>FlixFlex</Text>
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Root;
