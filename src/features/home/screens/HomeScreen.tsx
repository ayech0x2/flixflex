import { SafeAreaView } from "@/lib/restyle";
import Header from "@/shared/components/Header";
import { ScrollView } from "react-native";
import FullscreenMediaList from "../components/FullscreenMediaList";
import HorizontalMediaList from "../components/HorizontalMediaList";
import { useNowPlayingMovies } from "../services/useNowPlayingMovies";
import { useTrendingSeries } from "../services/useTrendingSeries";
import { useUpcomingMovies } from "../services/useUpcomingMovies";
import { HomeScreenProps } from "../types";
import HomeScreenSkeleton from "../components/HomeScreenSkeleton";

function HomeScreen({ navigation }: HomeScreenProps<"Home">) {
  const { data: upcomingMovies, isPending: isPendingUpcomingMovies } =
    useUpcomingMovies();

  const { data: nowPlayingMovies, isPending: isPendingNowPlayingMovies } =
    useNowPlayingMovies();

  const { data: trendingSeries, isPending: isPendingTrendingSeries } =
    useTrendingSeries();

  if (
    isPendingUpcomingMovies ||
    isPendingNowPlayingMovies ||
    isPendingTrendingSeries
  ) {
    return <HomeScreenSkeleton />;
  }

  return (
    <SafeAreaView flex={1}>
      <Header />
      <ScrollView>
        <FullscreenMediaList items={upcomingMovies || []} />
        <HorizontalMediaList
          title="Trending TV shows"
          items={trendingSeries || []}
          navigateToOne={(id: number) => navigation.navigate("Serie", { id })}
        />
        <HorizontalMediaList
          title="Now playing movies"
          items={nowPlayingMovies || []}
          navigateToOne={(id: number) => navigation.navigate("Movie", { id })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
