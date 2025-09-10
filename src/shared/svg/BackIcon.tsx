import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function BackIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
