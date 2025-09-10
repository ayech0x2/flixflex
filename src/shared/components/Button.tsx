import { AnimatedBox, Theme, TouchableOpacity } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import RefreshIcon from "../svg/RefreshIcon";
import { moderateScale } from "@/lib/normalize";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean | undefined;
}

function Button({ children, loading }: ButtonProps) {
  const { sizes } = useTheme<Theme>();

  const degrees = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${degrees.value}deg` }],
  }));

  React.useEffect(() => {
    if (loading) {
      degrees.value = withRepeat(withTiming(360, { duration: 1000 }), -1);
    }
  }, [loading, degrees]);

  return (
    <TouchableOpacity
      height={sizes.buttonHeight}
      backgroundColor={loading ? "disabledButton" : "accent"}
      borderRadius="button"
      alignItems="center"
      justifyContent="center"
      borderWidth={2}
      borderColor={loading ? "inputBorder" : "accentBorder"}
    >
      {loading ? (
        <AnimatedBox style={animatedStyle}>
          <RefreshIcon strokeWidth={moderateScale(2.5)} />
        </AnimatedBox>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

export default Button;
