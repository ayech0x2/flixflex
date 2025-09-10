import { Box } from "@/lib/restyle";
import MediaItem from "@/shared/components/MediaItem";
import { ScrollView } from "react-native";
import ListHeader from "./ListHeader";
import { TmdbItem } from "@/shared/types";

interface HorizontalMediaListProps {
  title: string;
  items: Array<TmdbItem>;
}

function HorizontalMediaList({ title, items }: HorizontalMediaListProps) {
  return (
    <Box gap="s">
      <ListHeader title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box flexDirection="row" gap="m">
          {items.map((item, k) => (
            <MediaItem mode="LANDSCAPE" key={k} {...item} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

export default HorizontalMediaList;
