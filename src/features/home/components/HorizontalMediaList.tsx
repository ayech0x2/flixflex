import { Box } from "@/lib/restyle";
import MediaItem from "@/shared/components/MediaItem";
import { MediaItemProps } from "@/shared/types";
import { ScrollView } from "react-native";
import ListHeader from "./ListHeader";
import Skeleton from "@/shared/components/Skeleton";

interface HorizontalMediaListProps {
  title: string;
  items: Array<MediaItemProps>;
}

function HorizontalMediaList({ title, items }: HorizontalMediaListProps) {
  return <Skeleton />;
  return (
    <Box>
      <ListHeader title={title} />
      <ScrollView>
        {items.map((item, k) => (
          <MediaItem key={k} {...item} />
        ))}
      </ScrollView>
    </Box>
  );
}

export default HorizontalMediaList;
