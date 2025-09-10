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

export interface TmdbBaseItem {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
}

export interface TmdbMovie extends TmdbBaseItem {
  title: string;
  original_title: string;
  release_date: string;
}

export interface TmdbSeries extends TmdbBaseItem {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country?: string[];
}

export type TmdbItem = TmdbMovie | TmdbSeries;
