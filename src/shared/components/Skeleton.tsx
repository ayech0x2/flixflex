import { AnimatedBox, Box } from "@/lib/restyle";
import * as React from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const WIDTH = 30;
function Skeleton() {
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

  return (
    <Box height={100} width={400} backgroundColor="skeletonBg">
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
