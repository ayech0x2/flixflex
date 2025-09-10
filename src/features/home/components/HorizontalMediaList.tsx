import { Box, Theme } from "@/lib/restyle";
import MediaItem from "@/shared/components/MediaItem";
import { ScrollView } from "react-native";
import ListHeader from "./ListHeader";
import { TmdbItem } from "@/shared/types";
import { useTheme } from "@shopify/restyle";

interface HorizontalMediaListProps {
  title: string;
  items: Array<TmdbItem>;
  mode?: "LANDSCAPE" | "PORTRAIT" | undefined;
  // eslint-disable-next-line unused-imports/no-unused-vars
  navigateToMovie?: (id: number) => void | undefined;
}

function HorizontalMediaList({
  title,
  items,
  mode = "PORTRAIT",
  navigateToMovie,
}: HorizontalMediaListProps) {
  const { spacing } = useTheme<Theme>();

  return (
    <Box gap="m" marginBottom="m">
      <ListHeader title={title} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: spacing.screenPadding,
        }}
      >
        <Box flexDirection="row" gap="m">
          {items.map((item, k) => (
            <MediaItem
              mode={mode}
              key={k}
              {...item}
              navigateToOne={navigateToMovie}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

export default HorizontalMediaList;
