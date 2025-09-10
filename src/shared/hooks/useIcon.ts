import { moderateScale } from "@/lib/normalize";
import { Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import { IconProps } from "../types";
import { NumberProp } from "react-native-svg";
import * as React from "react";

function useIcon(props: IconProps) {
  const { colors } = useTheme<Theme>();

  const size = React.useMemo(() => {
    switch (props.size) {
      case "tiny":
        return moderateScale(14);
      case "small":
        return moderateScale(18);
      case "medium":
        return moderateScale(20);
      case "large":
        return moderateScale(24);
      case "xLarge":
        return moderateScale(30);
      default:
        if (typeof props.size === "number")
          return moderateScale(props.size) as NumberProp;
        else return moderateScale(20);
    }
  }, [props.size]);

  const color = props.color ? colors[props.color] : colors.bodyText;

  const fillColor = props.fillColor ? colors[props.fillColor] : colors.bodyText;

  const strokeWidth = props.strokeWidth || moderateScale(1.5);

  return { size, color, strokeWidth, style: props.style, fillColor };
}

export default useIcon;
