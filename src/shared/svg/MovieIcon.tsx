import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function MovieIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7zM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75 14.45v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4v-1.2 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MovieIcon;
