import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function SunIcon(props: IconProps) {
  const { size, color, strokeWidth } = useIcon(props);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.5 12a6.5 6.5 0 10-13 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.99 4.99l-.13-.13m14.15.13l.13-.13-.13.13zM12 2.08V2v.08zM2.08 12H2h.08zM22 12h-.08.08z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 15h16M6 18h12M9 21h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SunIcon;
