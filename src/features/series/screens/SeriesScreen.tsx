import HorizontalMediaList from "@/features/home/components/HorizontalMediaList";
import { SafeAreaView, Text, Theme, TouchableOpacity } from "@/lib/restyle";
import Header from "@/shared/components/Header";
import InfiniteMediaList from "@/shared/components/InfiniteMediaList";
import SearchIcon from "@/shared/svg/SearchIcon";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { useInfiniteSeries } from "../services/useInfiniteSeries";
import { SeriesScreenProps } from "../types";
import { useTopRatedSeries } from "../services/useTopRatedSeries";
function MoviesScreen({ navigation }: SeriesScreenProps<"Series">) {
  const { data: topRatedSeries } = useTopRatedSeries();

  const { series, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteSeries();

  const { sizes } = useTheme<Theme>();

  return (
    <SafeAreaView>
      <InfiniteMediaList
        ListHeaderComponent={
          <React.Fragment>
            <Header />
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchSeries")}
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
              <Text color="secondaryBodyText">Search for a TV show...</Text>
            </TouchableOpacity>
            <HorizontalMediaList
              title="Top rated Tv shows"
              items={topRatedSeries || []}
              navigateToOne={(id) => navigation.navigate("Serie", { id })}
            />
            <Text
              marginTop="s"
              paddingLeft="screenPadding"
              variant="sectionTitle"
            >
              Explore other TV shows
            </Text>
          </React.Fragment>
        }
        items={series || []}
        navigateToOne={(id) => navigation.navigate("Serie", { id })}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      />
    </SafeAreaView>
  );
}

export default MoviesScreen;
