import { Box, SafeAreaView } from "@/lib/restyle";
import { ScrollView } from "react-native";
import HorizontalMediaList from "../components/HorizontalMediaList";
import { useNewMoviesAndSeries } from "../services/useNewMoviesAndSeries";

function HomeScreen() {
  const { data: newMoviesAndSeries } = useNewMoviesAndSeries();

  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Box gap="m">
          <HorizontalMediaList
            title="Latest releases"
            items={newMoviesAndSeries || []}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
