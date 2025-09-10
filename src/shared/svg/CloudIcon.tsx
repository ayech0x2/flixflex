import * as React from "react";
import Svg, { Path } from "react-native-svg";
import useIcon from "../hooks/useIcon";
import { IconProps } from "../types";

function CloudIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12M14.54 8.93c.52-.26 1.09-.4 1.67-.41M4 15.03h16M6 18.03h12M9 21.03h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloudIcon;
