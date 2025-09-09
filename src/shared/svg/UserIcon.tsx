import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function UserIcon(props: IconProps) {
  const { color, strokeWidth, size } = useIcon(props);

  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M9 9a3.75 3.75 0 100-7.5A3.75 3.75 0 009 9zM15.442 16.5c0-2.902-2.887-5.25-6.442-5.25s-6.443 2.348-6.443 5.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserIcon;
