import * as React from "react";
import Svg, { Path } from "react-native-svg";
import useIcon from "../hooks/useIcon";
import { IconProps } from "../types";

function PlayIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.74 12.23v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89v-1.69z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlayIcon;
