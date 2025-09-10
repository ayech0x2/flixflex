import { Theme } from "@/lib/restyle";
import { StyleProp, ViewStyle } from "react-native";

export type IconSize =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | number;

export interface IconProps {
  color?: keyof Theme["colors"] | undefined;
  fillColor?: keyof Theme["colors"] | undefined;
  size?: IconSize | undefined;
  strokeWidth?: number | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}

export interface AlertPayload {
  title: string;
  message: string;
  type: "SUCCESS" | "DANGER" | "WARNING";
}
