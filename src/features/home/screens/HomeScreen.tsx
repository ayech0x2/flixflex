import { Box, SafeAreaView } from "@/lib/restyle";
import HorizontalMediaList from "../components/HorizontalMediaList";
import { ScrollView } from "react-native";

function HomeScreen() {
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Box gap="m">
          <HorizontalMediaList title="New movies" items={[]} />
          <HorizontalMediaList title="New series" items={[]} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
