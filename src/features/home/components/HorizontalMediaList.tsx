import { Box, Theme } from "@/lib/restyle";
import MediaItem from "@/shared/components/MediaItem";
import { TmdbItem } from "@/shared/types";
import { useTheme } from "@shopify/restyle";
import { ScrollView } from "react-native";
import ListHeader from "./ListHeader";

interface HorizontalMediaListProps {
  title: string;
  items: Array<TmdbItem>;
  mode?: "LANDSCAPE" | "PORTRAIT" | undefined;
  // eslint-disable-next-line unused-imports/no-unused-vars
  navigateToOne?: (id: number) => void | undefined;
}

function HorizontalMediaList({
  title,
  items,
  mode = "PORTRAIT",
  navigateToOne,
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
              navigateToOne={navigateToOne}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

export default HorizontalMediaList;
