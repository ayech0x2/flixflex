import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function SearchIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
