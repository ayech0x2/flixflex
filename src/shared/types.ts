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

export interface TmdbGenre {
  id: number;
  name: string;
}

export interface TmdbCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface TmdbLanguage {
  iso_639_1: string;
  name: string;
  english_name: string;
}

export interface TmdbSeriesDetail extends TmdbSeries {
  number_of_seasons: number;
  number_of_episodes: number;
  episode_run_time: number[];
  status: string;
  tagline: string;
  genres: TmdbGenre[];
  created_by: { id: number; name: string }[];
  networks: TmdbCompany[];
  spoken_languages: TmdbLanguage[];
}

export interface TmdbMovieDetail extends TmdbMovie {
  runtime: number | null;
  status: string;
  tagline: string;
  genres: TmdbGenre[];
  production_companies: TmdbCompany[];
  spoken_languages: TmdbLanguage[];
  budget: number;
  revenue: number;
}

export interface TmdbVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: "YouTube" | "Vimeo";
  size: number;
  type: string;
  official: boolean;
  published_at: string;
}

export interface TmdbPagination<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
