import HorizontalMediaList from "@/features/home/components/HorizontalMediaList";
import { SafeAreaView, Text, Theme, TouchableOpacity } from "@/lib/restyle";
import Header from "@/shared/components/Header";
import InfiniteMediaList from "@/shared/components/InfiniteMediaList";
import SearchIcon from "@/shared/svg/SearchIcon";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { useInfiniteMovies } from "../services/useInfiniteMovies";
import { useTopRatedMovies } from "../services/useTopRatedMovies";
import { MoviesScreenProps } from "../types";

function MoviesScreen({ navigation }: MoviesScreenProps<"Movies">) {
  const { data: topRatedMovies } = useTopRatedMovies();

  const { movies, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteMovies();

  const { sizes } = useTheme<Theme>();

  return (
    <SafeAreaView>
      <InfiniteMediaList
        ListHeaderComponent={
          <React.Fragment>
            <Header />
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchMovies")}
              paddingHorizontal="screenPadding"
              marginBottom="m"
              height={sizes.inputHeight}
              backgroundColor="inputBg"
              marginHorizontal="screenPadding"
              borderRadius="input"
              flexDirection="row"
              alignItems="center"
              borderWidth={2}
              borderColor="inputBorder"
              gap="s"
            >
              <SearchIcon color="secondaryBodyText" />
              <Text color="secondaryBodyText">Search for a movie...</Text>
            </TouchableOpacity>
            <HorizontalMediaList
              title="Top rated movies"
              items={topRatedMovies || []}
              navigateToOne={(id) => navigation.navigate("Movie", { id })}
            />
            <Text
              marginTop="s"
              paddingLeft="screenPadding"
              variant="sectionTitle"
            >
              Explore other movies
            </Text>
          </React.Fragment>
        }
        items={movies || []}
        navigateToOne={(id) => navigation.navigate("Movie", { id })}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      />
    </SafeAreaView>
  );
}

export default MoviesScreen;
