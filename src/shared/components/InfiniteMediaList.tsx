import { Box, Text, Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { TmdbItem } from "../types";
import InfiniteMediaItem from "./InfiniteMediaItem";

interface InfiniteMediaListProps {
  items: TmdbItem[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  // eslint-disable-next-line unused-imports/no-unused-vars
  navigateToOne: (id: number) => void;
  ListHeaderComponent?: React.ReactNode | undefined;
  refetch: () => void;
}

function InfiniteMediaList({
  items,
  ListHeaderComponent,
  hasNextPage,
  isFetching,
  fetchNextPage,
  navigateToOne,
  refetch,
}: InfiniteMediaListProps) {
  const { spacing } = useTheme<Theme>();

  const renderItem = React.useCallback(
    ({ item }: { item: TmdbItem }) => {
      return <InfiniteMediaItem {...item} navigateToOne={navigateToOne} />;
    },
    [navigateToOne],
  );

  const renderListHeaderComponent = React.useCallback(() => {
    return ListHeaderComponent;
  }, [ListHeaderComponent]);

  return (
    <FlatList
      ListHeaderComponent={() => renderListHeaderComponent()}
      columnWrapperStyle={{
        gap: spacing.m,
      }}
      contentContainerStyle={{
        gap: spacing.m,
      }}
      ListEmptyComponent={
        <Box alignItems="center" justifyContent="center">
          <Text color="secondaryBodyText">No results found</Text>
        </Box>
      }
      numColumns={2}
      data={items}
      renderItem={renderItem}
      onEndReached={hasNextPage ? fetchNextPage : undefined}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => (isFetching ? <ActivityIndicator /> : null)}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
    />
  );
}

export default InfiniteMediaList;
