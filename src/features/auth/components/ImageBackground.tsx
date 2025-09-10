import { moderateScale } from "@/lib/normalize";
import { AnimatedBox, Box, Image, LinearGradient, Theme } from "@/lib/restyle";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

function ImageBackground({
  imageBackgroundHeight,
}: {
  imageBackgroundHeight: number;
}) {
  const { sizes, colors } = useTheme<Theme>();

  const translateX = useSharedValue(0);

  useFocusEffect(
    React.useCallback(() => {
      translateX.value = withRepeat(
        withTiming(-300, { duration: 20000, easing: Easing.linear }),
        -1,
        true,
      );
      return () => {
        cancelAnimation(translateX);
      };
    }, [translateX]),
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Box top={0} left={0} position="absolute">
      <AnimatedBox style={animatedStyle}>
        <Image
          source={require("@/assets/bg.jpg")}
          resizeMode="cover"
          height={imageBackgroundHeight}
          width={sizes.screenWidth * 1.8}
        />
      </AnimatedBox>
      <LinearGradient
        colors={["transparent", colors.appBg]}
        position="absolute"
        bottom={0}
        left={0}
        height={moderateScale(sizes.screenHeight / 6)}
        width={sizes.screenWidth * 1.8}
      />
    </Box>
  );
}

export default ImageBackground;
