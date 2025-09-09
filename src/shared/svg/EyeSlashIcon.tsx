import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
import useIcon from "../hooks/useIcon";

function EyeSlashIcon(props: IconProps) {
  const { color, strokeWidth, size } = useIcon(props);

  return (
    <Svg
      width={size}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
      {...props}
    >
      <Path
        d="M10.898 7.102l-3.795 3.795a2.682 2.682 0 113.795-3.795z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.365 4.327c-1.313-.99-2.813-1.53-4.365-1.53-2.647 0-5.115 1.56-6.832 4.26-.676 1.058-.676 2.835 0 3.893.592.93 1.282 1.732 2.032 2.378M6.315 14.648c.855.36 1.763.555 2.685.555 2.648 0 5.115-1.56 6.832-4.26.675-1.058.675-2.835 0-3.893-.247-.39-.517-.757-.795-1.102M11.633 9.525a2.674 2.674 0 01-2.115 2.115M7.103 10.898L1.5 16.5M16.5 1.5l-5.602 5.603"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeSlashIcon;
