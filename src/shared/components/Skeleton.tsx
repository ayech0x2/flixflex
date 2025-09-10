import { AnimatedBox, Box, Theme } from "@/lib/restyle";
import { BoxProps } from "@shopify/restyle";
import * as React from "react";
import { ViewProps } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const WIDTH = 30;

function Skeleton({
  loading,
  width,
  height,
  ...rest
}: { loading: boolean } & BoxProps<Theme> & ViewProps) {
  const translateX = useSharedValue(-WIDTH);

  const animatedStyle = useAnimatedStyle(() => ({
    left: `${translateX.value}%`,
  }));

  React.useEffect(() => {
    translateX.value = withRepeat(
      withTiming(100 + WIDTH, { duration: 750 }),
      -1,
    );
  }, [translateX]);

  if (!loading) return null;

  return (
    <Box
      height={height}
      width={width}
      backgroundColor="skeletonBg"
      overflow="hidden"
      {...rest}
    >
      <Box height={"100%"} overflow="hidden">
        <AnimatedBox
          opacity={0.75}
          style={animatedStyle}
          height={"100%"}
          width={WIDTH}
          backgroundColor="skeleton"
        />
      </Box>
    </Box>
  );
}

export default Skeleton;
