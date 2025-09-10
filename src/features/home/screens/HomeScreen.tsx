import { SafeAreaView } from "@/lib/restyle";
import Header from "@/shared/components/Header";
import { ScrollView } from "react-native";
import FullscreenMediaList from "../components/FullscreenMediaList";
import HorizontalMediaList from "../components/HorizontalMediaList";
import { useNowPlayingMovies } from "../services/useNowPlayingMovies";
import { useTrendingSeries } from "../services/useTrendingSeries";
import { useUpcomingMovies } from "../services/useUpcomingMovies";
import { HomeScreenProps } from "../types";

function HomeScreen({ navigation }: HomeScreenProps<"Home">) {
  const { data: upcomingMovies } = useUpcomingMovies();

  const { data: nowPlayingMovies } = useNowPlayingMovies();

  const { data: trendingSeries } = useTrendingSeries();

  return (
    <SafeAreaView flex={1}>
      <Header />
      <ScrollView>
        <FullscreenMediaList items={upcomingMovies || []} />
        <HorizontalMediaList
          title="Trending TV shows"
          items={trendingSeries || []}
        />
        <HorizontalMediaList
          title="Now playing movies"
          items={nowPlayingMovies || []}
          navigateToMovie={(id: number) => navigation.navigate("Movie", { id })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
