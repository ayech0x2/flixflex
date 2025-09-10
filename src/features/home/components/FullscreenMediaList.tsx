import { moderateScale } from "@/lib/normalize";
import { AnimatedBox, Box } from "@/lib/restyle";
import MediaItemFullscreen from "@/shared/components/MediaItemFullscreen";
import { TmdbItem } from "@/shared/types";
import * as React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
import { FadingTransition } from "react-native-reanimated";

interface FullscreenMediaListProps {
  items: Array<TmdbItem>;
}

function FullscreenMediaList({ items }: FullscreenMediaListProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentIndex(
      Math.round(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      ),
    );
  };

  return (
    <Box gap="s" marginBottom="m">
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <Box flexDirection="row">
          {items.map((item, k) => (
            <MediaItemFullscreen key={k} {...item} />
          ))}
        </Box>
      </ScrollView>
      <Box
        flexDirection="row"
        gap="xs"
        position="absolute"
        bottom={moderateScale(20)}
        left={0}
        right={0}
        justifyContent="center"
      >
        {Array.from({ length: items.length }).map((_, k) => (
          <AnimatedBox
            layout={FadingTransition}
            key={k}
            width={currentIndex === k ? moderateScale(10) : moderateScale(4)}
            height={moderateScale(4)}
            backgroundColor="accent"
            borderRadius="button"
            opacity={currentIndex === k ? 1 : 0.5}
          />
        ))}
      </Box>
    </Box>
  );
}

export default FullscreenMediaList;
