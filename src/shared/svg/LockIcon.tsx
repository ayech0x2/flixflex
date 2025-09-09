import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function LockIcon(props: IconProps) {
  const { color, strokeWidth, size } = useIcon(props);

  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M4.5 7.5V6c0-2.482.75-4.5 4.5-4.5s4.5 2.018 4.5 4.5v1.5M9 13.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.75 16.5h-7.5c-3 0-3.75-.75-3.75-3.75v-1.5c0-3 .75-3.75 3.75-3.75h7.5c3 0 3.75.75 3.75 3.75v1.5c0 3-.75 3.75-3.75 3.75z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LockIcon;
